import fs from "fs";

// TODO gerar arquivos distintos e usar `fileReplacements` no angular.json
let env_sufix = process.env.NODE_ENV === "production" ? ".prod" : "";
fs.writeFileSync(
  `src/environments/environment${env_sufix}.ts`,
  `
export const environment = {
  env: "${process.env.NODE_ENV}",
  apiUrl: "${process.env.NG_APP_API_URL}",
};
`
);

// jwtSecret: "${process.env.NG_APP_JWT_SECRET}",
