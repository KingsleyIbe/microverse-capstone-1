
window.onload = () => {

const guestSpeakers = [
    {
        image: './images/emma-gbenga.png',
        name: 'Emma Gbenga',
        role: 'Founder Open Source Africa',
        bio: 'Formal UI designer at Google'
    },
    {
        image: './images/charles-shady.png',
        name: 'Charles Shady',
        role: 'Full-stack developer',
        bio: 'Ex-Professor at the University of Manchester'
    },
    {
        image: './images/ajise-bonke.png',
        name: 'Ajise Bonke',
        role: 'Chairman of the Organisation',
        bio: 'Ex-Professor at the University of Manchester'
    },
    {
        image: './images/kalolo-hauf.png',
        name: 'Kalolo Hauf',
        role: 'Chairman of the Organisation',
        bio: 'Ex-Professor at the University of Manchester'
    },
    {
        image: './images/mithi-debas.png',
        name: 'Mithi Debas',
        role: 'Chairman of the Organisation',
        bio: 'Ex-Professor at the University of Manchester'
    },
    {
        image: './images/sam-omar.png',
        name: 'Sam Omar',
        role: 'Chairman of the Organisation',
        bio: 'Ex-Professor at the University of Manchester'
    },
];

function displaySpeakerInfo(speakerInfo) {
    const speakers = 
    `<div class="speaker-1">
    <div class="speaker-image">
        <img src=${speakerInfo.image} alt="speaker-1">
    </div>
    <div>
        <h2>${speakerInfo.name}</h2>
        <h3>${speakerInfo.role}</h3>
        <h4>${speakerInfo.bio}</h4>
    </div>
</div>`;
return speakers;
}
const guestSpeakerAtEvent = document.querySelector('.image-display-1');
guestSpeakers.forEach((card) => {
    guestSpeakerAtEvent.innerHTML += displaySpeakerInfo(card);
});
};

const hamburger = document.querySelector('.menu1');
const closeBtn = document.querySelector('.closeBtn');

hamburger.addEventListener('click', () => {
    console.log('clicked')
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'block';
  });

  close(closeBtn,'.mobile-menu');
  closeBtn.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'none';
    close(menu);
  });

  const backToMainPage = document.querySelector('.menuPopUp');
  close(backToMainPage,'.mobile-menu');
  backToMainPage.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'none';
  });

   function close(menu, toBeClose){
     menu.addEventListener('click' , () =>{
        const value = document.querySelector(toBeClose);
        value.style.display = 'none';
     });
  };

//   const closeBtn1 = document.querySelector('.closeBtn-1');
//   close(closeBtn1,'.mobile-project-details');
