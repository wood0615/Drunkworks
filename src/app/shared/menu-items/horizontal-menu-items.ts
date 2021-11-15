import { Injectable } from '@angular/core';


export interface BadgeItem {
    type: string;
    value: string;
}
export interface Saperator {
    name: string;
    type?: string;
}
export interface ChildrenItems {
    state: string;
    name: string;
    type?: string;
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
    name: "sprint",
    type: "seperator",
    icon: "av_timer"
  },
  {
    state: "sprint",
    name: "Sprint",
    type: "link",
    icon: "Snoboarding"
  },
  {
    state: "newbrrew",
    name: "New Item",
    type: "link",
    icon: "assignment"
  },
  {
    state: "brewhaus",
    name: "brewhaus",
    type: "link",
    icon: "list_alt"
  },
  {
    state: "admin",
    name: "Admin",
    type: "sub",
    icon: "preview",


    children: [
      { state: "users_teams", name: "User/Teams", type: "link"},
      { state: "add_user", name: "Add User", type: "link"}
    ],
  },
    {
  state: "help",
  name: "Help",
  type: "link",
  icon: "help"
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
