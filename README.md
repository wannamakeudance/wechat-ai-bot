## Default Configuration

```javascript
{
  // Enter your OPENAI_API_KEY
  OPENAI_API_KEY: "",
  // Reverse proxy URL, simply put, your server address located abroad. See README for more details.
  reverseProxyUrl: "",
  // Keyword to activate the WeChat bot in group chats
  groupKey: "",
  // Keyword to activate the WeChat bot in private chats
  privateKey: "",
  // Keyword to reset the context, such as "reset"
  resetKey: "reset",
  // Whether to include the question in group chat replies
  groupReplyMode: true,
  // Whether to include the question in private chat replies
  privateReplyMode: false,
}
```

## Setting Up the Bot 🤖

1. First, follow the steps below to obtain your ChatGPT OPENAI_API_KEY.

> How to get your OPENAI_API_KEY:
>
> - Go to [https://platform.openai.com/overview](https://platform.openai.com/overview) and log in or sign up.

![image.png](https://cdn.nlark.com/yuque/0/2023/png/2777249/1675413138418-d5df2543-bd37-41cc-a16c-505c5a38e88d.png)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/2777249/1675413190188-4cf10947-ea7f-479d-9550-0dec9d40c0e2.png?x-oss-process=image%2Fresize%2Cw_1500%2Climit_0)

2. Enter the OPENAI_API_KEY in the `OPENAI_API_KEY` field in `src/config.ts`.

3. Enter the reverseProxyUrl in the `reverseProxyUrl` field in `src/config.ts`. For more details, see the instructions below.

> Alternatively, you can use the proxy address provided by Shanyue: `https://ai.devtool.tech/proxy/v1/chat/completions`. You can also follow [his project](https://github.com/shfshanyue/wechat-chatgpt).

4. Run the following commands in your terminal. If needed, configure other variables in `src/config.ts`.

```javascript
  // Install dependencies
  npm i
  npm run dev

  // Alternatively, using pnpm
  npm i -g pnpm
  pnpm i
  pnpm run dev
```

5. After running the commands, you will see output in the terminal. Scan the QR code to log in.
   ![image.png](https://cdn.nlark.com/yuque/0/2022/png/2777249/1670287138908-cc898c58-6e0a-488f-ae07-ae489508c1be.png#averageHue=%23484948&clientId=uf4023d0a-0da7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=442&id=ub5fee6b7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1200&originWidth=1660&originalType=binary&ratio=1&rotation=0&showTitle=false&size=492370&status=done&style=none&taskId=u233d9139-1ef5-42bf-9f44-354c6565862&title=&width=612)

6. After successfully logging in, send a message to the logged-in WeChat from another WeChat account, and you will receive a reply from ChatGPT.
   ![alt text](src/assets/pic1.jpg)

   ![alt text](src/assets/pic2.jpg)
