import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-tabs',
  templateUrl: './custom-tabs.component.html',
  styleUrls: ['./custom-tabs.component.scss'],
})
export class CustomTabsComponent implements OnInit {
  @Input() tabs : string[] = [];
  activeTab : string = '';
  constructor() { }


  setActiveTab(tab){
    this.activeTab = tab;
  }

  ngOnInit() {
    this.activeTab =  this.tabs[0];
  }

}
