import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  constructor(public dialog: MatDialog) {}

// login
  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent,{
      width:'30%',
      backdropClass: 'backdropBackground'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });  
  }

// signup
  openDialog2() {
    const dialogRef = this.dialog.open(SignupComponent,{
      width:'30%',
      backdropClass: 'backdropBackground'    
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
