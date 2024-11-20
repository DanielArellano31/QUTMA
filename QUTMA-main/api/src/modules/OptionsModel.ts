import { Schema, model } from "mongoose";
import { IOption } from "../GlobalTypes";



const OptionSchema = new Schema<IOption>({
    questionId:{
        type:Schema.Types.ObjectId,
        ref:"question",
        required:true
    },
    title:{
        type:String,
        required:true
    }
})

export const OptionsModel = model("options", OptionSchema);