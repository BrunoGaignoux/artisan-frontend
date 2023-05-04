import { NodePlopAPI } from 'plop';

export default (plop: NodePlopAPI) => {
  plop.setGenerator('api', {
    description: 'Create your react next api',
    prompts: [
      {
        type: 'input',
        name: 'api_name',
        message: 'What is your api name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/api/{{> apiTypeName }}.ts',
        templateFile: './templates/api.ts.hbs',
      },
    ],
  });
};
