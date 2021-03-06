import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingHeroComponent } from './landing-hero/landing-hero.component';
import { FutureSkillsComponent } from './future-skills/future-skills.component';
import { TeachersPreviewComponent } from './teachers-preview/teachers-preview.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ApprenticeSignupComponent } from './apprentice-signup/apprentice-signup.component';
import { MasterSignupComponent } from './master-signup/master-signup.component';

import {AuthRoutesModule } from './auth/auth-routes.module';
import { AuthService} from './auth/auth.service';
import { MainComponent } from './main/main.component';
import { MasterSignupFormComponent } from './master-signup/master-signup-form/master-signup-form.component';
import { SignupFormComponent } from './apprentice-signup/signup-form/signup-form.component';
import { ApprenticeLoginComponent } from './apprentice-login/apprentice-login.component';
import { ApprenticeProfileComponent } from './apprentice-profile/apprentice-profile.component';

import { MasterService } from './master.service';
import { ApprenticeService } from './apprentice.service';

import { MasterLoginComponent } from './master-login/master-login.component';
import { MasterProfileComponent } from './master-profile/master-profile.component';
import { OptionsComponent } from './options/options.component';
import { TeacherComponent } from './teacher/teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingHeroComponent,
    FutureSkillsComponent,
    TeachersPreviewComponent,
    TestimonialsComponent,
    ApprenticeSignupComponent,
    MasterSignupComponent,
    MainComponent,
    MasterSignupFormComponent,
    SignupFormComponent,
    ApprenticeLoginComponent,
    ApprenticeProfileComponent,
    MasterLoginComponent,
    MasterProfileComponent,
    OptionsComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutesModule,
    HttpModule,
    AngularFontAwesomeModule
  ],
  providers: [AuthService, MasterService, ApprenticeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
