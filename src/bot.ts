import { BotConfig } from "./config";
import { Context, Logger } from "probot";

export class ChangesRequestedBot {
  constructor(
    private context: Context,
    private config: BotConfig,
    private logger: Logger,
  ) { }

  async handleIssueOpened() {
    this.logger.info("Creating comment on issue...");
    if (this.config.dryRun) {
      return;
    }

    const issueComment = this.context.issue({
      body: this.config.closingComment,
    });
    await this.context.octokit.issues.createComment(issueComment);
  }
}