import * as govn from "../../../governance/information-model/route.ts";
import * as pciiC from "../../_pcii-common.ts";

export const PCII = {
  ...pciiC.PCII,
  compansoc2pRetainAccessLogsPeriod: "1 month",
};
//this name is completely arbitrary, you can choose any name
const iruContent = govn.modelIruProperties(PCII, "PCII");

export function intermediateRouteUnit(): govn.IntermediateRouteUnit {
  return {
    label: "TechBD",
    ...iruContent,
  };
}
