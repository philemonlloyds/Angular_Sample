import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus ='No Server';
  serverName ='TestServer';
  servers =['T1','T2'];
  serverStatus = false;
    constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverStatus = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus ='Server was created'+ this.serverName;
  }

onUpdateServerName(event: any){
 this.serverName = (<HTMLInputElement>event.target).value;
}

}
