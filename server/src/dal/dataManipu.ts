import {Beeper} from "../Models/Beeper"
import jsonfile from "jsonfile"
import changeStatus from "../services/updateStatus";

const dataPath = 'src/db/data.json';
export const createBeeper = async (newBeeper:Beeper) : Promise<Beeper | null>=>{
    try{
        let data = await jsonfile.readFile(dataPath);
        newBeeper.id = data[data.length - 1].id + 1;
        data.push(newBeeper);
        await jsonfile.writeFile(dataPath, data);
        return newBeeper;
    }catch{
        return null;
    }
}

export const getAllBeepers = async () : Promise<Beeper[] | null>=>{
    try{
        let data = await jsonfile.readFile(dataPath);
        return data;
    }catch{
        return null;
    }
}

export const getBeeperById = async (id:number) : Promise<Beeper | undefined>=>{
    try{
        let data:Beeper[] = await jsonfile.readFile(dataPath);
        return data.find(b=>b.id === id);
    }catch{
        return undefined;
    }
}

export const getByStatus = async (status:string) => {
    try{
        let data:Beeper[] = await jsonfile.readFile(dataPath);
        return data.filter(b=>b.status === status);
    }catch{
        return [];
    }
}


export const updateStatusOfBeeper = async (beeperId: Number, status:string) => {
    try{
        let data:Beeper[] = await jsonfile.readFile(dataPath);
        let beeperIndex = data.findIndex(b=>b.id === beeperId);
        if(beeperIndex !== -1){
            data[beeperIndex].status = changeStatus(status) || data[beeperIndex].status;
            await jsonfile.writeFile(dataPath, data);
            return true;
        }
        return null;
    }catch{
        return null
    }
}

export const updateBeeperLocation = async (beeperId: Number, latitude: Number, longitude: Number) => {
    try{
        let data:Beeper[] = await jsonfile.readFile(dataPath);
        let beeperIndex = data.findIndex(b=>b.id === beeperId);
        if(beeperIndex!== -1){
            data[beeperIndex].latitude = latitude;
            data[beeperIndex].longitude = longitude;
            await jsonfile.writeFile(dataPath, data);
            return true;
        }
        return null;
    }catch{
        return null
    }
}

export const deleteBeeper = async (beeperId: Number) => {
    try{
        let data:Beeper[] = await jsonfile.readFile(dataPath);
        let beeperIndex = data.findIndex(b=>b.id === beeperId);
        if(beeperIndex!== -1){
            data.splice(beeperIndex, 1);
            await jsonfile.writeFile(dataPath, data);
            return true;
        }
        return null;
    }catch{
        return null
    }
}
