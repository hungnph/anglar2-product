import {Component} from '@angular/core';

@Component({
    selector : 'app',
    template: `
        <h1>
            {{greet()}}
        </h1>
    `
})
export class AppComponent {
    str : string = "Hello world!";

    greet() : string {
        return this.str;
    }
}