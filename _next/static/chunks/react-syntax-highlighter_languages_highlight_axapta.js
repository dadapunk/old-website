(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_axapta"],{

/***/ "./node_modules/highlight.js/lib/languages/axapta.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/axapta.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Microsoft X++\nDescription: X++ is a language used in Microsoft Dynamics 365, Dynamics AX, and Axapta.\nAuthor: Dmitri Roudakov <dmitri@roudakov.ru>\nWebsite: https://dynamics.microsoft.com/en-us/ax-overview/\nCategory: enterprise\n*/\n\n/** @type LanguageFn */\nfunction axapta(hljs) {\n  const BUILT_IN_KEYWORDS = [\n    'anytype',\n    'boolean',\n    'byte',\n    'char',\n    'container',\n    'date',\n    'double',\n    'enum',\n    'guid',\n    'int',\n    'int64',\n    'long',\n    'real',\n    'short',\n    'str',\n    'utcdatetime',\n    'var'\n  ];\n\n  const LITERAL_KEYWORDS = [\n    'default',\n    'false',\n    'null',\n    'true'\n  ];\n\n  const NORMAL_KEYWORDS = [\n    'abstract',\n    'as',\n    'asc',\n    'avg',\n    'break',\n    'breakpoint',\n    'by',\n    'byref',\n    'case',\n    'catch',\n    'changecompany',\n    'class',\n    'client',\n    'client',\n    'common',\n    'const',\n    'continue',\n    'count',\n    'crosscompany',\n    'delegate',\n    'delete_from',\n    'desc',\n    'display',\n    'div',\n    'do',\n    'edit',\n    'else',\n    'eventhandler',\n    'exists',\n    'extends',\n    'final',\n    'finally',\n    'firstfast',\n    'firstonly',\n    'firstonly1',\n    'firstonly10',\n    'firstonly100',\n    'firstonly1000',\n    'flush',\n    'for',\n    'forceliterals',\n    'forcenestedloop',\n    'forceplaceholders',\n    'forceselectorder',\n    'forupdate',\n    'from',\n    'generateonly',\n    'group',\n    'hint',\n    'if',\n    'implements',\n    'in',\n    'index',\n    'insert_recordset',\n    'interface',\n    'internal',\n    'is',\n    'join',\n    'like',\n    'maxof',\n    'minof',\n    'mod',\n    'namespace',\n    'new',\n    'next',\n    'nofetch',\n    'notexists',\n    'optimisticlock',\n    'order',\n    'outer',\n    'pessimisticlock',\n    'print',\n    'private',\n    'protected',\n    'public',\n    'readonly',\n    'repeatableread',\n    'retry',\n    'return',\n    'reverse',\n    'select',\n    'server',\n    'setting',\n    'static',\n    'sum',\n    'super',\n    'switch',\n    'this',\n    'throw',\n    'try',\n    'ttsabort',\n    'ttsbegin',\n    'ttscommit',\n    'unchecked',\n    'update_recordset',\n    'using',\n    'validtimestate',\n    'void',\n    'where',\n    'while'\n  ];\n\n  const KEYWORDS = {\n    keyword: NORMAL_KEYWORDS.join(' '),\n    built_in: BUILT_IN_KEYWORDS.join(' '),\n    literal: LITERAL_KEYWORDS.join(' ')\n  };\n\n  return {\n    name: 'X++',\n    aliases: ['x++'],\n    keywords: KEYWORDS,\n    contains: [\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE,\n      hljs.C_NUMBER_MODE,\n      {\n        className: 'meta',\n        begin: '#',\n        end: '$'\n      },\n      {\n        className: 'class',\n        beginKeywords: 'class interface',\n        end: /\\{/,\n        excludeEnd: true,\n        illegal: ':',\n        contains: [\n          {\n            beginKeywords: 'extends implements'\n          },\n          hljs.UNDERSCORE_TITLE_MODE\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = axapta;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2F4YXB0YS5qcz9hODg1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYXhhcHRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBNaWNyb3NvZnQgWCsrXG5EZXNjcmlwdGlvbjogWCsrIGlzIGEgbGFuZ3VhZ2UgdXNlZCBpbiBNaWNyb3NvZnQgRHluYW1pY3MgMzY1LCBEeW5hbWljcyBBWCwgYW5kIEF4YXB0YS5cbkF1dGhvcjogRG1pdHJpIFJvdWRha292IDxkbWl0cmlAcm91ZGFrb3YucnU+XG5XZWJzaXRlOiBodHRwczovL2R5bmFtaWNzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXgtb3ZlcnZpZXcvXG5DYXRlZ29yeTogZW50ZXJwcmlzZVxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGF4YXB0YShobGpzKSB7XG4gIGNvbnN0IEJVSUxUX0lOX0tFWVdPUkRTID0gW1xuICAgICdhbnl0eXBlJyxcbiAgICAnYm9vbGVhbicsXG4gICAgJ2J5dGUnLFxuICAgICdjaGFyJyxcbiAgICAnY29udGFpbmVyJyxcbiAgICAnZGF0ZScsXG4gICAgJ2RvdWJsZScsXG4gICAgJ2VudW0nLFxuICAgICdndWlkJyxcbiAgICAnaW50JyxcbiAgICAnaW50NjQnLFxuICAgICdsb25nJyxcbiAgICAncmVhbCcsXG4gICAgJ3Nob3J0JyxcbiAgICAnc3RyJyxcbiAgICAndXRjZGF0ZXRpbWUnLFxuICAgICd2YXInXG4gIF07XG5cbiAgY29uc3QgTElURVJBTF9LRVlXT1JEUyA9IFtcbiAgICAnZGVmYXVsdCcsXG4gICAgJ2ZhbHNlJyxcbiAgICAnbnVsbCcsXG4gICAgJ3RydWUnXG4gIF07XG5cbiAgY29uc3QgTk9STUFMX0tFWVdPUkRTID0gW1xuICAgICdhYnN0cmFjdCcsXG4gICAgJ2FzJyxcbiAgICAnYXNjJyxcbiAgICAnYXZnJyxcbiAgICAnYnJlYWsnLFxuICAgICdicmVha3BvaW50JyxcbiAgICAnYnknLFxuICAgICdieXJlZicsXG4gICAgJ2Nhc2UnLFxuICAgICdjYXRjaCcsXG4gICAgJ2NoYW5nZWNvbXBhbnknLFxuICAgICdjbGFzcycsXG4gICAgJ2NsaWVudCcsXG4gICAgJ2NsaWVudCcsXG4gICAgJ2NvbW1vbicsXG4gICAgJ2NvbnN0JyxcbiAgICAnY29udGludWUnLFxuICAgICdjb3VudCcsXG4gICAgJ2Nyb3NzY29tcGFueScsXG4gICAgJ2RlbGVnYXRlJyxcbiAgICAnZGVsZXRlX2Zyb20nLFxuICAgICdkZXNjJyxcbiAgICAnZGlzcGxheScsXG4gICAgJ2RpdicsXG4gICAgJ2RvJyxcbiAgICAnZWRpdCcsXG4gICAgJ2Vsc2UnLFxuICAgICdldmVudGhhbmRsZXInLFxuICAgICdleGlzdHMnLFxuICAgICdleHRlbmRzJyxcbiAgICAnZmluYWwnLFxuICAgICdmaW5hbGx5JyxcbiAgICAnZmlyc3RmYXN0JyxcbiAgICAnZmlyc3Rvbmx5JyxcbiAgICAnZmlyc3Rvbmx5MScsXG4gICAgJ2ZpcnN0b25seTEwJyxcbiAgICAnZmlyc3Rvbmx5MTAwJyxcbiAgICAnZmlyc3Rvbmx5MTAwMCcsXG4gICAgJ2ZsdXNoJyxcbiAgICAnZm9yJyxcbiAgICAnZm9yY2VsaXRlcmFscycsXG4gICAgJ2ZvcmNlbmVzdGVkbG9vcCcsXG4gICAgJ2ZvcmNlcGxhY2Vob2xkZXJzJyxcbiAgICAnZm9yY2VzZWxlY3RvcmRlcicsXG4gICAgJ2ZvcnVwZGF0ZScsXG4gICAgJ2Zyb20nLFxuICAgICdnZW5lcmF0ZW9ubHknLFxuICAgICdncm91cCcsXG4gICAgJ2hpbnQnLFxuICAgICdpZicsXG4gICAgJ2ltcGxlbWVudHMnLFxuICAgICdpbicsXG4gICAgJ2luZGV4JyxcbiAgICAnaW5zZXJ0X3JlY29yZHNldCcsXG4gICAgJ2ludGVyZmFjZScsXG4gICAgJ2ludGVybmFsJyxcbiAgICAnaXMnLFxuICAgICdqb2luJyxcbiAgICAnbGlrZScsXG4gICAgJ21heG9mJyxcbiAgICAnbWlub2YnLFxuICAgICdtb2QnLFxuICAgICduYW1lc3BhY2UnLFxuICAgICduZXcnLFxuICAgICduZXh0JyxcbiAgICAnbm9mZXRjaCcsXG4gICAgJ25vdGV4aXN0cycsXG4gICAgJ29wdGltaXN0aWNsb2NrJyxcbiAgICAnb3JkZXInLFxuICAgICdvdXRlcicsXG4gICAgJ3Blc3NpbWlzdGljbG9jaycsXG4gICAgJ3ByaW50JyxcbiAgICAncHJpdmF0ZScsXG4gICAgJ3Byb3RlY3RlZCcsXG4gICAgJ3B1YmxpYycsXG4gICAgJ3JlYWRvbmx5JyxcbiAgICAncmVwZWF0YWJsZXJlYWQnLFxuICAgICdyZXRyeScsXG4gICAgJ3JldHVybicsXG4gICAgJ3JldmVyc2UnLFxuICAgICdzZWxlY3QnLFxuICAgICdzZXJ2ZXInLFxuICAgICdzZXR0aW5nJyxcbiAgICAnc3RhdGljJyxcbiAgICAnc3VtJyxcbiAgICAnc3VwZXInLFxuICAgICdzd2l0Y2gnLFxuICAgICd0aGlzJyxcbiAgICAndGhyb3cnLFxuICAgICd0cnknLFxuICAgICd0dHNhYm9ydCcsXG4gICAgJ3R0c2JlZ2luJyxcbiAgICAndHRzY29tbWl0JyxcbiAgICAndW5jaGVja2VkJyxcbiAgICAndXBkYXRlX3JlY29yZHNldCcsXG4gICAgJ3VzaW5nJyxcbiAgICAndmFsaWR0aW1lc3RhdGUnLFxuICAgICd2b2lkJyxcbiAgICAnd2hlcmUnLFxuICAgICd3aGlsZSdcbiAgXTtcblxuICBjb25zdCBLRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOiBOT1JNQUxfS0VZV09SRFMuam9pbignICcpLFxuICAgIGJ1aWx0X2luOiBCVUlMVF9JTl9LRVlXT1JEUy5qb2luKCcgJyksXG4gICAgbGl0ZXJhbDogTElURVJBTF9LRVlXT1JEUy5qb2luKCcgJylcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdYKysnLFxuICAgIGFsaWFzZXM6IFsneCsrJ10sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnIycsXG4gICAgICAgIGVuZDogJyQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UnLFxuICAgICAgICBlbmQ6IC9cXHsvLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAnOicsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMgaW1wbGVtZW50cydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXhhcHRhO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/axapta.js\n");

/***/ })

}]);