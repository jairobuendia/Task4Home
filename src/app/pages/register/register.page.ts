import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user:User={name:"",username:"",password:"",email:""}
  userId = 0;

  @Input()
  name:string
  @Input()
  username:string
  @Input()
  password:string
  @Input()
  email:string
  
  constructor(private router: Router, private userService:UsersService) { }

  ngOnInit() {
  }

  completeRegister(user:User) {
      user.id = this.userId++;
      user.name = this.name;
      user.username = this.username;
      user.email = this.email;
      user.password = this.password;
    
    // this.userService.saveUser(user)
    this.router.navigate(['/home']);
  }


}
