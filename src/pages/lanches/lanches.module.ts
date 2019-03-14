import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartidasPage } from './lanches';

@NgModule({
  declarations: [
    LanchesPage,
  ],
  imports: [
    IonicPageModule.forChild(LanchesPage),
  ],
})
export class LanchesPageModule {}