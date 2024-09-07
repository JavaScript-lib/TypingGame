////////////////////////////////////////////////////
//  Application Variables
////////////////////////////////////////////////////
const word = document.getElementById("word");
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end-game');
const settingsButton = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');
const words = [
    'sigh', 'tense', 'airplane', 'ball', 'pies', 'juice', 'warlike', 'bad',
    'north', 'dependent', 'steer', 'silver', 'highfalutin', 'superficial', 'quince', 'eight'
];
let randomWord;
let score = 0;
let time = 10;
////////////////////////////////////////////////////
//  Application Functions
////////////////////////////////////////////////////
const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
}
const addWordToDOM = () => {

}
////////////////////////////////////////////////////
//  Application Init
////////////////////////////////////////////////////

