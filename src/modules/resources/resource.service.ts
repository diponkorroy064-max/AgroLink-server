import { db } from "../../config/db";

export const createResource = async (resource: any) => {
    const result = await db
        .collection("resources")
        .insertOne(resource);

    return result;
};

export const getMyResources = async (authorEmail: string) => {
    return await db
        .collection("resources")
        .find({
            authorEmail,
        })
        .sort({ createdAt: -1 })
        .toArray();
};

export const getAllResourcesService = async () => {
    return await db
        .collection("resources")
        .find({ status: "approved" })
        .toArray();
};

