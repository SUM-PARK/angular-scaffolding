import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// if (environment.production) {
//     enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule).then((moduleRef) => {

    // Ensure Angular destroys itself on hot reloads.
    // if (window['ngRef']) {
    //   window['ngRef'].destroy();
    // }
    // window['ngRef'] = moduleRef;

}).catch(err => console.error(err));
