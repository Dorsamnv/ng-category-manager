import { HttpInterceptorFn } from '@angular/common/http';

export const urlInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Original URL:', req.url);
  const modifiedReq = req.clone({
    url: req.url.replace('http://', 'https://')
  });
  console.log('Modified URL:', modifiedReq.url);
  return next(modifiedReq);
};