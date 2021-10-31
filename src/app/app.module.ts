import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CogComponent } from './cog/cog.component';

@NgModule({
  declarations: [
    AppComponent,
    CogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'fe' }), // this should always be first
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
