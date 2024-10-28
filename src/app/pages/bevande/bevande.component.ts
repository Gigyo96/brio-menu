import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bevande',
  templateUrl: './bevande.component.html',
  styleUrls: ['./bevande.component.scss'],
})
export class BevandeComponent {
  faArrowLeft = faArrowLeft;
}
