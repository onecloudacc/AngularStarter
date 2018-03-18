import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primaryclient',
  templateUrl: './primaryclient.component.html',
  styleUrls: ['./primaryclient.component.css']
})
export class PrimaryclientComponent implements OnInit {
  serverId:number = 10;
  serverStatus:string = 'Online';

  constructor() { }

  ngOnInit() {
  }

}
