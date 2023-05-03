const helpers = require('./modules/helpers');
const partials = require('./modules/partials');
const component = require('./modules/component');

module.exports = (
    /** @type {import('plop').NodePlopAPI} */
    plop
) => {
    /* set helpers for scripts */
    helpers(plop);  
    /* set partials for scripts */
    partials(plop);
    /* run component script */
    component(plop);
};
