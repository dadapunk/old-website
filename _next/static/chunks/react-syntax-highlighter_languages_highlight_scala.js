(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_scala"],{

/***/ "./node_modules/highlight.js/lib/languages/scala.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/scala.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Scala\nCategory: functional\nAuthor: Jan Berkel <jan.berkel@gmail.com>\nContributors: Erik Osheim <d_m@plastic-idolatry.com>\nWebsite: https://www.scala-lang.org\n*/\n\nfunction scala(hljs) {\n  const ANNOTATION = {\n    className: 'meta',\n    begin: '@[A-Za-z]+'\n  };\n\n  // used in strings for escaping/interpolation/substitution\n  const SUBST = {\n    className: 'subst',\n    variants: [\n      {\n        begin: '\\\\$[A-Za-z0-9_]+'\n      },\n      {\n        begin: /\\$\\{/,\n        end: /\\}/\n      }\n    ]\n  };\n\n  const STRING = {\n    className: 'string',\n    variants: [\n      {\n        begin: '\"',\n        end: '\"',\n        illegal: '\\\\n',\n        contains: [ hljs.BACKSLASH_ESCAPE ]\n      },\n      {\n        begin: '\"\"\"',\n        end: '\"\"\"',\n        relevance: 10\n      },\n      {\n        begin: '[a-z]+\"',\n        end: '\"',\n        illegal: '\\\\n',\n        contains: [ hljs.BACKSLASH_ESCAPE,\n          SUBST ]\n      },\n      {\n        className: 'string',\n        begin: '[a-z]+\"\"\"',\n        end: '\"\"\"',\n        contains: [ SUBST ],\n        relevance: 10\n      }\n    ]\n\n  };\n\n  const SYMBOL = {\n    className: 'symbol',\n    begin: '\\'\\\\w[\\\\w\\\\d_]*(?!\\')'\n  };\n\n  const TYPE = {\n    className: 'type',\n    begin: '\\\\b[A-Z][A-Za-z0-9_]*',\n    relevance: 0\n  };\n\n  const NAME = {\n    className: 'title',\n    begin: /[^0-9\\n\\t \"'(),.`{}\\[\\]:;][^\\n\\t \"'(),.`{}\\[\\]:;]+|[^0-9\\n\\t \"'(),.`{}\\[\\]:;=]/,\n    relevance: 0\n  };\n\n  const CLASS = {\n    className: 'class',\n    beginKeywords: 'class object trait type',\n    end: /[:={\\[\\n;]/,\n    excludeEnd: true,\n    contains: [\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      {\n        beginKeywords: 'extends with',\n        relevance: 10\n      },\n      {\n        begin: /\\[/,\n        end: /\\]/,\n        excludeBegin: true,\n        excludeEnd: true,\n        relevance: 0,\n        contains: [ TYPE ]\n      },\n      {\n        className: 'params',\n        begin: /\\(/,\n        end: /\\)/,\n        excludeBegin: true,\n        excludeEnd: true,\n        relevance: 0,\n        contains: [ TYPE ]\n      },\n      NAME\n    ]\n  };\n\n  const METHOD = {\n    className: 'function',\n    beginKeywords: 'def',\n    end: /[:={\\[(\\n;]/,\n    excludeEnd: true,\n    contains: [ NAME ]\n  };\n\n  return {\n    name: 'Scala',\n    keywords: {\n      literal: 'true false null',\n      keyword: 'type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit'\n    },\n    contains: [\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      STRING,\n      SYMBOL,\n      TYPE,\n      METHOD,\n      CLASS,\n      hljs.C_NUMBER_MODE,\n      ANNOTATION\n    ]\n  };\n}\n\nmodule.exports = scala;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3NjYWxhLmpzPzlmN2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxvQkFBb0I7QUFDcEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixNQUFNLGlCQUFpQixNQUFNLHNCQUFzQixNQUFNO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxLQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9zY2FsYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogU2NhbGFcbkNhdGVnb3J5OiBmdW5jdGlvbmFsXG5BdXRob3I6IEphbiBCZXJrZWwgPGphbi5iZXJrZWxAZ21haWwuY29tPlxuQ29udHJpYnV0b3JzOiBFcmlrIE9zaGVpbSA8ZF9tQHBsYXN0aWMtaWRvbGF0cnkuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly93d3cuc2NhbGEtbGFuZy5vcmdcbiovXG5cbmZ1bmN0aW9uIHNjYWxhKGhsanMpIHtcbiAgY29uc3QgQU5OT1RBVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogJ0BbQS1aYS16XSsnXG4gIH07XG5cbiAgLy8gdXNlZCBpbiBzdHJpbmdzIGZvciBlc2NhcGluZy9pbnRlcnBvbGF0aW9uL3N1YnN0aXR1dGlvblxuICBjb25zdCBTVUJTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcJFtBLVphLXowLTlfXSsnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcJFxcey8sXG4gICAgICAgIGVuZDogL1xcfS9cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcIicsXG4gICAgICAgIGVuZDogJ1wiJyxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgY29udGFpbnM6IFsgaGxqcy5CQUNLU0xBU0hfRVNDQVBFIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXCJcIlwiJyxcbiAgICAgICAgZW5kOiAnXCJcIlwiJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdbYS16XStcIicsXG4gICAgICAgIGVuZDogJ1wiJyxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgY29udGFpbnM6IFsgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICAgIFNVQlNUIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnW2Etel0rXCJcIlwiJyxcbiAgICAgICAgZW5kOiAnXCJcIlwiJyxcbiAgICAgICAgY29udGFpbnM6IFsgU1VCU1QgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfVxuICAgIF1cblxuICB9O1xuXG4gIGNvbnN0IFNZTUJPTCA9IHtcbiAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgIGJlZ2luOiAnXFwnXFxcXHdbXFxcXHdcXFxcZF9dKig/IVxcJyknXG4gIH07XG5cbiAgY29uc3QgVFlQRSA9IHtcbiAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICBiZWdpbjogJ1xcXFxiW0EtWl1bQS1aYS16MC05X10qJyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBOQU1FID0ge1xuICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICBiZWdpbjogL1teMC05XFxuXFx0IFwiJygpLC5ge31cXFtcXF06O11bXlxcblxcdCBcIicoKSwuYHt9XFxbXFxdOjtdK3xbXjAtOVxcblxcdCBcIicoKSwuYHt9XFxbXFxdOjs9XS8sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgY29uc3QgQ0xBU1MgPSB7XG4gICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBvYmplY3QgdHJhaXQgdHlwZScsXG4gICAgZW5kOiAvWzo9e1xcW1xcbjtdLyxcbiAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnZXh0ZW5kcyB3aXRoJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXFsvLFxuICAgICAgICBlbmQ6IC9cXF0vLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFsgVFlQRSBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogWyBUWVBFIF1cbiAgICAgIH0sXG4gICAgICBOQU1FXG4gICAgXVxuICB9O1xuXG4gIGNvbnN0IE1FVEhPRCA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgYmVnaW5LZXl3b3JkczogJ2RlZicsXG4gICAgZW5kOiAvWzo9e1xcWyhcXG47XS8sXG4gICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICBjb250YWluczogWyBOQU1FIF1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdTY2FsYScsXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlIG51bGwnLFxuICAgICAga2V5d29yZDogJ3R5cGUgeWllbGQgbGF6eSBvdmVycmlkZSBkZWYgd2l0aCB2YWwgdmFyIHNlYWxlZCBhYnN0cmFjdCBwcml2YXRlIHRyYWl0IG9iamVjdCBpZiBmb3JTb21lIGZvciB3aGlsZSB0aHJvdyBmaW5hbGx5IHByb3RlY3RlZCBleHRlbmRzIGltcG9ydCBmaW5hbCByZXR1cm4gZWxzZSBicmVhayBuZXcgY2F0Y2ggc3VwZXIgY2xhc3MgY2FzZSBwYWNrYWdlIGRlZmF1bHQgdHJ5IHRoaXMgbWF0Y2ggY29udGludWUgdGhyb3dzIGltcGxpY2l0J1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBTVFJJTkcsXG4gICAgICBTWU1CT0wsXG4gICAgICBUWVBFLFxuICAgICAgTUVUSE9ELFxuICAgICAgQ0xBU1MsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICBBTk5PVEFUSU9OXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNjYWxhO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/scala.js\n");

/***/ })

}]);