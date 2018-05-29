import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  // @ViewChild(CockpitComponent) serverContentInput;
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
      // console.log(serverNameInput, serverNameInput.value);
      this.serverCreated.emit({
          serverName: serverNameInput.value,
          serverContent: this.serverContentInput.nativeElement.value
      });
  }

  /*
  onAddBlueprint() {
      this.blueprintCreated.emit({
          serverName: this.newServerName,
          serverContent: this.newServerContent
      });
  }*/

    onAddBlueprint(serverNameInput: HTMLInputElement) {
        this.blueprintCreated.emit({
            serverName: serverNameInput.value,
            serverContent: this.serverContentInput.nativeElement.value
        });
    }

}
