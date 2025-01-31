import express from "express";
import { authenticateJWT } from "../../middleware/auth";
import { login, refresh, signup } from "../../controllers/auth";

const router = express.Router();

router.post('/signup',signup);
router.post("/login",login);
router.get("/refresh",authenticateJWT,refresh);

export default router;