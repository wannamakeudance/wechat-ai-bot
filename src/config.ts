export default {
  OPENAI_API_KEY: process.env.AI_KEY,
  reverseProxyUrl: "https://ai.devtool.tech/proxy/v1/chat/completions",
  // 在群组中设置唤醒微信机器人的关键词
  groupKey: "",
  // 在私聊中设置唤醒微信机器人的关键词
  privateKey: "",
  // 重置上下文的关键词，如可设置为reset
  resetKey: "reset",
  // 是否在群聊中带上提问的问题
  groupReplyMode: true,
  // 是否在私聊中带上提问的问题
  privateReplyMode: false,
};
