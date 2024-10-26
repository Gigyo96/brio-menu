import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tartes',
  templateUrl: './tartes.component.html',
  styleUrls: ['./tartes.component.scss'],
})
export class TartesComponent {
  faArrowLeft = faArrowLeft;
}
