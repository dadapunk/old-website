(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_yaml"],{

/***/ "./node_modules/highlight.js/lib/languages/yaml.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/yaml.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: YAML\nDescription: Yet Another Markdown Language\nAuthor: Stefan Wienert <stwienert@gmail.com>\nContributors: Carl Baxter <carl@cbax.tech>\nRequires: ruby.js\nWebsite: https://yaml.org\nCategory: common, config\n*/\nfunction yaml(hljs) {\n  var LITERALS = 'true false yes no null';\n\n  // YAML spec allows non-reserved URI characters in tags.\n  var URI_CHARACTERS = '[\\\\w#;/?:@&=+$,.~*\\'()[\\\\]]+';\n\n  // Define keys as starting with a word character\n  // ...containing word chars, spaces, colons, forward-slashes, hyphens and periods\n  // ...and ending with a colon followed immediately by a space, tab or newline.\n  // The YAML spec allows for much more than this, but this covers most use-cases.\n  var KEY = {\n    className: 'attr',\n    variants: [\n      { begin: '\\\\w[\\\\w :\\\\/.-]*:(?=[ \\t]|$)' },\n      { begin: '\"\\\\w[\\\\w :\\\\/.-]*\":(?=[ \\t]|$)' }, // double quoted keys\n      { begin: '\\'\\\\w[\\\\w :\\\\/.-]*\\':(?=[ \\t]|$)' } // single quoted keys\n    ]\n  };\n\n  var TEMPLATE_VARIABLES = {\n    className: 'template-variable',\n    variants: [\n      { begin: /\\{\\{/, end: /\\}\\}/ }, // jinja templates Ansible\n      { begin: /%\\{/, end: /\\}/ } // Ruby i18n\n    ]\n  };\n  var STRING = {\n    className: 'string',\n    relevance: 0,\n    variants: [\n      { begin: /'/, end: /'/ },\n      { begin: /\"/, end: /\"/ },\n      { begin: /\\S+/ }\n    ],\n    contains: [\n      hljs.BACKSLASH_ESCAPE,\n      TEMPLATE_VARIABLES\n    ]\n  };\n\n  // Strings inside of value containers (objects) can't contain braces,\n  // brackets, or commas\n  var CONTAINER_STRING = hljs.inherit(STRING, {\n    variants: [\n      { begin: /'/, end: /'/ },\n      { begin: /\"/, end: /\"/ },\n      { begin: /[^\\s,{}[\\]]+/ }\n    ]\n  });\n\n  var DATE_RE = '[0-9]{4}(-[0-9][0-9]){0,2}';\n  var TIME_RE = '([Tt \\\\t][0-9][0-9]?(:[0-9][0-9]){2})?';\n  var FRACTION_RE = '(\\\\.[0-9]*)?';\n  var ZONE_RE = '([ \\\\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?';\n  var TIMESTAMP = {\n    className: 'number',\n    begin: '\\\\b' + DATE_RE + TIME_RE + FRACTION_RE + ZONE_RE + '\\\\b'\n  };\n\n  var VALUE_CONTAINER = {\n    end: ',',\n    endsWithParent: true,\n    excludeEnd: true,\n    contains: [],\n    keywords: LITERALS,\n    relevance: 0\n  };\n  var OBJECT = {\n    begin: /\\{/,\n    end: /\\}/,\n    contains: [VALUE_CONTAINER],\n    illegal: '\\\\n',\n    relevance: 0\n  };\n  var ARRAY = {\n    begin: '\\\\[',\n    end: '\\\\]',\n    contains: [VALUE_CONTAINER],\n    illegal: '\\\\n',\n    relevance: 0\n  };\n\n  var MODES = [\n    KEY,\n    {\n      className: 'meta',\n      begin: '^---\\\\s*$',\n      relevance: 10\n    },\n    { // multi line string\n      // Blocks start with a | or > followed by a newline\n      //\n      // Indentation of subsequent lines must be the same to\n      // be considered part of the block\n      className: 'string',\n      begin: '[\\\\|>]([1-9]?[+-])?[ ]*\\\\n( +)[^ ][^\\\\n]*\\\\n(\\\\2[^\\\\n]+\\\\n?)*'\n    },\n    { // Ruby/Rails erb\n      begin: '<%[%=-]?',\n      end: '[%-]?%>',\n      subLanguage: 'ruby',\n      excludeBegin: true,\n      excludeEnd: true,\n      relevance: 0\n    },\n    { // named tags\n      className: 'type',\n      begin: '!\\\\w+!' + URI_CHARACTERS\n    },\n    // https://yaml.org/spec/1.2/spec.html#id2784064\n    { // verbatim tags\n      className: 'type',\n      begin: '!<' + URI_CHARACTERS + \">\"\n    },\n    { // primary tags\n      className: 'type',\n      begin: '!' + URI_CHARACTERS\n    },\n    { // secondary tags\n      className: 'type',\n      begin: '!!' + URI_CHARACTERS\n    },\n    { // fragment id &ref\n      className: 'meta',\n      begin: '&' + hljs.UNDERSCORE_IDENT_RE + '$'\n    },\n    { // fragment reference *ref\n      className: 'meta',\n      begin: '\\\\*' + hljs.UNDERSCORE_IDENT_RE + '$'\n    },\n    { // array listing\n      className: 'bullet',\n      // TODO: remove |$ hack when we have proper look-ahead support\n      begin: '-(?=[ ]|$)',\n      relevance: 0\n    },\n    hljs.HASH_COMMENT_MODE,\n    {\n      beginKeywords: LITERALS,\n      keywords: { literal: LITERALS }\n    },\n    TIMESTAMP,\n    // numbers are any valid C-style number that\n    // sit isolated from other words\n    {\n      className: 'number',\n      begin: hljs.C_NUMBER_RE + '\\\\b',\n      relevance: 0\n    },\n    OBJECT,\n    ARRAY,\n    STRING\n  ];\n\n  var VALUE_MODES = [...MODES];\n  VALUE_MODES.pop();\n  VALUE_MODES.push(CONTAINER_STRING);\n  VALUE_CONTAINER.contains = VALUE_MODES;\n\n  return {\n    name: 'YAML',\n    case_insensitive: true,\n    aliases: ['yml', 'YAML'],\n    contains: MODES\n  };\n}\n\nmodule.exports = yaml;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3lhbWwuanM/MmU3YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0NBQXdDO0FBQy9DLE9BQU8sMENBQTBDO0FBQ2pELE9BQU8sNENBQTRDO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxXQUFXLEVBQUUsV0FBVyxFQUFFLEdBQUc7QUFDcEMsT0FBTyxZQUFZLFdBQVcsR0FBRztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVCQUF1QjtBQUM5QixPQUFPLHVCQUF1QjtBQUM5QixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTyxnQkFBZ0I7QUFDdkI7QUFDQSxHQUFHOztBQUVILHVCQUF1QixFQUFFLGNBQWMsSUFBSTtBQUMzQyxtREFBbUQsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy95YW1sLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBZQU1MXG5EZXNjcmlwdGlvbjogWWV0IEFub3RoZXIgTWFya2Rvd24gTGFuZ3VhZ2VcbkF1dGhvcjogU3RlZmFuIFdpZW5lcnQgPHN0d2llbmVydEBnbWFpbC5jb20+XG5Db250cmlidXRvcnM6IENhcmwgQmF4dGVyIDxjYXJsQGNiYXgudGVjaD5cblJlcXVpcmVzOiBydWJ5LmpzXG5XZWJzaXRlOiBodHRwczovL3lhbWwub3JnXG5DYXRlZ29yeTogY29tbW9uLCBjb25maWdcbiovXG5mdW5jdGlvbiB5YW1sKGhsanMpIHtcbiAgdmFyIExJVEVSQUxTID0gJ3RydWUgZmFsc2UgeWVzIG5vIG51bGwnO1xuXG4gIC8vIFlBTUwgc3BlYyBhbGxvd3Mgbm9uLXJlc2VydmVkIFVSSSBjaGFyYWN0ZXJzIGluIHRhZ3MuXG4gIHZhciBVUklfQ0hBUkFDVEVSUyA9ICdbXFxcXHcjOy8/OkAmPSskLC5+KlxcJygpW1xcXFxdXSsnO1xuXG4gIC8vIERlZmluZSBrZXlzIGFzIHN0YXJ0aW5nIHdpdGggYSB3b3JkIGNoYXJhY3RlclxuICAvLyAuLi5jb250YWluaW5nIHdvcmQgY2hhcnMsIHNwYWNlcywgY29sb25zLCBmb3J3YXJkLXNsYXNoZXMsIGh5cGhlbnMgYW5kIHBlcmlvZHNcbiAgLy8gLi4uYW5kIGVuZGluZyB3aXRoIGEgY29sb24gZm9sbG93ZWQgaW1tZWRpYXRlbHkgYnkgYSBzcGFjZSwgdGFiIG9yIG5ld2xpbmUuXG4gIC8vIFRoZSBZQU1MIHNwZWMgYWxsb3dzIGZvciBtdWNoIG1vcmUgdGhhbiB0aGlzLCBidXQgdGhpcyBjb3ZlcnMgbW9zdCB1c2UtY2FzZXMuXG4gIHZhciBLRVkgPSB7XG4gICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHsgYmVnaW46ICdcXFxcd1tcXFxcdyA6XFxcXC8uLV0qOig/PVsgXFx0XXwkKScgfSxcbiAgICAgIHsgYmVnaW46ICdcIlxcXFx3W1xcXFx3IDpcXFxcLy4tXSpcIjooPz1bIFxcdF18JCknIH0sIC8vIGRvdWJsZSBxdW90ZWQga2V5c1xuICAgICAgeyBiZWdpbjogJ1xcJ1xcXFx3W1xcXFx3IDpcXFxcLy4tXSpcXCc6KD89WyBcXHRdfCQpJyB9IC8vIHNpbmdsZSBxdW90ZWQga2V5c1xuICAgIF1cbiAgfTtcblxuICB2YXIgVEVNUExBVEVfVkFSSUFCTEVTID0ge1xuICAgIGNsYXNzTmFtZTogJ3RlbXBsYXRlLXZhcmlhYmxlJyxcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogL1xce1xcey8sIGVuZDogL1xcfVxcfS8gfSwgLy8gamluamEgdGVtcGxhdGVzIEFuc2libGVcbiAgICAgIHsgYmVnaW46IC8lXFx7LywgZW5kOiAvXFx9LyB9IC8vIFJ1YnkgaTE4blxuICAgIF1cbiAgfTtcbiAgdmFyIFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogLycvLCBlbmQ6IC8nLyB9LFxuICAgICAgeyBiZWdpbjogL1wiLywgZW5kOiAvXCIvIH0sXG4gICAgICB7IGJlZ2luOiAvXFxTKy8gfVxuICAgIF0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgIFRFTVBMQVRFX1ZBUklBQkxFU1xuICAgIF1cbiAgfTtcblxuICAvLyBTdHJpbmdzIGluc2lkZSBvZiB2YWx1ZSBjb250YWluZXJzIChvYmplY3RzKSBjYW4ndCBjb250YWluIGJyYWNlcyxcbiAgLy8gYnJhY2tldHMsIG9yIGNvbW1hc1xuICB2YXIgQ09OVEFJTkVSX1NUUklORyA9IGhsanMuaW5oZXJpdChTVFJJTkcsIHtcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogLycvLCBlbmQ6IC8nLyB9LFxuICAgICAgeyBiZWdpbjogL1wiLywgZW5kOiAvXCIvIH0sXG4gICAgICB7IGJlZ2luOiAvW15cXHMse31bXFxdXSsvIH1cbiAgICBdXG4gIH0pO1xuXG4gIHZhciBEQVRFX1JFID0gJ1swLTldezR9KC1bMC05XVswLTldKXswLDJ9JztcbiAgdmFyIFRJTUVfUkUgPSAnKFtUdCBcXFxcdF1bMC05XVswLTldPyg6WzAtOV1bMC05XSl7Mn0pPyc7XG4gIHZhciBGUkFDVElPTl9SRSA9ICcoXFxcXC5bMC05XSopPyc7XG4gIHZhciBaT05FX1JFID0gJyhbIFxcXFx0XSkqKFp8Wy0rXVswLTldWzAtOV0/KDpbMC05XVswLTldKT8pPyc7XG4gIHZhciBUSU1FU1RBTVAgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICBiZWdpbjogJ1xcXFxiJyArIERBVEVfUkUgKyBUSU1FX1JFICsgRlJBQ1RJT05fUkUgKyBaT05FX1JFICsgJ1xcXFxiJ1xuICB9O1xuXG4gIHZhciBWQUxVRV9DT05UQUlORVIgPSB7XG4gICAgZW5kOiAnLCcsXG4gICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICBjb250YWluczogW10sXG4gICAga2V5d29yZHM6IExJVEVSQUxTLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICB2YXIgT0JKRUNUID0ge1xuICAgIGJlZ2luOiAvXFx7LyxcbiAgICBlbmQ6IC9cXH0vLFxuICAgIGNvbnRhaW5zOiBbVkFMVUVfQ09OVEFJTkVSXSxcbiAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICB2YXIgQVJSQVkgPSB7XG4gICAgYmVnaW46ICdcXFxcWycsXG4gICAgZW5kOiAnXFxcXF0nLFxuICAgIGNvbnRhaW5zOiBbVkFMVUVfQ09OVEFJTkVSXSxcbiAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHZhciBNT0RFUyA9IFtcbiAgICBLRVksXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICBiZWdpbjogJ14tLS1cXFxccyokJyxcbiAgICAgIHJlbGV2YW5jZTogMTBcbiAgICB9LFxuICAgIHsgLy8gbXVsdGkgbGluZSBzdHJpbmdcbiAgICAgIC8vIEJsb2NrcyBzdGFydCB3aXRoIGEgfCBvciA+IGZvbGxvd2VkIGJ5IGEgbmV3bGluZVxuICAgICAgLy9cbiAgICAgIC8vIEluZGVudGF0aW9uIG9mIHN1YnNlcXVlbnQgbGluZXMgbXVzdCBiZSB0aGUgc2FtZSB0b1xuICAgICAgLy8gYmUgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBibG9ja1xuICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgIGJlZ2luOiAnW1xcXFx8Pl0oWzEtOV0/WystXSk/WyBdKlxcXFxuKCArKVteIF1bXlxcXFxuXSpcXFxcbihcXFxcMlteXFxcXG5dK1xcXFxuPykqJ1xuICAgIH0sXG4gICAgeyAvLyBSdWJ5L1JhaWxzIGVyYlxuICAgICAgYmVnaW46ICc8JVslPS1dPycsXG4gICAgICBlbmQ6ICdbJS1dPyU+JyxcbiAgICAgIHN1Ykxhbmd1YWdlOiAncnVieScsXG4gICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfSxcbiAgICB7IC8vIG5hbWVkIHRhZ3NcbiAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgYmVnaW46ICchXFxcXHcrIScgKyBVUklfQ0hBUkFDVEVSU1xuICAgIH0sXG4gICAgLy8gaHR0cHM6Ly95YW1sLm9yZy9zcGVjLzEuMi9zcGVjLmh0bWwjaWQyNzg0MDY0XG4gICAgeyAvLyB2ZXJiYXRpbSB0YWdzXG4gICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgIGJlZ2luOiAnITwnICsgVVJJX0NIQVJBQ1RFUlMgKyBcIj5cIlxuICAgIH0sXG4gICAgeyAvLyBwcmltYXJ5IHRhZ3NcbiAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgYmVnaW46ICchJyArIFVSSV9DSEFSQUNURVJTXG4gICAgfSxcbiAgICB7IC8vIHNlY29uZGFyeSB0YWdzXG4gICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgIGJlZ2luOiAnISEnICsgVVJJX0NIQVJBQ1RFUlNcbiAgICB9LFxuICAgIHsgLy8gZnJhZ21lbnQgaWQgJnJlZlxuICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICBiZWdpbjogJyYnICsgaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJyQnXG4gICAgfSxcbiAgICB7IC8vIGZyYWdtZW50IHJlZmVyZW5jZSAqcmVmXG4gICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgIGJlZ2luOiAnXFxcXConICsgaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJyQnXG4gICAgfSxcbiAgICB7IC8vIGFycmF5IGxpc3RpbmdcbiAgICAgIGNsYXNzTmFtZTogJ2J1bGxldCcsXG4gICAgICAvLyBUT0RPOiByZW1vdmUgfCQgaGFjayB3aGVuIHdlIGhhdmUgcHJvcGVyIGxvb2stYWhlYWQgc3VwcG9ydFxuICAgICAgYmVnaW46ICctKD89WyBdfCQpJyxcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH0sXG4gICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICB7XG4gICAgICBiZWdpbktleXdvcmRzOiBMSVRFUkFMUyxcbiAgICAgIGtleXdvcmRzOiB7IGxpdGVyYWw6IExJVEVSQUxTIH1cbiAgICB9LFxuICAgIFRJTUVTVEFNUCxcbiAgICAvLyBudW1iZXJzIGFyZSBhbnkgdmFsaWQgQy1zdHlsZSBudW1iZXIgdGhhdFxuICAgIC8vIHNpdCBpc29sYXRlZCBmcm9tIG90aGVyIHdvcmRzXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgIGJlZ2luOiBobGpzLkNfTlVNQkVSX1JFICsgJ1xcXFxiJyxcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH0sXG4gICAgT0JKRUNULFxuICAgIEFSUkFZLFxuICAgIFNUUklOR1xuICBdO1xuXG4gIHZhciBWQUxVRV9NT0RFUyA9IFsuLi5NT0RFU107XG4gIFZBTFVFX01PREVTLnBvcCgpO1xuICBWQUxVRV9NT0RFUy5wdXNoKENPTlRBSU5FUl9TVFJJTkcpO1xuICBWQUxVRV9DT05UQUlORVIuY29udGFpbnMgPSBWQUxVRV9NT0RFUztcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdZQU1MJyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGFsaWFzZXM6IFsneW1sJywgJ1lBTUwnXSxcbiAgICBjb250YWluczogTU9ERVNcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB5YW1sO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/yaml.js\n");

/***/ })

}]);