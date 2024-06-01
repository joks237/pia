import express from 'express';
import Disciplina from '../models/discipline';
import Sport from '../models/sportovi';

export class SportoviController{
    sviSportovi = (req: express.Request, res: express.Response) =>{
        Sport.find((err, data)=>{
            if(err) console.log(err);
            else res.json(data);
        })
    }

    sveDiscipline =  (req: express.Request, res: express.Response) =>{
        Disciplina.find((err, data)=>{
            if(err) console.log(err);
            else res.json(data);
        })
    }
}