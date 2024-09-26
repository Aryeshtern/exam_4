import {Beeper} from "../Models/Beeper"
import jsonfile from "jsonfile"

const dataPath = 'src/db/data.json';
export const createBeeper = async (newBeeper:Beeper) : Promise<Beeper | null>=>{
    try{
        let data = await jsonfile.readFile(dataPath);
        console.log(data);
        if(data.beepers.length < 1){
            newBeeper.id = 1;
        }else{
            newBeeper.id = data.beepers[data.beepers.length - 1].id + 1;
        }
        data.beepers.push(newBeeper);
        await jsonfile.writeFile(dataPath, data);
        return newBeeper;
    }catch(err){
        console.error(err);
        return null;
    }
}

export const getAllBeepers = async () : Promise<Beeper[] | null>=>{
    try{
        let data = await jsonfile.readFile(dataPath);
        return data.beepers;
    }catch{
        return null;
    }
}

export const getBeeperById = async (id:number) : Promise<Beeper | undefined>=>{
    try{
        let data = await jsonfile.readFile(dataPath);
        let listData:Beeper[] = data.beepers
        return listData.find(b=>b.id === id);
    }catch{
        return undefined;
    }
}


export const updateStatusOfBeeper = async (beeperId: Number, status:string) => {
    try{
        let data = await jsonfile.readFile(dataPath);
        let listData:Beeper[] = data.beepers
        let beeperIndex = listData.findIndex(b=>b.id === beeperId);
        if(beeperIndex !== -1){
            listData[beeperIndex].status = status
            await jsonfile.writeFile(dataPath, data);
            if(status === 'shipped'){
                setTimeout(() => {
                    listData[beeperIndex].status = "detonated";
                    jsonfile.writeFile(dataPath, data);
                }, 10000);
            }
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
        return false;
    }catch{
        return false;
    }
}

export const deleteBeeper = async (beeperId: Number) => {
    try{
        let data = await jsonfile.readFile(dataPath);
        let beepers:Beeper[] = data.beepers;
        let beeperIndex = beepers.findIndex(b=>b.id === beeperId);
        if(beeperIndex!== -1){
            beepers.splice(beeperIndex, 1);
            await jsonfile.writeFile(dataPath, data);
            return true;
        }
        return null;
    }catch{
        return null
    }
}
