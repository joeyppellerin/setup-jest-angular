import { UnAutreComponentComponent } from './un-autre-component/un-autre-component.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, UnAutreComponentComponent],
  imports: [CommonModule],
  exports: [HomeComponent, UnAutreComponentComponent]
})
export class PagesModule { }
