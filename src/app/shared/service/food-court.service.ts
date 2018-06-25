import { Injectable } from '@angular/core';
import { Foodcourt } from '../model/foodcourt.model';

@Injectable()
export class FoodCourtService {

  public foodcourtList = [
    new Foodcourt(1, "FoodCourt 4 Koufu", "Near Auditorium", "Mon-Sat 8.00am-8.00pm", "fc04_pic01.jpg", "fc04_pic02.jpg",
    "FoodCourt 4 brings Koufu to Singapore Polytechnic to offer students quality food from one of the best foodcourts."),
    new Foodcourt(2, "FoodCourt 6", "T19", "Mon-Fri 8.00am-8.00pm", "fc06_pic01.jpg", "fc06_pic02.jpg",
    "FoodCourt 6.")
  ];

  constructor() { }
  getFoodCourts() {
    return this.foodcourtList.slice();
  }
}