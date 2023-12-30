export function onScan(qrcode) {
  const qrcodeImageUrl = [
    "https://api.qrserver.com/v1/create-qr-code/?data=",
    encodeURIComponent(qrcode),
  ].join("");

  console.log(`-------------${qrcodeImageUrl}-------------`);
}
