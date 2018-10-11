import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminVendorPage } from './admin-vendor';

@NgModule({
  declarations: [
    AdminVendorPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminVendorPage),
  ],
})
export class AdminVendorPageModule {}
