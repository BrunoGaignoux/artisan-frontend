require('module-alias/register');
const helpers = require('@modules/helpers');
const prompts = require('@modules/prompts');
const partials = require('@modules/partials');
const generators = require('@modules/generators');

module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop,
  paths,
) => {
  /* set prompts for scripts */
  prompts(plop);
  /* set helpers for scripts */
  helpers(plop);
  /* set partials for scripts */
  partials(plop);
  /* run generators */
  generators.api(plop);
  generators.component(plop, paths?.types, paths?.components);
  generators.context(plop, paths?.interfaces, paths?.contexts);
  generators.hoc(plop, paths?.types, paths?.hocs);
  generators.hook(plop, paths?.interfaces, paths?.hooks);
  generators.interfaces(plop, paths?.interfaces);
  generators.styles(plop, paths?.components);
  generators.types(plop, paths?.types);
};
