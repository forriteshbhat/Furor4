import {Page,NavController} from 'ionic-angular';
import {Codewars} from '../codewars/codewars';
import {Bitwise} from '../bitwise/bitwise';
import {Business} from '../business/business';
import {Funroid} from '../funroid/funroid';
import {Buildversion} from '../buildversion/buildversion';
import {Tracktrack} from '../tracktrack/tracktrack';
import {Quizvista} from '../quizvista/quizvista';
import {Litintosh} from '../litintosh/litintosh';
import {Jellybeanbabble} from '../jellybeanbabble/jellyneanbabble';
import {Capture} from '../capture/capture';
import {Mini} from '../mini/mini';

@Page({
	templateUrl: 'build/pages/events/events.html'
})

export class Events{

	static get parameters(){
		return [[NavController]];
	}

	constructor(nav)
	{
		this.nav=nav;
	}

	gotocodewars()
	{
		this.nav.push(Codewars,{});
	}

	gotobitwise()
	{
		this.nav.push(Bitwise,{});
	}

	gotobusiness()
	{
		this.nav.push(Business,{});
	}

	gotofunroid()
	{
		this.nav.push(Funroid,{});
	}

	gotobuildversion()
	{
		this.nav.push(Buildversion,{});
	}

	gototracktrack()
	{
		this.nav.push(Tracktrack,{});
	}

	gotoquizvista()
	{
		this.nav.push(Quizvista,{});
	}

	gotolitintosh()
	{
		this.nav.push(Litintosh,{});
	}

	gotojellybeanbabble()
	{
		this.nav.push(Jellybeanbabble,{});
	}

	gotomini()
	{
		this.nav.push(Mini,{});
	}

	gotocapture()
	{
		this.nav.push(Capture,{});
	}
}