import { NodePlopAPI } from 'plop';

export default (plop: NodePlopAPI, path?: string) => {
  const data = { typePath: path };
  const type = path ?? '{{> typePath }}';
  const prompts = [];

  if (!path) {
    prompts.push({
      type: 'input',
      name: 'type',
      message: 'What is your interface path?',
    });
  }

  prompts.push({
    type: 'input',
    name: 'name',
    message: 'What is your interface name?',
  });

  plop.setGenerator('interface', {
    description: 'Create your react interface',
    prompts,
    actions: [
      {
        type: 'add',
        path: `${type}/{{> interfaceTypeName }}.ts`,
        templateFile: './templates/interface.ts.hbs',
        data,
      },
    ],
  });
};
