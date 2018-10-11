import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddThanksgivingPage } from './add-thanksgiving';

@NgModule({
  declarations: [
    AddThanksgivingPage,
  ],
  imports: [
    IonicPageModule.forChild(AddThanksgivingPage),
  ],
})
export class AddThanksgivingPageModule {}
