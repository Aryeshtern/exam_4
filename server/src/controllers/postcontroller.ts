import { createBeeper} from "../dal/dataManipu";
import { Beeper } from "../Models/Beeper";
import { Request, Response } from 'express';

export const postBeeper = async (req: Request,   res:Response) => {
    try{
        const beeper: Beeper = {
            name: "beeper",
            status: "asdgggsadg",
            create_at: new Date(),
            detonated_at: undefined,
            latitude: undefined,
            longitude: undefined,
        };
        if(!beeper.name){
            return res.status(400).json({message: "Missing required fields"});
        }
        const createdBeeper = await createBeeper(beeper);
        if(!createdBeeper){
            return res.status(500).json({message: "Error creating beeper"});
        }
        return res.status(201).json(createdBeeper);
    }catch(err){
        console.error(err);
        return res.status(500).json({message: "Error creating beeper"});
    }
}

export const signIn = async (req:Request, res:Response) :Promise<Response>=> {
    const userInfo = req.body;
    return res.json({userId:9});
}