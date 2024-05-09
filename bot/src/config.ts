import * as dotenv from "dotenv";

dotenv.config();

export const Config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  TELE_BOT_TOKEN: process.env.TELE_BOT_TOKEN || "",
  TELE_BOT_WEB_LINK: process.env.TELE_BOT_WEB_LINK || "",
};
