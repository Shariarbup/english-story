import { Component, OnInit } from '@angular/core';
import { Story } from '../../models/Story';
import { StoryServiceService } from '../../services/story-service.service';
import { StoryCategory } from '../../models/StoryCategory';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  storyCategories = Object.values(StoryCategory); 
  storiesByCategory: { [key: string]: Story[] } = {};
  loading = true;
  errorMessage: string | null = null;

  constructor(private storyService: StoryServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchStories();
  }

  fetchStories(): void {
    this.storyService.getAllStory().subscribe(
      (stories: Story[]) => {
        this.loading = false;
        this.groupStoriesByCategory(stories);
      },
      (error) => {
        this.loading = false;
        this.errorMessage = 'Failed to load stories. Please try again later.';
        console.error('Error fetching stories:', error);
      }
    );
  }

  groupStoriesByCategory(stories: Story[]): void {
    this.storyCategories.forEach((category) => {
      this.storiesByCategory[category] = stories.filter(
        (story) => story.category === category
      );
    });
  }

  onStoryClick(story: Story): void {
    this.router.navigate(['/story', story.id]);
    console.log("back to home");
  }

}
