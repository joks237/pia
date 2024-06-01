import express from 'express';
import Sportista from '../models/sportisti';

import Raspored from '../models/raspored';
import Takmicenja from '../models/takmicenje';
import Takmicar from '../models/takmicar';

export class RasporedController{




    randomAlg = (req: express.Request, res: express.Response) => {
        let naziv = req.body.naziv;
        let idT = req.body.idT;
        let takmicari = req.body.takmicari;
        let sport = req.body.sport;
        let disciplina = req.body.disciplina;
        let pol = req.body.pol;
        let lokacija = req.body.lokacija;

        let newRaspored = new Raspored({'naziv' : naziv, 'idT' : idT, 'takmicari' : takmicari, 'sport' : sport, 'disciplina' : disciplina,
    'pol' : pol, 'lokacija' : lokacija , 'datum' : null, 'vreme_pocetka' : null, 'formiran' : 0});
        newRaspored.save();
        res.json({'message' : 'ok'});

    }

    unesiVreme =(req: express.Request, res: express.Response )=>{
        let idT = req.body.idT;
        let lokacija = req.body.lokacija;
        let vreme_pocetka = req.body.vreme_pocetka;
        let datum = req.body.datum;
        let naziv = req.body.naziv;

        Raspored.findOne( { $and : [{'lokacija' : lokacija, 'vreme_pocetka' : vreme_pocetka}]}, (err,data)=>{
            if(err) console.log(err);
            else {
                if(data) {

                    res.json({'message' : 'Vec postoji takmicenje u to vreme na toj lokaciji'});}
                else {
                    Raspored.updateOne({ $and :[{'idT' : idT, 'naziv' : naziv}]},{$set :{'vreme_pocetka' : vreme_pocetka, 'datum' : datum}}, (err)=>{
                        if(err) console.log(err);
                        else res.json({'message' : 'Uspesno ste dodali vreme pocetka'});
                    })
                }
            }
        })
    }

    sviRasporedi = (req: express.Request, res: express.Response )=>{
        let idT = req.body.idT;
        let naziv = req.body.naziv;

        Raspored.findOne({'idT' : idT, 'naziv' : naziv},(err,data)=>{
            if(err) console.log(err)
            else res.json(data);
        })
    }
        rasporediId = (req: express.Request, res: express.Response )=>{
            let idT = req.body.idT;
      
    
            Raspored.find({'idT' : idT},(err,data)=>{
                if(err) console.log(err)
                else res.json(data);
            })
    
        }

        dodajNoviRaspored = (req: express.Request, res:express.Response) =>{
            let idT = req.body.idT;
            let takmicari = req.body.takmicari;
            let naziv = req.body.naziv;
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            let lokacija = req.body.lokacija;
            let formiran = 0;
 
            


            let newRaspored = new Raspored({'idT' : idT, 'takmicari' : takmicari, 'naziv' : naziv, 'sport' : sport, 'disciplina' : disciplina, 
        'pol': pol, 'lokacija' : lokacija, 'formiran' : formiran, 'datum' : null, 'vreme_pocetka' : null});

        newRaspored.save().then(
            ()=>{
                res.json({'message' : 'ok'});
            }
        ).catch((err)=>{
            res.json(err)
        });
}


 sviTakmicari = (req: express.Request, res:express.Response) =>{
            Takmicar.find((err,data) => {
                if(err) console.log(err)
                else res.json(data)
            })
        }


}