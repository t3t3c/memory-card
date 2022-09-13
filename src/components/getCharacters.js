import imgCarlJohnson from '../img/Carl-Johnson.webp';
import imgBenny from '../img/Benny.webp';
import imgBigBear from '../img/Big-Bear.webp';
import imgEddiePulaski from '../img/Eddie-Pulaski.webp';
import imgFam1 from '../img/Fam1.webp';
import imgFam2 from '../img/Fam2.webp';
import imgFrankTenpenny from '../img/Frank-Tenpenny.webp';
import imgGal from '../img/Gal.webp';
import imgJizzyB from '../img/Jizzy-B.webp';
import imgJose from '../img/Jose.webp';
import imgLittleWeasel from '../img/Little-Weasel.webp';
import imgOGLoc from '../img/OG-Loc.webp';
import imgRyder from '../img/Ryder.webp';
import imgSnakehead from '../img/Snakehead.webp';
import imgSunny from '../img/Sunny.webp';
import imgSweet from '../img/Sweet.webp';
import imgTheTruth from '../img/The-Truth.webp';

export default function getCharacters(level) {
  const arrCharacters = [
    { name: 'Carl Johnson', photo: imgCarlJohnson },
    { name: 'Benny', photo: imgBenny },
    { name: 'Big Bear', photo: imgBigBear },
    { name: 'Eddie Pulaski', photo: imgEddiePulaski },
    { name: 'Fam1', photo: imgFam1 },
    { name: 'Fam2', photo: imgFam2 },
    { name: 'Frank Tenpenny', photo: imgFrankTenpenny },
    { name: 'Gal', photo: imgGal },
    { name: 'Jizzy B.', photo: imgJizzyB },
    { name: 'Jose', photo: imgJose },
    { name: 'Little Weasel', photo: imgLittleWeasel },
    { name: 'OG Loc', photo: imgOGLoc },
    { name: 'Ryder', photo: imgRyder },
    { name: 'Snakehead', photo: imgSnakehead },
    { name: 'Sunny', photo: imgSunny },
    { name: 'Sweet', photo: imgSweet },
    { name: 'The Truth', photo: imgTheTruth },
  ];

  function shuffleArray(array) {
    // https://bost.ocks.org/mike/shuffle/
    // Fisher-Yates Shuffle Algorythm

    // to not modify the original array
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      // get a random int from array length
      const j = Math.floor(Math.random() * (i + 1));
      // put shuffled element at the back of the array (replace with one in the front). The order in the front is not important.
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  return shuffleArray(arrCharacters.splice(0, level));
}
