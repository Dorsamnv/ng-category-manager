import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private snackBar: MatSnackBar) {}

  handleError(error: any): void {
    let errorMessage = 'An unknown error occurred';

    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = `Client Error: ${error.error.message}`;
      } else {
        // Server-side error
        errorMessage = this.getServerMessage(error);
      }
    } else if (typeof error === 'string') {
      errorMessage = error;
    }

    this.showError(errorMessage);
    console.error('[ErrorService]', error);
  }

  private getServerMessage(error: HttpErrorResponse): string {
    if (error.status === 0) return 'Connection to server failed.';
    if (error.status === 404) return 'Resource not found.';
    if (error.status === 401) return 'Unauthorized request.';
    if (error.status === 403) return 'Access denied.';
    if (error.status === 500) return 'Internal server error.';
    return error.message || 'Unexpected server error';
  }

  showError(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['snackbar-error']
    });
  }
}
