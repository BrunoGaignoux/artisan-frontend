module.exports = (plop) => {
    plop.setGenerator('component', {
        description: 'Create a react component',
        prompts: [
            {
                type: 'input',
                name: 'path',
                message: 'What is your component path?'
            },
            {
                type: 'input',
                name: 'type',
                message: 'What is your types path?'
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?'
            }
        ],
        actions: [
            {
                type: 'add',
                path: '{{> componentPath }}/{{> componentName }}/{{> componentName }}.tsx',
                templateFile: './templates/component.tsx.hbs'
            },
            {
                type: 'add',
                path: '{{> componentPath }}/{{> componentName }}/{{> componentName }}.styles.tsx',
                templateFile: './templates/styles.tsx.hbs'
            },
            {
                type: 'add',
                path: '{{> typePath }}/{{> componentTypeName }}.types.tsx',
                templateFile: './templates/types.ts.hbs'
            }
        ]
    });
}