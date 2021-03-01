import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.scss'],
})
export class CustomTabComponent implements OnInit {

  @Input() active ? : boolean ;

  constructor() { }

  ngOnInit() {}

}
