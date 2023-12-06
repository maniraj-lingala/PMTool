import { NgModule } from '@angular/core';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModel } from './material.model';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorkitemsComponent } from './components/workitems/workitems.component';
import { PasswordFieldComponent } from './components/input-password/password-field.component';
import { EmailFieldComponent } from './components/input-email/email-field.component';
import { SignInBySocialMediaComponent } from './components/login-by-social-media/sign-in-by-social-media.component';
import { LoginButtonComponent } from './components/button-login/login-button.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpPageComponent } from './components/signup-page/sign-up-page.component';
import { SignupButtonComponent } from './components/button-signup/signup-button.component';
import { CheckinboxToLoginComponent } from './components/login-by-temporary-password/checkinbox-to-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupAddDetailsComponent } from './components/signup-add-details/signup-add-details.component';
import { AppPurposeDetailsComponent } from './components/signup-purpose-details/app-purpose-details.component';
import { AppWorkspaceNameComponent } from './components/signup-workspace-name/app-workspace-name.component';
import { AppPurposeTypeComponent } from './components/signup-purpose-type/app-purpose-type.component';
import { FormsModule } from "@angular/forms";
import { SubmitButtonComponent } from './components/button-submit/submit-button.component';
import { ForgotPasswordEmailConfirmationComponent } from './components/forgot-password-email-confirmation/forgot-password-email-confirmation.component';
import { ForgotPasswordOtpConfirmationComponent } from './components/forgot-password-otp-confirmation/forgot-password-otp-confirmation.component';
import { ForgotPasswordResetComponent } from './components/forgot-password-reset/forgot-password-reset.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectsOverviewGridItemsComponent } from './components/projects-overview-grid-items/projects-overview-grid-items.component';
import { ProjectsOverviewGoalCardComponent } from './components/projects-overview-goal-card/projects-overview-goal-card.component';
import { ProjectsOverviewDetailsCardComponent } from './components/projects-overview-details-card/projects-overview-details-card.component';
import { ProjectsOverviewTaskOverviewComponent } from './components/projects-overview-task-overview/projects-overview-task-overview.component';
import { ProjectsOverviewTimelineComponent } from './components/projects-overview-timeline/projects-overview-timeline.component';
import { ProjectAllComponent } from './components/project-all/project-all.component';
import { ProjectAllProjectCardsComponent } from './components/project-all-project-cards/project-all-project-cards.component';
import { ProjectAllProjectListviewComponent } from './components/project-all-project-listview/project-all-project-listview.component';
import { ProjectAllSearchheaderComponent } from './components/project-all-searchheader/project-all-searchheader.component';
import { ToolbarElementSecondComponent } from './components/project-toolbar-element-second/toolbar-element-second.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputSearchFieldComponent } from './components/input-search-field/input-search-field.component';
import { ButtonFilterComponent } from './components/button-filter/button-filter.component';
import { ProjectsDocumentsAddDocumentDialogComponent } from './components/projects-documents-add-document-dialog/projects-documents-add-document-dialog.component';
import { ProjectsDocumentsComponent } from './components/projects-documents/projects-documents.component';
import { DocumentsDragAndDropDirective } from './documents-drag-and-drop.directive';
import { ProjectsRisksComponent } from './components/projects-risks/projects-risks.component';
import { ProjectsRisksAddRiskDialogComponent } from './components/projects-risks-add-risk-dialog/projects-risks-add-risk-dialog.component';
import { ProjectsRisksDetailsTableComponent } from './components/projects-risks-details-table/projects-risks-details-table.component';
import { ProjectsRisksRiskDetailsDialogComponent } from './components/projects-risks-risk-details-dialog/projects-risks-risk-details-dialog.component';
import { ProjectChangesComponent } from './components/project-changes/project-changes.component';
import { ProjectChangesSearchAndAddComponent } from './components/project-changes-search-and-add/project-changes-search-and-add.component';
import { ProjectChangesDetailstableComponent } from './components/project-changes-detailstable/project-changes-detailstable.component';
import { ProjectChangesAddChangesDialogComponent } from './components/project-changes-add-changes-dialog/project-changes-add-changes-dialog.component';
import { ProjectChangesDetailsComponent } from './components/project-changes-details/project-changes-details.component';
import { ProjectChangesDetailsDescriptionComponent } from './components/project-changes-details-description/project-changes-details-description.component';
import { ProjectChangesDetailsCardsComponent } from './components/project-changes-details-cards/project-changes-details-cards.component';
import { TeamComponent } from './components/projects-team/team.component';
import { TeamDetailsComponent } from './components/projects-team-details/team-details.component';
import { TeamMembersComponent } from './components/projects-team-members/team-members.component';
import { TeamMemberAdditionComponent } from './components/projects-team-member-addition/team-member-addition.component';
import { TeamMemberProfileComponent } from './components/projects-team-member-profile/team-member-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    ProjectsComponent,
    WorkitemsComponent,
    PasswordFieldComponent,
    EmailFieldComponent,
    SignInBySocialMediaComponent,
    LoginButtonComponent,
    LoginPageComponent,
    SignUpPageComponent,
    SignupButtonComponent,
    CheckinboxToLoginComponent,
    SignupAddDetailsComponent,
    AppPurposeDetailsComponent,
    AppWorkspaceNameComponent,
    AppPurposeTypeComponent,
    SubmitButtonComponent,
    ForgotPasswordEmailConfirmationComponent,
    ForgotPasswordOtpConfirmationComponent,
    ForgotPasswordResetComponent,
    InputFieldComponent,
    ProjectDetailsComponent,
    ProjectsOverviewGridItemsComponent,
    ProjectsOverviewGoalCardComponent,
    ProjectsOverviewDetailsCardComponent,
    ProjectsOverviewTaskOverviewComponent,
    ProjectsOverviewTimelineComponent,
    ProjectAllComponent,
    ProjectAllProjectCardsComponent,
    ProjectAllProjectListviewComponent,
    ProjectAllSearchheaderComponent,
    ToolbarElementSecondComponent,
    InputSearchFieldComponent,
    ButtonFilterComponent,
    ProjectsDocumentsAddDocumentDialogComponent,
    ProjectsDocumentsComponent,
    DocumentsDragAndDropDirective,
    ProjectsRisksComponent,
    ProjectsRisksAddRiskDialogComponent,
    ProjectsRisksDetailsTableComponent,
    ProjectsRisksRiskDetailsDialogComponent,
    ProjectChangesComponent,
    ProjectChangesSearchAndAddComponent,
    ProjectChangesDetailstableComponent,
    ProjectChangesAddChangesDialogComponent,
    ProjectChangesDetailsComponent,
    ProjectChangesDetailsDescriptionComponent,
    ProjectChangesDetailsCardsComponent,
    TeamComponent,
    TeamDetailsComponent,
    TeamMembersComponent,
    TeamMemberAdditionComponent,
    TeamMemberProfileComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModel,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    AngularEditorModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
