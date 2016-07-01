"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.arr = [];
    }
    AppComponent.prototype.add = function (text) {
        this.arr.push(text);
        console.log("add arr is ", this.arr);
    };
    AppComponent.prototype.del = function (i) {
        this.arr.splice(i, 1);
        console.log("del arr is ", this.arr, " i is ", i);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n     \n     <input [(ngModel)]=\"text\" placeholder=\"name\">\n<button (click)=\"add(text)\">ADD</button>\n\n\n<ul>\n<li *ngFor=\"let copyPaste of arr; let i = index\">\n               {{copyPaste}}<button (click)=\"del(i)\">DEL</button> </li>\n      </ul>  \n     "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
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
//# sourceMappingURL=app.component.js.map