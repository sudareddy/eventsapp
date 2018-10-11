import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMagiciansPage } from './add-magicians';

@NgModule({
  declarations: [
    AddMagiciansPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMagiciansPage),
  ],
})
export class AddMagiciansPageModule {}
