//prende tutti gli elementi della classe .carta e crea una lista chiamata carta erstituzioen di un NodeList
const carte = document.querySelectorAll(".carta");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible'); // Aggiunge la classe all'elemento specifico
            observer.unobserve(entry.target); // Ferma l'osservazione per questo elemento
        }
    });
  }, {
    threshold: 0.1 // Triggera quando il 10% dell'elemento è visibile
  });

// Osserva ogni elemento della NodeList "carte" e avviene avviata l'osservazione
carte.forEach(carta => observer.observe(carta));





// Selezioniamo le immagini principali e la lightbox
const mainImages = document.querySelectorAll('.main-image');
const lightbox = document.querySelector('.lightbox');
const largeImage = document.getElementById('large-image');
const description = document.getElementById('description');
const relatedImagesContainer = document.getElementById('related-images');

// Oggetto per le immagini correlate
const relatedImages = {
    //qua ci andranno le immagini per il blocco 1
    related1: [
        'https://dosgames.com/screens/pop.gif',
        'https://elfragmentoperdido.wordpress.com/wp-content/uploads/2019/06/32.jpg?w=833',
        'https://www.sify.com/wp-content/uploads/2023/04/prince_of_persia1_twitter_official.jpg'
    ],
    //qua ci andranno le immagini per il blocco 2
    related2: [
        'https://i.ytimg.com/vi/Ki3X1tfGFNM/maxresdefault.jpg',
        'https://storage.ensigame.com/games/eb87b59c0dd7f5fd58b9a6e090c1148b.jpg',
        'https://dosgames.com/screens/prince.gif'
    ],
    //qua ci andranno le immagini per il blocco 3
    related3: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GfxrqdvDpVm45fZUWNpu4inQgvivmWokmQ&srelated3-1.jpg',
        'https://lutris.net/media/games/screenshots/s1.png',
        'https://preview.redd.it/have-anyone-played-this-game-prince-od-persia-3d-v0-ozn0rqu8dcla1.jpg?width=640&crop=smart&auto=webp&s=3e597ff1bc5609342847536084daf01c51bc8a08'
    ],

    related4: [
      'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/13600/0000003879.1920x1080.jpg?t=1720535333',
      'https://i.ytimg.com/vi/7UhV1O5SJaY/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGD8gXihlMA8=&rs=AOn4CLCijVj8s4ftas7Gd3i7skYwG4WNMw',
      'https://www.speedrun.com/static/theme/mwzg4n8y/background.jpg?v=8b39afc'
  ],
  related5: [
    'https://images.kinguin.net/g/carousel-main-mobile/media/category/0/0/0000003944.600x338.jpg',
    'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/13500/0000003949.1920x1080.jpg?t=1720535324',
    'https://i.redd.it/pxt5qx8a9ey51.jpg'
  ],
  related6: [
    'related3-1.jpg',
    'related3-2.jpg',
    'related3-3.jpg'
  ],
  related7: [
    'related3-1.jpg',
    'related3-2.jpg',
    'related3-3.jpg'
  ],
  related8: [
    'related3-1.jpg',
    'related3-2.jpg',
    'related3-3.jpg'
  ],
  related9: [
    'related3-1.jpg',
    'related3-2.jpg',
    'related3-3.jpg'
  ],
  related10: [
    'related3-1.jpg',
    'related3-2.jpg',
    'related3-3.jpg'
  ],
  related11: [
    'related3-1.jpg',
    'related3-2.jpg',
    'related3-3.jpg'
  ],
  related12: [
    'related3-1.jpg',
    'related3-2.jpg',
    'related3-3.jpg'
  ],
  related13: [
    'related3-1.jpg',
    'related3-2.jpg',
    'related3-3.jpg'
  ],
  related14: [
    'related3-1.jpg',
    'related3-2.jpg',
    'related3-3.jpg'
  ],
  related15: [
    'related3-1.jpg',
    'related3-2.jpg',
    'related3-3.jpg'
  ],
  related16: [
    'related3-1.jpg',
    'related3-2.jpg',
    'related3-3.jpg'
  ],
  related17: [
    'related3-1.jpg',
    'related3-2.jpg',
    'related3-3.jpg'
  ],
};

function getId(myId){
  id_img = myId
}

let id_img = '';

