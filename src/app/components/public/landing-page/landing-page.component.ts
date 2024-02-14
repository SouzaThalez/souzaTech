import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls:[
    './landing-page.component.scss',
    './landing-page-mobile.scss'
  ]
  
})
export class LandingPageComponent implements OnInit{

  links: string []=['Newsletter','Linkedin','Instagram','Website'];

  constructor(){}
  ngOnInit(): void {
    
  }

}
