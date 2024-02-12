import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit{

  links: string []=['Newsletter','Linkedin','Instagram','Website'];

  constructor(){}
  ngOnInit(): void {
    
  }

}
