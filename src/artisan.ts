import helpers from '@modules/helpers';
import prompts from '@modules/prompts';
import partials from '@modules/partials';
import {
  api,
  component,
  context,
  hoc,
  hook,
  interfaces,
  styles,
  type,
} from '@modules/generators';

export default (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  /* set prompts for scripts */
  prompts(plop);
  /* set helpers for scripts */
  helpers(plop);
  /* set partials for scripts */
  partials(plop);
  /* run generators */
  api(plop);
  component(plop);
  context(plop);
  hoc(plop);
  hook(plop);
  interfaces(plop);
  styles(plop);
  type(plop);
};
