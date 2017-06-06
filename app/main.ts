import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

import {provide, PLATFORM_DIRECTIVES} from '@angular/core';

// Import generated Nools Service
import { NoolsService } from './services/nools.service';

import { ContextControllerService } from './context/contextController.service';

// Service Imports
import { LoggerService } from './services/logger.service';
import { AuthenticationService } from './services/authentication.service';
import { DataService } from './services/data.service';
import { DisplayPropertiesService } from './services/displayProperties.service';
import { ResourceService } from './services/resource.service';

import { UserDataService } from './context/providers/userData.service';
import { FaceDetectionService } from './context/providers/faceDetection.service';
import { DeviceAPIService } from './context/providers/deviceAPI.service';
import { GeocodingService } from './context/providers/geocoding.service';
import { WeatherService } from './context/providers/weather.service';

bootstrap(AppComponent,[
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    NoolsService,
    ContextControllerService,
	LoggerService,
	AuthenticationService,
	DataService,
	DisplayPropertiesService,
	ResourceService,
	
	UserDataService,
	FaceDetectionService,
	DeviceAPIService,
	GeocodingService,
	WeatherService,
]);