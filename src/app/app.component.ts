import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data/data.service';
import { brewhausService } from './services/brewhaus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'brewhaus';
  status = true;

  constructor(

    public dataSvc: DataService,
    public brewhausservice: brewhausService
  ){

  }

  ngOnInit() {

  }
 

  scrollToTop(){

}
}
