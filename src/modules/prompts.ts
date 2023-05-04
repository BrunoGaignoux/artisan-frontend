import { NodePlopAPI } from 'plop';
import select from '@inquirer/select';

export default (plop: NodePlopAPI) => {
  plop.setPrompt('select', select);
};
