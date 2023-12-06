import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpPageComponent } from './components/signup-page/sign-up-page.component';
import { CheckinboxToLoginComponent } from './components/login-by-temporary-password/checkinbox-to-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupAddDetailsComponent } from './components/signup-add-details/signup-add-details.component';
import { AppPurposeDetailsComponent } from './components/signup-purpose-details/app-purpose-details.component';
import { AppPurposeTypeComponent } from './components/signup-purpose-type/app-purpose-type.component';
import { AppWorkspaceNameComponent } from './components/signup-workspace-name/app-workspace-name.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ForgotPasswordEmailConfirmationComponent } from './components/forgot-password-email-confirmation/forgot-password-email-confirmation.component';
import { ForgotPasswordOtpConfirmationComponent } from './components/forgot-password-otp-confirmation/forgot-password-otp-confirmation.component';
import { ForgotPasswordResetComponent } from './components/forgot-password-reset/forgot-password-reset.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: "", component: LoginPageComponent },
  { path: "signupPage", component: SignUpPageComponent },
  { path: "loginPage", component: LoginPageComponent },
  { path: "checkInBoxToLogin", component: CheckinboxToLoginComponent },
  { path: "NavigationComponent", component: NavigationComponent },
  { path: "signUpAddDetailsPage", component: SignupAddDetailsComponent },
  { path: "appPurposeDetails", component: AppPurposeDetailsComponent },
  { path: "appPurposeType", component: AppPurposeTypeComponent },
  { path: "appWorkspacName", component: AppWorkspaceNameComponent },
  { path: "forgotPasswordEmailConfirmation", component: ForgotPasswordEmailConfirmationComponent },
  { path: "forgotPasswordOtpConfirmation", component: ForgotPasswordOtpConfirmationComponent },
  { path: "forgotPasswordReset", component: ForgotPasswordResetComponent },
  { path: "dashboard", component: DashboardComponent, outlet: 'dashboard' },
  { path: 'projects', component: ProjectsComponent, outlet: 'projects' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
