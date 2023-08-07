import express, { Router } from "express";
import { getTestInfoByID, getTestList } from "../controller/testController";

const router: Router = express.Router();

router.get("/list", getTestList);
router.get("/info/:testID", getTestInfoByID);

export default router;
