import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InitFirebaseService {

  private app : FirebaseApp;
  private db : Firestore; 

  constructor() { 
    this.app = initializeApp(environment.firebaseConfig);
    this.db = getFirestore(this.app);
  }


  getDb(): Firestore {
    return this.db;
  }

  


}
