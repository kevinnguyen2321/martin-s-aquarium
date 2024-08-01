import { database } from './fishData.js';
const fishData = database.fish;

export const fishList = () => {
  // Generate an HTML representation of each fish
  let html = `
              <div class =fish-container>
               <div class = "fish-header"><h1>Fish</h1></div>   
               <div class = "cards-container">
               `;
  for (const fish of fishData) {
    html += `
    <article class = "fish">
     <img src="${fish.image}" alt="${fish.species}" class="fish-image">
      <div class="fish-details">
        <h2 class="fish-name">${fish.name}</h2>
        <p class="fish-species">Species: ${fish.species}</p>
      </div>
    </article>
    `;
  }
  html += `
  </div>
  </div>`;
  return html;
};

console.log(fishList());
