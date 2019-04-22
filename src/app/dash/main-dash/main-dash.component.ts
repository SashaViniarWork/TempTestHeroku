import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {GirlModel} from '../../models/card';
import {Observable} from 'rxjs';
import {GirlService} from '../../services/girl.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.scss']
})
export class MainDashComponent implements OnInit {
  AllList: Observable<GirlModel[]>;
  constructor(public girl: GirlService) {
    this.AllList = this.girl.getList();
    this.AllList.subscribe(res => {
    });
  }


  ngOnInit() {
  }

}
