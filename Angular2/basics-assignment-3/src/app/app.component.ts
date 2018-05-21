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
    if (this.showDetails) {
        this.showDetails = false;
    } else {
        this.showDetails = true;
    }
    this.clicks.push('Click');
  }

}
