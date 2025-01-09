import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  model,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../components';
import { NavItem, UserDto } from '../../models';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { Nav } from '../../enums';

@Component({
  selector: 'aies-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, MaterialModule, TruncatePipe],
  styles: [
    `
      .navlink:hover .notification {
        background-color: #ffffff;
        color: #1cbd5d;
      }
    `,
  ],
})
export class SidebarComponent implements OnInit {
  isMobile = input.required<boolean>();

  user = signal<UserDto>(Object.create(null));
  nav = Nav;
  routes: NavItem[] = [
    {
      icon: 'icon-[material-symbols--dashboard]',
      route: '/dashboard',
      displayName: Nav.Dashboard,
    },
    {
      icon: 'icon-[mdi-light--truck]',
      route: '/shipment',
      displayName: Nav.Shipment,
    },
    {
      icon: 'icon-[solar--delivery-bold]',
      route: '/deliveries',
      displayName: Nav.Deliveries,
    },
    {
      icon: 'icon-[majesticons--analytics-line]',
      route: '/analytics',
      displayName: Nav.Analytics,
    },
    {
      icon: 'icon-[mingcute--notification-line]',
      route: '/notifications',
      displayName: Nav.Notifications,
    },
  ];

  public isOpen = model<boolean>(true);
  public notify = output<void>();
  public router = inject(Router);
  public dialog = inject(MatDialog);

  public notifications = signal<Array<any>>(
    Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  );

  ngOnInit(): void {
    if (this.isMobile()) {
      this.isOpen.set(false);
    }
  }

  logout(): void {}

  toggle(): void {
    this.notify.emit();
    this.isOpen.set(!this.isOpen());
  }
}
