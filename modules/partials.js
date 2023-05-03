module.exports = (plop) => {
    plop.setPartial('typePath', '{{ sourcecase type }}');
    plop.setPartial('componentPath', '{{ sourcecase path }}');
    plop.setPartial('componentName', '{{ PascalCase name }}');
    plop.setPartial('componentTypeName', '{{ kebabCase name }}');
}