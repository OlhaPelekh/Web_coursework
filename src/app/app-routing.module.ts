import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { MenuComponent } from './module/menu/menu.component';
import { PagesComponent } from './module/pages/pages.component';

const routes: Routes = [
  
   {path: 'pages',
    component: PagesComponent},
    {path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: MenuComponent
      }
    ],}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
