import { deleteBeeper} from '../dal/dataManipu';
import { Request, Response } from 'express';

export const deleteBeeperController = async (req:Request, res:Response): Promise<Response | any> => {
    const beeperId:number = parseInt(req.params.id);
    console.log(req.params)
    console.log(beeperId);
    try{
        await deleteBeeper(beeperId);
        console.log(`deleted ${beeperId}`);
        return res.status(204).send();
    }catch(err){
        console.error(err);
        return res.status(500).json({message: "Error deleting beeper"});
    }
}
