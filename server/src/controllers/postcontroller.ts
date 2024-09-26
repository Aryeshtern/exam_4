import { createBeeper} from "../dal/dataManipu";
import { Beeper } from "../Models/Beeper";
import {Request, Response} from "express"

export const postBeeper = async (req: Request, res: Response): Promise<Response> => {
    try{
        const beeper: Beeper = req.body;
        const createdBeeper = await createBeeper(beeper);
        res.status(201).json(createdBeeper);
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Error creating beeper"});
    }

}