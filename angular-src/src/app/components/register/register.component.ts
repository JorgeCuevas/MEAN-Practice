import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate/validate.service' ;
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	name : String;
	email :String;
	username: String;
	password: String;

	constructor(private validateService: ValidateService, private flashMessages: FlashMessagesService) { }

	ngOnInit() {
	}

	onRegister(){
		var user = {
			name: this.name,
			email: this.email,
			username: this.username,
			password : this.password
		}


		if(!this.validateService.validateRegister(user)){
			 this.flashMessages.show('Invalid User!, ', { cssClass: 'alert-danger', timeout: 8000 });
			return false;
		}

		if(!this.validateService.validateEmail(user.email)){
			this.flashMessages.show('Invalid Email!, ', { cssClass: 'alert-danger', timeout: 8000 });
			return false;
		}
	}
}
