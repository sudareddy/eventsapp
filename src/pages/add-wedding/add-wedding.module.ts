import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddWeddingPage } from './add-wedding';

@NgModule({
  declarations: [
    AddWeddingPage,
  ],
  imports: [
    IonicPageModule.forChild(AddWeddingPage),
  ],
})
export class AddWeddingPageModule {}
