import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SectionsService } from 'src/sections.service';

@Component({
  selector: 'app-salato',
  templateUrl: './salato.component.html',
  styleUrls: ['./salato.component.scss'],
})
export class SalatoComponent {
  faArrowLeft = faArrowLeft;

  constructor(public ss: SectionsService) {}
}
