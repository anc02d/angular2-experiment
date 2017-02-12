import {Component} from "@angular/core";

@Component({
	selector: 'angular2-experiment',
	templateUrl: './templates/angular2-experiment.php'
})

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}