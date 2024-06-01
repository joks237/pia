import express from 'express';
import Medalja from '../models/medalje';

export class MedaljeController{
    
    sveMedalje = (req: express.Request, res: express.Response) =>{
        Medalja.find((err,data)=>{
            if(err) console.log(err)
            else res.json(data)
        })
    }

    dodajMedalju = (req: express.Request, res: express.Response) =>{
        let zemlja = req.body.zemlja;
        let mesto = req.body.mesto;
        if(mesto == 1) {
            Medalja.updateOne({'naziv': zemlja} , {$inc:{'brojZlatnih' : 1 , 'ukupanBroj' : 1}}, (err)=>{
                if(err) console.log(err);
                else res.json({'message' : 'ok'});
            })
        } else if (mesto == 2) {
            Medalja.updateOne({'naziv': zemlja} , {$inc:{'brojSrebrnih' : 1, 'ukupanBroj' : 1}}, (err)=>{
                if(err) console.log(err);
                else res.json({'message' : 'ok'});
            }) 
        } else {
            Medalja.updateOne({'naziv': zemlja} , {$inc:{'brojBronzanih' : 1, 'ukupanBroj' : 1}}, (err)=>{
                if(err) console.log(err);
                else res.json({'message' : 'ok'});
            })
        }
        
        
    }
}