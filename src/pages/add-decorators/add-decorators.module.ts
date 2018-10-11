import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDecoratorsPage } from './add-decorators';

@NgModule({
  declarations: [
    AddDecoratorsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDecoratorsPage),
  ],
})
export class AddDecoratorsPageModule {}
