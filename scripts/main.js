import { fishList } from './fishList.js';
import { tipList } from './tipList.js';
import { locationList } from './locationList.js';

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
