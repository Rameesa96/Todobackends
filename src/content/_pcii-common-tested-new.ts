const nqspCompanyName1 = "TESTED";
const nqspPolicyWaiverPeriod1 = "one year";
export const PCIITESTED = [
  { companyName: nqspCompanyName1 },
  { nqspProductEmail: "contact@medigy.com" },
  { nqspCompanyPhone: "(202) 660-1351" },
  { nqspCompanyProvince: "Maryland" },
  { nqspPolicyClassification: "Internal" },
  { nqspPolicyDocumentType: "Draft" },
  { nqspPolicyPublishDate: "April 12, 2022" },
  { nqspPolicyDocumentVersion: "Version 1.0" },
  { nqspPolicyApprovedBy: "Ajay K Nair" },
  {
    nqspCompanyLogo:
      "/initiatives/-process/unified-process/nup-disciplines/regulatory-and-legal-compliance/soc2-compliance/policies/compliance-images/Netspective-Media-logo.png",
  },
  { nqspNDAReceivingPartyName: "[Receiving Party Name]" },
  { nqspNDAReceivingPartyProvince: "[State/Province]" },
  { nqspNDAReceivingPartyAddress: "[Complete Address]" },
  { nqspNDAReceivingPartyTermAgreementYear: "[Year/Month]" },
  { nqspNDAReceivingPartyTermAgreementNumber: "[Number]" },
  { nqspNDAReceivingPartyPerformanceOfWork: "[Describe]" },
  { nqspNDAReceivingPartyEffectiveDate: "[Date]" },
  { nqspProductLink: "http://www.medigy.com" },
  { nqspCompanyAddress: "1802 Brightseat Rd. Suite 101, Landover, MD 20785" },
  { nqspChecklistAECId: "AEC-AC3M-SOC2-CC" },
  { nqspDataRetentionPeriod: "Two years" },
  { nqspDataArchivingPeriod: "7 years" },
  { nqspConfidentialityReviewPeriod: "five years" },
  { nqspSecurityTeamEmail: "contact@medigy.com" },
  { nqspSystemTeamEmail: "contact@medigy.com" },
  { nqspPCStandardSettings: "10 minutes or less" },
  { nqspRetainAccessLogsPeriod: "90 days" },
  { nqspRemovableMediaPeriod: "quarterly basis" },
  { nqspPolicyWaiverPeriod: nqspPolicyWaiverPeriod1 },
  { nqspLockOutUserAccountAutomatically: "one hour time period" },
  { nqspInformationAssetPeriod: "one calendar year" },
  { nqspAssetValueNotTracked: "$100" },
  { nqspPasswordAge: "60" },
  { nqspMinimumPasswordAge: "one" },
  { nqspMinimumSystemPasswordAge: "quarterly" },
  {
    nqspMinimumPasswordLength:
      "Minimum length of 8 characters for regular user passwords, and minimum length of 15 characters for administrators or privileged user passwords",
  },
  { nqspDocumentOwner: "CEO" },
  { nqspUserAccountAge: "90" },
  { nqspReviewUserAccessRightsAge: "90" },
  { nqspChangeAccessRightsAge: "90" },
  { nqspPrivilegedAccessRightsAge: "90" },
  { nqspCriticalSystemAccountAge: "60" },
  { nqspUserAccountSuspended: "60" },
  { nqspDataSecurityDepartment: "IT" },
  { nqspKeyManagementPeriod: "12 months" },
  {
    policyChangesApproval: `- This document may be viewed, printed by authorized personnel only. Any changes to this procedure must be reviewed and accepted by the Information Security Department and approved by Information Technology Manager.`,
  },
  {
    policyScope:
      `
- This Policy applies to all users of information assets including temporary or permanent ` +
      nqspCompanyName1 +
      ` employees, employees of temporary employment agencies, vendors, business partners, and contractor personnel and functional units regardless of geographic location.
- This Policy covers all Information Systems (IS) environments operated by ` +
      nqspCompanyName1 +
      ` or contracted with a third party by ` +
      nqspCompanyName1 +
      `
  `,
  },
  {
    policyResponsibilities:
      `
- Based on ` +
      nqspCompanyName1 +
      ` Organizational Structure, the following is a list of roles and their associated responsibilities towards this policy.
`,
  },
  {
    legalDepartment: `
- Provide the expert legal advice necessary for the other departments to provide services in a manner that fully compliant with existing laws and regulations.
- Take action as far as the prosecution of the suspect is concerned.
`,
  },
  {
    policyCompliance:
      `
- Compliance with this policy is mandatory, and ` +
      nqspCompanyName1 +
      ` managers must ensure continuous compliance monitoring within their organization.
- Compliance with the statements of this policy is a matter of periodic review by Internal Audit and any violation of the policy will result in corrective action by the management. Disciplinary action will be consistent with the severity of the incident, as determined by an investigation, and may include, but not be limited to:
  - Loss of access privileges to information assets.
  - Actions like Financial/monetary penalty, termination of the employee or downgrading from the existing position as deemed appropriate by management, Human Resources, and the Legal Department.
`,
  },
  {
    policyWaiverCriteria:
      `
- This policy is intended to address information security requirements.  If needed, waivers could be formally submitted to the Information Security department, including justification and benefits attributed to the waiver, and must be approved by the information technology department.
- The policy waiver period have maximum period of ` +
      nqspPolicyWaiverPeriod1 +
      `, and can be reassessed and re-approved, if necessary for maximum three consecutive terms. No policy should be provided waiver for more than three consecutive terms.
`,
  },
  {
    informationTechnologyDepartmentRole: `
- Define and maintain the information security policies, Standards and processes.
- Establish and maintain access control systems and review, improve.
- Determine the access rights of users to information assets.
- Operate User Access Management.
- Distributes information security documents so that those who need such documents have copies or can readily locate the documents via an intranet site.
- Resolve access incidents
`,
  },

  {
    productSpecialistsRole: `
- Is responsible for the proper protection, management and handling of critical information assets, for which he has been assigned as an Information Owner.
- Determines the access rights of users to information assets.`,
  },

  {
    hrDepartmentRole: `
- Is responsible for the communicating to IT department on provision, change or termination of workforce.
- Participate in access related incidents and take actions`,
  },

  {
    changeDocumentationIncludes: `
- Date of submission and date of change,
- Owner and custodian contact information,
- Nature of the change,
- Change requestor,
- Change classification(s),
- Roll-back plan,
- Change approver,
- Change implementer, and
- An indication of success or failure.
`,
  },

  {
    nqspMobileDeviceManagement: `Installation and maintenance of Mobile Device Management 
(MDM) software that can effectively manage, 
control and wipe data under the organization’s control from personally-owned devices.`,
  },

  { nqspRemovableMediaSupervisor: `Information Security Manager (ISM)` },

  {
    nqspOrganizationVPN:
      `All users requiring remote access to the ` +
      nqspCompanyName1 +
      `'s systems must use an encrypted and authenticated VPN connection with multi-factor authentication enabled. The ` +
      nqspCompanyName1 +
      `'s information technology team must provision all users with VPN credentials. Users must rotate VPN keys at least twice per year. `,
  },

  {
    confidentialInformation: `
- Unpublished financial information
- Customer/partner/vendor/external party data
- Patents, formulas, new technologies, and other intellectual property
- Existing and prospective customer lists
- Undisclosed business strategies including pricing & marketing
- Materials & processes explicitly marked as “confidential”<br/>
3. Employees will have varying levels of authorized access to confidential information.`,
  },

  {
    companyInformation: `
Netspective Media publishes opinionated insider-driven content for builders 
of complex & safety-critical regulated products.
`,
  },
  {
    boardOfDirectorsResponsibilities: `
- Establish a Information Security committee.
- Appoint the required roles.
- Set a charter, roles, responsibilities.
- Fund the function.
- Monitor the achievement of strategic goals.
- Be accountable security incidents.
`,
  },

  {
    informationTransferIncludes:
      `
- To prevent loss, modification, destruction, or misuse of information,` +
      nqspCompanyName1 +
      ` departments shall protect and control exchange of critical business information assets and software.
- Formal controls based on the criticality of information shall be defined to protect the exchange of information through the use of communication facilities.
- Formal agreements shall be established for the exchange of critical business information assets or software with outside organizations.
- These agreements shall include both manual and electronic exchanges.
- These agreements shall reflect the sensitivity of the critical business information assets being exchanged and shall describe any protection requirements.
- These agreements shall specify management responsibilities, notification requirements, packaging and transmission standards, courier identification, responsibilities and liabilities, data and software ownership, protection responsibilities and measures, and all encryption requirements.
- Wherever possible cryptographic techniques shall be used to protect the confidentiality, integrity and authenticity of sensitive information.
- ` +
      nqspCompanyName1 +
      ` sensitive or critical information shall not be left on copiers, printers, and facsimile machines, as these could be accessed by unauthorized personnel.
- A formal policy, procedures, and standards shall be established and maintained to protect media transportation beyond ` +
      nqspCompanyName1 +
      ` premises against unauthorized access, misuse or corruption.
- Use of an agreed labeling system for sensitive or critical information, ensuring that the meaning of the labels is immediately understood internally and that the information is appropriately protected.
- Appropriate packaging of ` +
      nqspCompanyName1 +
      ` media shall be used to protect the contents from any physical damage.
- Controls shall be established to protect electronic messaging (E-mail) from unauthorized access, modifications or denial of service.
- ` +
      nqspCompanyName1 +
      ` will identify confidentiality, nondisclosure agreement with suppliers, employees, contractors.`,
  },

  {
    networkSecurityManagementRole:
      `
- All the necessary controls within ` +
      nqspCompanyName1 +
      ` shall be identified and implemented to protect the confidentiality, integrity, and availability of sensitive data passing over public networks.
- Network operation responsibility shall be separated from the computer operation responsibility to avoid interference.
- Logging and monitoring of network activities shall be applied to enable recording of any security events.
- ` +
      nqspCompanyName1 +
      ` shall implement appropriate network security measures and features, and provide network security resources (Firewall, IDS, etc.) to protect the IT infrastructure.
- Network services agreement shall be defined for network services provided in-house or through third parties and shall include security features, management requirements and service levels.
- When event logs reach a maximum size, the system is not halted through lack of disk space and logging continues with no disruption
`,
  },
  {
    informationSecurityGovernancePolicy:
      `
- The board of directors of ` +
      nqspCompanyName1 +
      `. shall actively establish an Information Security committee comprising senior members from both the IT and business departments. The committee will consist of a maximum of 6 members who will oversee Information Security across ` +
      nqspCompanyName1 +
      `. The Information Security committee will be led by a senior auditor responsible for implementing controls.
- The committee will regularly report to the board of directors, providing updates on various aspects of Information Security, at least on a monthly basis. The board of directors will take the initiative to establish an Information Security charter for the committee, defining objectives, goals, key performance indicators, committee meetings, minimum representation, and decision rights for its members.
- Roles and responsibilities for each Information Security member will be established by the board of directors, communicated in writing, and closely monitored to ensure efficient execution. The board of directors will provide necessary funds to support the operation of the Information Security function.
- Additionally, the board of directors will formally appoint a Chief Information Security Officer (CISO), a Risk team, and an Audit team, clearly defining their goals and ensuring that only qualified individuals can hold positions as CISO, Chief Risk Officer (CRO), or Audit committee members.
- The board of directors will maintain oversight and stay informed about major changes in roles, responsibilities, business operations, Information Security projects, and tools impacting Cyber/Information Security. Regular board meetings and Information Security meetings will be organized at least once a quarter.
- The board of directors will bear the responsibility of providing guidance and assistance in resolving Information Security incidents.
`,
  },

  {
    informationSecurityStrategy: `
- The Information Security committee shall create a short term ( 1 year ) and Long term ( 3 to 5 year) Information Security strategy by consulting senior representatives such as architecture committee, software development , business heads. This Information Security strategy shall include what will be done in the short term and long term and how the success shall be measured using Key performance indicators.
- The Information Security strategy shall be reviewed and approved by the committee, the business heads, board of directors. Information Security committee shall ensure that the strategy is aligned with business and is able to scale in the future.
- Information Security strategy shall prioritize policy creation, approval, dissemination, and changes.
- The funds needed for operating Information Security function shall be provided, cash flow and spending monitored, replenished, and acted upon to take corrective measures.
- Information Security incident management function shall be formed to take care of security incidents and shall provide tools, resources, processes, policies, frameworks, standards to be followed.
- Steering committee shall approve appointments; purchase of tools, processes, strategic changes that impact security, architecture, infrastructure changes.
- Strategy shall include
  - Monitoring compliance , regulations
  - Incidents that impact business and growth
  - Money spending and its return on investments
  - Process improvements to be implemented to yield benefits
  - Audit findings and correctors
  - External audits, customer audits
  - Customer security complaints and resolutions and preventive actions
- Steering  committee shall provide update to board of directors every quarter on the strategy that was set and its achievements, gaps, assistance needed from board in achieving requirement goals.
- Steering committee shall make use of techniques such as SWOT, Balanced score card to set strategy and actions. Monitor on monthly basis the achievements verses the plan.
`,
  },

  // The below listed PCII variables are used in Privacy Management Policy.

  {
    nqspCookieStandardRef: `You should also be aware that you may also lose some saved information
   (e.g. saved login details, site preferences) if you block cookies on your browser.
   Different browsers make different controls available to you. 
   Disabling a cookie or category of cookie does not delete the cookie from your browser,
    you will need to do this yourself from within your browser, 
    you should visit your browser’s help menu for more information.`,
  },

  {
    nqspGDPRMandates: `Please provide the list of subject access rights, a procedure to
 exercise them and contact information for sending subject access rights.`,
  },

  {
    nqspEmailRegulations: `By submitting your email address, you also agree to allow us to use your 
email address for customer audience targeting on sites like Facebook,
 where we display custom advertising to specific people who have opted-in 
to receive communications from us.`,
  },

  {
    nqspPrivacyRights: `You may also contact us via email and/or website form to exercise your privacy rights 
like ‘right to access to personal data’ among others.`,
  },

  {
    nqspThirdPartiesInfoShare: `In some jurisdictions, website visitors/data subjects have the 
  right to opt-out of such sharing of IP addresses and/or tracking through third-party 
  cookies/pixels, via the 'cookie-consent banner' of the website.`,
  },

  {
    collectInformation: `
  - First Name and Last Name / Username
  - Phone Numbers
  - Email Addresses
  - Mailing Addresses
  - Job Titles
  - Password
  `,
  },

  {
    useInformation: `
  - To personalize your experience (your information helps us to better respond to your individual needs)
  - To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you)
  - To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs)
  - To process transactions
  - To administer a contest, promotion, survey or other site feature
  - To send periodic emails
  `,
  },

  { nqspCriticalServicePeriod: `24 X 7` },
  { nqspAvailabilityPlanPeriod: `Monthly` },
  {
    availabilityManagementScope: `
   - Email Services
   - Network services
   - Scanning services
   - Identity management
  `,
  },

  {
    capacityManagementScope: `
- Hardware - PCs, Laptops, UPS-Power Backups, etc.
- Networking Equipment - LANs, WANs, bridges, routers, Network Bandwidth. Etc.
- Peripherals - bulk storage devices, printers, scanners, etc.
- Software - operating system and network software, in-house developments and purchased packages
Human Resources, but only where a lack of human resources could result in a delay in end-to-end response time (e.g. overnight data backups not completed in time because no operators were present to load tapes) - in general human resource management is a line management responsibility, though the staffing of a Service Desk might well use identical Capacity Management techniques.`,
  },

  {
    capacityManagementScopeExclusions: `
- Issues of service continuity or availability are considered under separate processes.
- Short-term 'Fire-Fighting' activities (example, tuning, optimizing, debugging, tracing) or daily/weekly maintenance procedures. These are the responsibility of Operations.
- Capacity of Non-IT components and Services are out of scope of this process.
`,
  },

  {
    capacityManagementPrinciples: `
- Provide leadership to analyze requirements into measurable transactions for each business unit and its' delivered service.<br>
- Provide regular updates of Demand, Workload, Performance and Resource Management and the Capacity Management Plan.<br>
- Define measures for key business unit transactions and the required internal metrics to support those transactions.<br>
- Provide business units with reports on their key transaction volumes.<br>
- Provide historical data for both business and internal measures to support trend analysis and the forecasting of additional capacity needs.<br>
- Provide technical support for the analysis of any measure which exceeds its' limits.<br>
- Provide leadership for Service Improvement Plans (SIPs) which
 identify opportunities to balance business capacity needs with their associated costs.<br>`,
  },

  {
    capacityRecommendations: `
 - The number of users supported by the current hardware.
 - Scalability options if the number of users increases.
 - Scalability options if the solution complexity increases.
 - Recommended changes in monitoring, analysis, or tuning.
 - Identify potential bottlenecks.
 - Performance guidelines for design and development.
 - Prediction of future service performance.
 `,
  },

  {
    informationSecurityPolicyStatement: `
 - Monitoring, detecting, analyzing and reporting events and weakness.<br>
 - Logging.<br>
 - Any evidence collection.<br>
 - Assessments of security events and weakness.<br>
 - Incident resolution, recovery, communication.<br>
 - Identifying point of contact.<br>
 - Detection and reporting.<br>
 - Reporting procedures.<br>
`,
  },

  {
    capacityManagerResponsibilities: `
A Capacity Manager has responsibility for ensuring that the aims of Capacity Management are met. This includes such tasks as:
  - Ensuring that there is adequate IT capacity to meet required levels of service, and that senior IT management is correctly advised on how to match capacity and demand and to ensure that use of existing capacity is optimized
  - Identifying, with the Service Level Manager, capacity requirements through discussions with the business users
  - Understanding the current usage of the infrastructure and IT services, and the maximum capacity of each component
  - Performing sizing on all proposed new services and systems, possibly using modeling techniques, to ascertain capacity requirements
  - Forecasting future capacity requirements based on business plans, usage trends, sizing of new services, etc.
  - Production, regular review and revision of the Capacity Plan, in line with the organization’s business planning cycle, identifying current usage and forecast requirements during the period covered by the plan
  - Ensuring that appropriate levels of monitoring of resources and system performance are set
  - Analysis of usage and performance data, and reporting on performance against targets contained in SLAs
  - Raising incidents and problems when breaches of capacity or performance thresholds are detected, and assisting with the investigation and diagnosis of capacity-related incidents and problems
  - Identifying and initiating any tuning to be carried out to optimize and improve capacity or performance
  - Identifying and implementing initiatives to improve resource usage – for example, demand management techniques
  - Assessing new technology and its relevance to the organization in terms of performance and cost
  - Being familiar with potential future demand for IT services and assessing this on performance service levels
  - Ensuring that all changes are assessed for their impact on capacity and performance and attending CAB meetings when appropriate
  - Producing regular management reports that include current usage of resources, trends and forecasts
  - Sizing all proposed new services and systems to determine the computer and network resources required, to determine hardware utilization, performance service levels and cost implications
  - Assessing new techniques and hardware and software products for use by Capacity Management that might improve the efficiency and effectiveness of the process.
  - Performance testing of new services and systems
  - Reports on service and component performance against targets contained in SLAs
  - Maintaining a knowledge of future demand for IT services and predicting the effects of demand on performance service levels
  - Determining performance service levels that are maintainable and cost-justified
  - Recommending tuning of services and systems, and making recommendations to IT management on the design and use of systems to help ensure optimum use of all hardware and operating system software resources
  - Acting as a focal point for all capacity and performance issues`,
  },

  {
    capacityAnalystResponsibilities: `
- The Capacity Analyst performs or directs many of the day-to-day and strategic capacity activities on behalf of the Capacity Manager.
- Whereas the Capacity Manager is accountable for most capacity-related activities, the Capacity Analyst is responsible for the gathering and analyzing of data for a specific service support area (e.g. Network), and then forwarding the information to the Capacity Manager, who will provide the holistic view for an entire service
- Possesses a comprehensive knowledge of the service delivery infrastructure and the capacity impacts of those infrastructure components on the service as a whole.
- When analysis is required, initiates the requests to the appropriate infrastructure teams, receives and analyzes the results, and creates the various reports.
- Reviews all Capacity reports with the Capacity Manager and publishes them after approval.`,
  },

  {
    categoriesOfInformationAssets: `
- Hardware Assets
- Software Assets
- Information Assets
- People Assets
`,
  },

  {
    assetsInventoryContain: `
- Asset identification.
- Asset description.
- Asset location.
- Asset owner.
- Asset classification.
- Asset Value\ Sensitivity
`,
  },

  {
    informationSecurityDepartmentResponsibilities:
      `
- Define and maintain the information security policies, Standards and processes.
- Interprets information security policies, procedures, standards and other requirements in light of local needs and assists the staff of the department in the implementation of the security requirements. Periodically prepare the updates for information security manuals needed to advance information security at ` +
      nqspCompanyName1 +
      `
`,
  },

  {
    encryptionMethods: `
  <table>
  <tr>
      <th>Name of System/Type of Information</th>
      <th>Cryptographic Tool</th>
      <th>Encryption Algorithm</th>
      <th>Key Size</th>
  </tr>
  <tr>
      <td>Public Key Infrastructure for Authentication</td>
      <td>Open SSL</td>
      <td>AES-256</td>
      <td>256-bit Key</td>
  </tr>
  <tr>
      <td>Data  Encryption Keys</td>
      <td>Open SSL</td>
      <td>AES-256</td>
      <td>256-bit Key</td>
  </tr>
  <tr>
      <td>Virtual Private Network (VPN) Keys</td>
      <td>Open SSL and OpenVPN</td>
      <td>AES-256</td>
      <td>256-bit Key</td>
  </tr>
  <tr>
      <td>Website SSL Certificate</td>
      <td>Open SSL, CERT</td>
      <td>AES-256</td>
      <td>256-bit Key</td>
  </tr>
</table>
`,
  },

  {
    collectingInformation: `
- First name, Middle Name, Last Name
- Email ids
`,
  },

  {
    incidentReporting:
      `
- Personnel are required to promptly report possible or known information security and confidentiality violations to ` +
      nqspCompanyName1 +
      ` IT; including the following:
  - Infrastructure incident: any event considered to be a malicious action that causes a failure, interruption, or loss in availability to any ` +
      nqspCompanyName1 +
      ` Information Resource.
  - Data incident: any loss, theft, or compromise of ` +
      nqspCompanyName1 +
      ` information.
  - Unauthorized access incident: any unauthorized access to a ` +
      nqspCompanyName1 +
      ` Information Resource.
- Potential incidents and threats reported from event logging, vulnerability management, and other monitoring activities must be reported to ` +
      nqspCompanyName1 +
      ` IT.
- All reported incidents must be assessed by ` +
      nqspCompanyName1 +
      ` IT to determine the threat type and activate the appropriate response procedures.`,
  },

  {
    incidentResponseTeam:
      `
- Incident Response Commander will establish and provide overall direction to 
an ` +
      nqspCompanyName1 +
      ` Incident Response Team (IRT).
- The Incident Response Commander is responsible for overseeing the creation, 
implementation, and maintenance of an Incident Management Plan.
- ` +
      nqspCompanyName1 +
      ` IRT members have pre-defined roles and responsibilities 
which can take priority over normal duties. Any additional ` +
      nqspCompanyName1 +
      ` 
staff member may be called upon to assist in resolving an incident.
- The IRT will respond to any new threat to ` +
      nqspCompanyName1 +
      ` information
 systems or data following the Incident Management Plan.
- The Incident Response Commander must report the incident to:
  - ` +
      nqspCompanyName1 +
      ` Executive Management
  - Any affected customers and or/partners
  - Local, state, or federal law officials as required by applicable 
  statutes and/or regulations.
- The Incident Response Commander or executive management team will 
coordinate communications with any outside organizations.
- The Incident Management Plan must be tested by the IRT no less than annually.
- The IRT must participate in training activities specific to the organization’s 
Incident Response Plan at least annually or upon significant change to the organization.
`,
  },

  {
    informationSecurityDepartment:
      `
- Define and maintain the information security policy and the supporting policies.
- Manage the security awareness program.
- Identify suppliers and risks associated with supplier deliveries
- Distributes information security documents so that those who need such 
documents have copies or can readily locate the documents via an intranet site.
- Prepares and periodically updates information security manuals needed to 
advance information security at ` +
      nqspCompanyName1 +
      `.
- Interprets information security policies, procedures, standards and
 other requirements in light of local needs and assists the staff of the department
  in the implementation of these and other information security requirements.
- Monitor and handle incidents related to information security in ` +
      nqspCompanyName1 +
      `.
- Develop contingency plans and supervise the implementation of such plans.
- Provide Human Resource and legal department after any update in this document.
`,
  },

  {
    humanResources: `
- Communicate the policy to all new employees and to ensure that all employees understand
 the requirements and responsibilities towards Information Security policies.`,
  },

  {
    riskConsequenceLevels: `
  <table>
    <tr>
        <th>ADU FOPC Consequence Level</th>
        <th>Consequence Score</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Low</td>
        <td>0</td>
        <td>Loss of confidentiality, integrity, or availability will not affect the organization&#39;s cash flow, legal, or contractual obligations, or reputation.</td>
    </tr>
    <tr>
        <td>Moderate</td>
        <td>1</td>
        <td>Loss of confidentiality, integrity, or availability may incur a financial cost and has a low or moderate impact on the organization&#39;s legal or contractual obligations and/or reputation.</td>
    </tr>
    <tr>
        <td>High</td>
        <td>2</td>
        <td>Loss of confidentiality, integrity, or availability will have an immediate and or/considerable impact on the organization&#39;s cash flow, operations, legal and contractual obligations, and/ or reputation.</td>
    </tr>
  </table>`,
  },

  {
    riskLikelihoodLevels: `
  <table>
  <tr>
      <th>Likelihood Level</th>
      <th>Likelihood Score</th>
      <th>Description</th>
  </tr>
  <tr>
      <td>Low</td>
      <td>0</td>
      <td>Either existing security controls are strong and have so far provided an adequate level of protection, or the probability of the risk being realized is extremely low. No new incidents are expected in the future.</td>
  </tr>
  <tr>
      <td>Moderate</td>
      <td>1</td>
      <td>Either existing security controls have most provided an adequate level of protection or the probability of the risk being realized is moderate. Some minor incidents may have occurred. New incidents are possible, but not highly likely.</td>
  </tr>
  <tr>
      <td>High</td>
      <td>2</td>
      <td>Either existing security controls are not in place or ineffective; there is a high probability of the risk being realized. Incidents have a high likelihood of occurring in the future.</td>
  </tr>
</table>
`,
  },

  {
    backgroundPolicyAdditionalSearch:
      `
The following additional background searches will be required if applicable to the position:
- **Motor Vehicle Records:** provides a report on an individual's driving history in the state requested. This search will be run when driving is an essential requirement of the position.
- **Credit History:** confirms candidate's credit history. This search will be run for positions that involve management of ` +
      nqspCompanyName1 +
      ` funds and/or handling of cash or credit cards.
`,
  },

  {
    disasterSkypeGroup:
      `
- **Creating skype Group – Contact list**
  - Create a called – “Steering Committee”. This group must be active at all
    times and must be used only when there is emergency or a disaster.
  - Include following members in the group.
    - ` +
      nqspCompanyName1 +
      ` – Steering committee members
    - On ` +
      nqspCompanyName1 +
      ` office front desk (reception area), keep the
      contact details of nearby law enforcement, fire brigade, local
      municipality`,
  },
];
