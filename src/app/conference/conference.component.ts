import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {

  userId: string;
  items: Observable<any[]>;
  hosts: any[] = [];

  constructor(private db: AngularFirestore) {
    this.items = db.collection('hosts', ref => ref.where('name', '==', 'viktor')).valueChanges();
  }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList() {

  }

  createItem(item: any) {
    //this.db.list("hosts").push(item).then();
  }
}
