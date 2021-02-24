const fs = require('fs');

import { MODULES } from '../__modules__/index';
import { createDir } from './utils/dir';
import { getIndexHTML } from './html/html-page';

const PATH_PAGES = 'pages';

createDir(PATH_PAGES);

MODULES.forEach(module => {
    const page = getIndexHTML({
        up: '../',
        title: module,
        script: module,
        menu: null,
        content: null,
    });
    
    fs.writeFileSync(`${PATH_PAGES}/${module}.html`, page);
})
