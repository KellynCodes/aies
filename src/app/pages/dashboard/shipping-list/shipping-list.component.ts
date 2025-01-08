import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { MaterialModule } from '../../../components';
import { ShippingListResponse } from '../../../models';
import { StatusDirective } from '../../../directives';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DashboardService } from '../../../services';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'aies-shipping-list',
  imports: [StatusDirective, MaterialModule, DatePipe],
  templateUrl: './shipping-list.component.html',
  styleUrl: './shipping-list.component.css',
})
export class ShippingListComponent implements OnInit {
  public shippingLists = signal<ShippingListResponse[]>([]);
  private dashboardService = inject(DashboardService);
  private destroyRef = inject(DestroyRef);
  private toastService = inject(ToastrService);

  public isLoading = signal<boolean>(false);

  ngOnInit(): void {
    this.getShippingList();
  }

  getShippingList(count: number = 6): void {
    this.isLoading.set(true);
    this.dashboardService
      .getShippingList(count)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          if (data) {
            this.shippingLists.set(data);
          }
          this.isLoading.set(false);
        },
        error: (err) => {
          this.isLoading.set(false);
          this.toastService.error('Failed to fetch shipping list.');
        },
      });
  }
}
