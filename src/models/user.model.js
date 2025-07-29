import { model,Schema } from "mongoose";

const UserSchema  = new Schema ({
    name: {type: String, required: true},
    email:{type:String, required: true},
    password:{ type: String, required: true}
});

const user = new model('user',UserSchema);

export default user