function imgPrincipale(id){
  if(id == '1'){
      largeImage.style.width = '40%';
      description.textContent = `Il gioco Prince of Persia del 1989, creato da Jordan Mechner, è uno dei titoli più iconici nella storia dei videogiochi, famoso per la sua grafica fluida e 
      animazioni realistiche, realizzate con la tecnica del rotoscoping. Ambientato in un’antica Persia, il gioco racconta la storia di un eroe senza nome che deve salvare la principessa 
      prigioniera del malvagio visir Jaffar, entro sessanta minuti. Il gameplay combina elementi di platform e azione: il protagonista attraversa stanze piene di trappole letali, 
      come spuntoni e lame oscillanti, risolvendo enigmi e affrontando guardie per avanzare. Il movimento del personaggio è caratterizzato da animazioni dettagliate, che danno al gioco un feeling realistico, soprattutto nelle sequenze di salto e combattimento.
      La struttura a tempo limita il giocatore, intensificando l’atmosfera di urgenza. Nonostante la semplicità visiva, Prince of Persia è un gioco sofisticato per l’epoca, sia tecnicamente che narrativamente, e ha gettato le basi per molti giochi di avventura e azione successivi.`;
      
      
      return 'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/mighoet_sundback_1_prince_of_persia_1989_cover.jpg'
  }
  else if(id == '2'){
    largeImage.style.width = '40%';
    description.textContent = `Prince of Persia: Shadow and Flame è un videogioco di piattaforme sviluppato da Ubisoft e rilasciato nel 1994, 
    che rappresenta il seguito del celebre Prince of Persia. In questo gioco, i giocatori riprendono il controllo del Principe, un giovane guerriero che affronta nuove sfide 
    e avventure. Il gameplay combina elementi di azione, esplorazione e risoluzione di enigmi, con il protagonista che deve navigare attraverso vari livelli, evitando trappole e 
    combattendo nemici per avanzare nella storia. 
    Una delle caratteristiche distintive di Shadow and Flame è la sua grafica fluida, realizzata grazie alla tecnologia di rotoscoping, che consente animazioni realistiche dei movimenti
   dei personaggi. La trama del gioco si sviluppa attorno a temi di vendetta e redenzione, mentre il Principe cerca di superare ostacoli e nemici per raggiungere il suo obiettivo finale.
    Il gioco ha ricevuto recensioni positive per la sua giocabilità coinvolgente e la sua narrativa avvincente, contribuendo a consolidare il franchise di Prince of Persia
    e portando a successivi titoli e adattamenti su diverse piattaforme nel corso degli anni. In sintesi, Prince of Persia: Shadow and Flame è un classico dei giochi di piattaforma
    che riesce a mescolare azione e avventura in un’esperienza memorabile per i fan del genere.`


    return 'https://preview.redd.it/temz7plsyc5a1.png?width=640&crop=smart&auto=webp&s=7b9c492f16697ca74b17de514ae3a58c2180ff04';
  }
  else if(id == '3'){
    largeImage.style.width = '30%';
    description.textContent = `Prince of Persia 3D è un videogioco di azione e avventura sviluppato da Ubisoft e rilasciato nel 1999. Questo titolo rappresenta un importante passo avanti per 
    la serie, introducendo la grafica 3D e una nuova prospettiva nel gameplay. I giocatori assumono il ruolo del Principe, che deve affrontare il malvagio stregone Kaileena e salvare il suo 
    regno. Il gameplay di Prince of Persia 3D combina elementi di piattaforma, combattimento e risoluzione di enigmi. I giocatori devono esplorare ambientazioni tridimensionali, 
    superare trappole mortali e combattere nemici utilizzando una varietà di tecniche e armi. La grafica del gioco è stata apprezzata per il suo design dettagliato e le animazioni fluide, 
    che hanno dato vita a un mondo affascinante e coinvolgente. La trama del gioco ruota attorno al tema del destino e della redenzione, mentre il Principe cerca di fermare le malefatte del suo avversario e recuperare il controllo del suo regno. Prince of Persia 3D ha ricevuto recensioni miste da parte della critica, con apprezzamenti per il suo innovativo gameplay in 3D, ma anche critiche per alcuni problemi tecnici e di design.

    In sintesi, Prince of Persia 3D rappresenta un capitolo significativo nella storia della serie, combinando azione, avventura e un’ambientazione tridimensionale per offrire un’esperienza di gioco unica per i fan del franchise.`;
    return 'https://m.media-amazon.com/images/M/MV5BMjM1MzdkNGQtY2UzMi00Y2FjLWFkNmQtYjk2OGViN2ExZmVjXkEyXkFqcGc@._V1_.jpg';
  }

  else if(id == '4'){
    largeImage.style.width = '30%';
    description.textContent =  `Prince of Persia: The Sands of Time è un videogioco d'azione e avventura sviluppato da Ubisoft e rilasciato nel 2003. Questo titolo ha riportato in 
    auge la serie Prince of Persia, introducendo nuove meccaniche di gioco e una trama coinvolgente. I giocatori vestono i panni del Principe, che si imbatte in un antico 
    artefatto, la Sabbia del Tempo, che gli consente di controllare il tempo stesso.
    Il gameplay di The Sands of Time combina elementi di platforming, combattimento e risoluzione di enigmi. I giocatori possono rallentare, fermare o riavvolgere il tempo per superare ostacoli,
   evitare trappole mortali e combattere nemici. Questa meccanica innovativa ha aggiunto una nuova dimensione all'esperienza di gioco, permettendo ai giocatori di affrontare le sfide 
   in modi creativi.
  La trama segue il Principe mentre cerca di salvare il suo regno da un disastro dopo che la Sabbia del Tempo viene accidentalmente liberata. Insieme alla principessa Farah, 
  il Principe deve affrontare nemici e risolvere enigmi per rimediare al caos causato dall'artefatto. La narrazione è arricchita da un forte sviluppo dei personaggi e da dialoghi accattivanti.
  Prince of Persia: The Sands of Time è stato acclamato dalla critica per la sua innovativa meccanica di controllo del tempo, la grafica di alta qualità e la giocabilità avvincente. 
  Ha ricevuto numerosi premi e ha contribuito a rinvigorire la serie, portando a successivi titoli e adattamenti cinematografici. In sintesi, The Sands of Time è un capitolo fondamentale 
  nella storia di Prince of Persia, combinando azione, avventura e una trama memorabile per offrire un'esperienza di gioco eccezionale.`;

  return 'https://m.media-amazon.com/images/M/MV5BODljYThkMjEtZTY2Zi00ODg5LWE4M2EtZWNkYjVhMzQ5ZDIxXkEyXkFqcGc@._V1_.jpg';
  }

  else if(id == '5'){
    largeImage.style.width = '50%';
    description.textContent = `Prince of Persia: Warrior Within è un videogioco d'azione e avventura sviluppato da Ubisoft e pubblicato nel 2004 come seguito diretto di The Sands of Time. 
    Il gioco presenta una svolta più oscura e matura rispetto al titolo precedente, sia nel tono narrativo che nelle ambientazioni. Nei panni del Principe, i giocatori intraprendono un viaggio 
    in una terra minacciosa e sconosciuta per cercare di sfuggire al Dahaka, un'entità spietata che lo perseguita come conseguenza dell'uso della Sabbia del Tempo. Warrior Within introduce 
    un sistema di combattimento più complesso, con nuove mosse, abilità e una varietà di armi a disposizione del Principe. I giocatori possono utilizzare attacchi combinati e interagire con 
    l’ambiente per sconfiggere i nemici, sfruttando anche il controllo del tempo per avere un vantaggio nelle battaglie. Le ambientazioni sono intricate e oscure, con una forte enfasi su 
    atmosfere gotiche e una colonna sonora metal che accompagna l'azione intensa del gioco. La trama esplora temi di destino e redenzione, mentre il Principe cerca di cambiare il proprio futuro 
    ed evitare la morte. L’ambientazione cupa e il tono maturo rappresentano un cambiamento significativo rispetto al capitolo precedente, offrendo un'esperienza più complessa e drammatica.
    Warrior Within ha ricevuto recensioni positive per il sistema di combattimento avanzato, la profondità della trama e il design dell’ambientazione, sebbene il cambiamento di tono rispetto a 
    The Sands of Time abbia diviso parte del pubblico. Nel complesso, *Prince of Persia: Warrior Within* rappresenta un’evoluzione più oscura e profonda della serie, portando i giocatori in 
    un’avventura intensa e ricca di sfide.`;

    return 'https://store.ubisoft.com/on/demandware.static/-/Sites-masterCatalog/default/dw59f81f00/images/large/575ffda7a3be1633568b4e08.jpg';
  }
  else{
      description.textContent = `Descrizione N`;
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlBDJIfXKog0nrgyZJmc7C8ylPgKOQpwrRQ&s';
  }
}

// Aggiungi un event listener a ciascuna immagine principale
mainImages.forEach((image) => {
  image.addEventListener('click', () => {
      // Mostra l'immagine principale nella lightbox
      console.log(id_img);
      console.log(imgPrincipale(id_img));
      largeImage.src = imgPrincipale(id_img);
      if(getId(id_img) == '1'){
          largeImage.style = '50%';
      }

      // Mostra le immagini correlate
      const relatedKey = image.getAttribute('data-related');
      updateRelatedImages(relatedImages[relatedKey]);

      // Mostra la lightbox
      lightbox.style.display = 'flex';
      id_img = '';
  });
});

// Funzione per aggiornare le immagini correlate
function updateRelatedImages(images) {
  relatedImagesContainer.innerHTML = ''; // Pulisci le immagini correlate esistenti
  images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Related Image';
      img.addEventListener('click', () => {
          largeImage.src = src; // Cambia l'immagine principale
      });
      relatedImagesContainer.appendChild(img);
  });
}

// Chiudi la lightbox quando si fa clic sulla "x"
document.querySelector('.close').addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Chiudi la lightbox se si clicca all'esterno del contenuto
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
      lightbox.style.display = 'none';
  }
});
