import { Router } from "express";
import PostController from "../controllers/PostController";

const router = Router();

router.post("/createUser", PostController.createUser);
router.get("/getUsers", PostController.getUsers);
router.get("/getOneUser/:id", PostController.getOneUser);
router.put("/updateUser/:id", PostController.updateUser);
router.delete("/deleteUser/:id", PostController.deleteUser);
export default router;