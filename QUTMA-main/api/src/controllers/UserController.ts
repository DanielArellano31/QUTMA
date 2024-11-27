import { Request, Response } from "express";
import { UserModel } from "../modules/UsersModel";
import jwt from "jsonwebtoken";

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

      const user = await UserModel.create({
        name,
        email,
        lastNames,
        password,
        rol
     })

     const token = jwt.sign(JSON.stringify(user),"calladito")


     return res.status(200).json({msg:"Usuario registrado con exito", token})
   } catch (error) {
    console.log(error)
    return res.status(500).json({msg:"Hubo un error al crear el usuario"})
   }


};

export const singin = async(req:Request, res:Response):Promise<any>=>{
try {


   
   const email = req.body.email
   const password = req.body.password
   
   
   if(!email || !password ){
      return res.status(400).json({
         msg:"Faltan datos para iniciar sesion"
      })
   }
   
   
   
   const user = await UserModel.findOne({ email, password})
   if (!user){
      return res.status(404).json({
         msg:"El usuario no existe"
     })
   }
   const token = jwt.sign(JSON.stringify(user),"si existe el usuario")

   return res.status(200).json({
      msg:"Iniciaste sesion en tu cuenta", token, user
  })
} 

catch (error) {
   console.error("Error en el endpoint signin:", error);

   return res.status(500).json({msg:"El usuario no existe"})
   
}
}