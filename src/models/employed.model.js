import {model,Schema} from "mongoose"

const employeeSchema = new Schema ({
    nombre: { type:String, required: true},
    apellido1: {type:String,required: true},
    apellido2: {type:String,required: true},
    dept_code: {type:Number, required:true},
    department: { type: Schema.Types.ObjectId, ref: 'Department' }
})

const Employed =new model ('Employee', employeeSchema)

export default Employed