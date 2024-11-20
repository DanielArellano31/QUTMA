
import { IUser } from "../GlobalTypes";


declare namespace Express{
    export interface Request{
        user?:IUser
    }
}