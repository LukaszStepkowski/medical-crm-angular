import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService} from '../_services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  loading = false;
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.loading = true;
    this.userService.get().pipe(first()).subscribe(user => {
      this.loading = false;
      this.user = user;
    });
  }

}
