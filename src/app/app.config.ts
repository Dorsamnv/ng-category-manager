import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { urlInterceptor} from './interceptors/Url/url.interceptor'
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { setHeaderInterceptor } from './interceptors/setHeader/set-header.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ErrorService } from './services/coomon/error.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideHttpClient(withInterceptors([
      urlInterceptor,
      setHeaderInterceptor
    ])),
    {
      provide: ErrorHandler,
      useClass: ErrorService
    },
    {
      provide: 'MAT_FORM_FIELD_DEFAULT_OPTIONS',
      useValue: { appearance: 'outline' }
    }
  ]
};
