import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NegotiatePage } from './negotiate';

@NgModule({
  declarations: [
    NegotiatePage,
  ],
  imports: [
    IonicPageModule.forChild(NegotiatePage),
  ],
})
export class NegotiatePageModule {}
