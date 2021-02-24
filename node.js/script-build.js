const fs = require('fs');

import { MODULES } from '../__modules__/index';
import { getThemesHTML } from './html/html-themes';
import { createDir } from './utils/dir';
import { getIndexHTML } from './html/html-page';

const PATH_PAGES = 'build';

createDir(PATH_PAGES);

MODULES.forEach(module => {
    const { html, menu } = getThemesHTML(module);

    const page = getIndexHTML({
        up: '../',
        title: module,
        script: module,
        menu,
        content: html,
    });
    
    fs.writeFileSync(`${PATH_PAGES}/${module}.html`, page);
})
