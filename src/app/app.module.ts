import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
const config = {
  // firebase config
  apiKey: "AIzaSyAnN5XT7Q9zykZpRpHD_ft--ULrIzzUHIU",
  authDomain: "vs-webrtc.firebaseapp.com",
  databaseURL: "https://vs-webrtc.firebaseio.com",
  projectId: "vs-webrtc",
  storageBucket: "vs-webrtc.appspot.com",
  messagingSenderId: "1014247277915"
};
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { ConferenceComponent } from './conference/conference.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ConferenceComponent
  ],
  imports: [
    routing,
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
