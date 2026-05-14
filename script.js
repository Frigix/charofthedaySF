const characters = [
    {
        name: 'Arcueid Brunestud',
        image: './img/tm/arc.jpg'
    },
    {
        name: 'Artoria Pendragon',
        image: './img/tm/saber.jpg'
    },
    {
        name: 'Ryougi Shiki',
        image: './img/tm/knk/ryougi.jpg'
    },
    {
        name: 'Araya Souren',
        image: './img/tm/knk/araya.webp'
    },
    {
        name: 'Kokutou Mikiya',
        image: './img/tm/knk/mikiya.webp'
    },
    {
        name: 'Kokutou Azaka',
        image: './img/tm/knk/azaka.webp'
    },
    {
        name: 'Asagami Fujino',
        image: './img/tm/knk/fujino.webp'
    },
    {
        name: 'Aozaki Touko',
        image: './img/tm/knk/touko.webp'
    },
    {
        name: 'Aozaki Aoko',
        image: './img/tm/aoko.jpg'
    },

]

const picture = document.getElementById('picture');
const charname = document.getElementById('name');
const rollBtn = document.getElementById('rollBtn');
const today = new Date().toDateString();
const savedCharacter = localStorage.getItem('character');
const savedDate = localStorage.getItem('date');

function displayCharacter (character) {
    picture.src = character.image;
    picture.alt = character.name;
    charname.innerText = character.name;
}

function saveCharacter (character) {
    localStorage.setItem('character', JSON.stringify(character));
    localStorage.setItem('date', today)
}

//if (savedCharacter && savedDate === today) {
//    const character = JSON.parse(savedCharacter);
//    displayCharacter(character);
//    rollBtn.disabled = true;
//    rollBtn.innerText = 'Come back tomorrow'
//}

rollBtn.onclick = function () {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const character = characters[randomIndex];
    displayCharacter(character);
    saveCharacter(character);
//    rollBtn.disabled = true;
//    rollBtn.innerText = 'Come back tomorrow'
}
