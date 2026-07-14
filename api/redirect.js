export default function handler(req, res) {

  const country = req.headers["x-vercel-ip-country"];

  if (country === "CO") {
    return res.redirect(302, "https://tuatencionoccidente.com/");
  }

  return res.status(200).send("OK");
}
