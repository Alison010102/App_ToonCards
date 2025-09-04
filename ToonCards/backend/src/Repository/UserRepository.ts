import { IUser } from "../Models/models";

let users: IUser[] = []

export class UserRepository {
    public list = () => {
        return users;
    }
    public create = (user: IUser) => {
        const exists = users.find(usuario => usuario.email == user.email)
        if (exists) {
            return "Usuário já tem cadastro,tente por outro email"
        }
        users.push(user)
    }
    public findByEmail = (email: string): IUser | undefined => {
        return users.find(user => user.email == email)
    }
    public delete = (email: string): string => {
        const index = users.findIndex(user => user.email === email);

        if (index !== -1) {
            users.splice(index, 1);
            return "Usuário deletado com sucesso";
        }

        return "Usuário não encontrado";
    }
}