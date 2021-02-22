const nodeEval = require('node-eval');
const fs = require('fs');
const rimraf = require('rimraf');

nodeEval(fs.readFileSync('../src-core/js/utils.js', 'utf8'));
nodeEval(fs.readFileSync('../pages/build-starter.js', 'utf8'));

let html = '';
let menu = '';

const getPageHTML = (title, menu, content) => (
    `
    <!DOCTYPE html>
        <html>
        <head>
            <title>${title}</title>
            <meta charset="UTF-8">
            <link rel="icon" type="image/png" href="../src/img/favicon.png">

            <script src="../src-core/js/utils.js"></script>
            <!-- Own JavaScript -->
            <script src="../pages/build-starter.js"></script>
        </head>
        <body>

            <div id="container">
                <div id="menu">
                    <div id="top">
                        <a href="#links" class="link">
                            <div class="img"></div>
                            <span v-html="'Starter'"></span>
                        </a>
                    </div>
                    ${menu}
                </div>

                <div id="wrapper">
                    <div id="links">
                        <ul>
                            <slot v-for="itemLink in linksContent">
                                <li v-if="itemLink">
                                    <a :href="itemLink.page" :class="'theme-'+itemLink.theme" v-html="itemLink.title"></a>
                                </li>
                                <li v-else class="splitter"></li>
                            </slot>
                        </ul>
                    </div>
                    <div id="content">${content}</div>
                </div>
            </div>

            <!-- CSS -->
            <link rel="stylesheet" type="text/css" href="../src-core/css/basic.css">
            <link rel="stylesheet" type="text/css" href="../src/css/index.css">

            <!-- Libraries -->
            <script src="../src-core/libs/highlight/highlight.pack.js"></script>
            <script src="../src-core/libs/vue.js"></script>

            <!-- Custom Elements -->
            <script src="../src-core/components-web/custom-elements.js"></script>
            <link rel="stylesheet" type="text/css" href="../src-core/components-web/custom-elements.css">

            <!-- Vue.js Components -->
            <script src="../src-core/components-vue/vue-components.js"></script>
            <link rel="stylesheet" type="text/css" href="../src-core/components-vue/vue-components.css">

            <!-- JavaScript -->
            <script src="../src-core/js/init.js"></script>
            <script src="../pages/links.js"></script>
            <script src="../src/js/build.js"></script>
        </body>
        </html>
    `
)

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
        const file = `../pages/${PATH_MODULE}/${elements[0]}.html`;
        const content = fs.readFileSync(file, 'utf8');
        const id = `${title}__${elements[1]}`;

        menu += getListHTML(id, elements[1]);
        html += `<div id="${id}">${content}</div>`;
    })

    menu += '</ul>';
})

const PATH_PAGES = '../build';

rimraf.sync(PATH_PAGES);

if (!fs.existsSync(PATH_PAGES)) {
    fs.mkdirSync(PATH_PAGES);
}

const page = getPageHTML('Starter', menu, html);

fs.writeFileSync(`${PATH_PAGES}/${PATH_MODULE}.html`, page);
