import { database } from './fishData.js';
const tipsData = database.tips;

export const tipList = () => {
  let html = `
  <div class = "tips-container">
  <ul class="tips">
              <h1>Tips</h1>  `;
  for (const tip of tipsData) {
    html += `
     <li class="tip">${tip.text}</li>
     `;
  }
  html += `</ul>
  </div>
  </div> `;
  return html;
};
