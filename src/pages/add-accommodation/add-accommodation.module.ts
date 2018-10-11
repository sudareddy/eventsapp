import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAccommodationPage } from './add-accommodation';

@NgModule({
  declarations: [
    AddAccommodationPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAccommodationPage),
  ],
})
export class AddAccommodationPageModule {}
