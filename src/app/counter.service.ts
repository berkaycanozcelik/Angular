import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incretmentActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log("Total Count of Active to Inactive :  " + this.activeToInactiveCounter);
  }

  incretmentInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log("Total Count of Inactive to Active :  " + this.inactiveToActiveCounter);
  }

  constructor() {}
}
