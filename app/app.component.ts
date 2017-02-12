import {Component} from "@angular/core";

@Component({
	selector: 'angular2-experiment-app',
	templateUrl: './templates/angular2-experiment-app.php'
})

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}