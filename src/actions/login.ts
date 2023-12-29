export async function onLogin(user) {
  console.log(`${user} has logged in`);
  const date = new Date();
  console.log(`Current time:${date}`);
}
