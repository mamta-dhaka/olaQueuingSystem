import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConnectionService } from '../../services/connection.service';
import Driver from '../../models/driver.models';
import Request from '../../models/request.models';

@Component({
  selector: 'app-driver-view',
  templateUrl: './driver-view.html',
  })
export class DriverViewComponent implements OnDestroy, OnInit {
  static parameters: any = [ActivatedRoute, ConnectionService];
  ui: any;
  driverList: any;
  driver: Driver;
  driversAllRequests: Request[];
  newRequests: Request[];
  ongoingRequests: Request[];
  completedRequests: Request[];
  subscriptions: any;
  constructor(private route: ActivatedRoute, private conn: ConnectionService) {
  }

  ngOnInit(): void {
    this.subscriptions = [];
    this.driverList = [];
    this.ui = { editModalOpenFlag: false, editProduct: undefined };
    this.subscribeToUrlQueryParams();
  }

  subscribeToUrlQueryParams(): void {
    this.subscriptions.push(this.route.parent.params.subscribe(() => {
      if (this.route.snapshot.params.id) {
        const driverId = this.route.snapshot.params.id;
        this.conn.getDriver()
        .subscribe(drivers => {
          this.driverList = drivers;
          this.driver = this.driverList.find((idriver: any) => idriver.driverId === driverId);
          console.log('lallalallalallaala', this.driver.active);
          this.conn.getRequests()
            .subscribe((req: any[]) => {
              this.driversAllRequests = req.filter((r: any) => r.driver === this.driver.driverId);
              this.newRequests = req.filter((r: any) => r.status === 'waiting');
              this.completedRequests = this.driversAllRequests.filter((r: any) => r.status === 'completed');
              this.ongoingRequests = this.driversAllRequests.filter((r: any) => r.status === 'ongoing');
              console.log(this.driver, this.completedRequests);
            });
        });
      }
    }));
  }

  refresh(): void {
    this.subscribeToUrlQueryParams();
  }
  selectRide(req): void {
    console.log('lallalallalallaala', this.driver.active);
    if (this.driver.active) {
      return;
    } else {
      const requestObject = this.newRequests.find((r) => r._id === req);
      requestObject.driver = this.driver.driverId;
      requestObject.status = 'ongoing'
      this.driver.active = true;
      this.driver.requests.push(requestObject);
      console.log('>>>', this.driver);
      this.conn.updateDriver(this.driver).subscribe((dr) => console.log(dr));
      this.conn.updateRequest(requestObject).subscribe((qrequest) => console.log(qrequest));
    }
  }
  endRide(req): void {
    const reqObj = this.ongoingRequests.find((r) => r._id === req);
    reqObj.status = 'completed';
    this.driver.active = false;
    this.conn.updateDriver(this.driver).subscribe((dr) => console.log(dr));
    this.conn.updateRequest(reqObj).subscribe((u) => console.log(u));
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    delete this.route;
    delete this.conn;
    delete this.subscriptions;
  }
}
