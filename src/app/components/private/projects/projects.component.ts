import { Component, OnInit } from '@angular/core';
import { sectionData } from '../../data/section-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls:[
    './projects.component.scss',
    './projects-mobile.scss'
  ]
})
export class ProjectsComponent implements OnInit{
  
  content = sectionData.projectContent;
  
  ngOnInit(): void {
    
  }

  navigate(link: string){
    window.location.href = link;
  }





}
