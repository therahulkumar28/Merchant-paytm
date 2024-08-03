import express, {Request , Response} from 'express'

export const merchantSignin = (req : Request , res : Response) => {
    const {email , password } = req.body ;
}

export const merchantSignup = (req :Request , res : Response) => {
    const {username , email , password} = req.body ;
}

