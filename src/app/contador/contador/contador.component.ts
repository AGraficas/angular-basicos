import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    
        <h1> {{ title }} </h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>
        
        <button (click)=" acumular( base ) "> + {{ base }} </button>
        
        <span> {{ num }} </span>
        
        <button (click)=" acumular( -base ) "> - {{ base }} </button>
    
    `    
})
export class ContadorComponent {
    title: string = 'Contador App';
    num: number = 0;
    base: number = 2;
  
    acumular( value: number ){
      this.num += value;
    }
}