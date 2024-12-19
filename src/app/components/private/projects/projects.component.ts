import { Component, OnInit } from '@angular/core';
import { sectionData } from '../../../data/section-data';
import { InitFirebaseService } from '../../../service/init-firebase.service';
import { doc, setDoc, updateDoc } from 'firebase/firestore';

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

  project = {
    title : '',
    description: '',
    link:''
  }


  constructor(
    private initFirebaseService : InitFirebaseService
  ){}
  
  ngOnInit(): void {
    
  }

  navigate(link: string){
    window.location.href = link;
  }

  async addUsers(){

    //Using set() will create a new doc if doesn´t exist.Or update the existing one
    //Using set() needs an id. The second string 'LA' is the doc id!  

    this.project.title = 'Image Slider';
    this.project.description = 'Image slider with two navigation methods.',
    this.project.link = 'https://github.com/SouzaThalez/advanced-slide'

    await setDoc( doc
      (
        this.initFirebaseService.getDb(), "Projects", 'doc-1'
      ),
      this.project,
      {
         merge: true 
      }
    );

   

    // const cityRef = doc(this.initFirebaseService.getDb(), 'cities', 'LA');
    // await updateDoc(cityRef,this.project)



    // setDoc(cityRef,
    //   {
    //     name: "Brookling",
    //     state: "BJ",
    //     country: "Texas"
    //   }
    // );
    
  }




}
