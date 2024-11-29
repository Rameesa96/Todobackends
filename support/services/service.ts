import { z } from "zod";
import type { AxiosError } from "axios";
import axios from "axios";
import type { User } from "./dataSchema";
import type { AuditSessionUser } from "./auditTypes";
import { PCII } from "../../src/content/_pcii-common-new.ts";
import { PCIITECH } from "../../src/content/_pcii-common-techbd-new.ts";
import { PCIIDRH } from "../../src/content/_pcii-common-drh-new.ts";
import { PCIIFOPC } from "../../src/content/_pcii-common-adu-fopc-new.ts";
import { PCIITESTING } from "../../src/content/_pcii-common-testing-new.ts";
import { PCIICITRUS } from "../../src/content/_pcii-common-citrus-new.ts";


interface UserDataArray {
  result: User[];
}
interface DataItem {
  key: string;
  tooltipContent: string;
}

interface UserDateResponse {
  data: {
    details: {
      changeDate: Date;
    };
  };
}

export const dbPath: Record<string, string> = {
  "239518031485599747":
    "src/content/db/netspective/239518031485599747-aggregated.sqlite.db",
  "266466038894325763":
    "src/content/db/adu-fopc/266466038894325763-aggregated.sqlite.db",
  "260994517098823683":
    "src/content/db/drh/260994517098823683-aggregated.sqlite.db",
  "266318689236709379":
    "src/content/db/techbd/266318689236709379-aggregated.sqlite.db",
  "283589332437041155":
    "src/content/db/civco/283589332437041155-aggregated.sqlite.db",
};

export const pciiData: Record<string, unknown[]> = {
  "295912344507121666": PCIICITRUS,
  "295912245538324482": PCIITESTING,
  "295909865740566530": PCIITESTING,
  "239518031485599747": PCII,
  "266466038894325763": PCIIFOPC,
  "260994517098823683": PCIIDRH,
  "266318689236709379": PCIITECH,
};

const UserSchema = z.object({
  details: z.object({
    totalResult: z.string(),
    timestamp: z.string(),
  }),
  result: z.array(
    z.object({
      userId: z.string(),
      state: z.string(),
      username: z.string(),
      loginNames: z.array(z.string()),
      preferredLoginName: z.string(),
      human: z.object({
        profile: z.object({
          givenName: z.string(),
          familyName: z.string(),
          nickName: z.string(),
          displayName: z.string(),
          preferredLanguage: z.string(),
          gender: z.string(),
        }),
        email: z.object({
          email: z.string(),
          isVerified: z.boolean(),
        }),
        phone: z.object({
          phone: z.string(),
        }),
        passwordChangeRequired: z.boolean(),
      }),
    }),
  ),
});

const createUserSchema = z.object({
  userName: z.string(),
  organizationId: z.string(),
  givenName: z.string(),
  familyName: z.string(),
  displayName: z.string(),
  gender: z.string().optional(),
  email: z.string(),
  password: z.string().optional(),
  isVerified: z.boolean().optional(),
});

const userResponseSchema = z.object({
  userId: z.string(),
  details: z.object({
    sequence: z.string(),
    changeDate: z.string(),
    resourceOwner: z.string(),
  }),
  emailCode: z.string(),
  phoneCode: z.string(),
});

const userByIdResponseSchema = z.object({
  user: z.object({
    userId: z.string(),
    username: z.string(),
    human: z.object({
      profile: z.object({
        firstName: z.string(),
        lastName: z.string(),
      }),
      email: z.object({
        email: z.string()
      })
    })

  }),

  details: z.object({
    sequence: z.string(),
    changeDate: z.string(),
    resourceOwner: z.string(),
  })
});

const tenantSchema = z.object({
  details: z.object({
    sequence: z.string(),
    changeDate: z.string(),
    resourceOwner: z.string()
  }),
  organizationId: z.string()
})

const projectSchema = z.object({
  details: z.object({
    sequence: z.string(),
    creationDate: z.string(),
    resourceOwner: z.string()
  }),
  id: z.string()
})

