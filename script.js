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
        'related2-1.jpg',
        'related2-2.jpg',
        'related2-3.jpg'
    ],
    //qua ci andranno le immagini per il blocco 3
    related3: [
        'related3-1.jpg',
        'related3-2.jpg',
        'related3-3.jpg'
    ],

    related4: [
      'related3-1.jpg',
      'related3-2.jpg',
      'related3-3.jpg'
  ],
  related5: [
    'related3-1.jpg',
    'related3-2.jpg',
    'related3-3.jpg'
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
