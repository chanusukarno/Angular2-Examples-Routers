import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'my-app',
    template: `
                <div>
                    <ul>
                        <li *ngFor="#post of posts">
                            <a [routerLink]="['Archives', {'year': post.year, 'month': post.month}]">{{post.year}}/{{post.month}}</a>
                        </li>
                    </ul>
                </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class BlogComponent {

    posts:Object[] = [
        {'id': 1, 'year': 2016, 'month': 6},
        {'id': 2, 'year': 2016, 'month': 5},
        {'id': 3, 'year': 2016, 'month': 4}
    ]
}