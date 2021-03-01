import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'order-progress',
  templateUrl: './order-progress.component.html',
  styleUrls: ['./order-progress.component.scss'],
})
export class OrderProgressComponent implements OnInit {

  @Input() order : Object;

  constructor() { }

  ngOnInit() {}

}
