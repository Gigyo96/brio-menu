import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SectionsService } from 'src/sections.service';

@Component({
  selector: 'app-pasqua',
  templateUrl: './pasqua.component.html',
  styleUrls: ['./pasqua.component.scss'],
})
export class PasquaComponent {
  faArrowLeft = faArrowLeft;
  constructor(public ss: SectionsService) {}
}
