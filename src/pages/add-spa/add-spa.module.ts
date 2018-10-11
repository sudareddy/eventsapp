import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSpaPage } from './add-spa';

@NgModule({
  declarations: [
    AddSpaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSpaPage),
  ],
})
export class AddSpaPageModule {}
