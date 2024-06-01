import express from 'express';
import Zemlja from '../models/zemljeUcesnice';

export class ZemljeController{
    ucesnice = (req:express.Request, res:express.Response)=>{
        Zemlja.find({},(err,zemlja)=>{
            if(err) console.log(err);
            else res.json(zemlja);
        })
    }
}