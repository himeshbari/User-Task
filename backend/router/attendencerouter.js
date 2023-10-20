import express from "express";
import { getAttendence} from "../controllers/attendenceControllers.js"

//router object
const router = express.Router();


router.get('/get-attendence/:fromDate/:toDate/:locationId', getAttendence);
// router.get('/get-attendence', getAttendence);

export default router;