
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/openmind/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-L6GIRO27.js"
    ],
    "route": "/openmind"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O2ESMG4Y.js"
    ],
    "route": "/openmind/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TXWGWT4U.js"
    ],
    "route": "/openmind/school-publishing"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4ZGHZ6IO.js"
    ],
    "route": "/openmind/self-publishing"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EE6MVSQ3.js"
    ],
    "route": "/openmind/magazine"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N25WFPHZ.js",
      "chunk-MS2MWXBY.js"
    ],
    "route": "/openmind/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4TXH6PWX.js",
      "chunk-MS2MWXBY.js"
    ],
    "route": "/openmind/submit-manuscript"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7A5GBFDF.js",
      "chunk-MS2MWXBY.js"
    ],
    "route": "/openmind/partner-with-us"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DWUCNHYN.js",
      "chunk-MS2MWXBY.js"
    ],
    "route": "/openmind/submit-story"
  },
  {
    "renderMode": 2,
    "redirectTo": "/openmind",
    "route": "/openmind/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 21845, hash: 'c159234e7c63a88e77d68b52a90fe50466bcff11ff2fc72810de02745a16226e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2857, hash: '8199a0582d6796accee48d04a090c6ea1acc17442a18f3d0d8ea84ddd925dfe6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 75861, hash: '9dddc9755a540ba5ff524f156c07e1040a3027f0831224f884dbf521e8c3bbcc', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 74047, hash: '4b3edd2fb053f51f26ff38f48a23dad6bf2022baa1090bbf49647174ee3200fe', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'self-publishing/index.html': {size: 79228, hash: '944e03b739975cff32d6d148519a2252abe4e79a149d6a8f9382244cc648d03d', text: () => import('./assets-chunks/self-publishing_index_html.mjs').then(m => m.default)},
    'partner-with-us/index.html': {size: 79066, hash: 'b1aa3e4bc33d048dc43ad0b410a1cfeddd3a48b7fe84387a0c39d3f442c09377', text: () => import('./assets-chunks/partner-with-us_index_html.mjs').then(m => m.default)},
    'submit-manuscript/index.html': {size: 73778, hash: '7aab0adee41dea0dfda4feb4ed24755413dc45db5d3142ac084452dd2de8802a', text: () => import('./assets-chunks/submit-manuscript_index_html.mjs').then(m => m.default)},
    'school-publishing/index.html': {size: 77153, hash: 'ae7a87cdd51d7319158f81b4050f552de0c4993a32fc23e16400d4d4b93606e0', text: () => import('./assets-chunks/school-publishing_index_html.mjs').then(m => m.default)},
    'submit-story/index.html': {size: 76828, hash: '295aa5bcd811492eda45cd936ace91657b248e070a8a29b3ebcd596dea4f05a1', text: () => import('./assets-chunks/submit-story_index_html.mjs').then(m => m.default)},
    'magazine/index.html': {size: 77613, hash: '9b4495edafa62ef1f12ce3fd3c229afda5f61865c4f91b78801c3e541f7f5981', text: () => import('./assets-chunks/magazine_index_html.mjs').then(m => m.default)},
    'index.html': {size: 81820, hash: '6f7f04a06ce8ffea095c1a00e068bd920d7f0ae6448e74482dead14b3a6a3474', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QG4WPX2D.css': {size: 55526, hash: 'm6o2CVywavw', text: () => import('./assets-chunks/styles-QG4WPX2D_css.mjs').then(m => m.default)}
  },
};
