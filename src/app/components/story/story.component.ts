import { Component } from '@angular/core';
import { Story } from '../../models/Story';
import { ActivatedRoute } from '@angular/router';
import { StoryServiceService } from '../../services/story-service.service';

@Component({
  selector: 'app-story',
  imports: [],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {
  story: Story | undefined;
  stories: Story[] = [];

  constructor(
    private route: ActivatedRoute,
    private storyService: StoryServiceService
  ) {}

  ngOnInit(): void {
    const storyId = Number(this.route.snapshot.paramMap.get('id')); // Get the ID from the URL
    this.storyService.getAllStory().subscribe((res: Story[]) => {
      this.stories = res;
      if(this.stories !== null && this.stories.length !== 0) {
        this.story = this.stories.find((story) => story.id === storyId);
      }
    })
    
  }

}
