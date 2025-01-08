import { CardDto, DateRange } from './../../../models';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { MaterialModule } from '../../../components';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'aies-cards',
  standalone: true,
  imports: [MaterialModule, CurrencyPipe],
  templateUrl: './cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent {
  private destroyRef = inject(DestroyRef);

  cards: CardDto[] = [
    {
      icon: 'icon-[flowbite--dollar-outline]',
      title: 'Total Revenue',
      amount: '1580.67',
      thisMonth: '10774',
      lastMonth: 18,
    },
    {
      icon: 'icon-[tabler--truck]',
      title: 'Total Shipment',
      amount: '12768',
      thisMonth: '6774',
      lastMonth: 18,
    },

    {
      icon: 'icon-[clarity--dollar-line]',
      title: 'Total Deliveries',
      amount: '1580',
      thisMonth: '1074',
      lastMonth: 18,
    },

    {
      icon: 'icon-[grommet-icons--transaction]',
      title: 'Total Transaction',
      amount: '45120',
      thisMonth: '774',
      lastMonth: 5,
    },
  ];
}
