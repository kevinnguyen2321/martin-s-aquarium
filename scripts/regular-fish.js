import { database } from './fishData.js';

const fish = database.fish;

export const regularFish = () => {
  let html = `
  <div class = "fish-header"><h1>Regular Fish</h1></div>
    `;
  for (const regular of fish) {
    if (regular.length % 5 !== 0 && regular.length % 3 !== 0) {
      html += `
      <article class = "fish">
       <img src="${regular.image}" alt="${regular.species}" class="fish-image">
        <div class="fish-details">
          <h2 class="fish-name">${regular.name}</h2>
          <p class="fish-species">Species: ${regular.species}</p>
        </div>
      </article>
      `;
    }
  }
  html += `</div>
          </div>   `;
  return html;
};

