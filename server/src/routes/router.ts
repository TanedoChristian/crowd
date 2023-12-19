import { Router } from "express";
import userController from "../controllers/userController";
import accountController from "../controllers/accountController";
import { contactController } from "../controllers/contactController";

const router = Router();

router.get("/user", userController.getUsers);
router.get("/user/:id", userController.getUserById);
router.post("/user/", userController.createUser);
router.delete("/user/:id", userController.deleteUser);
router.put("/user", userController.updateUser);

router.post("/login", accountController.login);

router.get("/contacts", contactController.get);
router.get("/contacts/:id", contactController.getById);
router.get("/contacts/user/:id", contactController.getById);
router.post("/contacts", contactController.create);

export default router;
