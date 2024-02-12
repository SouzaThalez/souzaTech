import { Component, OnInit } from '@angular/core';
import { sectionData } from '../data/section-data';


@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrl: './private.component.scss'
})


export class PrivateComponent implements OnInit{

  sectionInfo = sectionData.sectionContent;
  //skillsData = sectionData.skillsSection;

  ngOnInit(): void {
  }

}
