import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public buildingNumber:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  public goToBuilding(buildingNumber){
    this.buildingNumber = buildingNumber;
    this.router.navigate(['/inputform',this.buildingNumber]);

  }

}
