import {App, Platform} from 'ionic-angular';
import {Push} from 'ionic-native';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.rootPage = HomePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
//       var push = Push.init({
//    android: {
//        senderID: "furor-4"
//    },
//    ios: {
//        alert: "true",
//        badge: true,
//        sound: 'false'
//    },
//    windows: {}
// });
//       push.on('registration', (data) => {
//     console.log(data.registrationId);
// });

// push.on('notification', (data) => {
//     console.log(data.message);
//     console.log(data.title);
//     console.log(data.count);
//     console.log(data.sound);
//     console.log(data.image);
//     console.log(data.additionalData);
// });

// push.on('error', (e) => {
//     console.log(e.message);
// });
    });
  }
}
