import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  invitationForm: FormGroup;
  showRedMessage: boolean = false;
  showAcceptance: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.invitationForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      attending: ['', Validators.required],
      wishes: ['']
    });

   this.invitationForm.get('attending')?.valueChanges.subscribe(value => {
     this.showRedMessage = value === 'no';

     if (value === 'yes') {
       this.showAcceptance = true;
     }
   })
  }

  submitInvitation() {
    if (this.invitationForm.valid && this.invitationForm.value.attending === 'yes') {
      this.router.navigate(['/wedding-invitation']);
    }
  }
}
