'use strict';

module.exports = (plop) => {
  plop.setPartial('typePath', '{{ sourcecase type }}');
  plop.setPartial('name', '{{ properCase name }}');

  plop.setPartial('componentPath', '{{ pathCase path }}');
  plop.setPartial('componentTypeName', '{{ kebabCase name }}');

  plop.setPartial('apiName', '{{ camelCase api_name }}');
  plop.setPartial('apiTypeName', '{{ kebabCase api_name }}');

  plop.setPartial('contextPath', '{{ pathCase context_path }}');
  plop.setPartial('contextTypeName', '{{ kebabCase name }}');

  plop.setPartial('hocPath', '{{ pathCase hoc_path }}');
  plop.setPartial('hocTypeName', '{{ kebabCase name }}');

  plop.setPartial('hookPath', '{{ pathCase hook_path }}');
  plop.setPartial('hookTypeName', '{{ kebabCase name }}');

  plop.setPartial('interfaceTypeName', '{{ kebabCase name }}');
  plop.setPartial('typeName', '{{ kebabCase name }}');
};
