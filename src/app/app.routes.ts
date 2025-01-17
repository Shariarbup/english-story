import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoryComponent } from './components/story/story.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'story/:id',component: StoryComponent},
];
