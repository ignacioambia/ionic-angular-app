import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


import { HeaderComponent } from '../header/header.component'
import { CustomButtonComponent } from '../custom-button/custom-button.component'
import { CustomTabComponent } from '../custom-tab/custom-tab.component'
import { CustomTabsComponent} from '../custom-tabs/custom-tabs.component'
import { AllTasksComponent} from '../all-tasks/all-tasks.component'
import { StatisticsDownloadBtnComponent} from '../statistics-download-btn/statistics-download-btn.component'
import { CustomProgressBarComponent } from '../custom-progress-bar/custom-progress-bar.component'
import { OrderProgressComponent } from '../order-progress/order-progress.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage, 
    HeaderComponent,
    CustomButtonComponent,
    CustomTabComponent,
    CustomTabsComponent,
    AllTasksComponent,
    StatisticsDownloadBtnComponent,
    CustomProgressBarComponent,
    OrderProgressComponent
  ]
})
export class HomePageModule {}
