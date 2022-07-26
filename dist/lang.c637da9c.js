// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"lang.js":[function(require,module,exports) {
var navTitle = document.querySelectorAll(".nav-sec");
var subTitle = document.querySelector(".subtitle");
var artTexts = document.querySelectorAll(".art-text");
var sectionTitles = document.querySelectorAll(".section_title");
var footerContent = document.querySelector(".footer_content");
var projectsTitle = document.querySelectorAll(".title-project");
var projectsDescription = document.querySelectorAll(".desc-project");
var aboutTitle = document.querySelectorAll(".about_title");
var contactContent = document.querySelector(".contact_content");
var aboutContent = document.querySelectorAll(".about_content");
var btnLang = document.querySelector(".change-lang");
var btnEnglish = document.querySelector(".lang-en");
var btnPortuguese = document.querySelector(".lang-pt");
var btnProjects = document.querySelector(".go-projects");
var techUsed1 = document.querySelectorAll(".tech-used1");
var techUsed2 = document.querySelectorAll(".tech-used2");
var tooltip = document.querySelector(".left");
var data = {
  english: {
    navbar: ["Projects", "About", "Contact"],
    tooltip_content: "Copied!",
    subtitle: "Web developer",
    project_titles: ["GitHub User Search", "CRUD Vanilla JavaScript", "Rock, Paper and Scissors"],
    project_description: ["Project created to showcase fetch API coding skills and displaying data accordingly. The project uses the GitHub API to get data from the user input.", "CRUD created to learn new methods and coding aspects of the JavaScript language. Array manipulation and event manipulation were used in this project. Usage of the localStorage to store data from the user.", "Game created to learn and represent some random and aspects of the JavaScript language."],
    about_title: ["Abstract", "Hobbies", "Skills"],
    about_content: ["My name is Guilherme Lopes and I’m a self taught web developer. I have studied using free resources and books talking about coding. I have a huge interest about the web development. Right now I'm studying React and NodeJS.", "When I'm not coding or studying, I'm lifting weights or running. You can access my Spotify playlist for lifting weights here.", "Coding technologies", "Other tools"],
    tech_used1: ["JavaScript", "Bootstrap", "HTML", "localStorage"],
    tech_used2: ["JaaaavaScript", "SCSS"],
    project_text: "Projects",
    contact_content: "You can always contact me by email or LinkedIn.",
    footer_content: "Made with love and coffee by Guilherme Lopes."
  },
  portuguese: {
    navbar: ["Projetos", "Sobre", "Contato"],
    tooltip_content: "Copiado!",
    subtitle: "Desenvolvedor web",
    project_titles: ["CRUD JavaScript Puro", "Pedra, Papel e Tesoura"],
    project_description: ["CRUD criado para aprender novos métodos e aspectos da linguagem JavaScript. Uso do localStorage para guardar informações pertinentes ao usuário", "Jogo criado para treinar e aprender diversos aspectos e funções JavaScript"],
    about_title: ["Resumo", "Hobbies", "Habilidades"],
    about_content: ["Meu nome é Guilherme Lopes e eu aprendi a programar por minha conta. Eu estudei por diversas plataformas e metodologias sobre programação. Eu tenho um grande interesse no desenvolvimento web. Neste momento, estou estudando React e NodeJS.", "Quando não estou programando, estou na academia ou correndo. Você pode acessar a minha playlist do Spotify pra levantar muito peso aqui.", "Tecnologias de programação", "Outras ferramentas"],
    tech_used1: ["JavaScript", "SCSS"],
    tech_used2: ["JaaaavaScript", "SCSS"],
    project_text: "Projetos",
    contact_content: "Você pode sempre me contactar por e-mail ou por LinkedIn.",
    footer_content: "Feito com amor e café pelo Guilherme Lopes."
  }
};

function lang() {
  var attr = (btnEnglish.classList.contains("hiddden") ? btnPortuguese : btnEnglish).getAttribute("language");
  navTitle.forEach(function (el, index) {
    return el.textContent = data[attr].navbar[index];
  });
  sectionTitles.forEach(function (title, index) {
    return title.textContent = data[attr].navbar[index];
  });
  projectsTitle.forEach(function (project_titles, index) {
    return project_titles.textContent = data[attr].project_titles[index];
  });
  projectsDescription.forEach(function (project_description, index) {
    return project_description.textContent = data[attr].project_description[index];
  });
  aboutTitle.forEach(function (about_title, index) {
    return about_title.textContent = data[attr].about_title[index];
  });
  aboutContent.forEach(function (about_content, index) {
    return about_content.textContent = data[attr].about_content[index];
  });
  techUsed1.forEach(function (tech_used1, index) {
    return tech_used1.textContent = data[attr].tech_used1[index];
  });
  techUsed2.forEach(function (tech_used2, index) {
    return tech_used2.textContent = data[attr].tech_used2[index];
  });
  contactContent.textContent = data[attr].contact_content;
  subTitle.textContent = data[attr].subtitle;
  footerContent.textContent = data[attr].footer_content;
  btnProjects.textContent = data[attr].project_text;
  tooltip.textContent = data[attr].tooltip_content;
}

lang();
btnLang.addEventListener("click", lang);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53618" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","lang.js"], null)
//# sourceMappingURL=/lang.c637da9c.js.map