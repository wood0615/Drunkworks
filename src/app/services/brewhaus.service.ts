


import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { first } from "rxjs/operators";
import { brewhausObject } from "../models/bewhaus.model";
import { DataService } from "./data/data.service";


@Injectable()
export class brewhausService implements OnInit {

  brewhausBeers = new Array;
  brewhausDetail = new Array;
  
  constructor(
    private dataSvc: DataService
  ) { }
  ngOnInit() {

  }
 
  getBeerList(): void {

      this.dataSvc.getwithparms('beers', '').pipe(first()).subscribe(res => {
        this.brewhausBeers = new Array;
        let brew = Object.assign(new brewhausObject(), res);
        let brewhausarr = []
        for (let i in res) {  
          brew[i].index = i;
          brewhausarr.push(brew[i])
        }
        this.brewhausBeers = brewhausarr;
      })

    }

    getBeerDetails(id: Number): void {

      this.dataSvc.getwithparms('beers', id.toString()).pipe(first()).subscribe(res => {
        this.brewhausDetail = new Array;
        let brrew = Object.assign(new brewhausObject(), res);
        let brewhausarr = []
        for (let i in res) {  
          brrew[i].index = i;
          brewhausarr.push(brrew[i])
        }
        this.brewhausDetail = brewhausarr;
      })

    }
}