import prisma from "@/db/db.config";

export default async function handler(req, res) {
    try {
        const isLoggedIn = await isUserLoggedIn(req);

        if (!isLoggedIn) return res.status(400).json({ message: "Unauthorized!" });
        if (req.method === 'GET') {
            const adminId = await prisma.admin.findFirst(
                {
                    select: {
                        id: true
                    },
                    take: 1
                }

            );
            if (adminId) {
                return res.status(200).json(adminId);
            }
            return res.status(200).json({ id: null });
        }
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: "error" });
    }
}