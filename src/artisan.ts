import { NodePlopAPI } from 'plop';
import helpers from '@modules/helpers';
import prompts from '@modules/prompts';
import partials from '@modules/partials';
import generators from '@modules/generators';
import { ConfigPaths } from '@base/types';

export default (
  /** @type {import('plop').NodePlopAPI} */
  plop: NodePlopAPI,
  paths?: ConfigPaths,
): void => {
  /* set prompts for scripts */
  prompts(plop);
  /* set helpers for scripts */
  helpers(plop);
  /* set partials for scripts */
  partials(plop);
  /* run generators */
  generators.api(plop);
  generators.component(plop, paths?.types, paths?.components);
  generators.context(plop, paths?.types, paths?.contexts);
  generators.hoc(plop, paths?.types, paths?.hocs);
  generators.hook(plop, paths?.types, paths?.hooks);
  generators.interfaces(plop, paths?.interfaces);
  generators.styles(plop, paths?.components);
  generators.types(plop, paths?.types);
};
