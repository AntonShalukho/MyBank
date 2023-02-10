import development from "./develop.json";

import production from "./main.json";

import release from "./release.json";

const configMap = {
  development,
  production,
  release,
};

const getConfig = () => {
  if (process.env.BUILD_TYPE) {
    return configMap[process.env.BUILD_TYPE as keyof typeof configMap];
  }
  return configMap.development;
};

export const config = getConfig();
