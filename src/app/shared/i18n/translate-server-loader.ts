import { join } from 'path';
import { Observable } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';

declare var require: any;
// require import needed for universal, as this is a native node module
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');

export class TranslateServerLoader implements TranslateLoader {

  getTranslation(lang: string): Observable<any> {

    return new Observable(observer => {
      const assetsFolder = join(process.cwd(), 'dist', 'fe', 'browser', '/assets/i18n');
      const languageFile = `${assetsFolder}/${lang}.json`.replace('dist/dist', 'dist');

      const jsonData = JSON.parse(fs.readFileSync(languageFile, 'utf8'));

      observer.next(jsonData);
      observer.complete();
    });
  }
}
