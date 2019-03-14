import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartidasEditPage } from './lanches-edit';

@NgModule({
  declarations: [
    LanchesEditPage,
  ],
  imports: [
    IonicPageModule.forChild(LanchesEditPage),
  ],
})
export class LanchesEditPageModule {}