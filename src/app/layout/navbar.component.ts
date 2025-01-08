import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MaterialModule, SearchComponent } from '../components';

@Component({
  selector: 'aies-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SearchComponent, MaterialModule],
  template: `
    <div
      class="sticky top-0 z-[999] p-3 flex w-full items-center h-16 bg-white"
    >
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
