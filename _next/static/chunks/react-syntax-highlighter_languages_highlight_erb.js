(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_erb"],{

/***/ "./node_modules/highlight.js/lib/languages/erb.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/erb.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: ERB (Embedded Ruby)\nRequires: xml.js, ruby.js\nAuthor: Lucas Mazza <lucastmazza@gmail.com>\nContributors: Kassio Borges <kassioborgesm@gmail.com>\nDescription: \"Bridge\" language defining fragments of Ruby in HTML within <% .. %>\nWebsite: https://ruby-doc.org/stdlib-2.6.5/libdoc/erb/rdoc/ERB.html\nCategory: template\n*/\n\n/** @type LanguageFn */\nfunction erb(hljs) {\n  return {\n    name: 'ERB',\n    subLanguage: 'xml',\n    contains: [\n      hljs.COMMENT('<%#', '%>'),\n      {\n        begin: '<%[%=-]?',\n        end: '[%-]?%>',\n        subLanguage: 'ruby',\n        excludeBegin: true,\n        excludeEnd: true\n      }\n    ]\n  };\n}\n\nmodule.exports = erb;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2VyYi5qcz8xMzY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2VyYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogRVJCIChFbWJlZGRlZCBSdWJ5KVxuUmVxdWlyZXM6IHhtbC5qcywgcnVieS5qc1xuQXV0aG9yOiBMdWNhcyBNYXp6YSA8bHVjYXN0bWF6emFAZ21haWwuY29tPlxuQ29udHJpYnV0b3JzOiBLYXNzaW8gQm9yZ2VzIDxrYXNzaW9ib3JnZXNtQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBcIkJyaWRnZVwiIGxhbmd1YWdlIGRlZmluaW5nIGZyYWdtZW50cyBvZiBSdWJ5IGluIEhUTUwgd2l0aGluIDwlIC4uICU+XG5XZWJzaXRlOiBodHRwczovL3J1YnktZG9jLm9yZy9zdGRsaWItMi42LjUvbGliZG9jL2VyYi9yZG9jL0VSQi5odG1sXG5DYXRlZ29yeTogdGVtcGxhdGVcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBlcmIoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdFUkInLFxuICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKCc8JSMnLCAnJT4nKSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICc8JVslPS1dPycsXG4gICAgICAgIGVuZDogJ1slLV0/JT4nLFxuICAgICAgICBzdWJMYW5ndWFnZTogJ3J1YnknLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXJiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/erb.js\n");

/***/ })

}]);