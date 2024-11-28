import { execSync } from "node:child_process";
const args = Deno.args;
const tenantName = args[0];

async function getAuditControls(name: string) {
  const tenantName = name.toLowerCase();

  // Ingest common audit control data
  executeCommand(
    `cd support/audit-control-csv/common && export SURVEILR_STATEDB_FS_PATH="../../../src/content/dbData/common/common-audit-controls-temp.sqlite.db" && surveilr ingest files --csv-transform-auto && cp ../../../src/content/dbData/common/common-audit-controls-temp.sqlite.db ../../../src/content/db/common`,
  );

  // Ingest tenant-specific audit control data for 'tes'
  executeCommand(
    `cd support/audit-control-csv/${tenantName} && export SURVEILR_STATEDB_FS_PATH="../../../src/content/dbData/${tenantName}/${tenantName}-controls-temp.sqlite.db" && surveilr ingest files --csv-transform-auto && cp ../../../src/content/dbData/${tenantName}/${tenantName}-controls-temp.sqlite.db ../../../src/content/db/${tenantName}`,
  );

  // Copy common audit control data to the 'tes' directory
  const copyCommonAuditCommand = `cd src/content/db && cp common/common-audit-controls-temp.sqlite.db ${tenantName} && rm -rfv common/common-audit-controls-temp.sqlite.db`;
  executeCommand(copyCommonAuditCommand);
}
getAuditControls(tenantName);

function executeCommand(command: string) {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`Error executing command: ${command}`, error);
  }
}
