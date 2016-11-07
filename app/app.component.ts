import {Component} from '@angular/core';

@Component({
    selector : 'app',
    template: `
        <div>
            <h1>{{greet()}}</h1>
            <app-product></app-product>
        </div>
    `
})
export class AppComponent {
    pageTitle : string = "Product management";
    greet() : string {
        return this.pageTitle;
    }
}