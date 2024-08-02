import { fishList } from './fishList.js';
import { tipList } from './tipList.js';
import { locationList } from './locationList.js';
import { mostHolyFish } from './holy-fish.js';
import { soldierFish } from './soldier-fish.js';
import { regularFish } from './regular-fish.js';

// Generate the fish list
const fishHTML = fishList();

// Generate the care tips
const tipHTML = tipList();

// Generate the location list
const locationHTML = locationList();

// Render each HTML string to the correct DOM element
const fishSection = document.getElementById('fishList');
fishSection.innerHTML = fishHTML;

const tipSection = document.getElementById('tipList');
tipSection.innerHTML = tipHTML;

const locationSection = document.getElementById('locationList');
locationSection.innerHTML = locationHTML;

// //Martin's fish list//

// //Holy fish//
const holyFishes = mostHolyFish();

// //Soldier fish//
const soldierFishes = soldierFish();

// //Regular fish//
const regularFishes = regularFish();

fishSection.innerHTML = `${holyFishes}${soldierFishes}${regularFishes}`;
