import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MaterialModule, SearchComponent } from '../components';

@Component({
  selector: 'aies-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SearchComponent, MaterialModule],
  template: `<div
    class="fixed lg:sticky z-[9999] top-0 left-0 right-0 flex w-full items-center bg-white h-12"
  >
    <div class="flex items-center justify-between w-full h-full">
      <span class="hidden md:flex">
        <aies-search
          class="rounded-2xl"
          (searchEvent)="search($event)"
          placeholder="Search"
        />
      </span>
      <div class="flex items-center justify-between gap-x-4">
        <ng-content button />
      </div>
    </div>
  </div> `,
})
export class NavbarComponent {
  search(searchTerm: string): void {}
}
