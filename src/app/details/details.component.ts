import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  countries = COUNTRIES;
  closeResult: string;
  constructor(private _dataService: DataService,private router:Router) { }
  users: any ;
  ngOnInit() {
    this._dataService.getUsers().subscribe((res)=>{
      this.users = res.data;
      console.log(this.users);

    });
  }
  
  public deleteClick(modal){

    console.log(modal);
    this._dataService.deleteUsers(modal).subscribe(res=>{
      console.log(res);
      if(res.deletedCount == 1){
        this._dataService.getUsers().subscribe((res)=>{
          this.users = res.data;
          console.log(this.users);
    })
  }
});}

public open(country){
  console.log(country);
  console.log(this.router.navigate(['/editdetails',country.building,country.room,country.name,country.Aadhar,country.Pan,country.key]));
}
}
