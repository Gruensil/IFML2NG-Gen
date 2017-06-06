import {Injectable, DynamicComponentLoader, Injector} from '@angular/core';
import { Router } from '@angular/router';

import { Profile } from '../context/profile/profile';
import { DisplayProperties } from '../helper/displayProperties';

import { ResourceService } from './resource.service';
import { DisplayPropertiesService } from '../services/displayProperties.service';
import { LoggerService } from './logger.service';

declare var nools: any;
declare var $: any;

@Injectable()
export class NoolsService {
	
	private flow;
	private m: Profile;
	
	constructor(
		private dcl: DynamicComponentLoader,
		private injector: Injector,
		private _Router: Router,
		private _logger: LoggerService,
		private _ResourceService: ResourceService,
		private _DisplayPropertiesService: DisplayPropertiesService){
		this.flow = nools.flow("Profile Evaluation", function(flow){
			flow.rule("Lang de-de", {salience:1},[Profile,"m","m.getUser().getLanguage() == 'dede'"], function(facts){
				_ResourceService.setLangFile("dede");
			});
			flow.rule("Environment Brightness Under 40", {salience:2},[Profile,"m","m.getEnvironment().getMovement() >= 1"], function(facts){
				$('.backgroundPrimary').css('background-color','#232323');
				$('.backgroundSecondary').css('background-color','#323632');
				$('.textPrimary').css('color','white !important');
				$('.borderPrimary').css('border-color','#666666');
				$('.borderSecondary').css('border-color','black');
				$('.form-control').css('background-color','black');
				$('.form-control').css('border-color','#323232');
				$('.backgroundSecondary').css('background-color','#636363');
				_DisplayPropertiesService.setProperty('tableClass','table table-striped table-striped-dark table-hover table-condensed textSecondary');
			});
			flow.rule("Environment Brightness Over 40", {salience:2},[Profile,"m","m.getEnvironment().getMovement() < 1"], function(facts){
				$('.backgroundPrimary').css('background-color','white');
				$('.backgroundSecondary').css('background-color','lightgrey');
				$('.textPrimary').css('color','black');
				$('.borderPrimary').css('border-color','black');
				$('.borderSecondary').css('border-color','white');
				$('.form-control').css('background-color','#fff');
				$('.form-control').css('border-color','#ccc');
				$('.backgroundSecondary').css('background-color','lightgrey');
				_DisplayPropertiesService.setProperty('tableClass','table table-striped table-hover table-condensed textSecondary');
			});
			flow.rule("Platform Desktop", {salience:3},[Profile,"m","m.getPlatform().getDeviceType() == 'desktop'"], function(facts){
				_DisplayPropertiesService.pushNavigation({path:'/bookDetailsView',key:'showDetails'});
			});
		});
	}
		
	public getSession(){
		return this.flow.getSession();
	}
	
	public setProfile(m: Profile){
		this.m = m;
	}
}

