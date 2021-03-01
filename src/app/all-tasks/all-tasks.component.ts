import { Component, OnInit } from '@angular/core';
import { Order} from 'src/app/order'
import { Statistic } from 'src/app/statistic'

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

  statistics : Statistic[]= [
    {
        key : 'Total projects',
        value : '50',
        icon : 'mdi mdi-view-grid-outline',
        iconClass : 'primary-blue-txt'
    },
    {
        key : 'Completed',
        value : '15',
        icon : 'mdi mdi-checkbox-marked-circle-outline',
        iconClass : 'primary-green-txt'
    },
    {
        key : 'In progress',
        value : '10',
        icon : 'mdi mdi-flash-outline',
        iconClass : 'primary-yellow-txt'
    },
    {
        key : 'Delayed',
        value : '2',
        icon : 'mdi mdi-clock-time-four-outline',
        iconClass : 'primary-red-txt'
    },
];

  constructor() { }

  ngOnInit() {}

}
