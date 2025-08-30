import {IUser} from "../backend/src/Models/models"

let User: IUser [] = []

export class UserRepository{
    public list = ()=>{
        return User;
    }
    public create = (users:IUser)=>{
        const exists = User.find(u => u.id == users.id)
        if(exists){
            return "Usuário já tem cadastro,tente por outro email"
        }
    }
}