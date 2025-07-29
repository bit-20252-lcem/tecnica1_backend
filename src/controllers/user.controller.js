import UserModel from  "../models/user.model.js"
import { generateToken } from "../utiles/jwt-generate.js"
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.status(200).json(users)
    } catch (error) {
        console.error (eror)
        res.status(500).json(error)
    }
}

export const createUser = async (req,res) => {
    try {
    const {name,email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            detail:"Los campos email y contraseña son requeridos"
        });
    }
    const userInDB = await UserModel.findOne({email: email});
    if(userInDB){
        return res.status(400).json({
            detail:`El correo ${email} ya se encuentra en uso`
        });
    }
    const Newuser = new UserModel({
        name: name,
        email: email,
        password: password
    });
    //     const user = new User({
    //     email, password
    // });
    await Newuser.save();

    return res.status(201).json({
        detail: `La cuenta con ${email} se creó satisfactoriamente`
    });
    } catch (error) {
        res.status(500).json({
            detail:"Ocurrió un error en esta solicitud"
        })
    }
}

export const loginUser = async (req,res) => {
    try {
        const { usernameOrEmail, password} = req.body;
        if(!usernameOrEmail || !password){
            return res.status(400).json({
                detail:"Los campos usuario/email y contraseña son requeridos"
            });
        }
                const userInDB = await UserModel.findOne({
            $or: [
                { email: usernameOrEmail },
                { name: usernameOrEmail } // Asume que 'name' es el campo de nombre de usuario
            ]
            });
        if (!userInDB) {
            return res.status(404).json({ // Usa 'return'
                detail: `El usuario o correo "${usernameOrEmail}" no se encuentra registrado.`
            });
        }
        const isCorrectPassword = userInDB.password === password;
        if(!isCorrectPassword){
            return res.status(400).json({detail: `Contraseña incorrecta`});
        }
        const userData={usernameOrEmail}
         return res.status(200).json({detail: "Usuario logeado correctamente",
            jwt: generateToken(userData)
        });

    } catch (error) {
        return res.status(500).json({
            detail:"Ocurrió un error en esta solicitud"
        })
    }
}