import "./polyfills.ts";
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);


// import { platformBrowser } from '@angular/platform-browser';
// import { AppModuleNgFactory } from './ngfactory/app/app.module.ngfactory';

// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
