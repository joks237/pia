import express from 'express';
import Disciplina from '../models/discipline';
import Sport from '../models/sportovi';
import User from '../models/user';
import Zahtev from '../models/zahtevi';


export class OrganizatorController{

    prihvatiZahtev = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;

        Zahtev.findOne({"username" : username}, (err,data)=>{
            if(err) console.log(err);
            else {
            
                let newUser = new User({'username' : data.get('username') , 'password' : data.get('password'), 'confirmPassword' : data.get('confirmPassword'), 'name' : data.get('name'), 'lastname' : data.get('lastname'), 'nationality' : data.get('nationality'), 
            'email' : data.get('email'), 'type' : data.get('type')});
                newUser.save().then(()=>{
                    res.json({'message':'user added'});
                }).catch((err)=>{
                    res.json({'message': err});
                })
                Zahtev.deleteOne({'username' : username},(err) =>{
                    if(err) console.log(err)
                });
            
            }
        })
    }

    sviZahtevi = (req: express.Request, res: express.Response)=>{
        Zahtev.find((err,data) =>{
            if(err) console.log(err)
            else res.json(data)
        })
    }

    odbijZahtev = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;

        Zahtev.deleteOne({'username' : username},(err)=>{
            if(err) console.log(err)
            else res.json({'message' : 'ok'});
        });
    }

    dodajSport = (req: express.Request, res: express.Response) =>{
        let sport = req.body.sport;
        let nazivDiscipline = req.body.naziv;
        let vrstaDiscipline = req.body.vrsta;
        let minBrojIgraca = req.body.min;
        let maxBrojIgraca = req.body.max;
        if(!minBrojIgraca) minBrojIgraca = null;
        if(!maxBrojIgraca) maxBrojIgraca = null; 

        Sport.findOne({"sport" : sport},(err, data)=>{
            if(err) console.log("GRESKA1"); //sport postoji u bazi
            else {
                if(data) {
                   
                    Sport.updateOne({'sport' : sport}, {$push : {"disciplina" : {
                        "naziv" : nazivDiscipline,
                        "vrsta" : vrstaDiscipline,
                        "min_broj_igraca" : minBrojIgraca,
                        "max_broj_igraca" : maxBrojIgraca
                    }}}, (err)=>{
                        if(err) console.log("GRESKA2")
                        else 
                        {   let newDisciplina = new Disciplina({
                            "sport" : sport,
                            "naziv" : nazivDiscipline,
                            "vrsta" : vrstaDiscipline,
                            "min_broj_igraca" : minBrojIgraca,
                            "max_broj_igraca" : maxBrojIgraca
                        })
                        newDisciplina.save().then(
                            ()=>{
                                res.json({'message' : 'ok'});
                            }
                        ).catch((err) =>{
                            res.json({'message' : err})
                        });
                    }})
                
            } else { //dodavanje novog sporta i discipline
                let newSport = null;
                let message = null;
                let message1 = null;
               
                 newSport = new Sport({'sport' : sport, 'disciplina' : {
                    "naziv" : nazivDiscipline,
                    "vrsta" : vrstaDiscipline,
                    "min_broj_igraca" : minBrojIgraca,
                    "max_broj_igraca" : maxBrojIgraca
                }});
                
                newSport.save().then(()=>{
                    //res.json({'message':'ok'});
                    message = 'ok'
                }).catch((err)=>{
                    //res.json({'message': err});
                    message = err;
                });
               
                let newDisciplina = new Disciplina({
                    "sport" : sport,
                    "naziv" : nazivDiscipline,
                    "vrsta" : vrstaDiscipline,
                    "min_broj_igraca" : minBrojIgraca,
                    "max_broj_igraca" : maxBrojIgraca
                })
                newDisciplina.save().then(()=>{
                   // res.json({'message1':'okk'});
                   message1 = 'ok';
                }).catch((err)=>{
                   // res.json({'message1': err});
                   message1 = err;
                });

                res.json({'message':message,'message1':message1})
            } 
        }
            
        })
    }
}