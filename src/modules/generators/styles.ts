import { NodePlopAPI } from 'plop';

export default (plop: NodePlopAPI) => {
  plop.setGenerator('component styles', {
    description: 'Create your react component styles',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'What is your component path?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{> componentPath }}/{{> name }}/{{> name }}.styles.tsx',
        templateFile: './templates/styles.tsx.hbs',
      },
    ],
  });
};
