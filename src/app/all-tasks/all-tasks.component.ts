import { Component, OnInit } from '@angular/core';
import { Order} from 'src/app/order';
import { Statistic } from 'src/app/statistic';
import Chart from 'chart.js';

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

  expenses = {
    'Day' : '1,255' ,
    'Week' : '5,281',
    'Month' : '13,543',
    'Year' : '125,789'
  }


  get expensesGroupingOptions(){
    return Object.keys(this.expenses);
  }

  constructor() { }

  ngOnInit() {
    let canvas = <HTMLCanvasElement>  document.getElementById('tasksChart');
    let ctx = canvas.getContext("2d");


    let gradient = ctx.createLinearGradient(50,-250,20,200);
    gradient.addColorStop(0,'rgba(255,210,0,0.4)');
    gradient.addColorStop(1, 'rgba(255,210,0,0)');

    new Chart(ctx,{
      type : 'line',
      data : {
          labels: ['Jun','Jul','Aug','Sep','Oct','Nov'],
          datasets: [
            {
              data: [5000,2000,5500,4000,12000,8500],
              borderColor : '#FFD200',
              backgroundColor : gradient

              // backgroundColor : 'rgba(255, 210, 0, 0.1)'
            }
          ]
      },

      options : {
        responsive: true,
        maintainAspectRatio: false,
        legend : {
            display : false
        },
        scales : {
            yAxes : [{
                ticks : {
                    display : false
                }
            }]
        }
    }


    });
  }
}
