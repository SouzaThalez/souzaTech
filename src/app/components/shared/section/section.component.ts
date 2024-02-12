import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})


export class SectionComponent implements OnInit{

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() sectionIcon: string = '';

  ngOnInit(): void {
  
  }

}
