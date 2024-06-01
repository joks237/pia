import express from 'express';
import RezVelikeTrke from '../models/rez_velike_trke';
import RezMaleTrkePlivanje from '../models/rezMaleTrkePlivanje';
import RezSkokBacanje from '../models/rezSkokBacanje';
import RezVeceTrke from '../models/rezVeceTrke';
import RezStreljastvo from '../models/rezStreljastvo';
import RezTenis from '../models/rezTenis';


export class RezultatiController{
    unosBacanjeSkokovi = (req: express.Request, res: express.Response) =>{
        let idT = req.body.idT;
        let nazivRasporeda = req.body.nazivRasporeda;
        let idS = req.body.idS;
        let prvi = req.body.prvi;
        let drugi = req.body.drugi;
        let treci = req.body.treci;

        let newRezultatSkokBacanje = new RezSkokBacanje({'idT' : idT , 'nazivRasporeda' : nazivRasporeda, 'idS' : idS, 'prvi' : prvi, 'drugi' : drugi, 'treci' : treci});
        newRezultatSkokBacanje.save().then(
                ()=>{
                    res.json({'message' : 'ok'});
                }
            ).catch((err)=>{
                res.json(err)
            });
        
    }




    prvaTri = (req : express.Request, res: express.Response)=>{
        let idT = req.body.idT;
 
        RezSkokBacanje.find({'idT' : idT} , (err,data)=>{
            if(err) console.log(err)
            else res.json(data);
        });
    }

    unosMaleTrkePlivanje = (req:express.Request, res: express.Response)=>{
        let idT = req.body.idT;
        let nazivRasporeda = req.body.nazivRasporeda;
        let idS = req.body.idS;
        let rezultat = req.body.rezultat;

        let newMaleTrkePlivanje = new RezMaleTrkePlivanje({'idT' : idT, 'nazivRasporeda' : nazivRasporeda, 'idS' : idS, 'rezultat' : rezultat});
        newMaleTrkePlivanje.save().then(
            ()=>{
                res.json({'message' : 'ok'});
            }
        ).catch((err)=>{
            res.json(err)
        });
    }

    sviRezMaleTrke = (req: express.Request, res: express.Response)=>{
        let idT = req.body.idT;
        RezMaleTrkePlivanje.find({'idT' : idT},(err,data)=>{
            if(err) console.log(err);
            else res.json(data);
        })
    }

    unosVelikeTrke = (req: express.Request, res: express.Response)=>{
        let idT = req.body.idT;
        let nazivRasporeda = req.body.nazivRasporeda;
        let idS = req.body.idS;
        let rezultat = req.body.rezultat;

        let newVelikeTrke = new RezVelikeTrke({'idT' : idT, 'nazivRasporeda' : nazivRasporeda, 'idS' : idS, 'rezultat' : rezultat});
        newVelikeTrke.save().then(
            ()=>{
                res.json({'message' : 'ok'});
            }
        ).catch((err)=>{
            res.json(err)
        });
    }

    sviRezVelikeTrke = (req: express.Request, res: express.Response)=>{
        let idT = req.body.idT;

       RezVelikeTrke.find({'idT' : idT}, (err, data)=>{
           if(err) console.log(err)
           else res.json(data);
       })
    }

    sviRezVeceTrke = (req: express.Request, res: express.Response)=>{
        let idT = req.body.idT;

        RezVeceTrke.find({'idT' : idT}, (err,data)=>{
            if(err) console.log(err);
            else res.json(data);
        })
    }

    unosVeceTrke = (req: express.Request, res: express.Response)=>{
        let idT = req.body.idT;
        let nazivRasporeda = req.body.nazivRasporeda;
        let idS = req.body.idS;
        let rezultat = req.body.rezultat;

        let newVeceTrke = new RezVeceTrke({'idT' : idT, 'nazivRasporeda' : nazivRasporeda, 'idS' : idS, 'rezultat' : rezultat});
        newVeceTrke.save().then(
            ()=>{
                res.json({'message' : 'ok'});
            }
        ).catch((err)=>{
            res.json(err)
        });

    }

    sviRezStreljastvo = (req: express.Request, res: express.Response)=>{
        let idT = req.body.idT;

        RezStreljastvo.find({'idT' : idT}, (err,data)=>{
            if(err) console.log(err)
            else res.json(data);
        })
    }
    
    unosStreljastvo = (req: express.Request, res: express.Response)=>{
        let idT = req.body.idT;
        let nazivRasporeda = req.body.nazivRasporeda;
        let idS = req.body.idS;
        let s1 = req.body.s1;
        let s2 = req.body.s2;
        let s3 = req.body.s3;
        let s4 = req.body.s4;
        let s5 = req.body.s5;
        let s6 = req.body.s6;

        let newStreljastvo = new RezStreljastvo({'idT':idT, 'nazivRasporeda' : nazivRasporeda, 'idS' : idS ,'s1' : s1, 's2':s2,
    's3' : s3, 's4': s4, 's5' : s5, 's6' : s6});
    newStreljastvo.save().then(
        ()=>{
            res.json({'message' : 'ok'});
        }
    ).catch((err)=>{
        res.json(err)
    });
        
    }

    unosTenis = (req: express.Request, res: express.Response) =>{
        let idT = req.body.idT;
        let nazivRasporeda = req.body.nazivRasporeda;
        let idS = req.body.idS;
        let rezultat = req.body.rezultat;
        let newTenis = new RezTenis({'idT' : idT, 'nazivRasporeda' : nazivRasporeda, 'idS' : idS, 'rezultat' : rezultat});
        newTenis.save().then(
            ()=>{
                res.json({'message' : 'ok'});
            }
        ).catch((err)=>{
            res.json(err)
        });

    }

    sviRezTenis = (req: express.Request, res: express.Response) =>{
        let idT  = req.body.idT;
       

        RezTenis.find({'idT' : idT},(err,data)=>{
            if(err) console.log(err)
            else res.json(data)
        })
    }

    
}