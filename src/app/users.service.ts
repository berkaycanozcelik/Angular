import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  activeUser = ["Max", "Anna"];
  inactiveUser = ["Chris", "Manu"];

  constructor(private counterService: CounterService){}

  setToActive(id: number) {
    this.activeUser.push(this.inactiveUser[id]);
    this.inactiveUser.splice(id, 1);
    this.counterService.incretmentInactiveToActive();
  }

  setToInactive(id: number) {
    this.inactiveUser.push(this.activeUser[id]);
    this.activeUser.splice(id, 1);
    this.counterService.incretmentActiveToInactive();
  }

}
