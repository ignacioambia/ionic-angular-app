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
    CustomTabsComponent
  ]
})
export class HomePageModule {}