const applicationSchema = z.object({
  appId: z.string().optional(),
  details: z.object({
    sequence: z.string().optional(),
    creationDate: z.string().optional(),
    resourceOwner: z.string().optional(),
  }).optional(),
  clientId: z.string().optional(),
  clientSecret: z.string().optional(),
});

const ProjectSchema = z.object({
  details: z.object({
    totalResult: z.string(),
    processedSequence: z.string(),
    viewTimestamp: z.string(),
  }),
  result: z.array(
    z.object({
      id: z.string(),
      details: z.object({
        sequence: z.string(),
        creationDate: z.string(),
        changeDate: z.string(),
        resourceOwner: z.string(),
      }),
      name: z.string(),
      state: z.string(),
      projectRoleAssertion: z.boolean(),
      projectRoleCheck: z.boolean(),
      hasProjectCheck: z.boolean(),
      privateLabelingSetting: z.string(),
    }),
  ),
});

const UserGrantSchema = z.object({
  userGrantId: z.string(),
  details: z.object({
    sequence: z.string(),
    creationDate: z.string(),
    changeDate: z.string(),
    resourceOwner: z.string(),
  }),
});

// Define TypeScript type from the Zod schema

export type UserType = z.infer<typeof UserSchema>;
export type CreateUser = z.infer<typeof createUserSchema>;
export type UserResponse = z.infer<typeof userResponseSchema>;
export type UserByIdResponse = z.infer<typeof userByIdResponseSchema>;
export type ProjectResponse = z.infer<typeof ProjectSchema>;
export type UserGrantType = z.infer<typeof UserGrantSchema>;

const API_TOKEN = import.meta.env.PUBLIC_ZITADEL_API_TOKEN as string;
const ZITADEL_URL = import.meta.env.PUBLIC_ZITADEL_AUTHORITY as string;

export const getToolTipMessage = (
  filterValue: string,
  data: DataItem[],
): string => {
  const toolTipContent = data?.filter((item) => item.key === filterValue);
  return toolTipContent.length > 0
    ? String(toolTipContent[0].tooltipContent)
    : "";
};

export const getAllMembers = async (
  users: User[],
  organizationId?: string,
): Promise<User[]> => {
  const apiURL = `${ZITADEL_URL}/management/v1/users/grants/_search`;
  const headers = new Headers({
    Authorization: `Bearer ${API_TOKEN}`,
    "Content-Type": "application/json",
    "x-zitadel-orgid": organizationId == undefined
      ? ""
      : organizationId.toString(),
  });
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({}),
  };
  const response = await fetch(apiURL, options);
  if (response.ok) {
    const data: UserDataArray = (await response.json()) as UserDataArray;

    const members = data.result?.filter((user) => {
      const userExists = users?.some(
        (member) => String(member.userId) == String(user.userId),
      );
      return !userExists;
    });
    const updatingMembers = [];
    for (const member of members) {
      updatingMembers.push({
        userName: member.userName,
        userId: member.userId,
        email: member.email,
        roleKeys: member.roleKeys,
        displayName: member.displayName,
        notificationEnabled: true,
      });
    }
    return updatingMembers;
  } else {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
};

