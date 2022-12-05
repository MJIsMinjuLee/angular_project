import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../warehouse';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  warehouses: Warehouse[] = [];

  constructor(private warehouseService: WarehouseService) {}

  ngOnInit(): void {
    this.getWarehouses();
  }

  getWarehouses(): void {
    this.warehouseService.getWarehouses()
        .subscribe(warehouses => this.warehouses = warehouses.slice(1, 5));
  }

}
