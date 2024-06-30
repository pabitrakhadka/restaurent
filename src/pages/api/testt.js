import fetch from "node-fetch";
async function sendThankYouMessage() {
  try {
    const thankYouMessage = `Thank you so much to my family and friends for showering me in love on my birthday. I am so appreciative of you all. 😄🎉🎂`;
  } catch (error) {
    console.error(`Error sending  message: ${error}`);
  }
}
export default async function Reply(req, res) {
  try {
    const isLoggedIn = await isUserLoggedIn(req);

    if (!isLoggedIn) return res.status(400).json({ message: "Unauthorized!" });
    if (
      req.method === "POST" ||
      req.method === "Message" ||
      req.method === "Comment" ||
      req.method === "*"
    ) {
      const { u_id } = req.body;
      const friends = await faacebookDatabase.findMany({
        where: {
          u_id: u_id,
        },
      });
      let message = `${process.env.Message}`;
      for (const friend of friends) {
        await replayMessage(friend.name, message);
      }

      await sendThankYouMessage();
      res.status(200).json({
        message: "Send Message Successfully !",
      });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error(`Error handling Replay Message: ${error}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
