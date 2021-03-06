'use strict';

async function addScripts(paths, page) {
  /* eslint-disable no-restricted-syntax, no-await-in-loop */
  for (const path of paths) {
    const scriptElemHandle = await page.addScriptTag({ path });
    await page.evaluate((scriptElem) => {
      scriptElem.setAttribute('data-ace', '');
    }, scriptElemHandle);
  }
  /* eslint-enable no-restricted-syntax, no-await-in-loop */
}

module.exports = {
  addScripts,
};
