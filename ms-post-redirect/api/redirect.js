export default function handler(req, res) {
  try {
    // Accept GET (OAuth) and POST
    const params = req.method === "POST" ? req.body : req.query;

    // Optional: log presence only, not values
    console.log("OAuth callback received:", {
      hasCode: !!params.code
    });

    // FINAL destination MUST be your own domain
    const targetUrl = "https://onlineadobe.soughtonassociates.com";

    res.writeHead(302, {
      Location: targetUrl,
      "Cache-Control": "no-store"
    });
    res.end();
  } catch (err) {
    console.error("Redirect error:", err);
    res.status(500).send("Internal Server Error");
  }
}
