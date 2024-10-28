import { Component, EventEmitter, Output } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SectionsService } from 'src/sections.service';

@Component({
  selector: 'app-viennoiseries',
  templateUrl: './viennoiseries.component.html',
  styleUrls: ['./viennoiseries.component.scss'],
})
export class ViennoiseriesComponent {
  faArrowLeft = faArrowLeft;

  @Output() sectionsToggle = new EventEmitter();

  constructor(public ss: SectionsService) {}
}
