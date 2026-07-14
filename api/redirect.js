export default function handler(req, res) {

  const country = req.headers["x-vercel-ip-country"];

  res.setHeader("Content-Type", "application/javascript");

  if (country === "CO") {
    return res.send(`
      location.replace("https://tu-pagina-destino.com");
    `);
  }

  return res.send(`
    // Sin redireccion
  `);
}
