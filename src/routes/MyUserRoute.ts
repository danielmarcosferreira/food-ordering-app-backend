import express, { Request, Response } from "express"
import MyUserController from "../controllers/MyUserController"

const router = express.Router()

router.post("/", (req: Request, res: Response) => {
    MyUserController.createCurrentUser(req, res)
})

export default router;