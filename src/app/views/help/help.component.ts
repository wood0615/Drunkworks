import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormGroup } from '@angular/forms';
import { discardPeriodicTasks } from '@angular/core/testing';
import { DataService } from '../../services/data/data.service';
import { BehaviorSubject, of } from 'rxjs';
import { brewhausService } from 'src/app/services/brewhaus.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../modal';



@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})

export class HelpComponent implements OnInit {

  constructor(
    private dataSvc: DataService,
    public brewhausservice: brewhausService,
    private route: ActivatedRoute,
    public modalService: ModalService
  ) { 
    
  }

  async ngOnInit(): Promise<void> {
   
  }

}
