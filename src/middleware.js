import { NextResponse } from "next/server";

export async function middleware(request) {
  //   const { headers, nextUrl } = request;
  //   const { authorization } = headers;
  //   // Define the paths you want to protect
  //   const protectPath = ["/admin", "/order", "/product.js", "/viewOrder"];
  //   // Check if the request path matches any paths in the protectPath array
  //   if (protectPath.some((path) => nextUrl.pathname.startsWith(path))) {
  //     // If authorization header is missing or does not start with Bearer, return an error response
  //     if (!authorization || !authorization.startsWith("Bearer")) {
  //       return NextResponse.error({
  //         status: 401,
  //         body: {
  //           status: "failed",
  //           message: "Unauthorized Access: Missing or Invalid Token",
  //         },
  //       });
  //     }
  //     try {
  //       // Get the token from the authorization header
  //       const token = authorization.split(" ")[1];
  //       // Verify the token
  //       const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  //       if (decodedToken) {
  //         return NextResponse.next();
  //       }
  //       // If token is valid, proceed with the request
  //     } catch (error) {
  //       // If token verification fails, return an error response
  //       console.error(error);
  //       return NextResponse.error({
  //         status: 401,
  //         body: {
  //           status: "failed",
  //           message: "Unauthorized Access: Invalid Token",
  //         },
  //       });
  //     }
  //   }
  //   // If the path does not need protection, proceed with the request
  //   return NextResponse.next();
  // }
}

export const config = {
  // Define the matcher for the middleware
  matcher: "/api/:path*",
};
