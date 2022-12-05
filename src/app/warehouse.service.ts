import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Warehouse } from './warehouse';
import { WAREHOUSES } from './mock-warehouses';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class WarehouseService {

  constructor(private messageService:
    MessageService) { }

  getWarehouses(): Observable<Warehouse[]> {
    const warehouses = of(WAREHOUSES);
    this.messageService.add('WarehouseService: fetched warehouses');
    return warehouses;
  }

  getWarehouse(id: number): Observable<Warehouse> {
    const warehouse = WAREHOUSES.find(h => h.id === id)!;
    this.messageService.add('WarehouseService: fetched warehouse id=${warehouse}');
    return of(warehouse);
  }
}
