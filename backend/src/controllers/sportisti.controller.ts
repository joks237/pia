import express from 'express';
import discipline from '../models/discipline';
import Disciplina from '../models/discipline';
import Sportista from '../models/sportisti';

export class SportistiController{

    sviSportisti = (req: express.Request, res: express.Response) =>{
        Sportista.find((err, data)=>{
            if(err) console.log(err);
            else res.json(data);
        })
    }

    sportistiIme = (req: express.Request, res: express.Response) =>{
        let ime = req.body.ime;

        Sportista.find({'ime_i_prezime' : ime},(err, data)=>{
            if(err) console.log(err);
            else res.json(data);
        })
    }

    sportistiZemlja = (req: express.Request, res: express.Response) =>{
        let zemlja = req.body.zemlja;

        Sportista.find({'zemlja' : zemlja},(err, data)=>{
            if(err) console.log(err);
            else res.json(data);
        })
    }

    sportistiZemljaISport = (req: express.Request, res: express.Response) =>{
        let zemlja = req.body.zemlja;
        let sport = req.body.sport;

        Sportista.find({'zemlja' : zemlja,  'sport' : sport},(err, data)=>{
            if(err) console.log(err);
            else res.json(data);
        })
    }

    sportistiSport = (req: express.Request, res: express.Response) =>{
        let sport = req.body.sport;

        Sportista.find({'sport' : sport},(err, data)=>{
            if(err) console.log(err);
            else res.json(data);
        })
    }

    sportistiSportDisciplina = (req: express.Request, res: express.Response) =>{
        let sport = req.body.sport;
        let disciplina = req.body.disciplina;
        let pol = req.body.pol;

        Sportista.find({'sport' : sport , 'disciplina' : disciplina, 'pol' : pol},(err, data)=>{
            if(err) console.log(err);
            else res.json(data);
        })
    }

    sportDisciplina = (req: express.Request, res: express.Response)=>{
        let sport = req.body.sport;

        Disciplina.find({'sport' : sport}, (err,data)=>{
            if(err) console.log(err);
            else res.json(data);
        })
    }

    dodajSportistu = (req: express.Request, res: express.Response)=>{

        let ime_i_prezime = req.body.ime_i_prezime;
        let sport = req.body.sport;
        let disciplina = req.body.disciplina;
        let pol = req.body.pol;
        let zemlja = req.body.zemlja;
        let osvojio = 0;


        Sportista.find().sort({'idS' : -1}).limit(1).lean().exec(
            (err, doc)=>{
                if(err) console.log(err);
                else {
                    let idS = doc[0].idS + 1;
            let newSportista = new Sportista({'idS' : idS,'ime_i_prezime' : ime_i_prezime, 'zemlja' : zemlja, 'sport' : sport, 'disciplina' : disciplina, 'pol' : pol, 'osvojio' : osvojio});
        newSportista.save().then(
            ()=>{
                res.json({'message' : 'ok'});
            }
        ).catch((err)=>{
            res.json(err)
        });
                }});
    }

    sportistaJedanSport = (req: express.Request, res: express.Response)=>{
        let ime_i_prezime = req.body.ime_i_prezime;

        Sportista.findOne({'ime_i_prezime' : ime_i_prezime}, (err,data)=>{
            if(err) console.log(err);
            else res.json(data);
        })
    }

    sportistiDisciplina =  (req: express.Request, res: express.Response)=>{
        let disciplina =req.body.disciplina;
        let pol = req.body.pol;

        Sportista.find( { $and : [{'disciplina' : disciplina, 'pol' : pol}]}, (err, data)=>{
            if(err) console.log(err)
            else res.json(data);
        })
    }

    
}