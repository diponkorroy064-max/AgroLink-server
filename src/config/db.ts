import { MongoClient, ServerApiVersion, Db } from "mongodb";
import { env } from "./env";

const client = new MongoClient(env.MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

export const db: Db = client.db(process.env.DATABASE_NAME);
export async function connectDB() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed");
        console.error(error);
        process.exit(1);
    }
}
export { client };
