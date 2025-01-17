import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Story } from '../models/Story';

@Injectable({
  providedIn: 'root'
})
export class StoryServiceService {
  constructor(private http: HttpClient) { }

  getAllStory(){
    return this.http.get<Story[]>("assets/json/story.json");
  }
}
