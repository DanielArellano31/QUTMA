import { Schema } from "mongoose";

export interface IAnswer{
    QuestionnaireId:Schema.Types.ObjectId | string;
    QuestionId: Schema.Types.ObjectId | string;
    answer:string
  }
export interface IOption{
    title:string;
    questionId:Schema.Types.ObjectId | String;
}

 export interface IQuestionnaires{
    title:String;
    description:String;
    IdUser:Schema.Types.ObjectId | String
}

export interface IQuestion{
    title: string;
    type: "radio" | "checkbox" | "select" | "text",
    isMandatory:boolean,
    questionnaireId: Schema.Types.ObjectId | string;

}

export interface IUser{
    name:string;
    email:string;
    lastNames:string;
    password:string;
    rol:"administrator" | "client";

}




