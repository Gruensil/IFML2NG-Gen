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
		private _LoggerService: LoggerService,
		private _ResourceService: ResourceService,
		private _DisplayPropertiesService: DisplayPropertiesService){
		this.flow = nools.flow("Profile Evaluation", function(flow){
			flow.rule("Lang de-de", {salience:1},[Profile,"m","m.getUser().getLanguage() == 'dede'"], function(facts){
				_ResourceService.setLangFile("dede");
			});
			flow.rule("User angry", {salience:2},[Profile,"m","(m.getUser().getMood() == 1 && m.getApp().getMoodChecked() == false)"], function(facts){
				_LoggerService.alert("Do you need help? Then look for the Help tab or ask our friendly staff in the libary! ;)");
				facts.m.getApp().setMoodChecked(true);
			});
			flow.rule("Recommend Learn Location", {salience:3},[Profile,"m","(m.getEnvironment().getLocation() == 'Kernstadt, Paderborn, Deutschland' && m.getEnvironment().getWeather() != 1 && m.getApp().getOutsideChecked() == false)"], function(facts){
				_LoggerService.alert("It a good time to go outside and try our new group learning places infront of our new building!");
				facts.m.getApp().setOutsideChecked(true);
			});
			flow.rule("Movement High", {salience:2},[Profile,"m","m.getEnvironment().getMovement() > 1"], function(facts){
				$('.textPrimary').css('font-size','28px');
				$('.textSecondary').css('font-size','24px');
			});
			flow.rule("Movement Med", {salience:2},[Profile,"m","m.getEnvironment().getMovement() == 1"], function(facts){
				$('.textPrimary').css('font-size','24px');
				$('.textSecondary').css('font-size','20px');
			});
			flow.rule("Movement Low", {salience:2},[Profile,"m","m.getEnvironment().getMovement() < 1"], function(facts){
				$('.textPrimary').css('font-size','18px');
				$('.textSecondary').css('font-size','14px');
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

