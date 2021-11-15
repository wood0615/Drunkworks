import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormGroup } from '@angular/forms';
import { discardPeriodicTasks } from '@angular/core/testing';
import { DataService } from '../../services/data/data.service';
import { BehaviorSubject, of } from 'rxjs';
import { brewhausService } from 'src/app/services/brewhaus.service';
import { brewhausObject } from 'src/app/models/bewhaus.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatMenuTrigger } from '@angular/material/menu';
import { ModalService } from '../modal';



@Component({
  selector: 'app-brewhaus',
  templateUrl: './brewhaus.component.html',
  styleUrls: ['./brewhaus.component.scss']
})

export class brewhausComponent implements OnInit {
  
  constructor(
    private dataSvc: DataService,
    public brewhausservice: brewhausService,
    public modalService: ModalService
  ) { 
    
  }
  searchText: any;
  async ngOnInit(): Promise<void> {

  }

}
