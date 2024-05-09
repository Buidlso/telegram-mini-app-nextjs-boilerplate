import { Telegraf as TelegramBot, Context } from "telegraf";
import { Config } from "./config";

export class Bot {
  private bot: TelegramBot;

  constructor() {
    this.bot = this.createTelegramBot();
  }

  public start() {
    this.bot.start(this.handleBotStart);
    this.bot.launch(this.handleBotLaunch);
  }

  // -------------------------------PRIVATE--------------------------------- //

  private createTelegramBot() {
    const botToken = Config.TELE_BOT_TOKEN;
    return new TelegramBot(botToken);
  }

  private handleBotStart(ctx: Context) {
    const webLink = Config.TELE_BOT_WEB_LINK;

    ctx.reply("Hi! lets get you started Click the button below", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Get Started",
              web_app: {
                url: webLink,
              },
            },
          ],
        ],
      },
    });
  }

  private handleBotLaunch() {
    console.log("Bot is up and running...");
  }
}
