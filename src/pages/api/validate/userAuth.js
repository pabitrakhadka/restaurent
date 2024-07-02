
import { decode } from "next-auth/jwt";
async function isUserLoggedIn(request) {
  const token = request.cookies?.["next-auth.session-token"] || null;
  // ?.csrftoken?.["next-auth.session-token"] || null;
  // TODO: if token is null, get token from request.headers.

  if (!token) return false;
  try {
    const user = await decode({
      token: token,
      secret: process.env.NEXTAUTH_SECRET,
    });
    return true;
  } catch (e) {

    return false;
  }
}
export default isUserLoggedIn;
