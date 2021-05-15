import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    router.events.subscribe((val) => { });
  }

  @ViewChild('snav')
  sidenav!: MatSidenav;

  public ToolbarTitle: String = "";
  public panelOpenState = false;

  public buttonToggle() {
    this.sidenav.toggle();
  }

  public buttonLogout(): void {
    location.reload();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    
  }

}
