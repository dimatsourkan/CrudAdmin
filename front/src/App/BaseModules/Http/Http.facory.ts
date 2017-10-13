import { RequestOptions, XHRBackend } from '@angular/http';
import { AppHttpService } from './Http.service';

export function AppHttpFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
    return new AppHttpService(backend, defaultOptions);
}
