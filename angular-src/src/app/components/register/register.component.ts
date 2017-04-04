import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate/validate.service' ;

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

	constructor(private validateService: ValidateService) { }

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
			console.log('Invalid user');
			return false;
		}

		if(!this.validateService.validateEmail(user.email)){
			console.log('Invalid email');
			return false;
		}
	}
}
