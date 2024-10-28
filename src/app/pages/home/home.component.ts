import { Component } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { SectionsService } from 'src/sections.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  faChevronDown = faChevronDown;
  faInstagram = faInstagram;
  faFacebook = faFacebook;

  constructor(public ss: SectionsService) {}

  scrollToMenu() {
    document.getElementById('container')?.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }
  sections = [
    {
      title: 'VIENNOISERIES',
      description: `Le Viennoiseries sono un vero must della pasticceria francese. <br>Caratterizzate da un impasto al lievito madre, privo di uova, 
        vengono sfogliate con burro di alta qualità per creare strati croccanti e gustosi.
      <br>
        Questa tecnica di laminazione dona ai dolci una consistenza leggera e ariosa, che si traduce in un'esperienza sensoriale unica.
        <br> Tutte le nostre Viennoiseries sono preparate utilizzando il Levain, il nostro lievito madre di nome Frodo, che conferisce loro una straordinaria leggerezza e sapore.`,
      color: '#fcb15b',
      path: '/viennoiseries',
    },
    {
      title: 'BRIOCHES E LIEVITATI',
      description: `La Brioche è una delizia ricca e soffice. <br>Il burro viene incorporato gradualmente per ottenere una consistenza setosa e un impasto che lievita lentamente. <br>Durante la cottura, si forma una crosta croccante, mentre l'interno resta incredibilmente morbido. <br>Arricchiamo l'impasto con scorza di limone per freschezza e aroma, e usiamo il nostro lievito madre “Frodo” per una consistenza soffice e facilmente digeribile.`,
      color: '#5e3c25',
      path: '/brioche',
      fontColor: '#c9af9d',
    },
    {
      title: 'TARTES',
      description: `Le Tartes sono dolci tipici della pasticceria francese, delle crostatine moderne stratificate 
che sorprendono per la loro eleganza. <br>
Sono caratterizzate da una base di pasta frolla, farcita con ripieni che variano dal 
morbido al croccante, dal cremoso al spugnoso. <br>
Ogni morso offre un perfetto equilibrio di consistenze e sapori, 
rendendole ideali per ogni occasione, da un semplice dessert di fine pasto a un evento speciale.<br>
Sono ideali per un assaggio fino a due persone, ma disponibili anche su prenotazione 
per gruppi di 8-12 persone.`,
      color: '#293a57',
      path: '/tartes',
      fontColor: '#9ba7bd',
    },

    {
      title: 'SALATO',
      color: '#ffbfa6',
      path: '/salato',
    },

    {
      title: 'PICCOLA PASTICCERIA PER TEA TIME',
      color: '#dfbdff',
      path: '/tea-time',
      fontColor: '#653b9c',
    },
    {
      title: 'SÉLECTION DE THÉS E TISANE',
      description: `Tutte le varietà di tè (Verde, Nero, Bianco, Oolong e Pu Erh) provengono dalle foglie di una stessa pianta, la Camellia Sinensis, coltivata sin dall'antichità in Cina, India e Giappone. <br>
La differenziazione tra i vari tipi di Tè è principalmente dovuta ai diversi metodi di lavorazione a cui vengono sottoposti. <br>Ad esempio, possono essere appassiti, cotti in padella, arrotolati, ossidati o fermentati, ciascun passaggio contribuisce a creare sapori e caratteristiche uniche.`,
      color: '#60964e',
      path: '/the',
      fontColor: '#2a4222',
    },
    {
      title: 'BEVANDE',
      color: '#ffffff',
      path: '/bevande',
    },
  ];
}
