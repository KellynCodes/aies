import { HttpStatusCode } from '@angular/common/http';

/**
 * Used for api response without pagination
 */
export interface ApiResponse<T = null> {
  isSuccessful: boolean;
  message: string;
  statusCode: HttpStatusCode;
  data: T;
}

/**
 * Used for api response that has pagination
 */
export interface ApiPageResponse<T = null> {
  isSuccessful: boolean;
  message: string;
  statusCode: HttpStatusCode;
  data: {
    totalRecords: number;
    totalPages: number;
    currentPage: number;
    records: T;
  };
}

export interface RequestParameters {
  search?: string;
  currentPage: number;
  pageSize: number;
  startDate?: string | null;
  endDate?: string | null;
}

export interface DateRange {
  startDate: string | null;
  endDate: string | null;
}
