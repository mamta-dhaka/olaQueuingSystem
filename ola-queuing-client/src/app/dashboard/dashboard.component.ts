import { Response } from '@angular/http';
import * as moment from 'moment';
import { ConnectionService } from '../services/connection.service';
import Request from '../models/request.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private conn: ConnectionService
  ) { }

  allRequests: Request[];
  ngOnInit(): void {
    this.conn.getRequests()
      .subscribe(requests => {
        this.allRequests = requests;
        console.log('>>>>', requests);
        });
  }
}

