import express from "express";

import { getUser, addUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

router.get('/get-user',getUser)
router.post('/add-user',addUser)
router.post('/login-user',loginUser)

export default router;