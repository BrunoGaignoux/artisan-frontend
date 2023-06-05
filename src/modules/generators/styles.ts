import { NodePlopAPI } from 'plop';

export default (plop: NodePlopAPI, path?: string) => {
  const data = { componentPath: path };
  const component = path ?? '{{> componentPath }}';
  const prompts = [];

  if (!path) {
    prompts.push({
      type: 'input',
      name: 'path',
      message: 'What is your component path?',
    });
  }

  prompts.push({
    type: 'input',
    name: 'name',
    message: 'What is your component name?',
  });

  plop.setGenerator('component styles', {
    description: 'Create your react component styles',
    prompts,
    actions: [
      {
        type: 'add',
        path: `${component}/{{> name }}/{{> name }}.styles.tsx`,
        templateFile: './templates/styles.tsx.hbs',
        data,
      },
    ],
  });
};
