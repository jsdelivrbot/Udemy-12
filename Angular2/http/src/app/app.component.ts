import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from './server.service';
import { RKNService } from './rkn-check.service';


// https://udemy-hg-http-35d02.firebaseio.com/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(private serverService: ServerService, private rknService: RKNService) {
    this.rknService.getData()
      .subscribe(
          (data: any[]) => {
            console.log(data);
          },
          (error) => console.log(error)
      );
  }
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  onSave() {
    this.serverService.storeServers(this.servers)
        .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
  }
  onGet() {
    this.serverService.getServers()
        .subscribe(
            (servers: any[]) => {
              console.log(servers);
            },
            (error) => console.log(error)
        );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
