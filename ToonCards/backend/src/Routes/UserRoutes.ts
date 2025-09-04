import express from "express";
import UserRepository from "../Repository";
import { IUser } from "../Models/models";

const router = express.Router()
const userRepo = new UserRepository();

router.get("/users", (req, res) => {
    const users = userRepo.list()
    res.json(users)
});
router.post("/users", (req, res) => {
    const user: IUser = req.body;
    const result = userRepo.create(user)

    if (typeof result === "string") {
        return res.status(400).json({ error: result })
    };
    return res.status(200).json(result)
});
router.get("/user/:email",(req,res)=>{
    const email = req.params.email;
    const user = userRepo.findByEmail(email);

    if(!user){
        return res.status(404).json({error:"Usuário não encontrado"})
    }
    res.json(user)
});
router.delete("/users/:email", (req, res) => {
  const email = req.params.email;
  const message = userRepo.delete(email);

  if (message === "Usuário não encontrado") {
    return res.status(404).json({ error: message });
  }

  res.json({ message });
});

export default router;

