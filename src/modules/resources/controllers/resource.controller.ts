import { Request, Response } from "express";
import { db } from "../../../config/db";
import { getAllResourcesService, getMyResources } from "../resource.service";

interface MyResourceParams {
    authorEmail: string;
}

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


export const getMyResourcesByAuthorEmail = async (
    req: Request<MyResourceParams>,
    res: Response
) => {
    try {
        const { authorEmail } = req.params;
        const resources = await getMyResources(authorEmail);

        res.status(200).json({
            success: true,
            resources,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


export const getAllResources = async (
    req: Request,
    res: Response
) => {
    try {
        const resources = await getAllResourcesService();

        res.status(200).json({
            success: true,
            resources,
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};