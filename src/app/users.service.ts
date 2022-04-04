import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor( private http:HttpClient) { }
  // getData(){
  //   let url="https://jsonplaceholder.typicode.com/todos/";
  //   return this.http.get(url);
//     let fruits: string[] = ['Apple', 'Orange', 'Banana']; 

// for(var index in fruits)
// { 
//     console.log(fruits[index]);  // output: Apple Orange Banana
// }

// for(var i = 0; i < fruits.length; i++)
// { 
//     console.log(fruits[i]); // output: Apple Orange Banana
// }
    // return this.getData
    // {
    //    Book:'Computer';
    //    User:'Rohit ';
    //    Address:'2/35 sector 72 Noida';
    //    Phone:'9458754545'
    // }
    // var data: string[] = ['1','Computer','Rohit','2/35 sector72 noida','9450757845']
   
    // [
     
    //    Sn:1,
    //    Book:'Computer',
    //    User:'Rohit ',
    //    Address:'2/35 sector 72 Noida',
    //    Phone:'9458754545'
  
    //  ,
    //  {
    //   Sn:2,
    //   Book:'Database',
    //   User:'Sumit ',
    //   Address:'25/36 sector 63 Noida',
    //   Phone:'8004578457'
 
    // },
    // {
    //   Sn:3,
    //   Book:'DataStructure',
    //   User:'Suresh ',
    //   Address:'5/82 sector 72 Noida',
    //   Phone:'7905007455'
 
    // },{
    //   Sn:4,
    //   Book1:'Design And Analysis of Algorithm',
    //   User:'Rohit ',
    //   Address:'2/35 sector 72 Noida',
    //   Phone:'9458754545'
 
    // },{
    //   Sn:1,
    //   Book1:'Computer',
    //   User:'Rohit ',
    //   Address:'2/35 sector 72 Noida',
    //   Phone:'9458754545'
 
    // },{
    //   Sn:1,
    //   Book1:'Computer',
    //   User:'Rohit ',
    //   Address:'2/35 sector 72 Noida',
    //   Phone:'9458754545'
 
    // },{
    //   Sn:1,
    //   Book1:'Computer',
    //   User:'Rohit ',
    //   Address:'2/35 sector 72 Noida',
    //   Phone:'9458754545'
 
    // },{
    //   Sn:1,
    //   Book1:'Computer',
    //   User:'Rohit ',
    //   Address:'2/35 sector 72 Noida',
    //   Phone:'9458754545'
 
    // },{
    //   Sn:1,
    //   Book1:'Computer',
    //   User:'Rohit ',
    //   Address:'2/35 sector 72 Noida',
    //   Phone:'9458754545'
 
    // },{
    //   Sn:1,
    //   Book1:'Computer',
    //   User:'Rohit ',
    //   Address:'2/35 sector 72 Noida',
    //   Phone:'9458754545'
 
    // }
    // ]


  }
// }
