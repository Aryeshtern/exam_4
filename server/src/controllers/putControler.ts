import { Request, Response } from "express";
import {isValidLocation} from "../services/validateLocation"
import {isValidStatus} from "../services/validateStatus";

import {updateStatusOfBeeper, updateBeeperLocation} from "../dal/dataManipu"

export const updateBeeper = async (req: Request, res: Response): Promise<Response | any> => {
    try{
        const beeperId: Number = parseInt(req.params.id);
        const status: string = req.body.status;
        if(!beeperId ||!status){
            return res.status(400).json({message: "Missing beeperId or status"});
        }
        if(!isValidStatus){
            return res.status(400).json({message: "Invalid status"});
        }
        if(status === "shipped"){
            if(!isValidLocation){
                return res.status(400).json({message: "Invalid location for shipping"});
            }
            let updateLocation = await updateBeeperLocation(beeperId, req.body.let, req.body.log);
            if(!updateLocation){
                return res.status(500).json({message: "Error updating beeper location"});
            }
        }
        await updateStatusOfBeeper(beeperId, status);
        return res.status(200).json({message: "Status updated successfully"});

    }catch(err){
        console.error(err);
        return res.status(500).json({message: "Error updating status"});
    }
}