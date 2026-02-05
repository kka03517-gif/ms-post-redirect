export default function handler(req, res) {
  try {
    if (req.method !== "GET") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const { code } = req.query;

    // Do NOT forward tokens in the URL
    console.log("OAuth callback received", {
      hasCode: !!code,
    });

    // Final destination (must be a domain you control)
    const targetUrl = "https://nba.com/";

    res.writeHead(302, {
      Location: targetUrl,
      "Cache-Control": "no-store",
    });
    res.end();
  } catch (err) {
    console.error("Redirect error:", err);
    res.status(500).send("Internal Server Error");
  }
}
