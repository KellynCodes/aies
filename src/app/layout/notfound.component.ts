import { LocationStrategy, NgClass, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { CoreService } from '../services';

/**This component display a page that tell user they requested for a page that does not exist. */
@Component({
  selector: 'vita-notfound',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="w-[100vw] h-[100vh] flex items-center justify-center">
    <div
      class="h-[300px] w-[90%] md:w-[60%] lg:w-[50%] xl:w-[30%] m-auto flex items-center flex-col gap-6 justify-center "
    >
      <div class="icon-container">
        <img width="26" height="22" src="/svg/alert-error.svg" alt="Roles" />
      </div>
      <h2 class="font-semibold text-base text-gray-900 text-center mt-2">
        Page not found
      </h2>
      <p class="text-sm font-normal text-center text-gray-600">
        Don't worry. Let's take you back. Click on
        <span class="text-primary">“Go back”</span> button to to navigate back.
      </p>

      <button
        (click)="action()"
        mat-ripple
        class="flex items-center justify-center w-auto h-auto gap-4 px-3 py-2 mt-4 text-center bg-transparent border border-gray-200 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M10.4998 4.16699V15.8337M4.6665 10.0003H16.3332"
            stroke="#344054"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="text-base font-semibold text-gray-700 uppercase"
          >Go back</span
        >
      </button>
    </div>
  </div> `,
})
export class NotfoundComponent {
  locationStrategy = inject(LocationStrategy);
  coreService = inject(CoreService);
  data = input<any>();

  action(): void {
    if (this.coreService.document.defaultView?.history.length! > 1) {
      this.locationStrategy.back();
    } else {
      this.coreService.router.navigate(['/dashboard']);
    }
  }
}
