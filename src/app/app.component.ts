import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iNGApp';
  loadedFeature = 'recipe'
  emittedFeature(feature: string) {
    this.loadedFeature = feature;
  }


}
