import { getAllBeepers} from '../dal/dataManipu';
import { Request, Response } from 'express';

export const getBeepersList = async (req:Request, res:Response) => {
    try{
        const beepers = await getAllBeepers();
        if(beepers){
            const beeperList = beepers.map(beeper=>({id: beeper.id, name: beeper.name}));
            return res.json(beeperList);
        } else{
            return res.status(404).json({message: "No beepers found"});
        }
    }catch(err){
        console.error(err);
        return res.status(500).json({message: "Error retrieving beepers list"});
    }
 
}