
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI 

const conexionBD = async () => {
    try {
        if (!MONGODB_URI){
            throw new Error('No se encontró la variable de entorno MONGODB_URI');
        }
        await mongoose.connect(MONGODB_URI);
        console.log('conectado a BD correctamente')
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error.message)
    }
}

export default conexionBD;


