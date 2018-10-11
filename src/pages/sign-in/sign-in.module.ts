import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignIn } from './sign-in';

@NgModule({
  declarations: [
    SignIn,
  ],
  imports: [
    IonicPageModule.forChild(SignIn),
  ],
})
export class SignInModule {}
