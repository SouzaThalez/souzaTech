import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  declarations: [
    PublicComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
