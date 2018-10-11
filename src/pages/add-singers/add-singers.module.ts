import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSingersPage } from './add-singers';

@NgModule({
  declarations: [
    AddSingersPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSingersPage),
  ],
})
export class AddSingersPageModule {}
