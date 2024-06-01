import { Time } from "@angular/common";
import { Sportista } from "./sportisti";
import { Takmicar } from "./takmicar";

export class Takmicenje{
    idT: number;
    sport: string;
    disciplina: string;
    vrsta: string;
    pol: string;
    takmicari: Array<Takmicar>;
    datum_pocetka: string;
    datum_kraja: string;

    lokacija: string;
    delegat: string;

}