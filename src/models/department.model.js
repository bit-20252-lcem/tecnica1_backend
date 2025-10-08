import { model, Schema } from "mongoose";


const deptSchema = new Schema ({
    name: {type: String, required:true, unique:true},
    code:{type: Number, required: true ,unique: true}
})

const Department = new model ('Department', deptSchema);

export default Department;