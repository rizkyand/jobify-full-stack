import mongoose from "mongoose";
import {USER_ROLE} from "../utils/Constant.js";


const UserSchema = new mongoose.Schema({
        name : String,
        email : String,
        password : String,
        lastName : {
            type : String,
            default: 'lastname'
        },
        location : {
            type : String,
            default : 'my location'
        },
        userRole : {
            type : String,
            enum : Object.values(USER_ROLE),
            default : USER_ROLE.USER
        }
    }
);

UserSchema.methods.toJSON = function (){
    let obj = this.toObject();
    delete obj.password;
    return obj;
}

export default mongoose.model('User', UserSchema);