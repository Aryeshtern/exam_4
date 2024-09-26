import { getAllBeepers, getBeeperById} from '../dal/dataManipu';
import { Request, Response } from 'express';
import { Beeper } from '../Models/Beeper';

export const getBeepersList = async (req:Request, res:Response):Promise<Response | any> => {
    try{
        const beepers = await getAllBeepers();
        if(beepers){
            const beeperList = beepers.map(beeper=>({id: beeper.id, name: beeper.name, status: beeper.status}));
            return res.json(beeperList);
        } else{
            return res.status(404).json({message: "No beepers found"});
        }
    }catch(err){
        console.error(err);
        return res.status(500).json({message: "Error retrieving beepers list"});
    }
 
}

export const getBeeper = async (req:Request, res:Response):Promise<Response | any> => {
    const beeperId = parseInt(req.params.id);
    try{
        const beeper = await getBeeperById(beeperId);
        if(beeper){
            return res.json(beeper);
        } else{
            return res.status(404).json({message: "Beeper not found"});
        }
    }catch(err){
        console.error(err);
        return res.status(500).json({message: "Error retrieving beeper"});
    }
}

export const getBeeperByStatus = async (req:Request, res:Response):Promise<Response | any> => {
    const status = req.params.status;
    try{
        const beepers: Beeper[]  | null = await getAllBeepers();
        if(beepers){
            const filteredBeepers = beepers.filter(beeper => beeper.status === status);
            const beeperList = filteredBeepers.map(beeper=>({id: beeper.id, name: beeper.name}));
            return res.json(beeperList);
        } else{
            return res.status(404).json({message: "No beepers found"});
        }
    }catch(err){
        console.error(err);
        return res.status(500).json({message: "Error retrieving beepers by status"});
    }
}

