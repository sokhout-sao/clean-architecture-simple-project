import { Optional } from "../../shared/domain/Optional";
import User from "./User";
import UserId from "./UserId";

export default interface UserRepository {
    getByLoginAndPassword(authentication: {login: string, password: string}): Optional<User>;
}