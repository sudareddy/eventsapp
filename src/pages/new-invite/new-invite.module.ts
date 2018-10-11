import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewInvite } from './new-invite';

@NgModule({
  declarations: [
    NewInvite,
  ],
  imports: [
    IonicPageModule.forChild(NewInvite),
  ],
})
export class NewInviteModule {
	
}
