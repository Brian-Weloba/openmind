import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WordOfTheDay } from '../models/word-of-the-day.interface';

@Injectable({
  providedIn: 'root'
})
export class WordnikService {
  private readonly API_KEY = 'gryguutvmxgn5sne6melvv1jcnmq6oqgt3sx7xdn0dhfqxw4f'; // Replace with your Wordnik API key
  private readonly BASE_URL = 'https://api.wordnik.com/v4/words.json';

  constructor(private http: HttpClient) {}

  getWordOfTheDay(date?: string): Observable<WordOfTheDay> {
    const url = `${this.BASE_URL}/wordOfTheDay?api_key=${this.API_KEY}${date ? `&date=${date}` : ''}`;
    return this.http.get<WordOfTheDay>(url);
  }
}
