import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCateringPage } from './add-catering';

@NgModule({
  declarations: [
    AddCateringPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCateringPage),
  ],
})
export class AddCateringPageModule {}
