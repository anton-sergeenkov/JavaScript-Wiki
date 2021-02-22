const nodeEval = require('node-eval');
const fs = require('fs');
const rimraf = require('rimraf');

nodeEval(fs.readFileSync('src-core/js/utils.js', 'utf8'));
nodeEval(fs.readFileSync('pages/build-starter.js', 'utf8'));

let html = '';
let menu = '';

const getListHTML = (id, title) => (
    `  
        <li>
            <a
                class="menu-link"
                id="id__${id}"
                href="#${id}"
            >${title}</a>
        </li>
    `
)

ARR_MODULE.forEach(({ title, themes }) => {
    menu += `<h4>🥥 ${title}</h4>`;
    menu += '<ul>';

    themes.forEach(elements => {
        const file = `pages/${PATH_MODULE}/${elements[0]}.html`;
        const content = fs.readFileSync(file, 'utf8');
        const id = `${title}__${elements[1]}`;

        menu += getListHTML(id, elements[1]);
        html += `<div id="${id}">${content}</div>`;
    })

    menu += '</ul>';
})

const PATH_PAGES = 'build';

rimraf.sync(PATH_PAGES);

if (!fs.existsSync(PATH_PAGES)) {
    fs.mkdirSync(PATH_PAGES);
}


import { getIndexHTML } from './html-page';

const page = getIndexHTML({
    up: '../',
    title: 'Starter',
    script: 'starter',
    menu,
    content: html,
});

fs.writeFileSync(`${PATH_PAGES}/${PATH_MODULE}.html`, page);
