const formatPascalCase = (value) => value.replace(/(\w)(\w*)/g, (g0,g1,g2) => g1.toUpperCase() + g2.toLowerCase())

module.exports = (
    /** @type {import('plop').NodePlopAPI} */
    plop
) => {
    plop.setHelper('PascalCase', (text) => {
        if (text.includes(' ')) {
            const values = text.split(' ');
            let word = '';

            for (const iterator of values) {
                word += formatPascalCase(iterator);
            }

            return word;
        }

        return formatPascalCase(text);
    });
    plop.setHelper('sourcecase', (source) => source.split('/').filter(n => n).join('/'));

    plop.setPartial('typePath', '{{ sourcecase type }}');
    plop.setPartial('componentPath', '{{ sourcecase path }}');
    plop.setPartial('componentName', '{{ PascalCase name }}');
    plop.setPartial('componentTypeName', '{{ kebabCase name }}');

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
};
