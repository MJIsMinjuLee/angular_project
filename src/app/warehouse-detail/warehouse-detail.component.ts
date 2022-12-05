import { Component, OnInit } from
'@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Warehouse } from '../warehouse';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-warehouse-detail',
  templateUrl: './warehouse-detail.component.html',
  styleUrls: ['./warehouse-detail.component.css']
})
export class WarehouseDetailComponent implements
OnInit{
  warehouse: Warehouse | undefined;


  constructor(
    private route: ActivatedRoute,
    private warehouseService: WarehouseService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getWarehouse();
  }

  getWarehouse(): void {
    const id = 
    Number(this.route.snapshot.paramMap.get('id'))
    this.warehouseService.getWarehouse(id)
        .subscribe(warehouse => this.warehouse = warehouse);
  }

  goBack(): void {
    this.location.back();
  }

}
