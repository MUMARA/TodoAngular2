import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
     
     <input [(ngModel)]="text" placeholder="name">
<button (click)="add(text)">ADD</button>


<ul>
<li *ngFor="let copyPaste of arr; let i = index">
               {{copyPaste}}<button (click)="del(i)">DEL</button> </li>
      </ul>  
     `

})
export class AppComponent {
    arr: any = [];



    add(text) {
        this.arr.push(text);
        console.log("add arr is ", this.arr);
    }

    del(i) {
       this.arr.splice(i,1);
        console.log("del arr is ", this.arr, " i is ", i);
    }
}














































// import {Component} from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//             <div *ngFor="let j of js; let i = index">
//                 <span>{{i}} {{j}}</span>
//             </div>
//     `
// })
// export class AppComponent { 
    
//     js: [number];
    
//     constructor(){
//         this.js = [1, 2, 3];
//     }  
// }