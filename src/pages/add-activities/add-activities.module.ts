import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddActivitiesPage } from './add-activities';

@NgModule({
  declarations: [
    AddActivitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddActivitiesPage),
  ],
})
export class AddActivitiesPageModule {}
