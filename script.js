const LOCAL_DATA_KEY = 'localData';
const DEBUG = false;

const picture = document.getElementById('picture');
const wiki = document.getElementById('wiki');
const sfDex = document.getElementById('sfDex');
const sfDexCount = document.getElementById('sfDexCount');
const charname = document.getElementById('name');
const rollBtn = document.getElementById('rollBtn');
const today = new Date().toDateString();
const rawLocalData = localStorage.getItem(LOCAL_DATA_KEY);
const localData = rawLocalData ? JSON.parse(rawLocalData) : [];

function displayCharacter (character) {
    picture.src = character.image;
    picture.alt = getCharacterDisplayName(character);
    
    if (character.wiki) {
        wiki.href = character.wiki;
    }

    charname.innerText = getCharacterDisplayName(character);
}

function saveCharacter(character) {
    localData.unshift(
        {
            id: character.key,
            date: today
        } 
    )

    localStorage.setItem(LOCAL_DATA_KEY, JSON.stringify(localData));
}

function getCharacterDisplayName(character) {
    return character.displayName ? character.displayName : character.key
}

function disableRollButton() {
    rollBtn.disabled = true;
    rollBtn.innerText = 'Come back tomorrow'
}

function enableRollButton() {
    rollBtn.disabled = false;
    rollBtn.innerText = 'Roll'
}

function displaySFDex() {
    var total = 0;
    var totalObtained = 0;

  characters.forEach(character => {
    let localItem = localData.find(it => it.id === character.key);

    let item = document.createElement('div');
    item.classList.add('sfDexItem');
    item.addEventListener("touchstart", function() {}, true);

    const img = document.createElement('img');
    img.src = localItem ? character.image : "./img/unknown.jpg";
    img.alt = getCharacterDisplayName(character);

    const label = document.createElement('div');
    label.classList.add('label');
    label.textContent = localItem ? getCharacterDisplayName(character) : "Not yet obtained";

    item.appendChild(img);
    item.appendChild(label);

    sfDex.appendChild(item);

    total++;
    if (localItem) {
        totalObtained++;
    }
  });

  let isCompleted = total === totalObtained;
  var countText = `${totalObtained}/${total}`;
  if (isCompleted) {
    countText =  `🎉 ${countText} 🎉`;
  }

  sfDexCount.innerText = countText;
}

rollBtn.onclick = function () {
    let randomIndex = Math.floor(Math.random() * characters.length);
    let character = characters[randomIndex];

    saveCharacter(character);
    location.reload();
}

if (localData.length && localData[0].date === today) {
    let characterId = localData[0].id;
    let character = characters.find(it => it.key === characterId);

    displayCharacter(character);
    disableRollButton();
} else {
    enableRollButton();
}

if (DEBUG) {
    console.log("DEBUG MODE ON");

    const keys = new Set();

    characters.forEach(character => {

        if (keys.has(character.key)) {
            console.error(`Duplicate key: ${character.key}`);
        }

        keys.add(character.key);

        const img = new Image();

        img.onerror = () => {
            console.error(`Missing image: ${character.image}`);
        };

        img.src = character.image;

        if (character.wiki) {
            fetch(character.wiki, { method: 'HEAD', mode: 'no-cors' })
        }

        let localItem = localData.find(it => it.id === character.key);
        if (!localItem) {
            saveCharacter(character);
        }
    });
}

displaySFDex();