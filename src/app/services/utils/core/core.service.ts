import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ICoreService } from './core.interface';
import { LocalStorageService } from '../storage/local-storage/local-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { SessionStorageService } from '../storage/session-storage/session-storage.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../../../environments/environment';

/**
 * Can be used in a component constructor to access variates of frequently used values or perform global setting, configuration and more.
 */
@Injectable({
  providedIn: 'root',
})
export class CoreService implements ICoreService {
  public readonly document: Document = inject(DOCUMENT);
  public readonly router = inject(Router);
  public readonly http = inject(HttpClient);
  public readonly dialog = inject(MatDialog);
  public readonly localStorage = inject(LocalStorageService);
  public readonly sessionStorage = inject(SessionStorageService);
  public readonly meta: Meta = inject(Meta);
  public readonly title: Title = inject(Title);
  public readonly env = environment;
  public readonly clipBoard: Clipboard = inject(Clipboard);
  public showLoader$ = new BehaviorSubject<boolean>(false);

  public get isLoading(): Observable<boolean> {
    return this.showLoader$.asObservable();
  }
}
