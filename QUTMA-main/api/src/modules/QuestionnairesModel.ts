import { Schema,model } from "mongoose";

interface IQuestionnaires{
    title:String;
    description:String;
    IdUser:Schema.Types.ObjectId | String
}

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
        required:true
    }
    
})

export const QuestionnaireModel = model("questionnaire", QuestionnaireSchema);