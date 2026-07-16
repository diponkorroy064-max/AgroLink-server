import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
    storage,

    limits: {
        fileSize: 10 * 1024 * 1024, //10MB
    },

    fileFilter(req, file, cb) {

        const imageTypes = [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/jpg",
        ];

        const pdfTypes = [
            "application/pdf",
        ];

        if (
            imageTypes.includes(file.mimetype) ||
            pdfTypes.includes(file.mimetype)
        ) {
            cb(null, true);
        } else {
            cb(new Error("Only Images and PDF are allowed."));
        }
    },
});

export default upload;
