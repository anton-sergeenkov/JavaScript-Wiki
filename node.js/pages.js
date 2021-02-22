const fs = require('fs');

import { getIndexHTML } from './html-page';

const page = getIndexHTML({
    up: '',
    title: 'Starter',
    script: 'starter',
    menu: null,
    content: null,
});

fs.writeFileSync(`1.html`, page);
