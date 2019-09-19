import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private service:DataService) { }
  public buildingNumber:any;
  public urlObj:any;
  public booln1:boolean = false;
  public booln2:boolean = false;
  public booln3:boolean = false;
  public booln4:boolean = false;
  public booln5:boolean = false;
  public building:any;
  public room:any;
  public name:any;
  public aadhar:any;
  public pan:any;
  ngOnInit() {
    this.urlObj = this.route.snapshot.params;
    this.buildingNumber = this.urlObj.id;
    console.log(this.buildingNumber);
  }
  public keyPress1(){
    this.booln1 = false;
  }
  public keyPress2(){
    this.booln2 = false;
  }
  public keyPress3(){
    this.booln3 = false;
  }
  public keyPress4(){
    this.pan = this.pan.toUpperCase();
    this.booln4 = false;
  }
  public keyPress5(){
    this.booln5 = false;
  }
  validate(){
    this.booln1 = false;
    this.booln2 = false;
    this.booln3 = false;
    this.booln4 = false;
    this.booln5 = false;
    console.log(this.room+"--"+this.building+"--"+this.name+"--"+this.pan+"--"+this.aadhar);
    if(this.name=="" || !this.name){
      this.booln1 = true;
    }
    if(this.building=="" || !this.building || !(parseInt(this.building)>=1 && parseInt(this.building)<=5)){
      this.booln2 = true;
    }
    if(this.room=="" || !this.room || !(parseInt(this.room)>=101 && parseInt(this.room)<=110)){
      this.booln3 = true;
    }
    
    if(this.pan=="" || !this.pan){
      this.booln4 = true;
    }
    else if(this.pan!=""){
      var abc = [];
      abc = this.pan.split('');
      console.log(abc.length);
      if(abc.length !=10){
        this.booln4 = true;
      }
    }
    if(this.aadhar=="" || !this.aadhar || !(parseInt(this.aadhar)>=100000000000 && parseInt(this.aadhar)<=999999999999)){
      this.booln5 = true;
    }
    this.insert();
    
  }
  public insert(){
    if(!this.booln1 && !this.booln2 && !this.booln3 && !this.booln4 && !this.booln5){
      var object = {
        "key": "b"+this.building+"r"+this.room,
        "building": parseInt(this.building),
        "room": parseInt(this.room),
        "name": this.name,
        "Pan": this.pan,
        "Aadhar": parseInt(this.aadhar)
      }
      console.log(object);
      this.service.insertUsers(object).subscribe(res=>{
        console.log(res);
        if(res){
          this.building = null;
          this.room = null;
          this.name = null;
          this.pan = null;
          this.aadhar = null;
        }
      })
      
  }
}

}
