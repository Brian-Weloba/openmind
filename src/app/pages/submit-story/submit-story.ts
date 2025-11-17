import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-submit-story',
  imports: [CommonModule, FormsModule],
  templateUrl: './submit-story.html',
  styleUrl: './submit-story.css',
})
export class SubmitStory {
  story = {
    authorName: '',
    email: '',
    phone: '',
    bio: '',
    storyTitle: '',
    storyCategory: '',
    wordCount: '',
    storyContent: '',
    previouslyPublished: 'no',
    socialMedia: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Story submission:', this.story);
    // Here you would typically send the data to a backend service
  }
}
