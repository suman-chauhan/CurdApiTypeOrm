import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.post("/createUser", UserController.createUser);
router.get("/getUsers", UserController.getUsers);
router.get("/getUsers/:id/:phone", UserController.getUsers);
router.put("/updateUser/:id/:phone", UserController.updateUser);
router.delete("/deleteUser/:id/:phone", UserController.deleteUser);
export default router;
