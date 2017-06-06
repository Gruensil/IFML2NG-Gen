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
    function NoolsService(dcl, injector, _Router, _logger, _ResourceService, _DisplayPropertiesService) {
        this.dcl = dcl;
        this.injector = injector;
        this._Router = _Router;
        this._logger = _logger;
        this._ResourceService = _ResourceService;
        this._DisplayPropertiesService = _DisplayPropertiesService;
        this.flow = nools.flow("Profile Evaluation", function (flow) {
            flow.rule("Lang de-de", { salience: 1 }, [profile_1.Profile, "m", "m.getUser().getLanguage() == 'dede'"], function (facts) {
                _ResourceService.setLangFile("dede");
            });
            flow.rule("Environment Brightness Under 40", { salience: 2 }, [profile_1.Profile, "m", "m.getEnvironment().getMovement() >= 1"], function (facts) {
                $('.backgroundPrimary').css('background-color', '#232323');
                $('.backgroundSecondary').css('background-color', '#323632');
                $('.textPrimary').css('color', 'white !important');
                $('.borderPrimary').css('border-color', '#666666');
                $('.borderSecondary').css('border-color', 'black');
                $('.form-control').css('background-color', 'black');
                $('.form-control').css('border-color', '#323232');
                $('.backgroundSecondary').css('background-color', '#636363');
                _DisplayPropertiesService.setProperty('tableClass', 'table table-striped table-striped-dark table-hover table-condensed textSecondary');
            });
            flow.rule("Environment Brightness Over 40", { salience: 2 }, [profile_1.Profile, "m", "m.getEnvironment().getMovement() < 1"], function (facts) {
                $('.backgroundPrimary').css('background-color', 'white');
                $('.backgroundSecondary').css('background-color', 'lightgrey');
                $('.textPrimary').css('color', 'black');
                $('.borderPrimary').css('border-color', 'black');
                $('.borderSecondary').css('border-color', 'white');
                $('.form-control').css('background-color', '#fff');
                $('.form-control').css('border-color', '#ccc');
                $('.backgroundSecondary').css('background-color', 'lightgrey');
                _DisplayPropertiesService.setProperty('tableClass', 'table table-striped table-hover table-condensed textSecondary');
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