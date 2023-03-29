module.exports = (
    /** @type {import('plop').NodePlopAPI} */
    plop
) => {
    plop.setPartial('mapperName', 'module-{{ kebabCase name }}');
    plop.setPartial('tagName', '{{ kebabCase name }}');
    plop.setPartial('componentName', '{{ CamelCase name }}');

    plop.setGenerator('component', {
        description: 'Create a component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?'
            }
        ],
        actions: [
            {
                type: 'add',
                path: '../app/elements/{{> tagName }}/{{> tagName }}.ts',
                templateFile: './templates/component/component.ts.hbs'
            },
            {
                type: 'add',
                path: '../app/elements/{{> tagName }}/styles.ts',
                templateFile: './templates/component/styles.ts.hbs'
            }
        ]
    });

    plop.setGenerator('instance-mixin', {
        description: 'Create Instance Mixin',
        prompts: [
            {
                type: 'list',
                name: 'instance',
                message: 'What is your instance?',
                choices: ['ID Broker', 'HK Broker', 'HK GI', 'PH Broker', 'VN Broker', 'TH GI']
            },
            {
                type: 'input',
                name: 'name',
                message: 'What component do you want to add?',
                suffix: ' (e.g.: applicant details)'
            }
        ],

        actions: [
            {
                type: 'add',
                path: '../app/elements/{{> tagName }}/mixins/instance/index.ts',
                templateFile: './templates/instance-mixin/index.ts.hbs',
                skipIfExists: true
            },
            {
                type: 'append',
                path: '../app/elements/{{> tagName }}/mixins/instance/index.ts',
                pattern: `// mixins`,
                unique: true,
                template: "import { {{pascalCase instance}}Mixin } from './{{kebabCase instance}}';"
            },
            {
                type: 'append',
                path: '../app/elements/{{> tagName }}/mixins/instance/index.ts',
                pattern: /switch.*$/m,
                unique: true,
                templateFile: './templates/instance-mixin/instance.hbs'
            },
            {
                type: 'modify',
                path: '../app/elements/{{> tagName }}/{{> tagName }}.ts',
                pattern: /^(class)\s/m,
                template: 'export class '
            },
            {
                type: 'add',
                path: '../app/elements/{{> tagName }}/mixins/instance/{{kebabCase instance}}.ts',
                templateFile: './templates/instance-mixin/mixin.ts.hbs',
                skipIfExists: true
            }
        ]
    });
};
