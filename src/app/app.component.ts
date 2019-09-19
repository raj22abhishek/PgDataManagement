import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Array<any>;
  title = 'demo';
  constructor(private _dataService: DataService) {

    // Access the Data Service's getUsers() method we defined
    
  }
}
