import { Component, OnInit } from '@angular/core';
import { sectionData } from '../../data/section-data';

@Component({
  selector: 'app-writings',
  templateUrl: './writings.component.html',
  styleUrl: './writings.component.scss'
})

export class WritingsComponent implements OnInit{
  
  content = sectionData.writingContent;

  ngOnInit(): void {
   
  }


  navigate(link: string){
    window.location.href = link;
  }

}
