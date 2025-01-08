import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MaterialModule, SearchComponent } from '../components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'aies-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SearchComponent, MaterialModule, RouterLink],
  template: `
    <div class="sticky top-0 z-[999] flex w-full items-center h-16 bg-white">
      <img
        class="mx-auto cursor-pointer block md:hidden"
        [routerLink]="['/dashboard']"
        [width]="320"
        [height]="150"
        src="/icons/logo-full.svg"
        alt="Logo"
      />
      <div class="flex items-center justify-between w-full h-full">
        <span class="hidden md:flex w-[50%]">
          <aies-search
            class="rounded-[1.5rem] py-2 w-full"
            [debounceTime]="1000"
            (searchEvent)="search($event)"
            placeholder="Search by tracking number..."
          />
        </span>

        <div class="w-[48%] hidden md:flex items-center justify-end gap-x-4">
          <ng-content button />
        </div>
      </div>
    </div>
  `,
})
export class NavbarComponent {
  search(searchTerm: string): void {}
}
