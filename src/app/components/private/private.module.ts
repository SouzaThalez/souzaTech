import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from '../shared/section/section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { WritingsComponent } from './writings/writings.component';
import { SkillsComponent } from './skills/skills.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [
    PrivateComponent,
    HeaderComponent,
    SectionComponent,
    AboutMeComponent,
    ProjectsComponent,
    WritingsComponent,
    SkillsComponent,
    TopBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatButtonModule
  ]
})
export class PrivateModule { }
