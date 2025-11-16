import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-self-publishing',
  imports: [CommonModule],
  templateUrl: './self-publishing.component.html',
  styleUrl: './self-publishing.component.css'
})
export class SelfPublishingComponent {
  steps = [
    { number: 1, title: 'Submit Your Manuscript', description: 'Share your work with us through our submission portal.' },
    { number: 2, title: 'Receive Professional Feedback', description: 'Get expert editorial guidance and review.' },
    { number: 3, title: 'Collaborate with Our Team', description: 'Work with our editorial and design teams to refine your book.' },
    { number: 4, title: 'Publish and Distribute', description: 'Launch your book across digital and print networks.' }
  ];
}
