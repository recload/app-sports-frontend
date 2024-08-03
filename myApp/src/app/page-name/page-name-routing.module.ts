import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNamePage } from './page-name.page';

const routes: Routes = [
  {
    path: '',
    component: PageNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageNamePageRoutingModule {}
