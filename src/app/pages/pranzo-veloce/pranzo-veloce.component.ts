import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SectionsService } from 'src/sections.service';

@Component({
  selector: 'app-pranzo-veloce',
  templateUrl: './pranzo-veloce.component.html',
  styleUrls: ['./pranzo-veloce.component.scss'],
})
export class PranzoVeloceComponent {
  faArrowLeft = faArrowLeft;

  constructor(public ss: SectionsService) {}
}
