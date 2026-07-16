import dotenv from "dotenv";
dotenv.config();

export const env = {
    PORT: process.env.PORT || "5000",
    MONGODB_URI: process.env.MONGODB_URI as string,
    DB_NAME: process.env.DB_NAME as string,
    JWT_SECRET: process.env.JWT_SECRET as string,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME as string,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY as string,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET as string,
};
