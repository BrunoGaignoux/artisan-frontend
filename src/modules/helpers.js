'use strict';

const formatPascalCase = (value) =>
  value.replace(
    /(\w)(\w*)/g,
    (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase(),
  );

module.exports = (plop) => {
  plop.setHelper('PascalCase', (text) => {
    if (text.includes(' ')) {
      const values = text.split(' ');
      let word = '';

      for (const iterator of values) {
        word += formatPascalCase(iterator);
      }

      return word;
    }

    return formatPascalCase(text);
  });
  plop.setHelper('sourcecase', (source) =>
    source
      .split('/')
      .filter((n) => n)
      .join('/'),
  );
};
