import { NodePlopAPI } from 'plop';

export default (plop: NodePlopAPI) => {
  plop.setGenerator('interface', {
    description: 'Create your react interface',
    prompts: [
      {
        type: 'input',
        name: 'type',
        message: 'What is your interface path?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your interface name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{> typePath }}/{{> interfaceTypeName }}.ts',
        templateFile: './templates/interface.ts.hbs',
      },
    ],
  });
};
