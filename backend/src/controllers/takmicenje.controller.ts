import express from 'express';
import Takmicar from '../models/takmicar';

import Takmicenje from '../models/takmicenje';

export class TakmicenjeController{
    dodajTakmicenje = (req: express.Request, res: express.Response)=>{
        let brojDelegata : number;
        let sport = req.body.sport;
        let disciplina = req.body.disciplina;
        let vrsta = req.body.vrsta;
        let pol = req.body.pol;

        let datum_poc = req.body.datum_poc;
        let datum_kraj = req.body.datum_kraj;
        let lokacija = req.body.lokacija;
  
        let delegat = req.body.delegat;
        

        Takmicenje.find({'delegat' : delegat} , (err, data)=>{
            if(err) console.log(err);
            else brojDelegata = data.length;
        })

        Takmicenje.find().sort({'idT' : -1}).limit(1).lean().exec(
            (err, doc)=>{
                if(err) console.log(err);
                else {
                    if(brojDelegata < 3) {
                    let idT = doc[0].idT + 1;
                    let newTak = new Takmicenje({
                        'idT' : idT, 'sport' : sport, 'disciplina' : disciplina,'vrsta' : vrsta, 'pol': pol ,
                        'datum_pocetka' : datum_poc, 'datum_kraja' : datum_kraj, 
                        'lokacija' : lokacija, 'delegat' : delegat, 'formiranRaspored' : 0});
                        newTak.save();
                        res.json({'message' : 'ok'});
                } else {
                    res.json({'message' : 'izaberite drugog delegata'});
                }
            }
            })

    }

    svaTakmicenja = (req:express.Request, res: express.Response) =>{
        Takmicenje.find((err,data)=>{
            if(err) console.log(err);
            else res.json(data);
        })
    }

    vecFormirano = (req:express.Request, res: express.Response) =>{
        let sport = req.body.sport;
        let disciplina = req.body.disciplina;

        Takmicenje.findOne({'sport' : sport, 'disciplina' : disciplina}, (err,data)=>{
            if(err)console.log(err);
         else {
             if (data) res.json({'message' : 'Takmicenje je formirano'});
             else res.json({'message' : 'ok'});
         }
        })
    }

    dodajSportistu = (req:express.Request, res: express.Response) =>{
    
        let idS = req.body.idS;

        let disciplina = req.body.disciplina;
        let ime_i_prezime =req.body.ime_i_prezime;
        let pol= req.body.pol;
     

        Takmicenje.findOne({'disciplina' : disciplina} , (err, data) => {
            if (err) console.log(err);
            else {
                if(data)  {
                        Takmicenje.updateOne( { $and : [{'disciplina' : disciplina, 'pol' : pol}]}, {$push : {
                            'takmicari' : {
                                'idS' : idS,
                                'ime_i_prezime' : ime_i_prezime
                            }
                        }} , (err) =>{
                            if(err) console.log("GRESKA2"); 
                         
                        })
                    } 
                } 
            
        })

        let newTakmicar = new Takmicar({'idS' : idS, 'ime_i_prezime' : ime_i_prezime});
        newTakmicar.save();

        res.json({'message' : 'ok'});
       
    }

    delegatTakmicenje = (req: express.Request, res: express.Response)=>{
        let delegat = req.body.delegat;

        Takmicenje.find({'delegat' : delegat},(err,data)=>{
            if(err) console.log(err);
            else res.json(data);
        } )
    }

    takmicenjeId =  (req: express.Request, res: express.Response)=>{
        let idT = req.body.idT;
        Takmicenje.findOne({'idT' : idT},(err,data)=>{
            if(err) console.log(err);
            else res.json(data);
        } )

        
    }

    sviTakmicari =  (req: express.Request, res: express.Response)=>{
        Takmicar.find((err,data) =>{
            if(err) console.log(err);
            else res.json(data);
        })
    }

    formiranRaspored =  (req: express.Request, res: express.Response)=>{
        let idT = req.body.idT;

        Takmicenje.updateOne({'idT' : idT}, {$set: {'formiranRaspored' : 1}},(err) =>{
            if(err) console.log(err);
            else res.json({'message' : 'ok'})
       
        })
    }
 
} 