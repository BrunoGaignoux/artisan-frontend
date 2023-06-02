import { NodePlopAPI } from 'plop';

export default (plop: NodePlopAPI) => {
  plop.setGenerator('component', {
    description: 'Create your react component',
    prompts: [
      {
        type: 'list',
        name: 'propType',
        message:
          'Do you want your component to be created with type or interface?',
        choices: [
          {
            name: 'Interface',
            value: 'interface',
          },
          {
            name: 'Type',
            value: 'type',
          },
        ],
      },
      {
        type: 'input',
        name: 'type',
        message: 'What is your {{> propType }} path?',
      },
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
    actions: function (answers: any) {
      const actions = [
        {
          type: 'add',
          path: '{{> componentPath }}/{{> name }}/{{> name }}.tsx',
          templateFile: './templates/component.tsx.hbs',
        },
        {
          type: 'add',
          path: '{{> componentPath }}/{{> name }}/{{> name }}.styles.tsx',
          templateFile: './templates/styles.tsx.hbs',
        },
      ];

      if (answers?.propType == 'interface') {
        actions.push({
          type: 'add',
          path: '{{> typePath }}/{{> componentTypeName }}.interface.ts',
          templateFile: './templates/interface.ts.hbs',
        });
      } else if (answers?.propType === 'type') {
        actions.push({
          type: 'add',
          path: '{{> typePath }}/{{> componentTypeName }}.type.ts',
          templateFile: './templates/type.ts.hbs',
        });
      }

      return actions;
    },
  });
};
