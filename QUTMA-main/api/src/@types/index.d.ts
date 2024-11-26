 interface IUser{
    name:string;
    _id:string;
    email:string;
    lastName:string;
    password:string;
    rol:"administrator" | "client";

}

declare namespace Express{
    export interface Request{
        user?:IUser
    }
}