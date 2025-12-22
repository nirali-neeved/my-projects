import {z} from "zod";

export const schema=z.object({
    firstname:z.string().min(2,"Enter valid name").max(10),
    lastname:z.string().min(2,"Enter valid name").max(10),
    email:z.string().email("Enter valid email"),
    dob:z.string().min(1,"Enter dob"),
    password:z.string()
        .min(8,"Min length 8 character")
        .regex(/[A-Z]/,"1 capital letter require")
        .regex(/[0-9]/,"1 number require")
        .regex(/[\W_]/,"1 special character"),
    confirmpassword:z.string(),
    address:z.string().min(10,"Enter proper address"),
    gender:z.string(['male','female'],"Select gender"),
    role:z.string().min(1,"Select role"),
    terms:z.literal(true,"Select checkbox")
}).refine((data)=>data.password===data.confirmpassword,{
    message:"Enter same password",
    path:["confirmpassword"],
})