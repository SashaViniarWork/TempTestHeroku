import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database-deprecated';
import {GirlModel} from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class GirlService {
  private GirlsListref;

  constructor(private db: AngularFireDatabase) {
    // @ts-ignore
    this.GirlsListref = this.db.list<GirlModel>('List');
  }

  getList() {
    return this.GirlsListref;
  }

  addList(val: GirlModel) {
    return this.GirlsListref.push(val);
  }

  updateList(val: GirlModel) {
    console.log(val.key);
    return this.GirlsListref.update(val.key, val);
  }

  removeList(val: GirlModel) {
    return this.GirlsListref.remove(val.key);
  }
}
