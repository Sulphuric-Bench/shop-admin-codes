import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any;
  approve(id: any) {
    this.db.collection('waitingForApprovement').doc(id).update({
      approved: true,
    });
  }
  decline(id: any) {
    this.db.collection('waitingForApprovement').doc(id).delete();
  }
  constructor(public db: AngularFirestore) {
    db.collection('waitingForApprovement')
      .snapshotChanges()
      .subscribe((res) => (this.data = res));
  }
}
