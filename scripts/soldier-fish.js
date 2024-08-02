import { database } from './fishData.js';

const fish = database.fish;

export const soldierFish = () => {
  let html = `
 <div class = "fish-header"><h1>Soldier Fish</h1></div>
   `;
  for (const soldier of fish) {
    if (soldier.length % 5 === 0) {
      html += `
      <article class = "fish">
       <img src="${soldier.image}" alt="${soldier.species}" class="fish-image">
        <div class="fish-details">
          <h2 class="fish-name">${soldier.name}</h2>
          <p class="fish-species">Species: ${soldier.species}</p>
        </div>
      </article>
      `;
    }
  }

  return html;
};
