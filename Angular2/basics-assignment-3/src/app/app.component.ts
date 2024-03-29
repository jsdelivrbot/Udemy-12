import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails: boolean = false;
  clicks = [];

  onDisplayDetails() {
    this.showDetails = !this.showDetails;
    this.clicks.push('Click');
  }

}
