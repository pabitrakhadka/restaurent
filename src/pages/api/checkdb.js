import prisma from "@/db/db.config";

export default async function handler(req, res) {
    try {
        await prisma.$connect();

        res.status(200).json({ message: 'Database connected successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Database connection error', message: error.message });
    } finally {
        await prisma.$disconnect();
    }
}
