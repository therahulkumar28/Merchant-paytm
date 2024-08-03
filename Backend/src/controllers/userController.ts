import express , {Request , Response} from 'express'
import {prismaClient} from 'prisma'


export const userSignin =  (req : Request , res:Response ) => {
    const {username , email , password } = req.body ;
  
}

export const userSignup =  (req : Request , res:Response ) => {
    const {email , password } = req.body ;

}