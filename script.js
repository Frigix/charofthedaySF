const LOCAL_DATA_KEY = 'localData';

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
    picture.alt = character.name;
    
    if (character.wiki) {
        wiki.href = character.wiki;
    }

    charname.innerText = character.name;
}

function saveCharacter(character) {
    localData.unshift(
        {
            id: character.name,
            date: today
        } 
    )

    localStorage.setItem(LOCAL_DATA_KEY, JSON.stringify(localData));
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

  characters.forEach(it => {    
    let localItem = localData.find(localIt => localIt.id === it.name);

    let item = document.createElement('div');
    item.classList.add('sfDexItem');

    const img = document.createElement('img');
    img.src = localItem ? it.image : "./img/unknown.jpg";
    img.alt = it.name;

    const label = document.createElement('div');
    label.classList.add('label');
    label.textContent = localItem ? it.name : "Not yet obtained";

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

if (localData.length && localData[0].date === today) {
    let characterId = localData[0].id;
    let character = characters.find(it => it.name === characterId); 
    
    displayCharacter(character);
    disableRollButton();
} else {
    enableRollButton();
}

rollBtn.onclick = function () {
    let randomIndex = Math.floor(Math.random() * characters.length);
    let character = characters[randomIndex];

    saveCharacter(character);
    location.reload();
}

displaySFDex();