// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aRq6p":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ebWYT":[function(require,module,exports) {
var _year = require("./year");
var _calculator = require("./calculator");
var _time = require("./time");
var _randnumJs = require("./randnum.js");
var _rps = require("./rps");
var _headerJs = require("./header.js");

},{"./year":"NbJFF","./calculator":"acdj6","./time":"9gLQe","./randnum.js":"alQxt","./rps":"8lEBZ","./header.js":"bvS82"}],"NbJFF":[function(require,module,exports) {
const yearButton = document.querySelector(".year__input-btn");
const yearInput = document.querySelector(".year__input");
const yearResult = document.querySelector(".year__result-p");
yearButton.addEventListener("click", ()=>{
    if (+yearInput.value < 1900) {
        yearResult.textContent = "\u0412\u0435\u0434\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 \u0440\u0456\u043A!";
        yearResult.style.opacity = 100;
        yearResult.style.color = "red";
        console.log(year);
    } else if (yearInput.value % 4 === 0 && yearInput.value % 100 !== 0 || yearInput.value % 400 === 0) {
        yearResult.textContent = "\u0412\u0438 \u043D\u0430\u0440\u043E\u0434\u0438\u043B\u0438\u0441\u044F \u0443 \u0432\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u0438\u0439 \u0440\u0456\u043A!";
        yearResult.style.opacity = 100;
        yearResult.style.color = "#039900";
    } else {
        yearResult.textContent = "\u0412\u0438 \u043D\u0430\u0440\u043E\u0434\u0438\u043B\u0438\u0441\u044F \u0443 \u041D\u0415 \u0432\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u0438\u0439 \u0440\u0456\u043A!";
        yearResult.style.opacity = 100;
        yearResult.style.color = "red";
    }
    console.log(yearInput.value);
    console.log(typeof yearInput.value);
});

},{}],"acdj6":[function(require,module,exports) {
let firstNum = document.getElementById("inputNum1");
let secNum = document.getElementById("inputNum2");
const resultBtn = document.querySelector(".calculator__result-btn");
const result = document.querySelector(".calculator__result");
let btnOperation = null;
let firstValue = 0;
let secondValue = 0;
let operationResult = null;
const blockBtns = document.querySelectorAll(".calculator__btn");
blockBtns.forEach((button)=>{
    button.addEventListener("click", ()=>{
        blockBtns.forEach((btn)=>btn.classList.remove("calculator__btn--active"));
        button.classList.add("calculator__btn--active");
        btnOperation = button.getAttribute("data-operation");
    });
});
resultBtn.addEventListener("click", ()=>{
    if (firstNum.value === "" && secNum.value === "") alert("\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u0434\u0430\u043D\u0456!");
    firstValue = +firstNum.value;
    secondValue = +secNum.value;
    switch(btnOperation){
        case "add":
            operationResult = firstValue + secondValue;
            break;
        case "multiply":
            operationResult = firstValue * secondValue;
            break;
        case "subtract":
            operationResult = firstValue - secondValue;
            break;
        case "divide":
            operationResult = firstValue / secondValue;
            break;
        default:
            alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u0430! \uD83D\uDE05");
            return;
    }
    result.textContent = operationResult;
});

},{}],"9gLQe":[function(require,module,exports) {
const convertSeconds = ()=>{
    const secondsInput = document.querySelector(".time__input").value;
    let totalSeconds = +secondsInput;
    if (totalSeconds < 0) {
        document.querySelector(".time__result").textContent = "\u0412\u0435\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u043B\u0456\u0434\u043D\u0443 \u043A\u0456\u043B\u0456\u043A\u0456\u0441\u0442\u044C \u0441\u0435\u043A\u0443\u043D\u0434";
        return;
    }
    const days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const timeResult = document.querySelector(".time__result");
    timeResult.textContent = `${days} днів, ${hours}:${minutes}:${seconds}`;
    timeResult.style.opacity = 100;
    const timePar = document.querySelector(".time__p");
    timePar.style.opacity = 100;
};
const timeBtn = document.querySelector(".time__btn");
timeBtn.addEventListener("click", convertSeconds);

},{}],"alQxt":[function(require,module,exports) {
const inputRandnum = document.querySelector(".randnum__input");
const btnRandnum = document.querySelector(".randnum__btn");
const resultRundnum = document.querySelector(".randnum__result");
btnRandnum.addEventListener("click", ()=>{
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (+inputRandnum.value === randomNumber) {
        resultRundnum.textContent = `Вітаю, ви вгадали число! ${randomNumber}`;
        resultRundnum.style.color = "#039900";
        resultRundnum.style.opacity = "1";
    } else if (+inputRandnum.value !== randomNumber) {
        resultRundnum.textContent = `Ви не вгадали число! ${randomNumber}`;
        resultRundnum.style.color = "#FF0000";
        resultRundnum.style.opacity = "1";
    } else {
        resultRundnum.textContent = `Введіть число`;
        resultRundnum.style.opacity = "1";
    }
});

},{}],"8lEBZ":[function(require,module,exports) {
let playerChoice;
const btns = document.querySelectorAll(".rps__block-btn");
btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if (btn.getAttribute("data-check") === "true") {
            btn.removeAttribute("data-check");
            btn.style.border = "none";
            btn.style.padding = "10px";
            playerChoice = undefined;
            return;
        }
        // Видаляємо атрибут data-check з усіх кнопок
        btns.forEach((b)=>{
            b.removeAttribute("data-check");
            b.style.border = "none";
            b.style.padding = "10px";
            playerChoice = undefined;
        });
        // Додаємо атрибут data-check до поточної кнопки
        btn.setAttribute("data-check", true);
        btn.style.border = "3px solid";
        btn.style.borderColor = "#8ACECF";
        btn.style.padding = "7px";
        playerChoice = btn.getAttribute("data-value");
    });
});
const startBtn = document.querySelector(".rps__startbtn");
const result = document.querySelector(".rps__result");
const pcScrore = document.querySelector(".js-pcscore");
const userScore = document.querySelector(".js-userscore");
const choices = [
    "rock",
    "paper",
    "scissors"
];
let computerScore = 0;
let playerScore = 0;
const getComputerChoice = function() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};
const winnerLogic = function(playerChoice1, computerChoice) {
    if (playerChoice1 === computerChoice) {
        result.textContent = "\u041D\u0456\u0447\u0438\u044F!";
        result.style.opacity = "1";
        result.style.color = "#000";
        return "tie";
    }
    if (playerChoice1 === "rock" && computerChoice === "scissors") {
        playerScore += 1;
        result.textContent = "\u0412\u0438 \u0432\u0438\u0433\u0440\u0430\u043B\u0438 \u0440\u0430\u0443\u043D\u0434!";
        result.style.opacity = "1";
        result.style.color = "#039900";
    } else if (playerChoice1 === "rock" && computerChoice === "paper") {
        computerScore += 1;
        result.textContent = "\u0412\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043B\u0438 \u0440\u0430\u0443\u043D\u0434!";
        result.style.opacity = "1";
        result.style.color = "#FF0000";
    } else if (playerChoice1 === "paper" && computerChoice === "rock") {
        playerScore += 1;
        result.textContent = "\u0412\u0438 \u0432\u0438\u0433\u0440\u0430\u043B\u0438 \u0440\u0430\u0443\u043D\u0434!";
        result.style.opacity = "1";
        result.style.color = "#039900";
    } else if (playerChoice1 === "paper" && computerChoice === "scissors") {
        computerScore += 1;
        result.textContent = "\u0412\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043B\u0438 \u0440\u0430\u0443\u043D\u0434!";
        result.style.opacity = "1";
        result.style.color = "#FF0000";
    } else if (playerChoice1 === "scissors" && computerChoice === "paper") {
        playerScore += 1;
        result.textContent = "\u0412\u0438 \u0432\u0438\u0433\u0440\u0430\u043B\u0438 \u0440\u0430\u0443\u043D\u0434!";
        result.style.opacity = "1";
        result.style.color = "#039900";
    } else if (playerChoice1 === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        result.textContent = "\u0412\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043B\u0438 \u0440\u0430\u0443\u043D\u0434!";
        result.style.opacity = "1";
        result.style.color = "#FF0000";
    }
    console.log(computerChoice);
};
startBtn.addEventListener("click", ()=>{
    const computerChoice = getComputerChoice();
    winnerLogic(playerChoice, computerChoice);
    pcScrore.textContent = computerScore;
    userScore.textContent = playerScore;
});

},{}],"bvS82":[function(require,module,exports) {
var _data = require("./data");
const submenuItems = document.querySelectorAll(".header__subitems");
const sectionsContainer = document.querySelector(".sections");
submenuItems.forEach((item)=>{
    item.addEventListener("click", ()=>{
        const category = item.getAttribute("data-category");
        // Фільтрація ігор за вибраною категорією
        const filteredGames = (0, _data.games).filter((game)=>game.category === category);
        console.log(filteredGames);
        // Очищення контейнера секцій
        sectionsContainer.innerHTML = "";
        // Додавання відфільтрованих секцій до контейнера
        filteredGames.forEach(()=>{
            const section = document.createElement("section");
            section.id = category;
            // section.className = game.name.replace(/ /g, '-').toLowerCase();
            // section.textContent = game.name;
            sectionsContainer.appendChild(section);
        });
        // Приховування всіх секцій і відображення тільки тих, що відповідають вибраній категорії
        const sections = document.querySelectorAll("section");
        sections.forEach((section)=>{
            section.style.display = "none";
        });
        const matchingSections = document.querySelectorAll(`section[id="${category}"]`);
        matchingSections.forEach((section)=>{
            section.style.display = "block";
        });
    });
});

},{"./data":"kq51T"}],"kq51T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "games", ()=>games);
const games = [
    {
        id: 1,
        name: "\u0412\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u0438\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440",
        category: "numerical"
    },
    {
        id: 2,
        name: "\u0412\u0433\u0430\u0434\u0430\u0439 \u0447\u0438\u0441\u043B\u043E",
        category: "numerical"
    },
    {
        id: 3,
        name: "\u041A\u0430\u043C\u0456\u043D\u044C-\u041D\u043E\u0436\u0438\u0446\u0456-\u041F\u0430\u043F\u0456\u0440",
        category: "game"
    },
    {
        id: 4,
        name: "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440",
        category: "numerical"
    },
    {
        id: 5,
        name: "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440 \u0447\u0430\u0441\u0443",
        category: "numerical"
    },
    {
        id: 6,
        name: "Google \u0434\u0438\u043D\u043E\u0437\u0430\u0432\u0440\u0438\u043A",
        category: "game"
    },
    {
        id: 7,
        name: "\u0424\u0443\u0442\u0431\u043E\u043B",
        category: "game"
    },
    {
        id: 8,
        name: "\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0435 \u0447\u0438\u0441\u043B\u043E",
        category: "numerical"
    },
    {
        id: 9,
        name: "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430",
        category: "acquaintance"
    },
    {
        id: 10,
        name: "\u0412\u0447\u0435\u043D\u0438\u0439",
        category: "acquaintance"
    }, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["aRq6p","ebWYT"], "ebWYT", "parcelRequire97b0")

//# sourceMappingURL=index.739bf03c.js.map
