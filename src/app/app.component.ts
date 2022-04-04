 import { Component, HostBinding } from '@angular/core';
// import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
// import { stderr } from 'process';

//import stData from 'BookStoreApp/src/app/bookstack.json'; 
// import{ UsersService } from './users.service';
//import Shubh from './files/bo.json';
// import shubh from './files/booklistvalue.json';
// interface BookData {
//   Sn:number,
//   Book:string,
//   User:string,
//   Phone:number,
//   Address:string
// }
  // BookList:{sn:number,Book:String,User:String,Phone:Number,Address:String}[]= Shubh;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class booklistdata{
 
// }

export class AppComponent {
  title = 'BookStoreApp';
  

  searchText:any;
  std = [ {
     Sn:1,
       Book:"Computer",
       User: "Rohit",
       Address:"2/35 sector 72 Noida",
       Phone:9458754545
  }
   
    
    ,
   { 
     Sn:2,
     Book:"Database",
     User:"Sumit",
     Address:"25/36 sector 63 Noida",
     Phone:8004578457

   },
   {
     "Sn":3,
     "Book":"DataStructure",
     "User": "Suresh",
     "Address":"5/82 sector 72 Noida",
     "Phone":7905007455

   }
   ,{
    "Sn":4,
    "Book":"Design And Analysis ",
    
    "User":"Rajesh",
   "Address" :"2/35 sector 75 Noida",
    "Phone":"9458754545"

  }
  ,{
    "Sn":5,
    "Book":"  D&A. Algorithm",
    
    "User":"Mohan ",
   "Address" :"2/35 sector 74 Noida",
    "Phone":"978554545"

  }
  ,{
    "Sn":6,
    "Book":"Computer Organization",
    
    "User":"Sumit  ",
   "Address" :"2/35 sector 72 Noida",
    "Phone":"7858754545"

  }
  ,{
    "Sn":7,
    "Book":"DataBase",
    
    "User":"Shiwang",
   "Address" :"2/35 sector 77 Noida",
    "Phone":"9458754545"

  }
  ,{
    "Sn":8,
    "Book":" Algorithm",
    
    "User":"Priya",
   "Address" :"2/35 sector 79 Noida",
    "Phone":"9458754545"

  },{
    "Sn":9,
    "Book":"Design And Analysis of Algorithm",
    
    "User":"Govind",
   "Address" :"285/38 sector 15 Noida",
    "Phone":"9458754545"

  },{
    "Sn":10,
    "Book":"Data Structure",
    
    "User":"Sunil singh ",
   "Address" :"2/35 sector 132 Noida",
    "Phone":"9458754545"

  },{
    "Sn":11,
    "Book":"Design And Analysis of Algorithm",
    
    "User":"Rajendra ",
   "Address" :"2/35 sector 63 Noida",
    "Phone":"9458754545"

  },{
    "Sn":12,
    "Book":"Design And Analysis",
    
    "User":"Suresh Rai",
   "Address" :"2/35 sector 72 Noida",
    "Phone":"9458754545"

  },{
    "Sn":13,
    "Book":"Design And Analysis of Algorithm",
    
    "User":"Abhishek Choudhary",
   "Address" :"852/35 sector 78 Noida",
    "Phone":"9945875454"

  }
  ,{
    "Sn":14,
    "Book":" Analysis of Algorithm",
    
    "User":" Suamya Singh",
   "Address" :"852/35 sector 78 Noida",
    "Phone":"9945875454"

  },{
    "Sn":15,
    "Book":"Applied Mathemetic 1",
    
    "User":"Shubham Mishra ",
   "Address" :"852/35 sector 72 Noida",
    "Phone":"7905200422"

  },{
    "Sn":16,
    "Book":" Concept of C Programming ",
    
    "User":"Yashwendra Ahuja",
   "Address" :"852/35 sector 78 Noida",
    "Phone":"9945875454"

  },{
    "Sn":17,
    "Book":"D&A Algorithm",
    
    "User":"Rahul Patil ",
   "Address" :"852/35 sector 78 Noida",
    "Phone":"9945875454"

  },
   ];

// data : BookData [] = stData;
  // BookList:{sn:number,Book:String,User:String,Phone:Number,Address:String}[]= Shubh;
 
  // constructor(private user:UsersService)
  // {
  //   this.user.getData.subscribe.
  //   // console.warn(this.user.getData())
  //   // let data= this.user.getData();
  //   // this.name= data.name;
  //   //this.Book= this.user.getData();
  // }
  // BookName = 'Computer  Hindi English Science SocialScience';
  // GetBookName()
  // {
  //   return
    
  //  {
  //    Sn:1;
  //    Book1:'Computer';
  //    User:'Rohit ';
  //    Address:'2/35 sector 72 Noida';
  //    Phone:'9458754545'

  //  }
  //   // return 'BookName1';
  // }
  
  //  searchFilter() {
  //   console.log(this.std);
  //   this.std.target.value

  //  }
   public myFunc() {

    alert(" Your  Order Successfully Submitted ");
  }
}
