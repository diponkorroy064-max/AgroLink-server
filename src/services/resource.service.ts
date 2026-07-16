import { db } from "../config/db";

export const createResource = async (resource: any) => {
    const result = await db
        .collection("resources")
        .insertOne(resource);

    return result;
};
