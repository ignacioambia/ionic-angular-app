import { Component, OnInit } from '@angular/core';
import { Order} from 'src/app/order'

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss'],
})
export class AllTasksComponent implements OnInit {


  upcomingTasks : Order [] = [
    {
      id : '890PO90',
      inCharge : 'Bryan Williams',
      progress : 20,
      timeLimit : '2021-02-25'
    },
    {
        id : '890PO91',
        inCharge : 'Marcus Klaus',
        progress : 40,
        timeLimit : '2021-02-27'
    },
    {
        id : '890PO92',
        inCharge : 'Joseph Jackobsen',
        progress : 35,
        timeLimit : '2021-03-09'
    },
    {
        id : '890PO93',
        inCharge : 'Jhon Doe',
        progress : 80,
        timeLimit : '2021-03-12'
    },
    {
        id : '890PO94',
        inCharge : 'Robert White',
        progress : 12,
        timeLimit : '2021-04-12'
    },

  ]
  constructor() { }

  ngOnInit() {}

}
