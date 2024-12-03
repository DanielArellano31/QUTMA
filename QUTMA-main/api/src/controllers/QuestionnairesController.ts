import { Request, Response } from "express";
import { QuestionModel } from "../modules/QuestionsModel";
import { QuestionnaireModel } from "../modules/QuestionnairesModel";
import { OptionsModel } from "../modules/OptionsModel";

export const createQuestionnaire = async (req: Request, res: Response): Promise<any> => {
    try {
        const title = req.body.title;
        const description = req.body.description;

        if (!title) {
            return res.status(400).json({ msg: "No se puede crear un cuestionario sin un titulo" })
        }
        const IdUser = req.user?._id;
        if (!IdUser) {
            return res.status(400).json({ "No se encontro el usuario"});

        };

        const questionnaire = await QuestionModel.create({
            title,
            description,
            IdUser
        });

        return res.status(201).json({msg:"Cuestionario creado con exito", questionnaire})
    } catch (error) {
        return res.status(500).json({msg:"Error al crear cuestionario"})

    }
}

export const addQuestion= async(req: Request, res: Response): Promise<any>=>{
    const title = req.body.title;
    const type = req.body.type;

    if (!title || !type) {
        return res.status(400).json({ msg: "Faltan datos para agregar la pregunta" });
    }

    try {

        const question = await QuestionModel.create({

            title,
            type,
        });


        return res.status(201).json({ msg: "Pregunta agregada correctamente", title });
    } catch (error) {
        return res.status(500).json({ msg: "Error al agregar la pregunta", error });
    }}


    export const addOption = async (req: Request, res: Response): Promise<any> => {
        const { questionId, optionText } = req.body;
    
        if (!questionId || !optionText) {
            return res.status(400).json({ msg: "Faltan datos para agregar la opción" });
        }
    
        try {
            const option = await OptionsModel.create({
                questionId,
                optionText
            });
    
          
           
            return res.status(201).json({ msg: "Opción agregada con éxito", option });
        } catch (error) {
            return res.status(500).json({ msg: "Error al agregar la opción", error });
        }
    };
