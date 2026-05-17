import express from "express";
import { createCV } from "../controllers/cv.controller.js";
import { getCVTemplates } from "../controllers/cvTemplate.controller.js";

const router = express.Router();

router.post("/create", createCV);
router.get("/templates", getCVTemplates);

export default router;
