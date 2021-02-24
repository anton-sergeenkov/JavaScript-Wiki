const fs = require('fs');

import { MODULES } from '../__modules__/index';
import { getThemesHTML } from './html/html-themes';
import { createDir } from './utils/dir';
import { getIndexHTML } from './html/html-page';

const PATH_PAGES = 'build';

createDir(PATH_PAGES);




const path = MODULES[0];

const { html, menu } = getThemesHTML(path);

const page = getIndexHTML({
    up: '../',
    title: path,
    script: path,
    menu,
    content: html,
});

fs.writeFileSync(`${PATH_PAGES}/${path}.html`, page);
