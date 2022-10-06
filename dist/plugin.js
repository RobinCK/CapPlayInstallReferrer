var capacitorCapPlayInstallReferrer = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
