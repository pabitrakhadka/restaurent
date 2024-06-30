// import jwt from "jsonwebtoken";

// async function middleware(authorization) {
//   return null;
//   console.log("auth>>", authorization);
//   try {
//     if (authorization && authorization.startsWith("Bearer")) {
//       const token = authorization.split(" ")[1];
//       if (!token) {
//         throw new Error("Token not found");
//       } else {
//         const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
//         if (!id) {
//           throw new Error("Invalid token");
//         } else {
//           return id;
//         }
//       }
//     } else {
//       throw new Error("Authorization header missing or invalid");
//     }
//   } catch (error) {
//     console.error("Middleware error:", error.message);
//     throw error;
//   }
// }

// module.exports = middleware;
