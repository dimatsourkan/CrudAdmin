import { RequestOptions, XHRBackend } from '@angular/http';
import { AppHttpService } from './Http.service';
import {HttpErrorService} from "../HttpError/HttpError.service";

export function AppHttpFactory(
    backend: XHRBackend,
    defaultOptions: RequestOptions,
    HttpErrorService : HttpErrorService
) {
    return new AppHttpService(backend, defaultOptions, HttpErrorService);
}
