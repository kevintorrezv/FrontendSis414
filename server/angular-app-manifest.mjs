
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/FrontendSis414/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/FrontendSis414"
  },
  {
    "renderMode": 2,
    "route": "/FrontendSis414/contactos"
  },
  {
    "renderMode": 2,
    "route": "/FrontendSis414/producto"
  },
  {
    "renderMode": 2,
    "route": "/FrontendSis414/fabricantes"
  },
  {
    "renderMode": 2,
    "route": "/FrontendSis414/escobas"
  },
  {
    "renderMode": 2,
    "redirectTo": "/FrontendSis414",
    "route": "/FrontendSis414/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 723, hash: '56c5e2e7e64e84bfad142256e56b6d1d80da87c129ecf79b9006a7f522a0d9a8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1125, hash: '072543920ee48940734982dffd1b0d0a7d447c2df5e5752d7ba92eaae814868b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8989, hash: 'b1a9fc6ad498435e5913f671cf74058b30a8ce7cba047854915fe149cfdf9cea', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contactos/index.html': {size: 6786, hash: 'eff2fb816c0bd73aa2ee2d9bf244134b37da122687c582e1cfeac6e4bd004fda', text: () => import('./assets-chunks/contactos_index_html.mjs').then(m => m.default)},
    'fabricantes/index.html': {size: 8686, hash: 'a2bb959ed7d71dea3b7c3e8c474b9a7aa68adaed5d89ef8346ac33b0c8d74e48', text: () => import('./assets-chunks/fabricantes_index_html.mjs').then(m => m.default)},
    'escobas/index.html': {size: 5644, hash: 'ba04f56ff22ef70e412d997deb323f307e424121d3caa90987b761074f82d5de', text: () => import('./assets-chunks/escobas_index_html.mjs').then(m => m.default)},
    'producto/index.html': {size: 4838, hash: '14ea94b36797f64a19522576c736f20b82a29a57d4771c5c49525c81d0c7b784', text: () => import('./assets-chunks/producto_index_html.mjs').then(m => m.default)},
    'styles-ONMZYPPO.css': {size: 2273, hash: '5rtboTbIZT8', text: () => import('./assets-chunks/styles-ONMZYPPO_css.mjs').then(m => m.default)}
  },
};
