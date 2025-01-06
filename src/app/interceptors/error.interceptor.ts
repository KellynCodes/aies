import { inject } from '@angular/core';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { CoreService } from '../services';
import { StorageKeys } from '../enums';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const coreService = inject(CoreService);
  // const authService = inject(AuthService);
  const redirectTo = coreService.document.location.href;
  const token = coreService.localStorage.getItem<string>(StorageKeys.Token);
  const refreshToken = coreService.localStorage.getItem<string>(
    StorageKeys.RefreshToken
  );
  return next(req).pipe(
    catchError((error) => {
      return handleError(error, () => {
        // authService.logout('', false);
        coreService.router.navigateByUrl(
          `/auth/login?token=${token}&refreshToken=${refreshToken}&redirectTo=${redirectTo}`
        );
      });
    })
  );
};

function handleError(
  error: ErrorEvent | HttpErrorResponse,
  action: () => void
): Observable<never> {
  let errorMessage: string = '';
  if (!navigator.onLine) {
    errorMessage =
      'No Internet Connection. Please check your internet provider';
  } else if (error && error instanceof HttpErrorResponse) {
    errorMessage = processErrorMessage(error, action);
  } else if (error?.error instanceof ErrorEvent) {
    errorMessage = error?.error?.message
      ? error?.error?.message
      : error?.error?.toString() ?? 'An error occurred';
  }
  // if (errorMessage) {
  //   this.toast.error(errorMessage);
  // }
  return throwError(() => new Error(errorMessage));
}

// returns a string of the error message from the IApiErrorResponse
function processErrorMessage(
  error: HttpErrorResponse,
  action: () => void
): string {
  let message: string;
  switch (error.status) {
    case 0:
      message =
        'Sorry something unexpected happened. Can you please refresh this page and try again.';
      break;
    case 401:
      message =
        'You are not logged in, or your session might have expired. Navigating... to the login page so you can login again.';
      action();
      message = error.error?.message ?? '';
      break;
    case 400:
      message = error.error?.message;
      // let errorMessage400 = `<ul></ul>`;
      // for (const key in error.error.errors) {
      //   errorMessage400 += `<li><b>${key}</b>: ${error.error.errors[key]}</li>`;
      // }
      break;
    case 403:
    case 409:
    case 500:
      message = error.error?.message;
      // let errorMessage = "";
      // if (typeof (<string>apiErrorResponse.message) === "string") {
      //   errorMessage = <string>apiErrorResponse.message;
      // } else if ((<string[]>apiErrorResponse.message).length > 0) {
      //   const messageArray: string[] = <string[]>apiErrorResponse.message;
      //   let formattedErrorMessage = `<ul></ul>`;
      //   messageArray.forEach((msg) => {
      //     formattedErrorMessage += `<li>${msg}.</li>`;
      //   });
      //   errorMessage = formattedErrorMessage;
      // }
      break;
    default:
      message = error.error?.message;
      break;
  }
  return message;
}
