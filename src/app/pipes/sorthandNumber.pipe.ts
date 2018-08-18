//import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sorthandNumber' })
export class sorthandNumber implements PipeTransform {
  //constructor(private sanitizer: DomSanitizer) {}
  transform(number: any): any{ 
    if(number == 0) {
      return 0;
    }
    else
    {        
      // hundreds
      if(number <= 999){
        return number ;
      }
      // thousands
      else if(number >= 1000 && number <= 999999){
        return Math.floor(number / 1000) + 'K';
      }
      // millions
      else if(number >= 1000000 && number <= 999999999){
        return Math.floor(number / 1000000) + 'M';
      }
      // billions
      else if(number >= 1000000000 && number <= 999999999999){
        return Math.floor(number / 1000000000) + 'B';
      }
      else
        return number ;
      }
    
  }
}
