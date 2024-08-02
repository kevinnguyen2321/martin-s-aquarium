import { database } from './fishData.js';

const fish = database.fish;

export const mostHolyFish = () => {
  let html = `
  <div class =fish-container>
  <div class = "cards-container">
  <div class = "fish-header"><h1>Holy Fish</h1></div>
   `;

  for (const holyFish of fish) {
    if (holyFish.length % 3 === 0) {
      html += `
      <article class = "fish">
       <img src="${holyFish.image}" alt="${holyFish.species}" class="fish-image">
        <div class="fish-details">
          <h2 class="fish-name">${holyFish.name}</h2>
          <p class="fish-species">Species: ${holyFish.species}</p>
        </div>
      </article>
      `;
    }
  }
  // html += `
  // </div>
  // `;
  return html;
};
