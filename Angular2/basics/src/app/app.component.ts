import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSecret = false;
  log = [];
  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  serverCreated = false;
  servers = ['Test server', 'Test server 2'];

  constructor() {
      setTimeout(() => {
          this.allowNewServer = true;
      }, 3000);
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() { }

  getServerStatus() {
      return this.serverStatus;
  }

  onCreateServer() {
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
      this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
      return this.serverStatus === 'online' ? 'green' : 'red';
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
