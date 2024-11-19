import{Schema,model} from "mongoose";

interface IUser{
    name:string;
    email:string;
    lastname:string;
    password:string;
    rol:"administrator" | "client";

}

const UserSchema = new Schema<IUser>({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    rol:{
        type:String,
        enum:["administrator","client"],
        default:"client"
    }
});

export const UserModel = model("users", UserSchema);

