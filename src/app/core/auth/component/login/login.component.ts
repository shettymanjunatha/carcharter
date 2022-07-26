import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { loadLogin } from '../../store/login.actions';
import { LoginState } from '../../store/login.reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<LoginState>) { }

  ngOnInit(): void {

    const payload = {
      UserName: "test-user",
      Password: "test1234"
    };
    this.store.dispatch(loadLogin(payload));
  }

}
