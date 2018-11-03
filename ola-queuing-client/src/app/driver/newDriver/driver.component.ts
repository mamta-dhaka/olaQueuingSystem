import { Response } from '@angular/http';
import { ConnectionService } from '../../services/connection.service';
import Request from '../../models/request.models';
import { Component, OnInit } from '@angular/core';
import Driver from '../../models/driver.models';

@Component({
  selector: 'app-driver-component',
  templateUrl: './driver.html',
})
export class NewDriverComponent {

  constructor(
    private conn: ConnectionService
  ) { }

  public newDriver: Driver = new Driver();


  create() {
      this.conn.createDriver(this.newDriver)
      .subscribe((res) => {
        console.log('?', res.data);
        this.newDriver = new Driver();
      });
  }
}

