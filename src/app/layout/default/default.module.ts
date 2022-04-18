import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MenuComponent } from 'src/app/module/menu/menu.component';



@NgModule({
  declarations: [
    DefaultComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
  
})
export class DefaultModule { }
