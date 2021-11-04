import { NgModule } from '@angular/core';

import { CogComponent } from "./cog.component";

import { CogRoutingModule } from './cog-routing.module';

@NgModule({
  declarations: [
    CogComponent
  ],
  imports: [
    CogRoutingModule
  ],
  exports: [
    CogComponent
  ],
  entryComponents: [
    CogComponent
  ]
})
export class CogModule { }
