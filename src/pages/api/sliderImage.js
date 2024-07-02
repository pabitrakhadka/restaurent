import prisma from "@/db/db.config";
import isUserLoggedIn from "./validate/userAuth";

import multer from "multer";


// Define the destination directory for uploads
const uploadDirectory = process.env.IMAGE_DIRCTORY;
const storage = multer.diskStorage({
    destination: uploadDirectory,
    filename: (req, file, cb) => {
        return cb(null, Date.now() + "_" + file.originalname);
    },
});

const upload = multer({ storage }).single("image");
// Main handler function
async function handlePostRequest(req, res) {
    // const isLoggedIn = await isUserLoggedIn(req);

    // if (!isLoggedIn) return res.status(400).json({ message: "Unauthorized!" });
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Error uploading product image" });

            } else {


                const imageName = req.file.filename;
                const addImage = await prisma.sliderImage.create({
                    data: {
                        image: imageName
                    }
                })
                res.status(200).json({ message: "Image Added Successfully", addImage });
            }
        })


    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: "error" });
    }

}
async function handleGetRequest(req, res) {
    try {
        const sliderimage = req.query.sliderimage;


        if (sliderimage === "three") {
            const getImage = await prisma.sliderImage.findMany({
                take: 4,
            });
            if (!getImage || getImage.length === 0) {
                return res.status(404).json({ message: "No Image Found" });
            }
            return res.status(200).json(getImage);
        }
        else {
            const getImage = await prisma.sliderImage.findMany();
            if (!getImage) {
                return res.status(400).json({ message: "Not Image Fouond" });
            }
            return res.status(200).json(getImage);
        }

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "error" });
    }
}

async function handelDeleteRequest(req, res) {
    const sliderimage = req.query.sliderimage;
    if (sliderimage) {
        const image = await prisma.sliderImage.findMany({
            take: 5,
        })
        if (image) {
            return res.status(200).json({ message: "  Successful", image });
        }
    }
    const id = parseInt(req.query.id);
    const deleteImage = await prisma.sliderImage.delete({
        where: {
            id: id
        }
    });
    if (deleteImage) {
        return res.status(200).json({ message: "Delete Successful" });
    } else {
        return res.status(200).json({ message: "Error" });
    }
}
export default async function handler(req, res) {
    try {

        if (req.method === "POST") {
            await handlePostRequest(req, res);
        } else if (req.method === "GET") {
            await handleGetRequest(req, res);
        } else if (req.method === "DELETE") {
            await handelDeleteRequest(req, res);
        }
        else {
            res.status(405).json({ message: "Method not allowed" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred", error });
    }
}
export const config = {
    api: {
        bodyParser: false,
    },
};
