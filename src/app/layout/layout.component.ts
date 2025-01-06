import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  RouterOutlet,
} from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { CoreService } from '../services';
import { isPlatformBrowser } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../components';

@Component({
  selector: 'vita-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MaterialModule, RouterOutlet, SidebarComponent],
  styles: [
    `
      .sidenav-container {
        flex: 1;
      }

      .mobile .sidenav-container {
        flex: 1 0 auto;
      }
    `,
  ],
  template: `
    <div class="w-full h-full flex flex-col fixed inset-0 bg-color">
      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav
          #sideNav
          [mode]="mobileQuery.matches ? 'over' : 'side'"
          [fixedInViewport]="mobileQuery.matches"
          [opened]="!mobileQuery.matches"
        >
          <aies-sidebar (notify)="toggleNav()" />
        </mat-sidenav>

        <mat-sidenav-content>
          <div class="mt-12 lg:mt-0">
            <router-outlet />
          </div>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
})
export class LayoutComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  opened = signal<boolean>(true);
  sideNav = viewChild<MatSidenav>('sideNav');
  isBrowser = signal<boolean>(false);
  private _mobileQueryListener: () => void;
  private coreService = inject(CoreService);

  constructor() {
    this.isBrowser.set(isPlatformBrowser(PLATFORM_ID));
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => {
      if (this.mobileQuery.matches) {
        this.opened.set(false);
      }
    };
    if (this.isBrowser()) {
      this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    }
    this.coreService.router.events.pipe(takeUntilDestroyed()).subscribe({
      next: (event) => {
        if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          if (this.mobileQuery.matches) {
            this.sideNav()?.close();
          }
        }
      },
    });
  }

  toggleNav(): void {
    if (this.mobileQuery.matches) {
      this.opened.set(!this.opened());
    }
    this.sideNav()?.toggle();
  }

  ngOnDestroy(): void {
    if (this.isBrowser()) {
      this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
    }
  }
}
