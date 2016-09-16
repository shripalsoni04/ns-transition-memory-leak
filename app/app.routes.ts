import { Routes } from '@angular/router';
import { nsProvideRouter } from 'nativescript-angular/router';

import {
  Page1Component, Page2Component
} from './pages';

export const routes: Routes = [
  { path: '', component: Page1Component },
  { path: 'page2', component: Page2Component }
];
