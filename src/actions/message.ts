import config from "../config.js";
import ChatGPT from "../chatgpt.js";
import { bot } from "../bot.js";

export async function onMessage(msg) {
  if (msg.date() < bot.startTime) {
    return;
  }

  const chatGPTClient = new ChatGPT();
  const contact = msg.talker();
  const receiver = msg.to();
  const content = msg.text().trim();
  const room = msg.room();
  const alias = (await contact.alias()) || (await contact.name());
  const isText = msg.type() === bot.Message.Type.Text;

  if (msg.self()) {
    return;
  }

  if (room && isText) {
    const topic = await room.topic();
    console.log(
      `Group name: ${topic} talker: ${await contact.name()} content: ${content}`
    );

    const pattern = RegExp(`^@${receiver.name()}\\s+${config.groupKey}[\\s]*`);

    if (await msg.mentionSelf()) {
      if (pattern.test(content)) {
        const groupContent = content.replace(pattern, "");
        return chatGPTClient.replyMessage(room, groupContent);
      } else {
        console.log(
          "Content is not within the scope of the customizition format"
        );
      }
    }
  } else if (isText) {
    console.log(`talker: ${alias} content: ${content}`);

    if (content.startsWith(config.privateKey) || config.privateKey === "") {
      let privateContent = content;

      if (!!config.privateKey) {
        privateContent = content.substring(config.privateKey.length).trim();
      }
      chatGPTClient.replyMessage(contact, privateContent);
    } else {
      console.log(
        "Content is not within the scope of the customizition format"
      );
    }
  }
}
