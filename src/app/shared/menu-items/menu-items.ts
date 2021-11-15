import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface SubChildren {
  state: string;
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  child?: SubChildren[];
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

var MENUITEMS = [
  {
    state: "",
    name: "Home",
    type: "seperator",
    icon: "av_timer",
  },
  {
    state: "home",
    name: "Home",
    type: "link",
    icon: "home",
  },
    {
  state: "help",
  name: "Help",
  type: "link",
  icon: "help",
},
];

@Injectable()
export class MenuItems {
  constructor(

  ){}
  isAdmin: boolean = false;

  canAccess(menuItems: any, role: any):boolean {
    let userrole;
    let canactivate = true;
    return canactivate;
  }
  getMenuitem(): Menu[] {

    return MENUITEMS;
  }
}
