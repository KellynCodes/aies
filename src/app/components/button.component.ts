import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'aies-button',
  standalone: true,
  imports: [MatRipple],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <button
    mat-ripple
    [type]="type()"
    [class.disabled]="disabled()"
    [disabled]="disabled()"
    class="h-auto text-center max-h-[3rem] outline-none focus:outline-none text-sm md:text-base font-semibold cursor-pointer rounded px-[1.125rem] py-[0.625rem] bg-primary"
    [class]="class()"
    (click)="clicked.emit()"
  >
    <ng-content />
  </button>`,
})
export class ButtonComponent {
  /**
   * Event emitted when button is clicked
   */
  clicked = output<void>();

  /**
   * Additional style classes
   */
  class = input<string>();

  /**
   * Button type @default button
   */
  type = input<string>('button');

  /**
   * You can disable button by setting this to true.
   */
  disabled = input<boolean>(false);
}
