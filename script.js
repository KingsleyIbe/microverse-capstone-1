
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
        image: './images/mithi-debas',
        name: 'Mithi Debas',
        role: 'Chairman of the Organisation',
        bio: 'Ex-Professor at the University of Manchester'
    },
    {
        image: './images/sam-omar',
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
const guestSpeakerAtEvent = document.querySelector('#image-display');
guestSpeakers.forEach((card) => {
    guestSpeakerAtEvent.innerHTML += displaySpeakerInfo(card);
});
};
