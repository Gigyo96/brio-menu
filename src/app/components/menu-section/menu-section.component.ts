import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SectionsService } from 'src/sections.service';

@Component({
  selector: 'div[app-menu-section]',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuSectionComponent {
  faArrowRight = faArrowRight;

  constructor(public ss: SectionsService) {}
  @Input() section!: {
    title: string;
    description?: string;
    color: string;
    path: string;
    fontColor?: string;
    img?: string;
  };

  @Input() id?: string;

  get LighterColor(): string {
    return this.lightenColor(this.section.color, 5);
  }

  get DarkerColor(): string {
    return this.darkenColor(this.section.color, 40);
  }

  get MediumColor(): string {
    return this.darkenColor(this.section.color, 5);
  }

  private lightenColor(color: string, percent: number): string {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = ((num >> 8) & 0x00ff) + amt;
    const B = (num & 0x0000ff) + amt;
    return `#${(
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)}`;
  }

  private darkenColor(color: string, percent: number): string {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = ((num >> 8) & 0x00ff) - amt;
    const B = (num & 0x0000ff) - amt;
    return `#${(
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)}`;
  }
}
