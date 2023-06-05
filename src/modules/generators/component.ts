import { Answers } from 'inquirer';
import { NodePlopAPI } from 'plop';

const questions = (path?: string) => {
  const value = [
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
  ];

  if (!path) {
    value.push({
      type: 'input',
      name: 'typePath',
      message: 'What is your component path?',
    });
  }

  value.push({
    type: 'input',
    name: 'name',
    message: 'What is your component name?',
  });

  return value;
};

export default (
  plop: NodePlopAPI,
  typePath?: string,
  componentPath?: string,
) => {
  plop.setGenerator('component', {
    description: 'Create your react component',
    prompts: questions(typePath),
    actions: function (answers?: Answers) {
      const data = { componentPath, typePath };
      const component = componentPath ?? '{{> componentPath }}';
      const type = typePath ?? '{{> typePath }}';

      const actions = [
        {
          type: 'add',
          path: `${component}/{{> name }}/{{> name }}.tsx`,
          templateFile: './templates/component.tsx.hbs',
          data,
        },
        {
          type: 'add',
          path: `${component}/{{> name }}/{{> name }}.styles.tsx`,
          templateFile: './templates/styles.tsx.hbs',
          data,
        },
      ];

      if (answers?.propType == 'interface') {
        actions.push({
          type: 'add',
          path: `${type}/{{> componentTypeName }}.interface.ts`,
          templateFile: './templates/interface.ts.hbs',
          data,
        });
      } else if (answers?.propType === 'type') {
        actions.push({
          type: 'add',
          path: `${type}/{{> componentTypeName }}.type.ts`,
          templateFile: './templates/type.ts.hbs',
          data,
        });
      }

      return actions;
    },
  });
};
