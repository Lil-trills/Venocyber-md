//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Lagos,Nigeria.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://wa.me/qr/O2VNE2KEHPJZB1";
global.website = process.env.GURL || "https://wa.me/qr/O2VNE2KEHPJZB1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "2347025369036";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU14UVBVSEcyNnFwRDNpSFhySm1NcmZjb1QrOGdOdzNnMERLTENiUnczcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkZZWkVGanZ4SGtNWWRzeXFoTVE0VDdpSUV3NFJET2VKejVxdzZEcHIwZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSFlXTW4zTi8vUHhyS01ia3NET0VQWEk4b29JTW5TV0JOSWpUaUc0ekhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjV3hmMTlIeENsbFFWV3Jnc3RiQ2x5U3lzbngxcXZyWnZxWXYxbFRXUkNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9EQnZwbWs3d2x5ZE84QnBRL0JRSzBVYUU0SVdVeXZFeGxLUkN4SU9ZbW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncvbU4rL2RwUGFkOVN6Y2J3dmZhM2ZGSjFxNlFQZldzdlg5QzBaZ3FIMkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUFkK1l5ODQ0LytwMzdWdjRDQWkrektDbnFSZ0hPM2JHYUZxMTcvcU5WST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHNFdTBLeGhrWGJGM1NyREhvZTdNTEVicGhBSGErVmRuR1kwYUNWYnNuTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVZUTBJc01RL2lVMGV2MUVsZFBNVXdMdytZdEpuemxOdFJPOUwrWTJCaWlYM1ZGK0N4Q3h1MWFWd0ducXprSExYd3E0Mlhyd1pNcEFEVDlicldsS2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUxLCJhZHZTZWNyZXRLZXkiOiI1THhubGVyQ050WFN0YysrT1l6MmhQaWtlM0c1ZHFpVU5qT2VXOGRkRmFNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqWEEwTzU1QlRTU2hnR1FmYlFxcFJ3IiwicGhvbmVJZCI6ImJlMDFiNWU5LTE5ZmQtNDdlNS04NDc3LWU1OWI4NzhkNTYxNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUGhUZjluMEl1cDRIaGdUZDFCWi9Fc2FuakE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0Zwbll1VHJVUzZvc0N1SEUwc0VFQ1lFQ3N3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjE3Nk1MS0tLIiwibWUiOnsiaWQiOiIyMzQ3MDI1MzY5MDM2OjQ0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNObmU0SVlFRVAvTXA3UUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1Zkl4VlJIemN4bnVqUnhyUVlFRmJESWtNSEdPSlVmUGEvaXVRVTZ2ZUVzPSIsImFjY291bnRTaWduYXR1cmUiOiI5dEZwY0pCSHBmR2xPcGxMZHJtTzlQcGVac01lM2JSMGF6NG9tQUVYUmsyRTBDK1ZwMnRNTUpoazM1bkFtS3ZLZkUycEtVOFg5Y0hLbjRGL2lrZ09Cdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSHRZUUhTOXozdUxvWEhzWFJRaWhVV3pONlRyMEx5L1l1ZHZVcVEwZnl0Y1oyMGN4VmUzWXhLUWdJMks3c28xM2NzVmdUZ1dnV2RLckJDUTRhM3E4akE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDI1MzY5MDM2OjQ0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJueU1WVVI4M01aN28wY2EwR0JCV3d5SkRCeGppVkh6MnY0cmtGT3IzaEwifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAzMTM0ODR9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ":",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Nigeria| enjoy your time| this is TRILLS 𝐌𝐃",
  author: process.env.PACK_AUTHER || "TRILLS",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TRILLS-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "TRILLS",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TRILLS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
