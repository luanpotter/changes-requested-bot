export interface BotConfig {
    daysUntilClose: number;
    dryRun: boolean;
    triggerLabel: string;
    closingComment: string;
}

export const DefaultConfig: BotConfig = {
    daysUntilClose: 5,
    dryRun: false,
    triggerLabel: 'changes-requested',
    closingComment: 'default message',
};