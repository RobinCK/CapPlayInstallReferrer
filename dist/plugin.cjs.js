'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapPlayInstallReferrer = core.registerPlugin('CapPlayInstallReferrer', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapPlayInstallReferrerWeb()),
});

class CapPlayInstallReferrerWeb extends core.WebPlugin {
    async GetReferrer() {
        //console.log('GetReferrer', options);
        return "Not referred";
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapPlayInstallReferrerWeb: CapPlayInstallReferrerWeb
});

exports.CapPlayInstallReferrer = CapPlayInstallReferrer;
//# sourceMappingURL=plugin.cjs.js.map
