import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { BodyComponent } from '../components/body/body.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BodyComponent,TodoListComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, BodyComponent,TodoListComponent],
})
export class SharedModule {}
