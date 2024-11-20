import { Request, Response } from "express";
import { UserModel } from "../modules/UsersModel";


 export const registerUsers= async(req:Request,res:Response):Promise<any>=>{
   try {
       if(req.user?.rol ==="client"){
           return res.status(400).json({msg:"los admin no pueden crear clientes"})
        }
        
        //validar datos exiten
        const name = req.body.name
        const email = req.body.email
        const lastNames = req.body.lastNames
        const password = req.body.password
        const rol = req.body.rol
        //admin no pueden crear users
        if(req.user?.rol ==="administrator" && rol ==="client"){
        return res.status(400).json({msg:"los admin no pueden crear clientes"})
    }
     
     
     if(!name || !rol || !email || !lastNames || !password ){
        return res.status(400).json({
            msg:"Faltan datos para crear un usuario"
        })
     }
     //validad que el usuario sea admin si el usuario a crear es admin
     if (rol=== "administrator" && req.user?.rol !="administrator"){
        return res.status(400).json({
            msg:"No puedes crear un nuevo admin si no eres uno"
        })
     }

     await UserModel.create({
        name,
        lastNames,
        email,
        password,
        rol
     })
     return res.status(200).json({msg:"Usuario registrado con exito"})
   } catch (error) {
    console.log(error)
    return res.status(500).json({msg:"Hubo un error al crear el usuario"})
   }


}