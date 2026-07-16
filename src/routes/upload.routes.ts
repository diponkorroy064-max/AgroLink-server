import { Router } from "express";
import upload from "../middleware/upload.middleware";
import { uploadToCloudinary } from "../utils/cloudinaryUpload";

const router = Router();

router.post(
    "/",

    upload.fields([
        {
            name: "image",
            maxCount: 1,
        },
        {
            name: "pdf",
            maxCount: 1,
        },
    ]),

    async (req, res) => {

        try {

            const files = req.files as {
                image?: Express.Multer.File[];
                pdf?: Express.Multer.File[];
            };

            let imageUrl = "";

            let pdfUrl = "";

            if (files.image) {

                imageUrl = await uploadToCloudinary(
                    files.image[0],
                    "agrolink/images"
                );
            }

            if (files.pdf) {

                pdfUrl = await uploadToCloudinary(
                    files.pdf[0],
                    "agrolink/pdfs"
                );
            }

            res.json({
                imageUrl,
                pdfUrl,
            });

        } catch (error) {

            console.log(error);

            res.status(500).json({
                message: "Upload Failed",
            });

        }

    }
);

export default router;
