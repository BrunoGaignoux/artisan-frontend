import { NodePlopAPI } from 'plop';

export default (plop: NodePlopAPI, typePath?: string, hookPath?: string) => {
  plop.setGenerator('hook', {
    description: 'Create your react hook',
    prompts: [
      {
        type: 'input',
        name: 'type',
        message: 'What is your interface path?',
      },
      {
        type: 'input',
        name: 'hook_path',
        message: 'What is your hook path?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{> hookPath }}/{{> hookTypeName }}.ts',
        templateFile: './templates/hook.tsx.hbs',
      },
      {
        type: 'add',
        path: '{{> typePath }}/{{> hookTypeName }}.interface.ts',
        templateFile: './templates/interface.ts.hbs',
      },
    ],
  });
};
