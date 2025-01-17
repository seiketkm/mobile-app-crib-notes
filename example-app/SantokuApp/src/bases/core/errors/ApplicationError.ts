import {ErrorWrapper} from './ErrorWrapper';

export class ApplicationError extends ErrorWrapper {
  constructor();
  constructor(cause: unknown);
  constructor(message: string);
  constructor(cause: unknown, errorCode?: string);
  constructor(message: string, errorCode?: string);
  constructor(message: string, cause: unknown, errorCode?: string);
  constructor(messageOrCause?: unknown, causeOrErrorCode?: unknown, errorCode?: string) {
    if (typeof messageOrCause === 'string') {
      if (typeof causeOrErrorCode === 'string' && !errorCode) {
        super(messageOrCause);
        this._errorCode = causeOrErrorCode;
      } else {
        super(messageOrCause, causeOrErrorCode);
        this._errorCode = errorCode;
      }
    } else {
      super(messageOrCause);
      if (typeof causeOrErrorCode === 'string') {
        this._errorCode = causeOrErrorCode;
      }
    }
  }

  private readonly _errorCode?: string;

  get errorCode() {
    return this._errorCode;
  }
}

export function isApplicationError(error?: unknown): error is ApplicationError {
  return error != null && typeof error === 'object' && error instanceof ApplicationError;
}
