module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "1c25");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1c25":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: D:/临时用测试/elp-ele/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("405b")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: D:/临时用测试/elp-ele/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"df5248bc-vue-loader-template"}!D:/临时用测试/elp-ele/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!D:/临时用测试/elp-ele/node_modules/cache-loader/dist/cjs.js??ref--0-0!D:/临时用测试/elp-ele/node_modules/vue-loader/lib??vue-loader-options!./src/elp-dongdong.vue?vue&type=template&id=4de6da7b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.erp)?_c('a',{attrs:{"href":("timline://chat/?topin=" + _vm.erp)}},[_c('img',{staticClass:"elp-dongdong",attrs:{"src":_vm.imgSrc}})]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/elp-dongdong.vue?vue&type=template&id=4de6da7b&

// CONCATENATED MODULE: D:/临时用测试/elp-ele/node_modules/cache-loader/dist/cjs.js??ref--12-0!D:/临时用测试/elp-ele/node_modules/thread-loader/dist/cjs.js!D:/临时用测试/elp-ele/node_modules/babel-loader/lib!D:/临时用测试/elp-ele/node_modules/cache-loader/dist/cjs.js??ref--0-0!D:/临时用测试/elp-ele/node_modules/vue-loader/lib??vue-loader-options!./src/elp-dongdong.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var elp_dongdongvue_type_script_lang_js_ = ({
  name: 'elp-dongdong',
  props: {
    erp: {
      type: String,
      require: true
    }
  },

  data() {
    return {
      imgSrc: 'data:image/png;base64,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'
    };
  }

});
// CONCATENATED MODULE: ./src/elp-dongdong.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_elp_dongdongvue_type_script_lang_js_ = (elp_dongdongvue_type_script_lang_js_); 
// CONCATENATED MODULE: D:/临时用测试/elp-ele/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/elp-dongdong.vue





/* normalize component */

var component = normalizeComponent(
  src_elp_dongdongvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var elp_dongdong = (component.exports);
// CONCATENATED MODULE: ./index.js


ElpCard.install = function (Vue) {
  Vue.component(elp_dongdong.name, elp_dongdong);
};

/* harmony default export */ var index = (elp_dongdong);
// CONCATENATED MODULE: D:/临时用测试/elp-ele/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (index);



/***/ }),

/***/ "405b":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ })

/******/ });