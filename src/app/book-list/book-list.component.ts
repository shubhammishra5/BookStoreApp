import { Component, OnInit } from '@angular/core';

// import { FormsModule } from '@angular/forms';
 
// import shubh from './bookstack.json';
// interface BookData {
//   sn:number, 
//   Book:String,
//   User:String,
//   Phone:number;
//   Address:String
  // BookList:{sn:number,Book:String,User:String,Phone:Number,Address:String}[]= Shubh;
// }
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
      // BookSearch:string='';
      
     searchText:any='';
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
    "Book":"Design And Analysis of Algorithm",
    
    "User":"Suresh'",
   "Address" :"2/35 sector 72 Noida",
    "Phone":"9458754545"

  },{
    "Sn":13,
    "Book":"Design And Analysis of Algorithm",
    
    "User":"Abhishek'",
   "Address" :"852/35 sector 78 Noida",
    "Phone":"9945875454"

  },{
    "Sn":14,
    "Book":"Design And Analysis of Algorithm",
    
    "User":"Abhishek Singh",
   "Address" :"852/35 sector 12 Noida",
    "Phone":"9945875454"

  },{
    "Sn":15,
    "Book":"Design And Analysis of Algorithm",
    
    "User":"Abhishek'",
   "Address" :"852/35 sector 78 Noida",
    "Phone":"9945875454"

  },{
    "Sn":16,
    "Book":"Design And Analysis of Algorithm",
    
    "User":"Abhishek'",
   "Address" :"852/35 sector 78 Noida",
    "Phone":"9945875454"

  },{
    "Sn":17,
    "Book":"Design And Analysis of Algorithm",
    
    "User":"Abhishek'",
   "Address" :"852/35 sector 78 Noida",
    "Phone":"9945875454"

  },{
    "Sn":18,
    "Book":"Design And Analysis of Algorithm",
    
    "User":"Abhishek'",
   "Address" :"852/35 sector 78 Noida",
    "Phone":"9945875454"

  },{
    "Sn":19,
    "Book":"Design And Analysis of Algorithm",
    
    "User":"Abhishek'",
   "Address" :"852/35 sector 78 Noida",
    "Phone":"9945875454"

  },{
    "Sn":20,
    "Book":"Design And Analysis of Algorithm",
    
    "User":"Rahul ",
   "Address" :"852/35 sector 78 Noida",
    "Phone":"9945875454"

  },{
    "Sn":21,
    "Book":"Design And Analysis of Algorithm",
    
    "User":"Abhishek'",
   "Address" :"872/35 sector 78 Noida",
    "Phone":"9945875454"

  },{
    "Sn":22,
    "Book":"Design And Analysis of Algorithm",
    
    "User":" Singh Abhishek'",
   "Address" :"2/35 sector 78 Noida",
    "Phone":"9945875454"

  }
   ];

   
  
  constructor() { 

    
  }
  // std: AdmissionFormData[]

  // constructor(private adStudent: AdmissionFormService) {
  //     adStudent.adFormGet().subscribe(
  //         x => this.students = x
  //     )
  // }
  
  // std: Admission[];

  // constructor( private:searchData) {
  //     adStudent.adFormGet().subscribe(
  //       (          x: {
  //         Sn: number; Book: string; User: string; Address:
            
  //           string; Phone: number;
  //       }[]) => this.std = x
  //     )
  // }

  // onSubmit(value:any):AdmissionFormData[] {
  //  return this.std.filter(y => y.Book === value)
  // }
  
 // data:BookData []= shubh;
  ngOnInit(): void {

   console.log("Initializer called");
  }
  
//  searchFilter() {
   
//     console.log(this.std);
//     this.std.filter((Book) => this.std(Book)).length


  

//    }
   public myFunc() {

    alert(" Your  Order Successfully Submitted ");
  }

}
