import { NodePlopAPI } from 'plop';
import helpers from '@modules/helpers';
import prompts from '@modules/prompts';
import partials from '@modules/partials';
import generators from '@modules/generators';

export default (
  /** @type {import('plop').NodePlopAPI} */
  plop: NodePlopAPI,
): void => {
  /* set prompts for scripts */
  prompts(plop);
  /* set helpers for scripts */
  helpers(plop);
  /* set partials for scripts */
  partials(plop);
  /* run generators */
  generators.api(plop);
  generators.component(plop);
  generators.context(plop);
  generators.hoc(plop);
  generators.hook(plop);
  generators.interfaces(plop);
  generators.styles(plop);
  generators.types(plop);
};
