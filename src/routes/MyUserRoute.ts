import express, { Request, Response } from "express"
import MyUserController from "../controllers/MyUserController"
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router()

router.post("/", jwtCheck, (req: Request, res: Response) => {
    MyUserController.createCurrentUser(req, res)
})
router.put("/", jwtCheck, jwtParse, validateMyUserRequest ,async (req: Request, res: Response): Promise<void> => {
    await MyUserController.updateCurrentUser(req, res);
});

export default router;