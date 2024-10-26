import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViennoiseriesComponent } from './pages/viennoiseries/viennoiseries.component';
import { BriocheLievitatiComponent } from './pages/brioche-lievitati/brioche-lievitati.component';
import { SelectionTheComponent } from './pages/selection-the/selection-the.component';
import { TartesComponent } from './pages/tartes/tartes.component';

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
  {
    path: 'the',
    component: SelectionTheComponent,
  },
  {
    path: 'tartes',
    component: TartesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
