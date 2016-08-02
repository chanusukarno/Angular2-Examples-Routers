import {Component, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";

@Component({
    selector: 'my-app',
    template: `
                <h3>Archives</h3>
                <p>{{year}}/{{month}}</p>
                `
})
export class ArchivesComponent implements OnInit {
    year;
    month;

    constructor(private _routeParams:RouteParams) {

    }

    ngOnInit() {
        this.year = this._routeParams.get('year');
        this.month = this._routeParams.get('month');
    }
}