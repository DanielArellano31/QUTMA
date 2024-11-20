import { Schema,model } from "mongoose";
import { IQuestionnaires } from "../GlobalTypes";

const QuestionnaireSchema = new Schema<IQuestionnaires>({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    IdUser:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
    
})

export const QuestionnaireModel = model("questionnaire", QuestionnaireSchema);