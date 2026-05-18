const picture = document.getElementById('picture');
const wiki = document.getElementById('wiki');
const charname = document.getElementById('name');
const rollBtn = document.getElementById('rollBtn');
const today = new Date().toDateString();
const savedCharacter = localStorage.getItem('character');
const savedDate = localStorage.getItem('date');

function displayCharacter (character) {
    picture.src = character.image;
    picture.alt = character.name;
    
    if (character.wiki) {
        wiki.href = character.wiki;
    }

    charname.innerText = character.name;
}

function saveCharacter (character) {
    localStorage.setItem('character', JSON.stringify(character));
    localStorage.setItem('date', today)
}

if (savedCharacter && savedDate === today) {
    const character = JSON.parse(savedCharacter);
    displayCharacter(character);
    rollBtn.disabled = true;
    rollBtn.innerText = 'Come back tomorrow'
}

rollBtn.onclick = function () {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const character = characters[randomIndex];
    displayCharacter(character);
    saveCharacter(character);
    rollBtn.disabled = true;
    rollBtn.innerText = 'Come back tomorrow'
}
