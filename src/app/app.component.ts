import { Component } from '@angular/core';
import { LottieSplashScreen } from '@awesome-cordova-plugins/lottie-splash-screen/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private lottie: LottieSplashScreen
  ) {
    this.platform.ready().then(() => {
      console.log('platform is present');
      
      setTimeout(() => {
        this.lottie.hide()
      }, 3000);
    })
  }
}
