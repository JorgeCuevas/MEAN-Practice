import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate/validate.service' ;
import {AuthService} from '../../services/auth/auth.service' ;
import {Router} from '@angular/router';


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

	constructor(private validateService: ValidateService, 
		private authService: AuthService,
		private router: Router ) { }

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
			console.log('Invalid User!');
			return false;
		}

		if(!this.validateService.validateEmail(user.email)){
			console.log('Invalid Email! ');
			return false;
		}


		//Register
		this.authService.registerUser(user).subscribe(data => {
			if(data.success){
				console.log('Successful register');
				this.router.navigate(['/login']);
			}else{
				console.log('Something when wrong');
				this.router.navigate(['/register']);
			}
		});

	}

}
