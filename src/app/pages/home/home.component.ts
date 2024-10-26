import { Component } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  faChevronDown = faChevronDown;

  scrollToMenu() {
    document.getElementById('container')?.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }
  sections = [
    {
      title: 'VIENNOISERIES',
      description: `Le Viennoiseries sono un vero must della pasticceria francese. Caratterizzate da un impasto al lievito madre, privo di uova, 
        vengono sfogliate con burro di alta qualità per creare strati croccanti e gustosi.
        Questa tecnica di laminazione dona ai dolci una consistenza leggera e ariosa, che si traduce in un'esperienza sensoriale unica.
        Tutte le nostre Viennoiseries sono preparate utilizzando il Levain, il nostro lievito madre di nome Frodo, che conferisce loro una straordinaria leggerezza e sapore.`,
      color: '#05a69b',
      path: '/viennoiseries',
      img: 'assets/pain.png',
    },
    {
      title: 'BRIOCHES E LIEVITATI',
      description: `La Brioche è una delizia soffice e dorata. Il burro viene incorporato gradualmente per ottenere una consistenza setosa e un impasto che lievita lentamente. Durante la cottura, si forma una crosta croccante, mentre l'interno resta incredibilmente morbido. Arricchiamo l'impasto con scorza di limone per freschezza e aroma, e usiamo il nostro lievito madre “Frodo” per una consistenza soffice e facilmente digeribile.`,
      color: '#ffb35c',
      path: '/brioche',
    },
    {
      title: 'TARTES',
      description: `Le Tartes sono dolci tipici della pasticceria francese, delle crostatine moderne stratificate 
che sorprendono per la loro eleganza. 
Sono caratterizzate da una base di pasta frolla, farcita con ripieni che variano dal 
morbido al croccante, dal cremoso al spugnoso. 
Ogni morso offre un perfetto equilibrio di consistenze e sapori, 
rendendole ideali per ogni occasione, da un semplice dessert di fine pasto a un evento speciale.
Sono ideali per un assaggio fino a due persone, ma disponibili anche su prenotazione 
per gruppi di 8-12 persone.`,
      color: '#5e3c25',
      path: '/viennoiseries',
      fontColor: '#c9af9d',
    },

    {
      title: 'SALATO',
      color: '#ffffff',
      path: '/viennoiseries',
    },

    {
      title: 'SÉLECTION DE THÉS',
      description: `Tutte le varietà di tè (Verde, Nero, Bianco, Oolong e Pu Erh) provengono dalle foglie di una stessa pianta, la Camellia Sinensis, coltivata sin dall'antichità in Cina, India e Giappone. 
La differenziazione tra i vari tipi di Tè è principalmente dovuta ai diversi metodi di lavorazione a cui vengono sottoposti. Ad esempio, possono essere appassiti, cotti in padella, arrotolati, ossidati o fermentati, ciascun passaggio contribuisce a creare sapori e caratteristiche uniche.`,
      color: '#293a57',
      path: '/viennoiseries',
      fontColor: '#9ba7bd',
    },
    {
      title: 'PICCOLA PASTICCERIA PER TEA TIME',
      color: '#293a57',
      path: '/viennoiseries',
      fontColor: '#9ba7bd',
    },
    {
      title: 'TISANE',
      color: '#fcd6c5',
      path: '/viennoiseries',
    },
    {
      title: 'BEVANDE',
      color: '#ffffff',
      path: '/viennoiseries',
    },
    {
      title: 'BEVANDE ALCOLICHE',
      color: '#ffffff',
      path: '/viennoiseries',
    },
  ];
}
