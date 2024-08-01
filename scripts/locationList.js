import { database } from './fishData.js';
const locations = database.locations;

export const locationList = () => {
  let html = `
  <div class = "location-container">
  <h1>Locations</h1>;
  <article class = "locations">`;

  for (const location of locations) {
    html += `
    <section class = "location">${location.name}</section>
    `;
  }
  html += `
  </article>
  </div>
  `;
  return html;
};
