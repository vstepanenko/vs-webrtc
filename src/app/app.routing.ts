import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConferenceComponent } from './conference/conference.component';

const appRoutes: Routes = [
  {path: ':id', component: ConferenceComponent},
  {path: '**', redirectTo: '/'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
