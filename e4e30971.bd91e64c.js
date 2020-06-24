(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{447:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(1),i=t(9),r=(t(0),t(487)),o={id:"use-linking",title:"useLinking",sidebar_label:"useLinking"},s={id:"version-5.x/use-linking",title:"useLinking",description:"The `useLinking` hook lets us handle deep links in our apps. You probably want to use the [`linking` prop on `NavigationContainer`](navigation-container.md#linking) instead of using this hook directly.",source:"@site/versioned_docs/version-5.x/use-linking.md",permalink:"/docs/use-linking",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/use-linking.md",version:"5.x",sidebar_label:"useLinking",sidebar:"version-5.x/docs",previous:{title:"useLinkBuilder",permalink:"/docs/use-link-builder"},next:{title:"useScrollToTop",permalink:"/docs/use-scroll-to-top"}},c=[{value:"Options",id:"options",children:[]}],l={rightToc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useLinking")," hook lets us handle deep links in our apps. You probably want to use the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/navigation-container#linking"}),Object(r.b)("inlineCode",{parentName:"a"},"linking")," prop on ",Object(r.b)("inlineCode",{parentName:"a"},"NavigationContainer"))," instead of using this hook directly."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { ScrollView } from 'react-native';\nimport { useLinking , NavigationContainer } from '@react-navigation/native';\n\nexport default function App() {\n  const ref = React.useRef();\n\n  const { getInitialState } = useLinking(ref, {\n    prefixes: ['https://mychat.com', 'mychat://'],\n    config: {\n      screens: {\n        Chat: 'feed/:sort',\n      }\n    },\n  });\n\n  const [isReady, setIsReady] = React.useState(false);\n  const [initialState, setInitialState] = React.useState();\n\n  React.useEffect(() => {\n    getInitialState()\n      .catch(() => {})\n      .then(state => {\n        if (state !== undefined) {\n          setInitialState(state);\n        }\n\n        setIsReady(true);\n      });\n  }, [getInitialState]);\n\n  if (!isReady) {\n    return null;\n  }\n\n  return (\n    <NavigationContainer initialState={initialState} ref={ref}>\n      {/* content */}\n    </NavigationContainer>\n  );\n}\n")),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/deep-linking"}),"deep linking guide")," for a complete guide on how to configure deep linking."),Object(r.b)("h3",{id:"options"},"Options"),Object(r.b)("h4",{id:"prefixes"},Object(r.b)("inlineCode",{parentName:"h4"},"prefixes")),Object(r.b)("p",null,"URL prefixes to handle. You can provide multiple prefixes to support custom schemes as well as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.apple.com/ios/universal-links/"}),"universal links"),"."),Object(r.b)("p",null,"Only URLs matching these prefixes will be handled. The prefix will be stripped from the URL before parsing."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"useLinking(ref, {\n  prefixes: ['https://mychat.com', 'mychat://'],\n  config: {\n    screens: {\n      Chat: 'feed/:sort',\n    }\n  },\n});\n")),Object(r.b)("p",null,"This is only supported on iOS and Android."),Object(r.b)("h4",{id:"config"},Object(r.b)("inlineCode",{parentName:"h4"},"config")),Object(r.b)("p",null,"Config to fine-tune how to parse the path. The config object should represent the structure of the navigators in the app."),Object(r.b)("p",null,"For example, if we have ",Object(r.b)("inlineCode",{parentName:"p"},"Catalog")," screen inside ",Object(r.b)("inlineCode",{parentName:"p"},"Home")," screen and want it to handle the ",Object(r.b)("inlineCode",{parentName:"p"},"item/:id")," pattern:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  screens: {\n    Home: {\n      screens: {\n        Catalog: {\n          path: 'item/:id',\n          parse: {\n            id: Number,\n          },\n        },\n      },\n    },\n  }\n}\n")),Object(r.b)("p",null,"The options for parsing can be an object or a string:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  screens: {\n    Catalog: 'item/:id',\n  }\n}\n")),Object(r.b)("p",null,"When a string is specified, it's equivalent to providing the ",Object(r.b)("inlineCode",{parentName:"p"},"path")," option."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"path")," option is a pattern to match against the path. Any segments starting with ",Object(r.b)("inlineCode",{parentName:"p"},":")," are recognized as a param with the same name. For example ",Object(r.b)("inlineCode",{parentName:"p"},"item/42")," will be parsed to ",Object(r.b)("inlineCode",{parentName:"p"},"{ name: 'item', params: { id: '42' } }"),"."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"initialRouteName")," option ensures that the route name passed there will be present in the state for the navigator, e.g. for config:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  screens: {\n    Home: {\n      initialRouteName: 'Feed',\n      screens: {\n        Catalog: {\n          path: 'item/:id',\n          parse: {\n            id: Number,\n          },\n        },\n        Feed: 'feed',\n      },\n    },\n  }\n}\n")),Object(r.b)("p",null,"and URL : ",Object(r.b)("inlineCode",{parentName:"p"},"/item/42"),", the state will look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  routes: [\n    {\n      name: 'Home',\n      state: {\n        index: 1,\n        routes: [\n          {\n            name: 'Feed'\n          },\n          {\n            name: 'Catalog',\n            params: { id: 42 },\n          },\n        ],\n      },\n    },\n  ],\n}\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"parse")," option controls how the params are parsed. Here, you can provide the name of the param to parse as a key, and a function which takes the string value for the param and returns a parsed value:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  screens: {\n    Catalog: {\n      path: 'item/:id',\n      parse: {\n        id: id => parseInt(id, 10),\n      },\n    },\n  }\n}\n")),Object(r.b)("p",null,"If no custom function is provided for parsing a param, it'll be parsed as a string."),Object(r.b)("p",null,"Different segments of the same path can be handled by different parts of the config. For example, say we have the URL ",Object(r.b)("inlineCode",{parentName:"p"},"/rooms/chat/jane"),". We can provide the following config to handle it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  screens: {\n    Rooms: 'rooms',\n    Chat: 'chat/:user'\n  }\n}\n")),Object(r.b)("p",null,"This will result in the following navigation state:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  routes: [\n    {\n      name: 'Rooms',\n      state: {\n        routes: [\n          {\n            name: 'Chat',\n            params: { user: 'jane' },\n          },\n        ],\n      },\n    },\n  ],\n}\n")),Object(r.b)("h4",{id:"enabled"},Object(r.b)("inlineCode",{parentName:"h4"},"enabled")),Object(r.b)("p",null,"Optional boolean to enable or disable the linking integration. Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("h4",{id:"getstatefrompath"},Object(r.b)("inlineCode",{parentName:"h4"},"getStateFromPath")),Object(r.b)("p",null,"You can optionally override the way React Navigation parses deep links to a state object by providing your own implementation."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"useLinking(ref, {\n  prefixes: ['https://mychat.com', 'mychat://'],\n  config: {\n    screens: {\n      Chat: 'feed/:sort',\n    }\n  },\n  getStateFromPath(path, config) {\n    // Return a state object here\n    // You can also reuse the default logic by importing `getStateFromPath` from `@react-navigation/native`\n  }\n});\n")),Object(r.b)("h4",{id:"getpathfromstate"},Object(r.b)("inlineCode",{parentName:"h4"},"getPathFromState")),Object(r.b)("p",null,"You can optionally override the way React Navigation serializes state objects to link by providing your own implementation. This is necessary for proper web support if you have specified ",Object(r.b)("inlineCode",{parentName:"p"},"getStateFromPath"),"."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"useLinking(ref, {\n  prefixes: ['https://mychat.com', 'mychat://'],\n  config: {\n    screens: {\n      Chat: 'feed/:sort',\n    }\n  },\n  getPathFromState(state, config) {\n    // Return a path string here\n    // You can also reuse the default logic by importing `getPathFromState` from `@react-navigation/native`\n  }\n});\n")))}p.isMDXComponent=!0},487:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},b=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||r;return t?i.a.createElement(d,s({ref:n},l,{components:t})):i.a.createElement(d,s({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);