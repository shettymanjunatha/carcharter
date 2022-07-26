import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { AuthService } from './auth.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginEffects } from './store/login.effects';
import { loginReducer } from './store/login.reducers';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', loginReducer),
    EffectsModule.forFeature([LoginEffects])

  ],
  providers:[AuthService]
})
export class AuthModule { }
