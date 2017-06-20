// Generated by ContextProviderGenerator

// Contains Objects that push new data to the Context Controller

// Code for API/Library access has to be inserted in the file:"deviceAPI.service.ts" 
// in the folder: static/app/context/providers/
		
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/Rx';

import { Language } from '../types/Language';
import { Level } from '../types/Level';

// PROTECTED REGION ID general ENABLED START
// PROTECTED REGION END

@Injectable()
export class DeviceAPIService {
	
	private language: Language;
	private _languageSubject: BehaviorSubject<Language> = new BehaviorSubject(0);
	public languageSubject: Observable<Language> = this._languageSubject.asObservable();
	private ambientLight: Level;
	private _ambientLightSubject: BehaviorSubject<Level> = new BehaviorSubject(0);
	public ambientLightSubject: Observable<Level> = this._ambientLightSubject.asObservable();
	private movement: Level;
	private _movementSubject: BehaviorSubject<Level> = new BehaviorSubject(0);
	public movementSubject: Observable<Level> = this._movementSubject.asObservable();
	private deviceType: string;
	private _deviceTypeSubject: BehaviorSubject<string> = new BehaviorSubject("init");
	public deviceTypeSubject: Observable<string> = this._deviceTypeSubject.asObservable();
	
	// PROTECTED REGION ID deviceAPI ENABLED START
	// PROTECTED REGION END
	
	constructor(){
		// PROTECTED REGION ID constructor ENABLED START
        // window.addEventListener('devicelight', event => {

        //     if (event.value > 300) {
        //         this.ambientLight = 2;
        //     }else if(event.value > 100){
        //             this.ambientLight = 1;
        //     }else{
        //         this.ambientLight = 0;
        //     }

        //     this.getAmbientLight();
        // });

        // Updates Movement information for vertical movement
        window.addEventListener("devicemotion", event => {

            // x,y,z are the accelerations on different axis
            // all combined have a value in still position of ~13
            // this is due acceleration of gravtiy
            // if the device is shaken or moved the value rises

            var x = event.accelerationIncludingGravity.x;
            var y = event.accelerationIncludingGravity.y;
			var z = event.accelerationIncludingGravity.z;

			var w = y+z+x;

            if (w > 15.5 || w < 8) {
                this.movement = 2;
            }else if(w > 14 || w < 8.5){
                    this.movement = 1;
            }else{
                this.movement = 0;
            }
        });



		// PROTECTED REGION END
	}
	
	getLanguage(){
		
		// PROTECTED REGION ID language ENABLED START
            switch(navigator.language){
                case "de": this.language = Language.german; break;

                case "en"||"en-us": this.language = Language.english; break;

                case "it": this.language = Language.italian; break;

                default: this.language = Language.english;
            }
		// PROTECTED REGION END
		
		this._languageSubject.next(this.language);
	}
	getAmbientLight(){
		
		// PROTECTED REGION ID ambientLight ENABLED START
		// PROTECTED REGION END
		
		this._ambientLightSubject.next(this.ambientLight);
	}
	getMovement(){
		
		// PROTECTED REGION ID movement ENABLED START

		// PROTECTED REGION END
		
		this._movementSubject.next(this.movement);
	}
	getDeviceType(){
		
		// PROTECTED REGION ID deviceType ENABLED START
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini|Mobile/.test(navigator.userAgent)){
                this.deviceType = "mobile";
            }else{
                this.deviceType = "desktop";
            }
		// PROTECTED REGION END
		
		this._deviceTypeSubject.next(this.deviceType);
	}
	
	// PROTECTED REGION ID addMethods ENABLED START
	// PROTECTED REGION END
}
