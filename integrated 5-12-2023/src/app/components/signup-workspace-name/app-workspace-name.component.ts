import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-app-workspace-name',
  templateUrl: './app-workspace-name.component.html'
})
export class AppWorkspaceNameComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snackBar: MatSnackBar) {

  }
  onSignUpClick() {
    this.snackBar.open("Successfully Signed Up", 'close', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    })
  }
}
