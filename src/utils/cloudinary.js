import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export const uploadToCloudinary = async (filePath, foldername) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: `convexInfo/${foldername}`,
            resource_type: "auto", // this will automatically detect the file type
        });
        // Optionally delete the file from local storage after upload
        fs.unlinkSync(filePath);
        return result;
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        throw error;
    }
}