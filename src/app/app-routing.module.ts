import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViennoiseriesComponent } from './pages/viennoiseries/viennoiseries.component';
import { BriocheLievitatiComponent } from './pages/brioche-lievitati/brioche-lievitati.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'viennoiseries',
    component: ViennoiseriesComponent,
  },
  {
    path: 'brioche',
    component: BriocheLievitatiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
