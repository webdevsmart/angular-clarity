import {Component} from "@angular/core";

@Component({
    selector: "clr-nav-demo-headers",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./headers.demo.css"],
    template: `
        <h2>Header</h2>
        <ul>
            <li><a [routerLink]="['./header-types']">Types</a></li>
            <li><a [routerLink]="['./header-colors']">Colors</a></li>
            <li><a [routerLink]="['./header-types-old']">Old Header Types - Not to be published on the website</a></li>
        </ul>
        <router-outlet></router-outlet>
    `
})
export class HeadersDemo {
}
