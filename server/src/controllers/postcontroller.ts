import { createBeeper} from "../dal/dataManipu";
import { Beeper } from "../Models/Beeper";
import { Request, Response } from 'express';
import { BeeperDetailes} from "../Dto/interfaces"

export const postBeeper = async (req: Request,   res:Response): Promise<Response | any> => {
    try{
        let beeperDetailes:BeeperDetailes = req.body
        const beeper: Beeper = {
            id: 0,  
            name: beeperDetailes.name,
            status: "manufactured",
            create_at: new Date(),
            detonated_at: undefined,
            latitude: 0,
            longitude: 0,
        };
        if(!beeper.name){
            return res.status(400).json({message: "Missing required fields"});
        }
        const createdBeeper = await createBeeper(beeper);
        if(!createdBeeper){
            console.log("Beeper creation failed");
            return res.status(500).json({message: "Error creating beeper"});
        }
        return res.status(201).json(createdBeeper);
    }catch(err){
        console.error(err);
        return res.status(500).json({message: "Error creating beeper"});
    }
}