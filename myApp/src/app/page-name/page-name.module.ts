import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageNamePageRoutingModule } from './page-name-routing.module';

import { PageNamePage } from './page-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageNamePageRoutingModule
  ],
  declarations: [PageNamePage]
})
export class PageNamePageModule {}
