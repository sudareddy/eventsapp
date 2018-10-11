import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMusicianPage } from './add-musician';

@NgModule({
  declarations: [
    AddMusicianPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMusicianPage),
  ],
})
export class AddMusicianPageModule {}
