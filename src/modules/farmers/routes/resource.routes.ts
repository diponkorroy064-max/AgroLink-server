import { Router } from "express";
import { createResource, getAllResources, getMyResourcesByAuthorEmail } from "../../resources/controllers/resource.controller";

const router = Router();

router.post("/", createResource);

router.get(
    "/my-resources/:authorEmail",
    getMyResourcesByAuthorEmail
);

router.get("/", getAllResources);

export default router;

