import { Response } from '@angular/http';
import { ConnectionService } from '../services/connection.service';
import Customer from '../models/customer.models';
import Request from '../models/request.models';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer.html',
  styleUrls: ['./customer.scss']
})
export class CustomerComponent implements OnInit {

  constructor(
    private conn: ConnectionService
  ) { }

  public newCustomer: Customer = new Customer();
  public newRequest: Request = new Request();

  requestNumber: any;
  customerList: Customer[];

  ngOnInit(): void {
    this.conn.getCustomers()
      .subscribe(customers => {
        this.customerList = customers
        console.log(customers);
      });
    this.conn.getRequests()
      .subscribe((request) => this.requestNumber = request.length + 1);
  }


  create() {
    if (this.customerList.find((icustomer) => icustomer.customerId === this.newCustomer.customerId)) {
      return;
    }
      this.conn.createCustomer(this.newCustomer)
      .subscribe((res) => {
        this.customerList.push(res.data);
        this.newCustomer = new Customer();
      });
  }

  rideRequest(customer: Customer) {
    this.create();
    this.newRequest.customer = customer.customerId;
    this.newRequest.status = 'waiting';
    this.newRequest.driver = null;
    this.newRequest.reqNu = this.requestNumber;
    console.log('>>>>', this.newRequest);

    this.conn.createRequest(this.newRequest)
      .subscribe((res) => {
        console.log(res.data);
      });
  }
}

