import { Pipe, PipeTransform } from '@angular/core';
// import { StringifyOptions } from 'querystring';


@Pipe({
  name: 'filter',
 
})
export class FilterPipe implements PipeTransform {
 
  transform( value : any, searchTerm:any ): any {
    return value.filter(function( search:any ) {
      return search.Book.indexOf( searchTerm )> -1
    });
  }

}
