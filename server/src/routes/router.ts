import { Router } from "express";
import userController from "../controllers/userController";
import accountController from "../controllers/accountController";

const router = Router();

router.get("/user", userController.getUsers);
router.post("/user/", userController.createUser);
router.delete("/user/:id", userController.deleteUser);
router.put("/user/:id", userController.updateUser);

router.post("/login", accountController.login);

export default router;
