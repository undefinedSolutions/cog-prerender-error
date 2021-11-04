import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CogComponent } from './cog.component';

const routes: Routes = [
  {
    path: '**', // Match all child paths
    component: CogComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CogRoutingModule { }
