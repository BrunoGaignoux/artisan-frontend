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
      name: 'hook_path',
      message: 'What is your hook path?',
    });
  }

  prompts.push({
    type: 'input',
    name: 'name',
    message: 'What is your hook name?',
  });

  return prompts;
};

module.exports = (
  plop,
  interfacePath,
  hookPath,
) => {
  const data = { hookPath, typePath: interfacePath };
  const hook = hookPath ?? '{{> hookPath }}';
  const type = interfacePath ?? '{{> typePath }}';

  plop.setGenerator('hook', {
    description: 'Create your react hook',
    prompts: questions(interfacePath, hookPath),
    actions: [
      {
        type: 'add',
        path: `${hook}/{{> hookTypeName }}.ts`,
        templateFile: './templates/hook.tsx.hbs',
        data,
      },
      {
        type: 'add',
        path: `${type}/{{> hookTypeName }}.interface.ts`,
        templateFile: './templates/interface.ts.hbs',
        data,
      },
    ],
  });
};
