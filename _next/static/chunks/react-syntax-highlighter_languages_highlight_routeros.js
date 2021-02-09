(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_routeros"],{

/***/ "./node_modules/highlight.js/lib/languages/routeros.js":
/*!*************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/routeros.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Microtik RouterOS script\nAuthor: Ivan Dementev <ivan_div@mail.ru>\nDescription: Scripting host provides a way to automate some router maintenance tasks by means of executing user-defined scripts bounded to some event occurrence\nWebsite: https://wiki.mikrotik.com/wiki/Manual:Scripting\n*/\n\n// Colors from RouterOS terminal:\n//   green        - #0E9A00\n//   teal         - #0C9A9A\n//   purple       - #99069A\n//   light-brown  - #9A9900\n\nfunction routeros(hljs) {\n  const STATEMENTS = 'foreach do while for if from to step else on-error and or not in';\n\n  // Global commands: Every global command should start with \":\" token, otherwise it will be treated as variable.\n  const GLOBAL_COMMANDS = 'global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime';\n\n  // Common commands: Following commands available from most sub-menus:\n  const COMMON_COMMANDS = 'add remove enable disable set get print export edit find run debug error info warning';\n\n  const LITERALS = 'true false yes no nothing nil null';\n\n  const OBJECTS = 'traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw';\n\n  const VAR = {\n    className: 'variable',\n    variants: [\n      {\n        begin: /\\$[\\w\\d#@][\\w\\d_]*/\n      },\n      {\n        begin: /\\$\\{(.*?)\\}/\n      }\n    ]\n  };\n\n  const QUOTE_STRING = {\n    className: 'string',\n    begin: /\"/,\n    end: /\"/,\n    contains: [\n      hljs.BACKSLASH_ESCAPE,\n      VAR,\n      {\n        className: 'variable',\n        begin: /\\$\\(/,\n        end: /\\)/,\n        contains: [ hljs.BACKSLASH_ESCAPE ]\n      }\n    ]\n  };\n\n  const APOS_STRING = {\n    className: 'string',\n    begin: /'/,\n    end: /'/\n  };\n\n  return {\n    name: 'Microtik RouterOS script',\n    aliases: [\n      'routeros',\n      'mikrotik'\n    ],\n    case_insensitive: true,\n    keywords: {\n      $pattern: /:?[\\w-]+/,\n      literal: LITERALS,\n      keyword: STATEMENTS + ' :' + STATEMENTS.split(' ').join(' :') + ' :' + GLOBAL_COMMANDS.split(' ').join(' :')\n    },\n    contains: [\n      { // illegal syntax\n        variants: [\n          { // -- comment\n            begin: /\\/\\*/,\n            end: /\\*\\//\n          },\n          { // Stan comment\n            begin: /\\/\\//,\n            end: /$/\n          },\n          { // HTML tags\n            begin: /<\\//,\n            end: />/\n          }\n        ],\n        illegal: /./\n      },\n      hljs.COMMENT('^#', '$'),\n      QUOTE_STRING,\n      APOS_STRING,\n      VAR,\n      { // attribute=value\n        begin: /[\\w-]+=([^\\s{}[\\]()]+)/,\n        relevance: 0,\n        returnBegin: true,\n        contains: [\n          {\n            className: 'attribute',\n            begin: /[^=]+/\n          },\n          {\n            begin: /=/,\n            endsWithParent: true,\n            relevance: 0,\n            contains: [\n              QUOTE_STRING,\n              APOS_STRING,\n              VAR,\n              {\n                className: 'literal',\n                begin: '\\\\b(' + LITERALS.split(' ').join('|') + ')\\\\b'\n              },\n              {\n                // Do not format unclassified values. Needed to exclude highlighting of values as built_in.\n                begin: /(\"[^\"]*\"|[^\\s{}[\\]]+)/\n              }\n              /*\n              {\n                // IPv4 addresses and subnets\n                className: 'number',\n                variants: [\n                  {begin: IPADDR_wBITMASK+'(,'+IPADDR_wBITMASK+')*'}, //192.168.0.0/24,1.2.3.0/24\n                  {begin: IPADDR+'-'+IPADDR},       // 192.168.0.1-192.168.0.3\n                  {begin: IPADDR+'(,'+IPADDR+')*'}, // 192.168.0.1,192.168.0.34,192.168.24.1,192.168.0.1\n                ]\n              },\n              {\n                // MAC addresses and DHCP Client IDs\n                className: 'number',\n                begin: /\\b(1:)?([0-9A-Fa-f]{1,2}[:-]){5}([0-9A-Fa-f]){1,2}\\b/,\n              },\n              */\n            ]\n          }\n        ]\n      },\n      {\n        // HEX values\n        className: 'number',\n        begin: /\\*[0-9a-fA-F]+/\n      },\n      {\n        begin: '\\\\b(' + COMMON_COMMANDS.split(' ').join('|') + ')([\\\\s[(\\\\]|])',\n        returnBegin: true,\n        contains: [\n          {\n            className: 'builtin-name', // 'function',\n            begin: /\\w+/\n          }\n        ]\n      },\n      {\n        className: 'built_in',\n        variants: [\n          {\n            begin: '(\\\\.\\\\./|/|\\\\s)((' + OBJECTS.split(' ').join('|') + ');?\\\\s)+'\n          },\n          {\n            begin: /\\.\\./,\n            relevance: 0\n          }\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = routeros;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3JvdXRlcm9zLmpzP2Q5NTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFpRDtBQUNwRSxtQkFBbUIseUJBQXlCO0FBQzVDLG1CQUFtQiwrQkFBK0I7QUFDbEQ7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLElBQUksTUFBTSxFQUFFLGNBQWMsSUFBSTtBQUMxRSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcm91dGVyb3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IE1pY3JvdGlrIFJvdXRlck9TIHNjcmlwdFxuQXV0aG9yOiBJdmFuIERlbWVudGV2IDxpdmFuX2RpdkBtYWlsLnJ1PlxuRGVzY3JpcHRpb246IFNjcmlwdGluZyBob3N0IHByb3ZpZGVzIGEgd2F5IHRvIGF1dG9tYXRlIHNvbWUgcm91dGVyIG1haW50ZW5hbmNlIHRhc2tzIGJ5IG1lYW5zIG9mIGV4ZWN1dGluZyB1c2VyLWRlZmluZWQgc2NyaXB0cyBib3VuZGVkIHRvIHNvbWUgZXZlbnQgb2NjdXJyZW5jZVxuV2Vic2l0ZTogaHR0cHM6Ly93aWtpLm1pa3JvdGlrLmNvbS93aWtpL01hbnVhbDpTY3JpcHRpbmdcbiovXG5cbi8vIENvbG9ycyBmcm9tIFJvdXRlck9TIHRlcm1pbmFsOlxuLy8gICBncmVlbiAgICAgICAgLSAjMEU5QTAwXG4vLyAgIHRlYWwgICAgICAgICAtICMwQzlBOUFcbi8vICAgcHVycGxlICAgICAgIC0gIzk5MDY5QVxuLy8gICBsaWdodC1icm93biAgLSAjOUE5OTAwXG5cbmZ1bmN0aW9uIHJvdXRlcm9zKGhsanMpIHtcbiAgY29uc3QgU1RBVEVNRU5UUyA9ICdmb3JlYWNoIGRvIHdoaWxlIGZvciBpZiBmcm9tIHRvIHN0ZXAgZWxzZSBvbi1lcnJvciBhbmQgb3Igbm90IGluJztcblxuICAvLyBHbG9iYWwgY29tbWFuZHM6IEV2ZXJ5IGdsb2JhbCBjb21tYW5kIHNob3VsZCBzdGFydCB3aXRoIFwiOlwiIHRva2VuLCBvdGhlcndpc2UgaXQgd2lsbCBiZSB0cmVhdGVkIGFzIHZhcmlhYmxlLlxuICBjb25zdCBHTE9CQUxfQ09NTUFORFMgPSAnZ2xvYmFsIGxvY2FsIGJlZXAgZGVsYXkgcHV0IGxlbiB0eXBlb2YgcGljayBsb2cgdGltZSBzZXQgZmluZCBlbnZpcm9ubWVudCB0ZXJtaW5hbCBlcnJvciBleGVjdXRlIHBhcnNlIHJlc29sdmUgdG9hcnJheSB0b2Jvb2wgdG9pZCB0b2lwIHRvaXA2IHRvbnVtIHRvc3RyIHRvdGltZSc7XG5cbiAgLy8gQ29tbW9uIGNvbW1hbmRzOiBGb2xsb3dpbmcgY29tbWFuZHMgYXZhaWxhYmxlIGZyb20gbW9zdCBzdWItbWVudXM6XG4gIGNvbnN0IENPTU1PTl9DT01NQU5EUyA9ICdhZGQgcmVtb3ZlIGVuYWJsZSBkaXNhYmxlIHNldCBnZXQgcHJpbnQgZXhwb3J0IGVkaXQgZmluZCBydW4gZGVidWcgZXJyb3IgaW5mbyB3YXJuaW5nJztcblxuICBjb25zdCBMSVRFUkFMUyA9ICd0cnVlIGZhbHNlIHllcyBubyBub3RoaW5nIG5pbCBudWxsJztcblxuICBjb25zdCBPQkpFQ1RTID0gJ3RyYWZmaWMtZmxvdyB0cmFmZmljLWdlbmVyYXRvciBmaXJld2FsbCBzY2hlZHVsZXIgYWFhIGFjY291bnRpbmcgYWRkcmVzcy1saXN0IGFkZHJlc3MgYWxpZ24gYXJlYSBiYW5kd2lkdGgtc2VydmVyIGJmZCBiZ3AgYnJpZGdlIGNsaWVudCBjbG9jayBjb21tdW5pdHkgY29uZmlnIGNvbm5lY3Rpb24gY29uc29sZSBjdXN0b21lciBkZWZhdWx0IGRoY3AtY2xpZW50IGRoY3Atc2VydmVyIGRpc2NvdmVyeSBkbnMgZS1tYWlsIGV0aGVybmV0IGZpbHRlciBmaXJtd2FyZSBncHMgZ3JhcGhpbmcgZ3JvdXAgaGFyZHdhcmUgaGVhbHRoIGhvdHNwb3QgaWRlbnRpdHkgaWdtcC1wcm94eSBpbmNvbWluZyBpbnN0YW5jZSBpbnRlcmZhY2UgaXAgaXBzZWMgaXB2NiBpcnEgbDJ0cC1zZXJ2ZXIgbGNkIGxkcCBsb2dnaW5nIG1hYy1zZXJ2ZXIgbWFjLXdpbmJveCBtYW5nbGUgbWFudWFsIG1pcnJvciBtbWUgbXBscyBuYXQgbmQgbmVpZ2hib3IgbmV0d29yayBub3RlIG50cCBvc3BmIG9zcGYtdjMgb3Zwbi1zZXJ2ZXIgcGFnZSBwZWVyIHBpbSBwaW5nIHBvbGljeSBwb29sIHBvcnQgcHBwIHBwcG9lLWNsaWVudCBwcHRwLXNlcnZlciBwcmVmaXggcHJvZmlsZSBwcm9wb3NhbCBwcm94eSBxdWV1ZSByYWRpdXMgcmVzb3VyY2UgcmlwIHJpcG5nIHJvdXRlIHJvdXRpbmcgc2NyZWVuIHNjcmlwdCBzZWN1cml0eS1wcm9maWxlcyBzZXJ2ZXIgc2VydmljZSBzZXJ2aWNlLXBvcnQgc2V0dGluZ3Mgc2hhcmVzIHNtYiBzbXMgc25pZmZlciBzbm1wIHNub29wZXIgc29ja3Mgc3N0cC1zZXJ2ZXIgc3lzdGVtIHRvb2wgdHJhY2tpbmcgdHlwZSB1cGdyYWRlIHVwbnAgdXNlci1tYW5hZ2VyIHVzZXJzIHVzZXIgdmxhbiBzZWNyZXQgdnJycCB3YXRjaGRvZyB3ZWItYWNjZXNzIHdpcmVsZXNzIHBwdHAgcHBwb2UgbGFuIHdhbiBsYXllcjctcHJvdG9jb2wgbGVhc2Ugc2ltcGxlIHJhdyc7XG5cbiAgY29uc3QgVkFSID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcJFtcXHdcXGQjQF1bXFx3XFxkX10qL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXCRcXHsoLio/KVxcfS9cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3QgUVVPVEVfU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC9cIi8sXG4gICAgZW5kOiAvXCIvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICBWQVIsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46IC9cXCRcXCgvLFxuICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICBjb250YWluczogWyBobGpzLkJBQ0tTTEFTSF9FU0NBUEUgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBBUE9TX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvJy8sXG4gICAgZW5kOiAvJy9cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdNaWNyb3RpayBSb3V0ZXJPUyBzY3JpcHQnLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgICdyb3V0ZXJvcycsXG4gICAgICAnbWlrcm90aWsnXG4gICAgXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAkcGF0dGVybjogLzo/W1xcdy1dKy8sXG4gICAgICBsaXRlcmFsOiBMSVRFUkFMUyxcbiAgICAgIGtleXdvcmQ6IFNUQVRFTUVOVFMgKyAnIDonICsgU1RBVEVNRU5UUy5zcGxpdCgnICcpLmpvaW4oJyA6JykgKyAnIDonICsgR0xPQkFMX0NPTU1BTkRTLnNwbGl0KCcgJykuam9pbignIDonKVxuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHsgLy8gaWxsZWdhbCBzeW50YXhcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7IC8vIC0tIGNvbW1lbnRcbiAgICAgICAgICAgIGJlZ2luOiAvXFwvXFwqLyxcbiAgICAgICAgICAgIGVuZDogL1xcKlxcLy9cbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgLy8gU3RhbiBjb21tZW50XG4gICAgICAgICAgICBiZWdpbjogL1xcL1xcLy8sXG4gICAgICAgICAgICBlbmQ6IC8kL1xuICAgICAgICAgIH0sXG4gICAgICAgICAgeyAvLyBIVE1MIHRhZ3NcbiAgICAgICAgICAgIGJlZ2luOiAvPFxcLy8sXG4gICAgICAgICAgICBlbmQ6IC8+L1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgaWxsZWdhbDogLy4vXG4gICAgICB9LFxuICAgICAgaGxqcy5DT01NRU5UKCdeIycsICckJyksXG4gICAgICBRVU9URV9TVFJJTkcsXG4gICAgICBBUE9TX1NUUklORyxcbiAgICAgIFZBUixcbiAgICAgIHsgLy8gYXR0cmlidXRlPXZhbHVlXG4gICAgICAgIGJlZ2luOiAvW1xcdy1dKz0oW15cXHN7fVtcXF0oKV0rKS8sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgICAgICAgIGJlZ2luOiAvW149XSsvXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogLz0vLFxuICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICBRVU9URV9TVFJJTkcsXG4gICAgICAgICAgICAgIEFQT1NfU1RSSU5HLFxuICAgICAgICAgICAgICBWQVIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiKCcgKyBMSVRFUkFMUy5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcpXFxcXGInXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgZm9ybWF0IHVuY2xhc3NpZmllZCB2YWx1ZXMuIE5lZWRlZCB0byBleGNsdWRlIGhpZ2hsaWdodGluZyBvZiB2YWx1ZXMgYXMgYnVpbHRfaW4uXG4gICAgICAgICAgICAgICAgYmVnaW46IC8oXCJbXlwiXSpcInxbXlxcc3t9W1xcXV0rKS9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gSVB2NCBhZGRyZXNzZXMgYW5kIHN1Ym5ldHNcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICB7YmVnaW46IElQQUREUl93QklUTUFTSysnKCwnK0lQQUREUl93QklUTUFTSysnKSonfSwgLy8xOTIuMTY4LjAuMC8yNCwxLjIuMy4wLzI0XG4gICAgICAgICAgICAgICAgICB7YmVnaW46IElQQUREUisnLScrSVBBRERSfSwgICAgICAgLy8gMTkyLjE2OC4wLjEtMTkyLjE2OC4wLjNcbiAgICAgICAgICAgICAgICAgIHtiZWdpbjogSVBBRERSKycoLCcrSVBBRERSKycpKid9LCAvLyAxOTIuMTY4LjAuMSwxOTIuMTY4LjAuMzQsMTkyLjE2OC4yNC4xLDE5Mi4xNjguMC4xXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gTUFDIGFkZHJlc3NlcyBhbmQgREhDUCBDbGllbnQgSURzXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogL1xcYigxOik/KFswLTlBLUZhLWZdezEsMn1bOi1dKXs1fShbMC05QS1GYS1mXSl7MSwyfVxcYi8sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICovXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBIRVggdmFsdWVzXG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAvXFwqWzAtOWEtZkEtRl0rL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcYignICsgQ09NTU9OX0NPTU1BTkRTLnNwbGl0KCcgJykuam9pbignfCcpICsgJykoW1xcXFxzWyhcXFxcXXxdKScsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1aWx0aW4tbmFtZScsIC8vICdmdW5jdGlvbicsXG4gICAgICAgICAgICBiZWdpbjogL1xcdysvXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICcoXFxcXC5cXFxcLi98L3xcXFxccykoKCcgKyBPQkpFQ1RTLnNwbGl0KCcgJykuam9pbignfCcpICsgJyk7P1xcXFxzKSsnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcLlxcLi8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyb3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/routeros.js\n");

/***/ })

}]);