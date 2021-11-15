import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MediaMatcher } from '@angular/cdk/layout';
import { brewhausService } from 'src/app/services/brewhaus.service';
import { MenuItems } from '../../../shared/menu-items/menu-items';

@Component({
  selector: 'app-vertical-sidebar',
  templateUrl: './vertical-sidebar.component.html',
  styleUrls: ['./vertical-sidebar.component.scss']
})

export class VerticalAppSidebarComponent implements OnDestroy,OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  status = true;

  selected_team_name: string = "Select Team";
  selected_team: [] = [];

users =[]


  itemSelect: number[] = [];
  parentIndex = 0;
  childIndex = 0;
  pusher: any;

  setClickedRow(i: number, j: number) {
    this.parentIndex = i;
    this.childIndex = j;
  }
  subclickEvent() {
    this.status = true;
  }
  scrollToTop() {
    document.querySelector('.page-wrapper')?.scroll({
      top: 0,
      left: 0
    });
  }

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,

    public brewhausservice: brewhausService,

    public menuItems: MenuItems
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
 

  ngOnInit() {
    this.brewhausservice.getBeerList();
   this.menuItems = this.menuItems;
   this.menuItems.canAccess(null, null)
 }
  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
