import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { setHeaderInterceptor } from './app/interceptors/setHeader/set-header.interceptor';
import { urlInterceptor } from './app/interceptors/Url/url.interceptor';
import { SharedModule } from './app/component/base/modules/shared/shared.module';



const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([setHeaderInterceptor, urlInterceptor]))
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
