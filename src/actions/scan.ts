import qrcodeTerminal from "qrcode-terminal";

export function onScan(qrcode) {
  qrcodeTerminal.generate(qrcode, { small: true });
  const qrcodeImageUrl = [
    "https://api.qrserver.com/v1/create-qr-code/?data=",
    encodeURIComponent(qrcode),
  ].join("");

  console.log(`-------------${qrcodeImageUrl}-------------`);
}
