import { Request, Response } from "express";
import { db } from "../config/db";

export const createResource = async (
    req: Request,
    res: Response
) => {
    try {
        const resource = {
            ...req.body,
            status: "pending",
            views: 0,
            likes: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        // console.log('formData from addResource page', resource);

        const result = await db.collection("resources").insertOne(resource);
        // console.log('formData from addResource page', result);

        res.status(201).json({
            success: true,
            message: "Resource added successfully",
            insertedId: result.insertedId,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
