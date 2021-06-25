import { environment } from './../../../environments/environment';
import { Component, OnInit, NgZone } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  messageFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private _snackBar: MatSnackBar, private zone: NgZone) { }

  ngOnInit(): void {
  }

  sendMail = (name: string, email: string, message: string) => {

    if (this.nameFormControl.invalid || this.emailFormControl.invalid || this.messageFormControl.invalid) {
      this._snackBar.open('success: you\'re email was sent', 'close', {
        panelClass: 'success-snackbar'
      })
      return
    }

    window.Email.send({
      Host : "smtp.gmail.com",
      Username : 'leondjust7@gmail.com',
      Password: environment.GMAIL_PASSWORD,
      To : 'leondjust7@gmail.com',
      From : 'leondjust7@gmail.com',
      Subject : name + ' sent you a message',
      Body : 'Name: ' + name + ' <br/> Email: ' + email + ' <br> Message: ' + message,
    })
    .then( (message: string) => {
      this._snackBar.open('success: you\'re email was sent', 'close', {
        duration: 2000,
        panelClass: 'success-snackbar'
      })
      console.log(message)
    }).catch( (err: any) => {
      this._snackBar.open('success: you\'re email was sent', 'close', {
        duration: 2000,
        panelClass: 'success-snackbar'
      })
      console.log(err)
    })

  }

}
