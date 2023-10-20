import express from "express";
import {addLocation, getLocations} from "../controllers/locationController.js";

//router object
const router = express.Router();

//REGISTER Location
router.post('/add-location', addLocation);

//Get location
router.get('/get-locations', getLocations);


export default router;