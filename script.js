
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
        bio: 'Amazon Product Designer'
    },
    {
        image: './images/ajise-bonke.png',
        name: 'Ajise Bonke',
        role: 'UI/UX',
        bio: 'Product Manager at Octax'
    },
    {
        image: './images/kalolo-hauf.png',
        name: 'Kalolo Hauf',
        role: 'Managing Director',
        bio: 'Gricd Integrated Services'
    },
    {
        image: './images/mithi-debas.png',
        name: 'Mithi Debas',
        role: 'CEO',
        bio: 'Drelugs Limited - kelugs integrated venture'
    },
    {
        image: './images/sam-omar.png',
        name: 'Sam Omar',
        role: 'CTO',
        bio: 'VFD Micro-finance Bank'
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

const hamburger = document.querySelector('.menu1');
const closeBtn = document.querySelector('.closeBtn');

hamburger.addEventListener('click', () => {
    console.log("clicked")
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
};
