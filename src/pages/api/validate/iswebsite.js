import { decode } from "next-auth/jwt";
async function isWebsite(request) {

    const token = request.cookies?.["next-auth.session-token"] || null;
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
export default isWebsite;