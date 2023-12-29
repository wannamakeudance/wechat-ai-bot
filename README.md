## 默认配置

```javascript
{
  // 填入你的OPENAI_API_KEY
  OPENAI_API_KEY: "",
  // 反向代理地址，简单说就是你的在国外服务器地址，如何获取看README
  reverseProxyUrl: "",
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
}
```

## 开始设置机器人 🤖

1. 首先，需要按照以下步骤获你的 ChatGPT 的 OPENAI_API_KEY.

> 获取你的 OPENAI_API_KEY:
>
> - 打开 [https://platform.openai.com/overview](https://platform.openai.com/overview) 并登录注册，进入网页。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/2777249/1675413138418-d5df2543-bd37-41cc-a16c-505c5a38e88d.png)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/2777249/1675413190188-4cf10947-ea7f-479d-9550-0dec9d40c0e2.png?x-oss-process=image%2Fresize%2Cw_1500%2Climit_0)

2. 把 OPENAI_API_KEY 填入目录`src/config.ts`下的 `OPENAI_API_KEY` 中

3. 把 reverseProxyUrl 填入目录`src/config.ts`下的 `reverseProxyUrl` 中，如何设置可看下面介绍。

> 当然也可以选择白嫖山月老师的代理地址：`https://ai.devtool.tech/proxy/v1/chat/completions`，可以关注[他的项目](https://github.com/shfshanyue/wechat-chatgpt)

4. 然后在终端运行以下命令。如有需要，请在`src/config.ts`中配置其它配置变量。

```javascript
  // 安装依赖
  npm i
  npm run dev

  // 也可以使用pnpm
  npm i -g pnpm
  pnpm i
  pnpm run dev

```

3. 执行完之后，可以看到终端控制台输出一下信息，扫码登录即可.
   ![image.png](https://cdn.nlark.com/yuque/0/2022/png/2777249/1670287138908-cc898c58-6e0a-488f-ae07-ae489508c1be.png#averageHue=%23484948&clientId=uf4023d0a-0da7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=442&id=ub5fee6b7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1200&originWidth=1660&originalType=binary&ratio=1&rotation=0&showTitle=false&size=492370&status=done&style=none&taskId=u233d9139-1ef5-42bf-9f44-354c6565862&title=&width=612)

4. 登录成功，用另外一个微信往你扫码登录的微信发消息，你将会收到来自 ChatGPT 的回复。
   ![image.png](https://cdn.nlark.com/yuque/0/2022/png/2777249/1670288278607-73beed83-1a42-42db-8404-72ba60bf2c53.png#averageHue=%234d4e4d&clientId=uf4023d0a-0da7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=437&id=uff52651b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=874&originWidth=1398&originalType=binary&ratio=1&rotation=0&showTitle=false&size=543479&status=done&style=none&taskId=ub5559ec7-30f8-4c07-a9f8-1445a659835&title=&width=699)![image.png](https://cdn.nlark.com/yuque/0/2023/png/2777249/1680258120110-20343826-d2dc-4fd5-9f94-1a40e43940bb.png?x-oss-process=image%2Fresize%2Cw_1270%2Climit_0)

## 设置反向代理地址

ChatGPT API 代理<https://hub.docker.com/r/mirrors2/chatgpt-api-proxy>

chatgpt api 代理,已验证 OpenCat,AssisChat,AMA(问天),chathub

可配置好 OPENAI_API_KEY 分享代理地址给他人用.

快速开始

```bash
docker run -d -p 80:80 --name chatgpt-api-proxy mirrors2/chatgpt-api-proxy

# 可选 -e OPENAI_API_KEY={nide_api_key}
```

docker 跑起来之后你的代理地址就生效了：

官方的：`https://api.openai.com/v1/chat/completions`

你的： `你的域名/v1/chat/completions` 或者 `你的服务器ip和端口/v1/chat/completions`