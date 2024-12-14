import mongoose  from "mongoose";
const userSchema = mongoose.Schema({
    name: {
        type:String,
        required: true ,
    },
    email: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        match:[
            /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w{2,63})\.([a-z]{2,7}(?:\.[a-z]{2})?)$/i,
      "Please add a valid email address",
        ],
    },
    password: {
        type:String,
        required:true,
        minlength:6,
        maxlength : 20
    },
    photo:{
        type : String,
        required : true,
        default:"https://avatar.iran.liara.run/public"
    },
    phone:{
        type:String,
        default:"+880"
    },
    country:{
        type:String,
        required:true
    },
    businessname:{
        type:String 

    },
    bio: {
        type: String,
        maxlength: [500, "bio must be up to 500 characters long"],
        default: "bio"
      }
    });
     export  const User = mongoose.model("User",userSchema) ;
    