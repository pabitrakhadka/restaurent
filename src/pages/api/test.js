import middleware from "./validate/middle";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { authorization } = req.headers;
      console.log(authorization);
      try {
        const id_admin = await middleware(authorization);

        if (!id_admin) {
          return res.status(401).json({
            status: "Failed",
            message: "Unauthorized Access",
          });
        }

        return res.status(200).json({
          status: true,
          message: "Authorized Access",
        });
      } catch (error) {
        return res.status(401).json({
          status: "Failed",
          message: "Unauthorized Access",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error", data: error }); // Fixed method call
  }
}
