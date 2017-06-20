"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var profile_1 = require('../context/profile/profile');
var resource_service_1 = require('./resource.service');
var displayProperties_service_1 = require('../services/displayProperties.service');
var logger_service_1 = require('./logger.service');
var NoolsService = (function () {
    function NoolsService(dcl, injector, _Router, _LoggerService, _ResourceService, _DisplayPropertiesService) {
        this.dcl = dcl;
        this.injector = injector;
        this._Router = _Router;
        this._LoggerService = _LoggerService;
        this._ResourceService = _ResourceService;
        this._DisplayPropertiesService = _DisplayPropertiesService;
        this.flow = nools.flow("Profile Evaluation", function (flow) {
            flow.rule("Lang de-de", { salience: 1 }, [profile_1.Profile, "m", "m.getUser().getLanguage() == 'dede'"], function (facts) {
                _ResourceService.setLangFile("dede");
            });
            flow.rule("User angry", { salience: 2 }, [profile_1.Profile, "m", "(m.getUser().getMood() == 1 && m.getApp().getMoodChecked() == false)"], function (facts) {
                _LoggerService.alert("Do you need help? Then look for the Help tab or ask our friendly staff in the libary! ;)");
                facts.m.getApp().setMoodChecked(true);
            });
            flow.rule("Recommend Learn Location", { salience: 3 }, [profile_1.Profile, "m", "(m.getEnvironment().getLocation() == 'Kernstadt, Paderborn, Deutschland' && m.getEnvironment().getWeather() != 1 && m.getApp().getOutsideChecked() == false)"], function (facts) {
                _LoggerService.alert("It a good time to go outside and try our new group learning places infront of our new building!");
                facts.m.getApp().setOutsideChecked(true);
            });
            flow.rule("Movement High", { salience: 2 }, [profile_1.Profile, "m", "m.getEnvironment().getMovement() > 1"], function (facts) {
                $('.textPrimary').css('font-size', '28px');
                $('.textSecondary').css('font-size', '24px');
            });
            flow.rule("Movement Med", { salience: 2 }, [profile_1.Profile, "m", "m.getEnvironment().getMovement() == 1"], function (facts) {
                $('.textPrimary').css('font-size', '24px');
                $('.textSecondary').css('font-size', '20px');
            });
            flow.rule("Movement Low", { salience: 2 }, [profile_1.Profile, "m", "m.getEnvironment().getMovement() < 1"], function (facts) {
                $('.textPrimary').css('font-size', '18px');
                $('.textSecondary').css('font-size', '14px');
            });
            flow.rule("Platform Desktop", { salience: 3 }, [profile_1.Profile, "m", "m.getPlatform().getDeviceType() == 'desktop'"], function (facts) {
                _DisplayPropertiesService.pushNavigation({ path: '/bookDetailsView', key: 'showDetails' });
            });
        });
    }
    NoolsService.prototype.getSession = function () {
        return this.flow.getSession();
    };
    NoolsService.prototype.setProfile = function (m) {
        this.m = m;
    };
    NoolsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.Injector, router_1.Router, logger_service_1.LoggerService, resource_service_1.ResourceService, displayProperties_service_1.DisplayPropertiesService])
    ], NoolsService);
    return NoolsService;
}());
exports.NoolsService = NoolsService;
//# sourceMappingURL=nools.service.js.map