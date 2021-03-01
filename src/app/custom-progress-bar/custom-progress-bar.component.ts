import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-progress-bar',
  templateUrl: './custom-progress-bar.component.html',
  styleUrls: ['./custom-progress-bar.component.scss'],
})
export class CustomProgressBarComponent implements OnInit {

  @Input() progress : number;

  constructor() { }

  ngOnInit() {}

}
