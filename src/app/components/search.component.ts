import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MaterialModule } from './material/material.module';

@Component({
  selector: 'aies-search',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MaterialModule, ReactiveFormsModule],

  template: `
    <div class="relative">
      <span
        class="text-gray-700 absolute left-2 top-3 icon-[material-symbols--search]"
        style="width: 24px; height: 24px;"
      ></span>
      <input
        [class]="useCustomClass() ? class() : 'search-input ' + class()"
        matInput
        name="search"
        [formControl]="search"
        [placeholder]="placeholder()"
      />
    </div>
  `,
})
export class SearchComponent {
  placeholder = input.required<string>();
  debounceTime = input<number>(300);
  class = input<string>();
  useCustomClass = input<boolean>(false);
  searchIconClass = input<string>();
  searchEvent = output<string>();

  search = new FormControl('', Validators.required);

  ngOnInit() {
    this.observeSearchKey();
  }

  observeSearchKey() {
    this.search.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(this.debounceTime()))
      .subscribe((data) => {
        this.searchEvent.emit(data ?? '');
      });
  }
}
