import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpC') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  //newServerName = "";
  newServerContent = "";

  constructor() {}

  ngOnInit(): void {}

  onAddServer(input: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: input.value,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint(input: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: input.value,
      serverContent: this.newServerContent,
    });
  }
}
