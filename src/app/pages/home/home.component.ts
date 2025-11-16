import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WordnikService } from '../../services/wordnik.service';
import { WordOfTheDay } from '../../models/word-of-the-day.interface';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  wordOfTheDay = signal<WordOfTheDay | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);

  constructor(private wordnikService: WordnikService) {}

  ngOnInit() {
    this.loadWordOfTheDay();
  }

  loadWordOfTheDay() {
    this.loading.set(true);
    this.wordnikService.getWordOfTheDay().subscribe({
      next: (data) => {
        this.wordOfTheDay.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load word of the day');
        this.loading.set(false);
        console.error('Error fetching word of the day:', err);
      }
    });
  }
}
