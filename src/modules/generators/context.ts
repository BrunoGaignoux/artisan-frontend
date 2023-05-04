import { NodePlopAPI } from 'plop';

export default (plop: NodePlopAPI) => {
  plop.setGenerator('context', {
    description: 'Create your react context',
    prompts: [
      {
        type: 'input',
        name: 'type',
        message: 'What is your interface path?',
      },
      {
        type: 'input',
        name: 'context_path',
        message: 'What is your context path?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your context name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{> contextPath }}/{{> contextTypeName }}.ts',
        templateFile: './templates/context.tsx.hbs',
      },
      {
        type: 'add',
        path: '{{> typePath }}/{{> contextTypeName }}.interface.ts',
        templateFile: './templates/interface.ts.hbs',
      },
    ],
  });
};
