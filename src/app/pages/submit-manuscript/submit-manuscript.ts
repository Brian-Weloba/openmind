import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-submit-manuscript',
  imports: [CommonModule, FormsModule],
  templateUrl: './submit-manuscript.html',
  styleUrl: './submit-manuscript.css',
})
export class SubmitManuscript {
  manuscript = {
    authorName: '',
    email: '',
    phone: '',
    title: '',
    genre: '',
    wordCount: '',
    synopsis: '',
    targetAudience: '',
    previouslyPublished: 'no',
    message: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Manuscript submission:', this.manuscript);
    // Here you would typically send the data to a backend service
  }
}
