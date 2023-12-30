import { onLogin, onLogout, onMessage, onScan } from "./actions/index.js";
import { bot } from "./bot.js";

async function initProject() {
  try {
    bot.startTime = new Date();
    bot
      .on("scan", onScan)
      .on("login", onLogin)
      .on("logout", onLogout)
      .on("message", onMessage);

    bot
      .start()
      .then(() => console.log("Start to log in wechat..."))
      .catch((e) => console.error(e));
  } catch (error) {
    console.log("init error: ", error);
  }
}

initProject();
