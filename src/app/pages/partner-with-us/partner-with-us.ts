import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-partner-with-us',
  imports: [CommonModule, FormsModule],
  templateUrl: './partner-with-us.html',
  styleUrl: './partner-with-us.css',
})
export class PartnerWithUs {
  partnership = {
    organizationType: '',
    organizationName: '',
    contactPerson: '',
    position: '',
    email: '',
    phone: '',
    location: '',
    studentsNumber: '',
    gradeLevel: '',
    currentCurriculum: '',
    subjects: '',
    partnershipInterest: '',
    timeline: '',
    budget: '',
    specificNeeds: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Partnership inquiry:', this.partnership);
    // Here you would typically send the data to a backend service
  }
}
