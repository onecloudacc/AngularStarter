import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondaryclient',
  templateUrl: './secondaryclient.component.html',
  styleUrls: ['./secondaryclient.component.css']
})
export class SecondaryclientComponent implements OnInit {
  serverId:number = 11;
  serverStatus:string = 'Offline';

  constructor() { }

  ngOnInit() {
  }

  getSecondaryServerDetails() {
    return this.serverStatus;
  }

}
