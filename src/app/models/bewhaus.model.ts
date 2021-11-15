
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class brewhausObject {
  public id: any;
    public name: any;
    public tagline: any;
    public firstbrewed: any;
    public description: any;
    public abv: any;
    public boil_volume: any;
    public brewers_tips: any;
    public contributed_by: any;
    public ebc: any;
    public first_brewed: any;
    public food_pairing: any;
    public index!: number;
    public ibu: any;
    public image_url: any;
    public volume: any;


public static factory(data: brewhausObject): brewhausObject {
  return Object.assign(new brewhausObject(), data, {

  }) as brewhausObject
}
}
