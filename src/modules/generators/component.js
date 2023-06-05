const questions = (path) => {
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
      message: 'What is the path of your previous choice?',
    },
  ];

  if (!path) {
    value.push({
      type: 'input',
      name: 'path',
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

module.exports = (plop, typePath, componentPath) => {
  plop.setGenerator('component', {
    description: 'Create your react component',
    prompts: questions(typePath),
    actions: function (answers) {
      const data = {
        componentPath: componentPath ?? answers?.path,
        typePath: typePath ?? answers?.type,
      };
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
