import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PationShowListComponent } from './pationShowList-page/pationShowList-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PationShowListComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [PationShowListComponent]
})
export class PationShowListModule { }
