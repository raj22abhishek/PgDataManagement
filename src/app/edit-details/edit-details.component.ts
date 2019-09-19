import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:DataService,private router:Router) { }

  public building:any;
  public room:any;
  public name:any;
  public aadhar:any;
  public pan:any;
  public urlObj:any;
  public object = {
    
  };
  public booln1:boolean = false;
  public booln2:boolean = false;
  public booln3:boolean = false;
  public booln4:boolean = false;
  public booln5:boolean = false;
  public id:any;
  
  ngOnInit() {
    this.urlObj = this.route.snapshot.params;
    // this.buildingNumber = this.urlObj.id;
    this.id = this.urlObj.key;
    this.building = this.urlObj.building;
    this.room = this.urlObj.room;
    this.name = this.urlObj.name;
    this.aadhar = this.urlObj.Aadhar;
    this.id = this.urlObj.id


    this.pan = this.urlObj.Pan;
    console.log(this.id);
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
    this.save();
    
  }
  public save(){
    if(!this.booln1 && !this.booln2 && !this.booln3 && !this.booln4 && !this.booln5){
      this.object = {
        "key": this.id,
        "building": this.building,
        "room": this.room,
        "name": this.name,
        "Pan": this.pan,
        "Aadhar": this.aadhar
      }
      this.service.updateUsers(this.object).subscribe(res=>{
        console.log(res);
        if(res){
          this.router.navigate(['/details']);
        }
      })
      // updateUsers
    }
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
}
