//
// Created by IFML2NG2 on 2017/05/30 10:31:57
//

// Angular Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';


// Service Imports
import { LoggerService } from '../services/logger.service';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { DisplayPropertiesService } from '../services/displayProperties.service';
import { ResourceService } from '../services/resource.service';

// domain concept imports

@Component({
	selector: 'lendingForm',
	templateUrl: 'app/views/lendingForm.component.html',
	providers: [LoggerService,DisplayPropertiesService,AuthenticationService,DataService],
	directives: [NgClass  ],
	pipes: []
})

export class LendingFormComponent {
	//Generate variables for parameters and bindings
	selectedReservationBinding:  any;
	isSelectedReservationBinding:  boolean;
	selectedBookToIssueBinding:  any;
	isSelectedBookToIssueBinding:  boolean;
	// bindings for fields in form
		bookISBN: string;
		studentID: string;
		dueDate: Date;
	// PROTECTED REGION ID _mnIcUIC-Eea2S59Os6LSKA.lendingForm ENABLED START
	// PROTECTED REGION END

	constructor(
		private _router: Router,
		private _route: ActivatedRoute
,		private _loggerService: LoggerService,
				private _authenticationService: AuthenticationService,
				private _dataService: DataService,
				private _displayPropertiesService: DisplayPropertiesService,
				private _resourceService: ResourceService
		){
	}
		
	// stubs generated for view element events
	
		issueBook(){
			this.issueBookActionAction();
		}
	
		issueBookActionAction(){
			// PROTECTED REGION ID _vV7RQIDmEea8AL0yBf-zEA.issueBookAction ENABLED START
			// PROTECTED REGION END
		}

	
	// called when component is initiated			
	ngOnInit(){
		// Check authentication requirements, if empty, no authentication requirements for this component
		this._authenticationService.checkPrivilegesIncludeOne([{role:'staff'}]);
		
		
		// Incoming Navigation Flows with Parameter Binding
		this._route.params.subscribe(params => {
			if(params['bookToIssueBinding'] != undefined){
				this.selectedBookToIssueBinding = JSON.parse(decodeURI(params['bookToIssueBinding']));
			}
			if(params['reservationBinding'] != undefined){
				this.selectedReservationBinding = JSON.parse(decodeURI(params['reservationBinding']));
			}
		});
		
		// PROTECTED REGION ID _mnIcUIC-Eea2S59Os6LSKA.ngOnInit ENABLED START
		// PROTECTED REGION END
	}
}
