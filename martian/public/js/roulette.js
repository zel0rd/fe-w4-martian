const getLineText = (num) => `<span class="line__text" data-id='${num}'>${num}</span>`;

const getRoulette = (length) => {
  let itemHtml = ``;
  for (let i = 0; i < length; i++) {
    itemHtml += `<div class="line line${i + 1}">
            ${getLineText(i)}
            ${getLineText((i + 8).toString(16).toUpperCase())}
        </div>`;
  }
  return itemHtml;
};

export { getRoulette };
