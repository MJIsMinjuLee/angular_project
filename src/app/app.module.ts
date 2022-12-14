import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { WarehouseDetailComponent } from './warehouse-detail/warehouse-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WarehousesComponent,
    WarehouseDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
