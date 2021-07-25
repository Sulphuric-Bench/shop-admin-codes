import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: 'AIzaSyBR36piXKbbiot9fL4YdH6s1ge3ewnXyt0',
  authDomain: 'sulphur-shop.firebaseapp.com',
  projectId: 'sulphur-shop',
  storageBucket: 'sulphur-shop.appspot.com',
  messagingSenderId: '333335396754',
  appId: '1:333335396754:web:15540c122cbcf82fc1414b',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
