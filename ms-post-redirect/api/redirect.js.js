export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    // Parse both JSON and form POSTs
    let data = {};
    if (req.headers['content-type']?.includes('application/json')) {
      data = req.body;
    } else if (req.headers['content-type']?.includes('application/x-www-form-urlencoded')) {
      const querystring = require('querystring');
      data = querystring.parse(req.body.toString());
    }

    console.log("Received POST data:", data);

    // Redirect to your site page
    const targetUrl = "https://your-site-page.com"; // <-- Replace with your actual URL
    res.writeHead(302, { Location: targetUrl });
    res.end();
  } catch (err) {
    console.error("Redirect error:", err);
    res.status(500).send("Internal Server Error");
  }
}
