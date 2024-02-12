import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { WritingsComponent } from './writings/writings.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path:'',
    component:PrivateComponent,
    children:[
      {
        path:'about',
        component:AboutMeComponent
      },
      {
        path:'projects',
        component:ProjectsComponent
      },
      {
        path:'writings',
        component: WritingsComponent
      },
      {
        path:'skills',
        component: SkillsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
