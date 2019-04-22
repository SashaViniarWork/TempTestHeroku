import { Component, OnInit } from '@angular/core';
import {GirlService} from '../../services/girl.service';
import {GirlModel} from '../../models/card';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.scss']
})
export class MainAdminComponent implements OnInit {

  girlF: GirlModel = {
    name: '',
  };
  constructor(public girl: GirlService) { }

  ngOnInit() {
  }

  add(value) {
    this.girl.addList(value).then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
