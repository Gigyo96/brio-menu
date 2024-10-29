import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViennoiseriesComponent } from './pages/viennoiseries/viennoiseries.component';
import { BriocheLievitatiComponent } from './pages/brioche-lievitati/brioche-lievitati.component';
import { SelectionTheComponent } from './pages/selection-the/selection-the.component';
import { TartesComponent } from './pages/tartes/tartes.component';
import { SalatoComponent } from './pages/salato/salato.component';
import { TeaTimeComponent } from './pages/tea-time/tea-time.component';
import { TisaneComponent } from './pages/tisane/tisane.component';
import { BevandeComponent } from './pages/bevande/bevande.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
    children: [
      {
        path: '',
        redirectTo: 'viennoiseries',
        pathMatch: 'full',
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
      {
        path: 'salato',
        component: SalatoComponent,
      },
      {
        path: 'tea-time',
        component: TeaTimeComponent,
      },
      {
        path: 'tisane',
        component: TisaneComponent,
      },
      {
        path: 'bevande',
        component: BevandeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
