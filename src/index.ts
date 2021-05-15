import { Probot, Context } from "probot";
import { ChangesRequestedBot } from "./bot";
import { DefaultConfig } from "./config";

const appName = 'changes-requested-bot';
const configFile = `${appName}.yaml`;

export = (app: Probot) => {
  app.on("issues.opened", async (context) => {
    const bot = await makeBot(context);
    bot?.handleIssueOpened();
  });

  const makeBot = async (context: Context): Promise<ChangesRequestedBot | undefined> => {
    const config = await context.config(configFile);
    if (config) {
      const configWithDefaults = Object.assign({}, DefaultConfig, config);
      return new ChangesRequestedBot(context, configWithDefaults, app.log);
    }
    return undefined;
  };
};
