import cloudinary from "../../config/cloudinary";
import streamifier from "streamifier";

export const uploadToCloudinary = (
    file: Express.Multer.File,
    folder: string
): Promise<string> => {

    return new Promise((resolve, reject) => {

        const stream = cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: "auto",
            },

            (error, result) => {

                if (error) {
                    reject(error);
                }

                if (!result) {
                    reject("Upload failed");
                }

                resolve(result!.secure_url);
            }
        );

        streamifier.createReadStream(file.buffer).pipe(stream);
    });
};
