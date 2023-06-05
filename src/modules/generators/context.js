const questions = (type, path) => {
  const prompts = [];

  if (!type) {
    prompts.push({
      type: 'input',
      name: 'type',
      message: 'What is your interface path?',
    });
  }

  if (!path) {
    prompts.push({
      type: 'input',
      name: 'context_path',
      message: 'What is your context path?',
    });
  }

  prompts.push({
    type: 'input',
    name: 'name',
    message: 'What is your context name?',
  });

  return prompts;
};

module.exports = (
  plop,
  interfacePath,
  contextPath,
) => {
  const data = { contextPath, typePath: interfacePath };
  const context = contextPath ?? '{{> contextPath }}';
  const type = interfacePath ?? '{{> typePath }}';

  plop.setGenerator('context', {
    description: 'Create your react context',
    prompts: questions(interfacePath, contextPath),
    actions: [
      {
        type: 'add',
        path: `${context}/{{> contextTypeName }}.ts`,
        templateFile: './templates/context.tsx.hbs',
        data,
      },
      {
        type: 'add',
        path: `${type}/{{> contextTypeName }}.interface.ts`,
        templateFile: './templates/interface.ts.hbs',
        data,
      },
    ],
  });
};
