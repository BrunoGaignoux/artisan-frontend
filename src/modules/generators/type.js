module.exports = (plop, path) => {
  const data = { typePath: path };
  const type = path ?? '{{> typePath }}';
  const prompts = [];

  if (!path) {
    prompts.push({
      type: 'input',
      name: 'type',
      message: 'What is your type path?',
    });
  }

  prompts.push({
    type: 'input',
    name: 'name',
    message: 'What is your type name?',
  });

  plop.setGenerator('type', {
    description: 'Create your react type',
    prompts,
    actions: [
      {
        type: 'add',
        path: `${type}/{{> typeName }}.type.ts`,
        templateFile: './templates/type.ts.hbs',
        data,
      },
    ],
  });
};
