import { NodePlopAPI } from 'plop';

const formatPascalCase = (value: string) =>
  value.replace(
    /(\w)(\w*)/g,
    (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase(),
  );

export default (plop: NodePlopAPI) => {
  plop.setHelper('PascalCase', (text: string): string => {
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
  plop.setHelper('sourcecase', (source: string): string =>
    source
      .split('/')
      .filter((n) => n)
      .join('/'),
  );
};
