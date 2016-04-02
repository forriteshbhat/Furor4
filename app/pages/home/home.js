import {Page,NavController} from 'ionic-angular';
import{Info} from '../info/info';
import{About} from '../about/about';
import{Contact} from '../contact/contact';
import{Events} from '../events/events';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
	static get parameters() {
    return [[NavController]];
  }
	constructor(nav){
		this.nav=nav;
	}
	
	openInfo(){
			this.nav.push(Info,{});
	}

	gotohome(){
		this.nav.push(HomePage,{});
	}

	gotoaboutus()
	{
		this.nav.push(About,{});
	}

	gotocontactus()
	{
		this.nav.push(Contact,{});
	}

	gotoevents()
	{
		this.nav.push(Events,{});
	}

	gotoworkshop()
	{
		this.nav.push(Workshop,{});
	}
}

