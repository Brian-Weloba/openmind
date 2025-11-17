import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'school-publishing',
    loadComponent: () => import('./pages/school-publishing/school-publishing.component').then(m => m.SchoolPublishingComponent)
  },
  {
    path: 'self-publishing',
    loadComponent: () => import('./pages/self-publishing/self-publishing.component').then(m => m.SelfPublishingComponent)
  },
  {
    path: 'magazine',
    loadComponent: () => import('./pages/magazine/magazine.component').then(m => m.MagazineComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'submit-manuscript',
    loadComponent: () => import('./pages/submit-manuscript/submit-manuscript').then(m => m.SubmitManuscript)
  },
  {
    path: 'partner-with-us',
    loadComponent: () => import('./pages/partner-with-us/partner-with-us').then(m => m.PartnerWithUs)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
