import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { TranslateServerLoader } from './shared/i18n/translate-server-loader';

export function translateFactory(): TranslateServerLoader {
  return new TranslateServerLoader();
}

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule { }