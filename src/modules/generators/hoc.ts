import { NodePlopAPI } from 'plop';

export default (plop: NodePlopAPI, typePath?: string, hocPath?: string) => {
  plop.setGenerator('hoc', {
    description: 'Create your react hoc',
    prompts: [
      {
        type: 'input',
        name: 'type',
        message: 'What is your type path?',
      },
      {
        type: 'input',
        name: 'hoc_path',
        message: 'What is your hoc path?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your hoc name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{> hocPath }}/{{> hocTypeName }}.ts',
        templateFile: './templates/hoc.tsx.hbs',
      },
      {
        type: 'add',
        path: '{{> typePath }}/{{> hocTypeName }}.interface.ts',
        templateFile: './templates/interface.ts.hbs',
      },
    ],
  });
};