export const checkEmailExistWithinOrganization = async (userId: string): Promise<UserByIdResponse> => {
  const config = {
    method: 'get',
    url: `${ZITADEL_URL}/v2beta/users/${userId}`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_TOKEN}`,
    },
  };
  try {
    const response = await axios.request(config);
    const result = response.data as UserByIdResponse;
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const checkEmailExist = async (email: string): Promise<UserType> => {
  const data = JSON.stringify({
    "queries": [
      {
        "emailQuery": {
          "emailAddress": email,
          "method": "TEXT_QUERY_METHOD_EQUALS",
        },
      },
    ],
  });

  const config = {
    method: "post",
    maxBodyLength: Number.POSITIVE_INFINITY,
    url: `${ZITADEL_URL}/v2beta/users`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_TOKEN}`,
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    const result = response.data as UserType;
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const regiserUser = async (param: CreateUser): Promise<UserResponse> => {
  const data = param.gender === undefined ?
    JSON.stringify({
      "username": param.userName,
      "organization": {
        "orgId": param.organizationId,
      },
      "profile": {
        "givenName": param.givenName,
        "familyName": param.familyName,
        "displayName": param.displayName,
      },
      "email": {
        "email": param.email
      }
    }) : JSON.stringify({
      "username": param.userName,
      "organization": {
        "orgId": param.organizationId,
      },
      "profile": {
        "givenName": param.givenName,
        "familyName": param.familyName,
        "displayName": param.displayName,
        "gender": param.gender,
      },
      "email": {
        "email": param.email,
        "isVerified": param.isVerified,
      },
      "password": {
        "password": param.password,
      },
    })

  const config = {
    method: "post",
    maxBodyLength: Number.POSITIVE_INFINITY,
    url: `${ZITADEL_URL}/v2beta/users/human`,
    headers: {
      "x-zitadel-orgid": param.organizationId,
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_TOKEN}`,
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    const result = response.data as UserResponse;
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const generateRandomPassword = (length = 10): string => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+";

  let password = "";

  // Add at least one character from each category
  password += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
  password += lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
  password += numberChars[Math.floor(Math.random() * numberChars.length)];
  password += specialChars[Math.floor(Math.random() * specialChars.length)];

  // Fill the remaining characters
  const remainingLength = length - 4;
  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  for (let i = 0; i < remainingLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  // Shuffle the password characters
  password = shuffleString(password);

  return password;
};

// Function to shuffle a string
function shuffleString(str: string): string {
  const array = [...str];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
}

export const getOpsfolioApplicationByOrganization = async (
  organizationId: string,
): Promise<ProjectResponse> => {
  const data = JSON.stringify({
    "queries": [
      {
        "nameQuery": {
          "name": "Opsfolio Suite",
          "method": "TEXT_QUERY_METHOD_EQUALS",
        },
      },
    ],
  });
  const config = {
    method: "post",
    maxBodyLength: Number.POSITIVE_INFINITY,
    url: `${ZITADEL_URL}/management/v1/projects/_search`,
    headers: {
      "x-zitadel-orgid": organizationId,
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_TOKEN}`,
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    const result = response.data as ProjectResponse;
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addUserGrantToPorject = async (
  param: {
    userId: string;
    projectId: string;
    grant: string;
    organizationId: string;
  },
): Promise<UserGrantType> => {
  const data = JSON.stringify({
    "projectId": param.projectId,
    "roleKeys": [
      param.grant,
    ],
  });

  const config = {
    method: "post",
    maxBodyLength: Number.POSITIVE_INFINITY,
    url: `${ZITADEL_URL}/management/v1/users/${param.userId}/grants`,
    headers: {
      "x-zitadel-orgid": param.organizationId,
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_TOKEN}`,
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    const result = response.data as UserGrantType;
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateUserState = async (state: string, userId: string, tenantId: string): Promise<Date | undefined> => {
  const url = state == "active" ? `${ZITADEL_URL}/v2/users/${userId}/deactivate` : `${ZITADEL_URL}/v2/users/${userId}/reactivate`
  const config = {
    method: 'post',
    url: url,
    headers: {
      'x-zitadel-orgid': `${tenantId}`,
      'Authorization': `Bearer ${API_TOKEN}`,
    }
  };
  try {
    const response = await axios.request(config);
    if (response.status == 200) {
      const data = response as UserDateResponse;
      return data.data.details.changeDate
    }
  }
  catch (error) {
    console.error(error);
    return undefined;
  }
};

export const updateOrganizationState = async (state: string, tenantId: string): Promise<Date | undefined> => {
  const url = state == "active" ? `${ZITADEL_URL}/management/v1/orgs/me/_deactivate` : `${ZITADEL_URL}/management/v1/orgs/me/_reactivate`
  const config = {
    method: 'post',
    url: url,
    headers: {
      'x-zitadel-orgid': `${tenantId}`,
      'Authorization': `Bearer ${API_TOKEN}`,
    }
  };
  try {
    const response = await axios.request(config);
    if (response.status == 200) {

      const data = response as UserDateResponse;
      return data.data.details.changeDate
    }
  }
  catch (error) {
    console.error(error);
    return undefined;
  }
};

export const getUserMails = async (sessionUsers?: AuditSessionUser[], members?: User[]): Promise<string[] | undefined> => {
  const filteredMembers = members?.filter((member: User) =>
    sessionUsers
      ?.map((user) => user.userId)
      .includes(member.userId),
  );
  const membersNotificationOn = filteredMembers?.filter(
    (member) => member.notificationEnabled === true,
  );

  const emails = membersNotificationOn?.map((member) => decodeURIComponent(member.email));
  return emails
}




export const addTenant = async (
  tenantName: string
): Promise<{ tenantId: string; applicationId: string; projectId: string } | string | undefined> => {
  try {
    const tenantData = JSON.stringify({
      name: tenantName,
    });

    const tenantConfig = {
      method: 'post',
      url: `${ZITADEL_URL}/v2/organizations`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      },
      data: tenantData,
    };

    const tenantResponse = await axios.request(tenantConfig);
    const parsedTenantResponse = tenantSchema.parse(tenantResponse.data);

    const projectData = JSON.stringify({
      name: 'Opsfolio Suite',
      projectRoleAssertion: true,
    });

    const projectConfig = {
      method: 'post',
      url: `${ZITADEL_URL}/management/v1/projects`,
      headers: {
        'x-zitadel-orgid': parsedTenantResponse.organizationId,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      },
      data: projectData,
    };

    const projectResponse = await axios.request(projectConfig);
    const parseProjectResponse = projectSchema.parse(projectResponse.data);

    if (parseProjectResponse.id.length === 0) throw new Error('Failed to create project');

    const projectRoleData = JSON.stringify({
      roles: [
        { key: 'admin', display_name: 'Admin' },
        { key: 'auditor', display_name: 'Auditor' },
        { key: 'editor', display_name: 'Editor' },
      ],
    });

    const projectRoleConfig = {
      method: 'post',
      url: `${ZITADEL_URL}/management/v1/projects/${parseProjectResponse.id}/roles/_bulk`,
      headers: {
        'x-zitadel-orgid': parseProjectResponse.details.resourceOwner,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      },
      data: projectRoleData,
    };

    await axios.request(projectRoleConfig);

    const applicationData = JSON.stringify({
      name: 'Opsfolio Suite',
      redirectUris: [
        'http://localhost:4321/post-authorization/',
        'https://suite.opsfolio.com/post-authorization/',
        'https://next-suite.opsfolio.com/post-authorization/',
      ],
      responseTypes: ['OIDC_RESPONSE_TYPE_CODE'],
      grantTypes: [
        'OIDC_GRANT_TYPE_AUTHORIZATION_CODE',
        'OIDC_GRANT_TYPE_IMPLICIT',
        'OIDC_GRANT_TYPE_REFRESH_TOKEN',
        'OIDC_GRANT_TYPE_DEVICE_CODE',
      ],
      appType: 'OIDC_APP_TYPE_WEB',
      authMethodType: 'OIDC_AUTH_METHOD_TYPE_NONE',
      postLogoutRedirectUris: [
        'http://localhost:4321/',
        'https://suite.opsfolio.com/',
        'https://next-suite.opsfolio.com/',
      ],
      devMode: true,
      accessTokenRoleAssertion: true,
      idTokenRoleAssertion: true,
      idTokenUserinfoAssertion: true,
    });

    const applicationConfig = {
      method: 'post',
      url: `${ZITADEL_URL}/management/v1/projects/${parseProjectResponse.id}/apps/oidc`,
      headers: {
        'x-zitadel-orgid': parseProjectResponse.details.resourceOwner,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      },
      data: applicationData,
    };

    const applicationResponse = await axios.request(applicationConfig);
    const parseApplicationResponse = applicationSchema.parse(applicationResponse.data);

    if (parseApplicationResponse.appId != undefined) {
      return {
        tenantId: parseProjectResponse.details.resourceOwner,
        applicationId: parseApplicationResponse.appId,
        projectId: parseProjectResponse.id,
      };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ code: number; message: string }>;
      if (
        axiosError.response?.data?.code === 6 &&
        axiosError.response?.data?.message.includes("Organisation's name already taken")
      ) {
        return "Organisation's name already taken";
      }
    }
    console.error('Error creating tenant:', error);
    throw error;
  }
};



