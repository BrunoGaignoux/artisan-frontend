import { NodePlopAPI } from 'plop';

export default (plop: NodePlopAPI, path?: string) => {
  plop.setGenerator('type', {
    description: 'Create your react type',
    prompts: [
      {
        type: 'input',
        name: 'type',
        message: 'What is your type path?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your type name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{> typePath }}/{{> typeName }}.ts',
        templateFile: './templates/type.ts.hbs',
      },
    ],
  });
};
