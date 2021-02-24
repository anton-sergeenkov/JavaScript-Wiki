

//---------------------------------------------------------------------
// JAVASCRIPT WEB-COMPONENTS
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrJsWebComponents = [
    [1, 'Основное'],
    ['js-web-components', 'main', 'info',            emoji.theory+'Теория'],

    [1, 'Элементы'],
    ['js-web-components', 'elements', 'custom-elements', emoji.chevron+'1. Custom Elements'],
    ['js-web-components', 'elements', 'shadow-dom',      emoji.chevron+'2. Shadow DOM'],
    ['js-web-components', 'elements', 'html-templates',  emoji.chevron+'3. HTML Templates'],
    ['js-web-components', 'elements', 'html-import',     emoji.chevron+'4. HTML Import'],
];

    "js-web-components/main/info",
    "js-web-components/elements/custom-elements",
    "js-web-components/elements/shadow-dom",
    "js-web-components/elements/html-templates",
    "js-web-components/elements/html-import"
	


//---------------------------------------------------------------------
// JAVASCRIPT CLASS
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrJsClass = [
    [1, 'Основное'],
    ['js-class', 'main', 'inheritance',   emoji.fire+'Наследование'],
    ['js-class', 'main', 'prototype',     setTheme(1, ['__proto__', 'prototype'])],
    ['js-class', 'main', 'new',           setTheme(1, ['new'])],
    ['js-class', 'main', 'constructor',   setTheme(1, ['constructor'])],
    ['js-class', 'main', 'return',        setTheme(1, ['return'])],
    ['js-class', 'main', 'new-target',    setTheme(1, ['new.target'])],

    [1, 'Классы ES6+'],
    ['js-class', 'class-es6', 'info',           emoji.theory+'Теория'],
    ['js-class', 'class-es6', 'item-create',    emoji.chevron+'1. Создание класса'],
    ['js-class', 'class-es6', 'item-getter',    emoji.chevron+'2. Геттеры и Сеттеры'],
    ['js-class', 'class-es6', 'item-static',    emoji.chevron+'3. Статические свойства и методы'],
    ['js-class', 'class-es6', 'item-inherit',   emoji.chevron+'4. Наследование'],

    ['js-class', 'class-es6', 'class-properties', 'Свойства классов'],
    ['js-class', 'class-es6', 'expression',       'Выражения классов'],

    [1, 'Классы ES5 «Функциональный стиль»'],
    ['js-class', 'class-es5-functional', 'create',              'Объявление'],
    ['js-class', 'class-es5-functional', 'methods-private',     'Приватный метод'],
    ['js-class', 'class-es5-functional', 'getters-and-setters', 'Геттеры и сеттеры'],
    ['js-class', 'class-es5-functional', 'inherit',             'Наследование'],

    [1, 'Классы ES5 «Прототипный стиль»'],
    ['js-class', 'class-es5-prototype', 'info',        emoji.theory+'Теория'],
    ['js-class', 'class-es5-prototype', 'methods',     'Добавление методов'],
    ['js-class', 'class-es5-prototype', 'inherit',     'Наследование классов'],
    ['js-class', 'class-es5-prototype', 'mixins',      'Примеси'],
];


    "js-class/main/inheritance",
    "js-class/main/prototype",
    "js-class/main/new",
    "js-class/main/constructor",
    "js-class/main/return",
    "js-class/main/new-target",
    "js-class/class-es6/info",
    "js-class/class-es6/item-create",
    "js-class/class-es6/item-getter",
    "js-class/class-es6/item-static",
    "js-class/class-es6/item-inherit",
    "js-class/class-es6/class-properties",
    "js-class/class-es6/expression",
    "js-class/class-es5-functional/create",
    "js-class/class-es5-functional/methods-private",
    "js-class/class-es5-functional/getters-and-setters",
    "js-class/class-es5-functional/inherit",
    "js-class/class-es5-prototype/info",
    "js-class/class-es5-prototype/methods",
    "js-class/class-es5-prototype/inherit",
    "js-class/class-es5-prototype/mixins"
	

//---------------------------------------------------------------------
// JAVASCRIPT OBJECTS
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

const commentProto = ' <u-code-comment>__proto__</u-code-comment>';

var arrJsObjects = [
    [1, 'Методы'],
    ['js-objects', 'methods', 'object-create',       emoji.chevron+setTheme(4, ['Object.create'])+commentProto],
    ['js-objects', 'methods', 'object-assign',       emoji.chevron+setTheme(4, ['Object.assign'])],
    ['js-objects', 'methods', 'object-entries',      emoji.chevron+setTheme(4, ['Object.entries()'])],
    ['js-objects', 'methods', 'object-from-entries', emoji.chevron+setTheme(4, ['Object.fromEntries()'])],
    ['js-objects', 'methods', 'object-values',       emoji.chevron+setTheme(4, ['Object.values()'])],
    ['js-objects', 'methods', 'object-keys',         emoji.chevron+setTheme(4, ['Object.keys'])],

    ['js-objects', 'methods', 'set-prototype-of',    emoji.chevron+setTheme(4, ['Object.setPrototypeOf'])+commentProto],
    ['js-objects', 'methods', 'get-prototype-of',    emoji.chevron+setTheme(4, ['Object.getPrototypeOf'])+commentProto],

    ['js-objects', 'methods', 'is-prototype-of',     emoji.chevron+setTheme(4, ['isPrototypeOf'])+commentProto],
    ['js-objects', 'methods', 'instanceof',          emoji.chevron+setTheme(4, ['instanceof'])],

    ['js-objects', 'main', 'for',              'Перебор объекта'],
    ['js-objects', 'main', 'check-property',   'Проверка наличия свойства'],
    ['js-objects', 'main', 'descriptor',       'Дескрипторы свойств'],
    ['js-objects', 'main', 'extends',          'Расширяемость объектов'],

    [1, 'Основное'],
    ['js-objects', 'main', 'info',             emoji.theory+'Теория'],
    ['js-objects', 'main', 'literal-notation', emoji.code+'Литеральная нотация'],
    ['js-objects', 'main', 'conversion',       setTheme(1, ['toString', 'valueOf'])],

    [1, 'Примеры'],
    ['js-objects', 'samples', 'sort-elements-obj',         emoji.baseball+'Сортировка элементов массива'],
    ['js-objects', 'samples', 'flat-array-from-obj',       emoji.baseball+'Плоский массив из объекта'],
    ['js-objects', 'samples', 'setting-object-properties', emoji.baseball+'Задание свойств объекта'],
    ['js-objects', 'samples', 'methods-various-obj',       emoji.baseball+'Метод для разных объектов'],
    ['js-objects', 'samples', 'return-obj',                emoji.baseball+'Функция, возвращающая объект'],

    [1, 'Прочее'],
    ['js-objects', 'other', 'compare',       emoji.lemon+'Сравнение объектов'],
    ['js-objects', 'other', 'constructor',  'Конструктор создания объекта'],
    ['js-objects', 'other', 'prototype',    'Прототип'],
];

    "js-objects/methods/object-create",
    "js-objects/methods/object-assign",
    "js-objects/methods/object-entries",
    "js-objects/methods/object-from-entries",
    "js-objects/methods/object-values",
    "js-objects/methods/object-keys",
    "js-objects/methods/set-prototype-of",
    "js-objects/methods/get-prototype-of",
    "js-objects/methods/is-prototype-of",
    "js-objects/methods/instanceof",
    "js-objects/main/for",
    "js-objects/main/check-property",
    "js-objects/main/descriptor",
    "js-objects/main/extends",
    "js-objects/main/info",
    "js-objects/main/literal-notation",
    "js-objects/main/conversion",
    "js-objects/samples/sort-elements-obj",
    "js-objects/samples/flat-array-from-obj",
    "js-objects/samples/setting-object-properties",
    "js-objects/samples/methods-various-obj",
    "js-objects/samples/return-obj",
    "js-objects/other/compare",
    "js-objects/other/constructor",
    "js-objects/other/prototype"


//---------------------------------------------------------------------
// WEBPACK
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrWebpack = [
    [1, 'Информация'],
    ['webpack', 'main', 'info',      emoji.theory+'Информация'],
    ['webpack', 'main', 'structure', emoji.code+'Структура'],
    ['webpack', 'main', 'scripts',   'Скрипты'],

    [1, 'plugins'],
    ['webpack', 'plugins', 'webpack',                 setTheme(2, ['webpack', 'webpack-cli'])],
    ['webpack', 'plugins', 'webpack-dev-server',      setTheme(2, ['webpack-dev-server'])],
    ['webpack', 'plugins', 'babel',                   setTheme(2, ['babel-loader'])],
    ['webpack', 'plugins', 'html-webpack-plugin',     setTheme(2, ['html-webpack-plugin'])],
    ['webpack', 'plugins', 'clean-webpack-plugin',    setTheme(1, ['clean-webpack-plugin'])],
    ['webpack', 'plugins', 'react',                   setTheme(1, ['react'])],

    [1, 'loaders'],
    ['webpack', 'loaders', 'css-loader',              setTheme(2, ['css-loader'])],
    ['webpack', 'loaders', 'mini-css-extract-plugin', setTheme(2, ['mini-css-extract-plugin'])],
    ['webpack', 'loaders', 'style-loader',            setTheme(1, ['style-loader'])],
    ['webpack', 'loaders', 'sass-loader',             setTheme(1, ['sass-loader'])],
    ['webpack', 'loaders', 'file-loader',             setTheme(2, ['file-loader'])],
    ['webpack', 'loaders', 'image-webpack-loader',    setTheme(1, ['image-webpack-loader'])],
    ['webpack', 'loaders', 'html-loader',             setTheme(1, ['html-loader'])],

    [1, 'postcss'],
    ['webpack', 'postcss', 'postcss-loader',          setTheme(1, ['postcss-loader'])],
    ['webpack', 'postcss', 'autoprefixer',            setTheme(1, ['autoprefixer'])],
    ['webpack', 'postcss', 'cssnano',                 setTheme(1, ['cssnano'])],
    ['webpack', 'postcss', 'css-mqpacker',            setTheme(1, ['css-mqpacker'])],

    [1, 'options'],
    ['webpack', 'options', 'mode',                    setTheme(4, ['mode'])],
    ['webpack', 'options', 'devtool',                 setTheme(4, ['devtool'])],
    ['webpack', 'options', 'entry-output',            setTheme(4, ['entry', 'output'])],
    ['webpack', 'options', 'library',                 setTheme(4, ['library'])],
    ['webpack', 'options', 'watch',                   setTheme(4, ['watch', 'watchOptions'])],
    ['webpack', 'options', 'resolve',                 setTheme(4, ['resolve'])],
];


    "webpack/main/info",
    "webpack/main/structure",
    "webpack/main/scripts",
    "webpack/plugins/webpack",
    "webpack/plugins/webpack-dev-server",
    "webpack/plugins/babel",
    "webpack/plugins/html-webpack-plugin",
    "webpack/plugins/clean-webpack-plugin",
    "webpack/plugins/react",
    "webpack/loaders/css-loader",
    "webpack/loaders/mini-css-extract-plugin",
    "webpack/loaders/style-loader",
    "webpack/loaders/sass-loader",
    "webpack/loaders/file-loader",
    "webpack/loaders/image-webpack-loader",
    "webpack/loaders/html-loader",
    "webpack/postcss/postcss-loader",
    "webpack/postcss/autoprefixer",
    "webpack/postcss/cssnano",
    "webpack/postcss/css-mqpacker",
    "webpack/options/mode",
    "webpack/options/devtool",
    "webpack/options/entry-output",
    "webpack/options/library",
    "webpack/options/watch",
    "webpack/options/resolve"
	
	
//---------------------------------------------------------------------
// GIT
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrGit = [
    [1, 'Use Case'],
    ['git', 'usecase', 'common',            'Общее'],
    ['git', 'usecase', 'squash-commit',     'Squash Commit'],
    ['git', 'usecase', 'resolve-conflists', 'Разрешение конфликтов merge'],
    ['git', 'usecase', 'reset-changes',     'Отмена изменений'],
    ['git', 'usecase', 'other',             'Прочее'],

    [1, 'Команды Основные'],
    ['git', 'command',  'init',         setTheme(1, ['init'])],
    ['git', 'command',  'clone',        setTheme(1, ['clone'])],
    ['git', 'command',  'add',          setTheme(1, ['add'])],
    ['git', 'command',  'commit',       setTheme(1, ['commit'])],
    ['git', 'command',  'push',         setTheme(1, ['push'])],
    ['git', 'command',  'fetch',        setTheme(1, ['fetch'])],
    ['git', 'command',  'pull',         setTheme(1, ['pull'])],
    ['git', 'command',  'branch',       setTheme(1, ['branch'])],
    ['git', 'command',  'checkout',     setTheme(1, ['checkout'])],
    ['git', 'command',  'merge',        setTheme(1, ['merge'])],
    ['git', 'command',  'rebase',       setTheme(1, ['rebase'])],
    ['git', 'command',  'cherry-pick',  setTheme(1, ['cherry-pick'])],
    ['git', 'command',  'revert',       setTheme(1, ['revert'])],
    ['git', 'command',  'stash',        setTheme(1, ['stash'])],
    ['git', 'command',  'reset',        setTheme(1, ['reset'])],

    [1, 'Команды Дополнительно'],
    ['git', 'command',  'diff',         setTheme(1, ['diff'])],
    ['git', 'command',  'config',       setTheme(1, ['config'])],
    ['git', 'command',  'help',         setTheme(1, ['help'])],
    ['git', 'command',  'status',       setTheme(1, ['status'])],
    ['git', 'command',  'log',          setTheme(1, ['log'])],
    ['git', 'command',  'clean',        setTheme(1, ['clean'])],
    ['git', 'main',     'command',      setTheme(1, ['...'])],

    [1, 'GitHub'],
    ['git', 'github', 'terminal-connect', 'Подключение по SSH'],
    ['git', 'github', 'info',             'Теория'],
    ['git', 'github', 'github-desktop',   'GitHub Desktop'],
    ['git', 'github', 'smart-git',        'SmartGit'],

    [1, 'Теория'],
    ['git', 'theory', 'info',    'Информация'],
    ['git', 'theory', 'vcs',     'Системы управления версиями'],
    ['git', 'theory', 'gitflow', 'Gitflow'],
];


    "git/usecase/common",
    "git/usecase/squash-commit",
    "git/usecase/resolve-conflists",
    "git/usecase/reset-changes",
    "git/usecase/other",
    "git/command/init",
    "git/command/clone",
    "git/command/add",
    "git/command/commit",
    "git/command/push",
    "git/command/fetch",
    "git/command/pull",
    "git/command/branch",
    "git/command/checkout",
    "git/command/merge",
    "git/command/rebase",
    "git/command/cherry-pick",
    "git/command/revert",
    "git/command/stash",
    "git/command/reset",
    "git/command/diff",
    "git/command/config",
    "git/command/help",
    "git/command/status",
    "git/command/log",
    "git/command/clean",
    "git/main/command",
    "git/github/terminal-connect",
    "git/github/info",
    "git/github/github-desktop",
    "git/github/smart-git",
    "git/theory/info",
    "git/theory/vcs",
    "git/theory/gitflow"
	

//---------------------------------------------------------------------
// VUE.JS
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrVuejs = [
    [1, 'Информация'],
    ['vue-js', 'main',  'info',            emoji.theory+'Информация'],
    ['vue-js', 'main',  'structure-files', 'Структура проекта'],
    ['vue-js', 'main',  'structure-code',  emoji.code+'Пример кода vue-cli'],
    ['vue-js', 'main',  'instance-vue',    emoji.code+'Экземпляр Vue'],
    ['vue-js', 'main',  'lifecycle-hooks', 'Хуки жизненного цикла'],
    ['theory', 'web',   'virtual-dom',     'Virtual DOM (Общее)'],

    [1, 'Реактивность'],
    ['vue-js', 'reactivity', 'reactivity',   'Реактивность'],
    ['vue-js', 'reactivity', 'set',          setTheme(1, ['vm.$set'])+' - добаление реакт. элементов'],
    ['vue-js', 'reactivity', 'next-tick',    setTheme(1, ['vm.$nextTick'])+' - обновление'],
    ['vue-js', 'reactivity', 'force-update', setTheme(1, ['vm.$forceUpdate'])+' - переотрисовка'],

    [1, 'Директивы'],
    ['vue-js', 'directives', 'info',          'Шаблоны и директивы'],
    ['vue-js', 'directives', 'v-text_v-html', setTheme(1, ['v-text', 'v-html'])],
    ['vue-js', 'directives', 'v-show_v-if',   setTheme(1, ['v-show', 'v-if', 'v-else', 'v-else-if'])],
    ['vue-js', 'directives', 'v-for',         setTheme(1, ['v-for'])],
    ['vue-js', 'directives', 'v-on',          setTheme(1, ['v-on:'])],
    ['vue-js', 'directives', 'v-bind',        setTheme(1, ['v-bind:'])+' :class :style'],
    ['vue-js', 'directives', 'v-model',       setTheme(1, ['v-model'])],
    ['vue-js', 'directives', 'v-pre',         setTheme(1, ['v-pre'])],
    ['vue-js', 'directives', 'v-cloak',       setTheme(1, ['v-cloak'])],
    ['vue-js', 'directives', 'v-once',        setTheme(1, ['v-once'])],

    [1, 'Компоненты'],
    ['vue-js', 'components', 'info',                   emoji.theory+'Информация'],
    ['vue-js', 'components', 'component-simple',       'Простой компонент'],
    ['vue-js', 'components', 'component-registration', 'Регистрация компонента'],
    ['vue-js', 'components', 'component-global',       'Глобальный компонент'],
    ['vue-js', 'components', 'component-dynamic',      'Динамические компоненты'],
    ['vue-js', 'components', 'props',                  setTheme(1, ['props'])],
    ['vue-js', 'components', 'slot',                   setTheme(1, ['&lt;slot&gt;'])],
    ['vue-js', 'components', 'template',               setTheme(1, ['&lt;template&gt;'])],
    ['vue-js', 'components', 'emit',                   setTheme(1, ['$emit'])],

    [1, 'Опции и прочее'],
    ['vue-js', 'options-and-other', 'computed',   setTheme(1, ['computed'])],
    ['vue-js', 'options-and-other', 'watch',      setTheme(1, ['watch'])],
    ['vue-js', 'options-and-other', 'created',    setTheme(1, ['created'])],
    ['vue-js', 'options-and-other', 'transition', setTheme(1, ['&lt;transition&gt;'])],
    ['vue-js', 'options-and-other', 'vue-extend', setTheme(1, ['Vue.extend'])],

    [1, 'DOM'],
    ['vue-js', 'dom', 'event',  setTheme(1, ['$event'])+' - доступ к событию'],
    ['vue-js', 'dom', 'refs',   setTheme(1, ['$refs'])+' - ссылка на DOM элемент'],

    [1, 'Переиспользование и композиция'],
    ['vue-js', 'composition', 'mixins',          'Примеси'],
    ['vue-js', 'composition', 'user-directives', 'Пользовательские директивы'],
    ['vue-js', 'composition', 'render',          'Render-функции'],
    ['vue-js', 'composition', 'plugins',         'Плагины'],
    ['vue-js', 'composition', 'filters',         'Фильтры'],

    [1, 'Vuex'],
    ['vue-js', 'vuex', 'info',      emoji.theory+'Информация'],
    ['vue-js', 'vuex', 'src',       'Подключение'],
    ['vue-js', 'vuex', 'store',     emoji.fire+'0. Хранилище (store)'],
    ['vue-js', 'vuex', 'state',     emoji.fire+'1. Состояние (state)'],
    ['vue-js', 'vuex', 'getters',   emoji.fire+'2. Геттеры (getters)'],
    ['vue-js', 'vuex', 'mutations', emoji.fire+'3. Мутации (mutations)'],
    ['vue-js', 'vuex', 'actions',   emoji.fire+'4. Действия (actions)'],
    ['vue-js', 'vuex', 'modules',   emoji.fire+'5. Модули (modules)'],
    ['vue-js', 'vuex', 'samples',   'Примеры'],

    [1, 'Vue Router'],
    ['vue-js', 'vue-router', 'info',                 emoji.theory+'Информация'],
    ['vue-js', 'vue-router', 'src-script',           'Подключение через &lt;script&gt;'],
    ['vue-js', 'vue-router', 'src-npm',              'Подключение через NPM'],
    ['vue-js', 'vue-router', 'server-configuration', 'Конфигурование сервера'],
    ['vue-js', 'vue-router', 'path-static',          emoji.cookie+'Статический путь'],
    ['vue-js', 'vue-router', 'path-dynamic',         emoji.cookie+'Динамический путь'],
    ['vue-js', 'vue-router', 'path-comparison',      emoji.cookie+'Сопоставление путей'],
    ['vue-js', 'vue-router', 'navigation',           emoji.cookie+'Программная навигация'],
    ['vue-js', 'vue-router', 'passing-props',        emoji.cookie+'Входные параметры (props)'],
    ['vue-js', 'vue-router', 'navigation-guards',    emoji.cookie+'Навигационные хуки'],
    ['vue-js', 'vue-router', 'scroll-behavior',      emoji.cookie+'Поведение прокрутки страницы'],
    ['vue-js', 'vue-router', 'lazy-loading',         emoji.cookie+'Леннивая загрузка маршрутов'],
    ['vue-js', 'vue-router', 'active-link',          'Стилизация активной ссылки'],

    [1, 'Vue CLI'],
    ['vue-js', 'vue-cli', 'info',              emoji.theory+'Информация'],
    ['vue-js', 'vue-cli', 'components-system', 'Компоненты системы'],
    ['vue-js', 'vue-cli', 'npm-command',       'Npm/Vue Command'],
    ['vue-js', 'vue-cli', 'import_export',     setTheme(1, ['import', 'export'])],
    ['vue-js', 'vue-cli', 'vscode',            'Настройка Visual Studio Code'],

    [1, 'VueLoader'],
    ['vue-js', 'vue-loader', 'package',        emoji.code+'Пакеты'],

    [1, 'Плагины'],
    ['vue-js', 'plugins', 'vuetify',     'Vuetify'],
    ['vue-js', 'plugins', 'fontawesome', 'FontAwesome'],

    [1, 'Тестирование'],
    ['vue-js', 'testing', 'unit-testing', 'Модульное тестирование'],
    ['vue-js', 'testing', 'vue-devtools', 'Vue-DevTools'],

    [1, 'Примеры'],
    ['vue-js', 'samples', 'cart',   'Добавить / удалить из корзины'],
];


    "vue-js/main/info",
    "vue-js/main/structure-files",
    "vue-js/main/structure-code",
    "vue-js/main/instance-vue",
    "vue-js/main/lifecycle-hooks",
    "theory/web/virtual-dom",
    "vue-js/reactivity/reactivity",
    "vue-js/reactivity/set",
    "vue-js/reactivity/next-tick",
    "vue-js/reactivity/force-update",
    "vue-js/directives/info",
    "vue-js/directives/v-text_v-html",
    "vue-js/directives/v-show_v-if",
    "vue-js/directives/v-for",
    "vue-js/directives/v-on",
    "vue-js/directives/v-bind",
    "vue-js/directives/v-model",
    "vue-js/directives/v-pre",
    "vue-js/directives/v-cloak",
    "vue-js/directives/v-once",
    "vue-js/components/info",
    "vue-js/components/component-simple",
    "vue-js/components/component-registration",
    "vue-js/components/component-global",
    "vue-js/components/component-dynamic",
    "vue-js/components/props",
    "vue-js/components/slot",
    "vue-js/components/template",
    "vue-js/components/emit",
    "vue-js/options-and-other/computed",
    "vue-js/options-and-other/watch",
    "vue-js/options-and-other/created",
    "vue-js/options-and-other/transition",
    "vue-js/options-and-other/vue-extend",
    "vue-js/dom/event",
    "vue-js/dom/refs",
    "vue-js/composition/mixins",
    "vue-js/composition/user-directives",
    "vue-js/composition/render",
    "vue-js/composition/plugins",
    "vue-js/composition/filters",
    "vue-js/vuex/info",
    "vue-js/vuex/src",
    "vue-js/vuex/store",
    "vue-js/vuex/state",
    "vue-js/vuex/getters",
    "vue-js/vuex/mutations",
    "vue-js/vuex/actions",
    "vue-js/vuex/modules",
    "vue-js/vuex/samples",
    "vue-js/vue-router/info",
    "vue-js/vue-router/src-script",
    "vue-js/vue-router/src-npm",
    "vue-js/vue-router/server-configuration",
    "vue-js/vue-router/path-static",
    "vue-js/vue-router/path-dynamic",
    "vue-js/vue-router/path-comparison",
    "vue-js/vue-router/navigation",
    "vue-js/vue-router/passing-props",
    "vue-js/vue-router/navigation-guards",
    "vue-js/vue-router/scroll-behavior",
    "vue-js/vue-router/lazy-loading",
    "vue-js/vue-router/active-link",
    "vue-js/vue-cli/info",
    "vue-js/vue-cli/components-system",
    "vue-js/vue-cli/npm-command",
    "vue-js/vue-cli/import_export",
    "vue-js/vue-cli/vscode",
    "vue-js/vue-loader/package",
    "vue-js/plugins/vuetify",
    "vue-js/plugins/fontawesome",
    "vue-js/testing/unit-testing",
    "vue-js/testing/vue-devtools",
    "vue-js/samples/cart"


//---------------------------------------------------------------------
// THEORY
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrTheory = [
    [1, 'Стандарты кода'],
    ['theory', 'programming-principles', 'solid',         emoji.fire+'SOLID'],
    ['theory', 'programming-principles', 'dry',           emoji.fire+'DRY'],
    ['theory', 'programming-principles', 'kiss',          emoji.fire+'KISS'],
    ['theory', 'programming-principles', 'yagni',         emoji.fire+'YAGNI'],
    ['theory', 'programming-principles', 'code-smell',    'Запахи кода'],
    ['theory', 'programming-principles', 'refactoring',   'Рефакторинг'],
    ['theory', 'programming-principles', 'code-standart', 'Стандарты кода'],

    [1, 'Deployment'],
    ['theory', 'deployment', 'info',                   emoji.theory+'Информация'],
    ['theory', 'deployment', 'continuous-integration', emoji.baseball+'1. Continuous Integration'],
    ['theory', 'deployment', 'continuous-delivery',    emoji.baseball+'2. Continuous Delivery'],
    ['theory', 'deployment', 'continuous-deployment',  emoji.baseball+'3. Continuous Deployment'],
    ['theory', 'deployment', 'software-deployment',    emoji.baseball+'Software Deployment'],

    [1, 'Оптимизация'],
    ['theory', 'optimization', 'info',                    emoji.theory+'Оптимизация загрузки'],
    ['theory', 'optimization', 'critical-rendering-path', emoji.avocado+'Critical Rendering Path'],
    ['theory', 'optimization', 'repaint-and-reflow',      emoji.avocado+'Repaint & Reflow'],
    ['theory', 'optimization', 'caching',                 emoji.favorite+'Кэширование'],
    ['theory', 'optimization', 'tree-shaking',            emoji.favorite+'Tree shaking'],

    [1, 'MVC ...'],
    ['theory', 'application-architecture', 'info', emoji.theory+'Шаблоны проектирования'],
    ['theory', 'application-architecture', 'mvc',  emoji.lemon+'MVC'],
    ['theory', 'application-architecture', 'mvvm', emoji.lemon+'MVVM'],

    //---------------------------------------------------------------------

    [1, 'Web'],
    ['theory', 'web', 'web-applications',     'Виды веб-приложений'],
    ['theory', 'web', 'evolution-web-design', 'Эволюция веб-дизайна'],
    ['theory', 'web', 'frameworks',           'Фреймворки'],
    ['theory', 'web', 'site-load',            'Загрузка сайта'],
    ['theory', 'web', 'webkit',               'Браузерные движки'],

    [1, 'Методологии разработки'],
    ['theory', 'development-methodologies', 'info',       'Методологии разработки'],
    ['theory', 'development-methodologies', 'waterfall',  'Waterfall'],
    ['theory', 'development-methodologies', 'agile',      'Agile / Scrum / Kanban'],
    ['theory', 'development-methodologies', 'estimation', 'Эстимация'],

    [1, 'Прочее'],
    ['theory', 'other', 'imports',              'Порядок импортов'],
    ['theory', 'other', 'version',              'Политика версионирования'],
    ['theory', 'other', 'name-case',            'Соглашение по именованию'],
    ['theory', 'other', 'prefix',               'Префиксы'],
    ['theory', 'other', 'specification-stage',  'Стадии спецификации'],
    ['theory', 'other', 'dictionary',           'Словарь'],
    ['theory', 'other', 'polyfill',             'Полифиллы'],
];


    "theory/programming-principles/solid",
    "theory/programming-principles/dry",
    "theory/programming-principles/kiss",
    "theory/programming-principles/yagni",
    "theory/programming-principles/code-smell",
    "theory/programming-principles/refactoring",
    "theory/programming-principles/code-standart",
    "theory/deployment/info",
    "theory/deployment/continuous-integration",
    "theory/deployment/continuous-delivery",
    "theory/deployment/continuous-deployment",
    "theory/deployment/software-deployment",
    "theory/optimization/info",
    "theory/optimization/critical-rendering-path",
    "theory/optimization/repaint-and-reflow",
    "theory/optimization/caching",
    "theory/optimization/tree-shaking",
    "theory/application-architecture/info",
    "theory/application-architecture/mvc",
    "theory/application-architecture/mvvm",
    "theory/web/web-applications",
    "theory/web/evolution-web-design",
    "theory/web/frameworks",
    "theory/web/site-load",
    "theory/web/webkit",
    "theory/development-methodologies/info",
    "theory/development-methodologies/waterfall",
    "theory/development-methodologies/agile",
    "theory/development-methodologies/estimation",
    "theory/other/imports",
    "theory/other/version",
    "theory/other/name-case",
    "theory/other/prefix",
    "theory/other/specification-stage",
    "theory/other/dictionary",
    "theory/other/polyfill"

//---------------------------------------------------------------------
// PARADIGMS
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrParadigms = [
    [1, 'ФП'],
    ['theory-paradigms', 'fp', 'functional',     'Информация'],
    ['theory-paradigms', 'fp', 'concept',        'Концепции'],
    ['theory-paradigms', 'fp', 'currying',       'Каррирование / Частичное применение функций'],

    [1, 'ООП'],
    ['theory-paradigms', 'oop', 'principles',       'Принципы'],
    ['theory-paradigms', 'oop', 'access-modifiers', 'Модификаторы доступа'],

    [1, 'Основное'],
    ['theory-paradigms', 'main', 'info',           'Парадигмы'],
    ['theory-paradigms', 'main', 'imperative',     '1. Императивное'],
    ['theory-paradigms', 'main', 'declarative',    '2. Декларативное'],
    ['theory-paradigms', 'main', 'composition',    'Композиция'],

    [1, '< / >'],
    ['theory-paradigms', 'main', 'ddd',            'DDD'],
    ['theory-paradigms', 'main', 'cqrs',           'CQRS'],
    ['theory-paradigms', 'main', 'event-sourcing', 'Event Sourcing'],
];


    "theory-paradigms/fp/functional",
    "theory-paradigms/fp/concept",
    "theory-paradigms/fp/currying",
    "theory-paradigms/oop/principles",
    "theory-paradigms/oop/access-modifiers",
    "theory-paradigms/main/info",
    "theory-paradigms/main/imperative",
    "theory-paradigms/main/declarative",
    "theory-paradigms/main/composition",
    "theory-paradigms/main/ddd",
    "theory-paradigms/main/cqrs",
    "theory-paradigms/main/event-sourcing"

//---------------------------------------------------------------------
// ALGORITMS
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrAlgoritms = [
    [1, 'Big-O Notation'],
    ['theory-algoritms', 'big-o', 'info',      emoji.theory+'Информация'],
    ['theory-algoritms', 'big-o', 'variants',  emoji.avocado+'Варианты'],
    ['theory-algoritms', 'big-o', 'structure', emoji.avocado+'Структуры данных'],
    ['theory-algoritms', 'big-o', 'samples',   emoji.avocado+'Примеры'],

    [1, 'Основное'],
    ['theory-algoritms', 'main', 'info',            emoji.theory+'Информация'],
    ['theory-algoritms', 'main', 'paradigms',       emoji.theory+'Методы разработки алгоритмов'],

    [1, 'Алгоритмы'],
    ['theory-algoritms', 'algoritms', 'sort',           emoji.code+'Сортировка'],
    ['theory-algoritms', 'algoritms', 'search',         emoji.code+'Поиск'],
    ['theory-algoritms', 'algoritms', 'string-reverse', emoji.code+'Переворот строки'],
    ['theory-algoritms', 'algoritms', 'hashing',        emoji.code+'Хеширование'],
    ['theory-algoritms', 'algoritms', 'fibonacci',      emoji.code+'Число Фибоначчи'],
    ['theory-algoritms', 'algoritms', 'factorial',      emoji.code+'Факториал'],
];

    "theory-algoritms/big-o/info",
    "theory-algoritms/big-o/variants",
    "theory-algoritms/big-o/structure",
    "theory-algoritms/big-o/samples",
    "theory-algoritms/main/info",
    "theory-algoritms/main/paradigms",
    "theory-algoritms/algoritms/sort",
    "theory-algoritms/algoritms/search",
    "theory-algoritms/algoritms/string-reverse",
    "theory-algoritms/algoritms/hashing",
    "theory-algoritms/algoritms/fibonacci",
    "theory-algoritms/algoritms/factorial"
	

//---------------------------------------------------------------------
// DATA STRUCTURES
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrDataStructures = [
    [1, 'Основное'],
    ['theory-data-structures', 'main', 'info',  emoji.theory+'Информация'],

    [1, 'Структуры данных'],

    //--------------------------------------------------------------------
    [2, 'Линейные'],
    //--------------------------------------------------------------------
    ['theory-data-structures', 'structures', 'stack',        emoji.favorite+'Стек'],
    ['theory-data-structures', 'structures', 'queue',        emoji.favorite+'Очередь'],
    ['theory-data-structures', 'structures', 'list-linked',  emoji.favorite+'Связанный список'],

    //--------------------------------------------------------------------
    [2, 'Остальные'],
    //--------------------------------------------------------------------
    ['theory-data-structures', 'structures', 'set',          emoji.favorite+'Множество'],
    ['theory-data-structures', 'structures', 'map',          emoji.favorite+'Map'],
    ['theory-data-structures', 'structures', 'hash',         emoji.favorite+'Хэш-таблица'],
    ['theory-data-structures', 'structures', 'list',         emoji.favorite+'Список'],
    ['theory-data-structures', 'structures', 'graph',        emoji.favorite+'Граф'],
    ['theory-data-structures', 'structures', 'tree',         emoji.favorite+'Дерево'],
    ['theory-data-structures', 'structures', 'tree-prefix',  emoji.favorite+'Префиксное дерево'],
    ['theory-data-structures', 'structures', 'heap',         emoji.favorite+'Куча'],

    [1, 'Примеры'],
    ['theory-data-structures', 'samples', 'intersection-array', emoji.code+'Пересечение массивов'],
    ['theory-data-structures', 'samples', 'multiple-checks',    emoji.code+'Множественные проверки'],

    [1, 'Структуры данных в JavaScript'],
    ['js', 'data-structures', 'map',        setTheme(1, ['Map', 'WeakMap'])],
    ['js', 'data-structures', 'set',        setTheme(1, ['Set', 'WeakSet'])],
];


    "theory-data-structures/main/info",
    "theory-data-structures/structures/stack",
    "theory-data-structures/structures/queue",
    "theory-data-structures/structures/list-linked",
    "theory-data-structures/structures/set",
    "theory-data-structures/structures/map",
    "theory-data-structures/structures/hash",
    "theory-data-structures/structures/list",
    "theory-data-structures/structures/graph",
    "theory-data-structures/structures/tree",
    "theory-data-structures/structures/tree-prefix",
    "theory-data-structures/structures/heap",
    "theory-data-structures/samples/intersection-array",
    "theory-data-structures/samples/multiple-checks",
    "js/data-structures/map",
    "js/data-structures/set"


//---------------------------------------------------------------------
// DESIGN PATTERNS
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrDesignPatterns = [
    [1, 'Основное'],
    ['theory-patterns', 'main',                 'info',             emoji.theory+'Информация'],

    [1, '1. Порождающие'],
    ['theory-patterns', 'patterns-generating', 'singleton',         emoji.pizza+setTheme(4, ['«Синглтон»'])],
    ['theory-patterns', 'patterns-generating', 'builder',           emoji.pizza+setTheme(4, ['«Строитель»'])],
    ['theory-patterns', 'patterns-generating', 'simple-factory',    emoji.pizza+setTheme(4, ['«Простая фабрика»'])],

    [1, '2. Структурные'],
    ['theory-patterns', 'patterns-structural', 'decorator',         emoji.pizza+setTheme(4, ['«Декоратор»'])],
    ['theory-patterns', 'patterns-structural', 'facade',            emoji.pizza+setTheme(4, ['«Фасад»'])],

    [1, '3. Поведенческие'],
    ['theory-patterns', 'patterns-behavioral', 'observer',          emoji.pizza+setTheme(4, ['«Наблюдатель»'])],

    [1, '4. Неизвестно'],
    ['theory-patterns', 'patterns-other',      'module',            emoji.pizza+setTheme(4, ['«Модуль»'])],
    ['theory-patterns', 'patterns-other',      'module-revealing',  emoji.pizza+setTheme(4, ['«Открытый модуль»'])],
];


    "theory-patterns/main/info",
    "theory-patterns/patterns-generating/singleton",
    "theory-patterns/patterns-generating/builder",
    "theory-patterns/patterns-generating/simple-factory",
    "theory-patterns/patterns-structural/decorator",
    "theory-patterns/patterns-structural/facade",
    "theory-patterns/patterns-behavioral/observer",
    "theory-patterns/patterns-other/module",
    "theory-patterns/patterns-other/module-revealing"

//---------------------------------------------------------------------
// OTHER
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrOther = [
    [1, 'Технологии'],
    ['other', 'technology', 'jira',                   'Jira'],
    ['other', 'technology', 'emmet',                  'Emmet'],
    ['other', 'technology', 'react-native',           'React.Native'],

    [1, 'Информация'],
    ['other', 'main', 'code-editors',           'Редакторы кода'],
    ['other', 'main', 'chrome-mobile-version',  'Chrome: Мобильная версия'],
    ['other', 'main', 'server-online',          'Server Online'],
    ['other', 'main', 'photoshop',              'Adobe Photoshop'],
    ['other', 'main', 'denwer',                 'Denwer'],
    ['other', 'main', 'google-chrome',          'Google Chrome'],
    ['other', 'main', 'windows',                'Windows'],
    ['other', 'main', 'trash',                  'Свалка'],
];

    "other/technology/jira",
    "other/technology/emmet",
    "other/technology/react-native",
    "other/main/code-editors",
    "other/main/chrome-mobile-version",
    "other/main/server-online",
    "other/main/photoshop",
    "other/main/denwer",
    "other/main/google-chrome",
    "other/main/windows",
    "other/main/trash"


//---------------------------------------------------------------------
// JS-TASKS
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrJsTasks = [
    [1, 'Полифилы'],
    ['js-class',   'main',      'new',            emoji.cookie+setTheme(4, ['new'])],
    ['js-task',    'polyphyls', 'object-create',  emoji.cookie+setTheme(4, ['Object.create'])],
    ['js-task',    'polyphyls', 'bind',           emoji.cookie+setTheme(4, ['bind()'])],
    ['js-task',    'polyphyls', 'promise-all',    emoji.cookie+setTheme(4, ['Promise.all'])],
    ['js-task',    'polyphyls', 'map',            emoji.cookie+setTheme(4, ['Array.prototype.map'])],
    ['js-task',    'polyphyls', 'filter',         emoji.cookie+setTheme(4, ['Array.prototype.filter'])],
    ['js-task',    'polyphyls', 'reduce',         emoji.cookie+setTheme(4, ['Array.prototype.reduce'])],

    [1, 'Алгоритмы'],
    ['js-task', 'algoritms', 'shallow-equal',            emoji.fire+setTheme(4, ['Shallow Equal'])],
    ['js-task', 'algoritms', 'sum-brackets',             emoji.fire+setTheme(4, ['Сумма скобок sum(1)(2)(3)'])],
    ['js-task', 'algoritms', 'closing-brackets',         emoji.fire+setTheme(4, ['Проверить закрывающиеся скобки'])],

    ['js-task', 'algoritms', 'compose',                  emoji.code+setTheme(4, ['Compose'])],
    ['js-task', 'algoritms', 'memoization',              emoji.code+setTheme(4, ['Memoization'])],
    ['js-task', 'algoritms', 'duplicate',                emoji.code+setTheme(4, ['Duplicate'])],
    ['js-task', 'algoritms', 'anagram',                  emoji.code+setTheme(4, ['Анаграмма'])],
    ['js-task', 'algoritms', 'palindrome',               emoji.code+setTheme(4, ['Палиндром'])],
    ['js-task', 'algoritms', 'sum-sequence',             emoji.code+setTheme(4, ['Сумма последовательности'])],
    ['js-task', 'algoritms', 'function-count',           emoji.code+setTheme(4, ['Функция считает свои вызовы'])],

    ['js-task', 'algoritms', 'event-emitter',            emoji.cup+setTheme(4, ['EventEmitter'])],
    ['js-task', 'algoritms', 'series',                   emoji.cup+setTheme(4, ['Series'])],
    ['js-task', 'algoritms', 'shop-queue',               emoji.cup+setTheme(4, ['Магазин с кассами'])],

    [1, 'Декораторы'],
    ['js-task', 'decorators', 'debounce',  setTheme(1, ['debounce()'])],
    ['js-task', 'decorators', 'once',      setTheme(1, ['once()'])],
    ['js-task', 'decorators', 'after',     setTheme(1, ['after()'])],
    ['js-task', 'decorators', 'throttle',  setTheme(1, ['throttle()'])],
    ['js-task', 'decorators', 'partial',   setTheme(1, ['partial()'])],
    ['js-task', 'decorators', 'pipe',      setTheme(1, ['pipe()'])],

    [1, 'Асинхронность'],
    ['js-task', 'algoritms', 'retrier',                  emoji.code+setTheme(4, ['Retrier (запросы по URL)'])],
    ['js-task', 'algoritms', 'promise-make-request',     emoji.code+setTheme(4, ['Promise Make Concurrent Request'])],
    ['js-task', 'algoritms', 'cancel-timeout',           emoji.code+setTheme(4, ['setTimeout: отмена всех'])],
    ['js-task', 'algoritms', 'settimeout-for-var',       emoji.code+setTheme(4, ['setTimeout: в for без let'])],
    ['js-task', 'algoritms', 'promisification-function', emoji.code+setTheme(4, ['Промисификация функции'])],

    [1, 'Массивы'],
    ['js-task', 'arrays', 'intersection-arrays',  emoji.code+setTheme(4, ['Пересечение массивов'])],
    ['js-task', 'arrays', 'flat-array',           emoji.code+setTheme(4, ['Плоский массив'])],
    ['js-task', 'arrays', 'max-array-element',    emoji.code+setTheme(4, ['Максимальный элемент массива'])],
    ['js-task', 'arrays', 'doit',                 emoji.code+setTheme(4, ['Двумерный массив сумм'])],
    ['js-task', 'arrays', 'merge-sort',           emoji.code+setTheme(4, ['MergeSort'])],
    ['js-task', 'arrays', 'array-average-value',  emoji.code+setTheme(4, ['Получить среднюю оценку'])],

    [1, 'Общие темы'],
    ['js-task', 'custom', 'hoisting',    emoji.pizza+setTheme(4, ['Всплытие'])],
    ['js-task', 'custom', 'closure',     emoji.pizza+setTheme(4, ['Замыкания'])],
    ['js-task', 'custom', 'prototype',   emoji.pizza+setTheme(4, ['Прототипы'])],
    ['js-task', 'custom', 'context',     emoji.pizza+setTheme(4, ['Контекст'])],
    ['js-task', 'custom', 'event-loop',  emoji.pizza+setTheme(4, ['Event Loop'])],
    ['js-task', 'custom', 'async',       emoji.pizza+setTheme(4, ['Асинхронность'])],
    ['js-task', 'custom', 'promise',     emoji.pizza+setTheme(4, ['Promise'])],
    ['js-task', 'custom', 'async-await', emoji.pizza+setTheme(4, ['Async Await'])],
    ['js-task', 'custom', 'currying',    emoji.pizza+setTheme(4, ['Каррирование'])],
    ['js-task', 'custom', 'objects',     emoji.pizza+setTheme(4, ['Объекты'])],
    ['js-task', 'custom', 'arrays',      emoji.pizza+setTheme(4, ['Массивы'])],

    [1, 'Прочее'],
    ['js-task', 'other', 'undefined-check',    emoji.code+setTheme(4, ['Проверка на "undefined"'])],
];



    "js-class/main/new",
    "js-task/polyphyls/object-create",
    "js-task/polyphyls/bind",
    "js-task/polyphyls/promise-all",
    "js-task/polyphyls/map",
    "js-task/polyphyls/filter",
    "js-task/polyphyls/reduce",
    "js-task/algoritms/shallow-equal",
    "js-task/algoritms/sum-brackets",
    "js-task/algoritms/closing-brackets",
    "js-task/algoritms/compose",
    "js-task/algoritms/memoization",
    "js-task/algoritms/duplicate",
    "js-task/algoritms/anagram",
    "js-task/algoritms/palindrome",
    "js-task/algoritms/sum-sequence",
    "js-task/algoritms/function-count",
    "js-task/algoritms/event-emitter",
    "js-task/algoritms/series",
    "js-task/algoritms/shop-queue",
    "js-task/decorators/debounce",
    "js-task/decorators/once",
    "js-task/decorators/after",
    "js-task/decorators/throttle",
    "js-task/decorators/partial",
    "js-task/decorators/pipe",
    "js-task/algoritms/retrier",
    "js-task/algoritms/promise-make-request",
    "js-task/algoritms/cancel-timeout",
    "js-task/algoritms/settimeout-for-var",
    "js-task/algoritms/promisification-function",
    "js-task/arrays/intersection-arrays",
    "js-task/arrays/flat-array",
    "js-task/arrays/max-array-element",
    "js-task/arrays/doit",
    "js-task/arrays/merge-sort",
    "js-task/arrays/array-average-value",
    "js-task/custom/hoisting",
    "js-task/custom/closure",
    "js-task/custom/prototype",
    "js-task/custom/context",
    "js-task/custom/event-loop",
    "js-task/custom/async",
    "js-task/custom/promise",
    "js-task/custom/async-await",
    "js-task/custom/currying",
    "js-task/custom/objects",
    "js-task/custom/arrays",
    "js-task/other/undefined-check"
	

//---------------------------------------------------------------------
// JQUERY
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrJquery = [
    [1, 'События'],
    ['jquery', 'actions', 'handling-events', 'Обработчики событий'],
    ['jquery', 'actions', 'hover-toggle',    'События hover() и toggle()'],
    ['jquery', 'actions', 'event-object',    'Объект события eventObject()'],

    [1, 'Основное'],
    ['jquery', 'main', 'info',        'Информация'],
    ['jquery', 'main', 'ajax',        'AJAX'],
    ['jquery', 'main', 'css',         'CSS'],
    ['jquery', 'main', 'methods',     'Методы'],
    ['jquery', 'main', 'attributes',  'Атрибуты. Object this'],
    ['jquery', 'main', 'input',       'Input'],
    ['jquery', 'main', 'include',     'Подключение файлов'],
    ['jquery', 'main', 'is',          'Псевдо-селекторы :visible и :hidden'],
    ['jquery', 'main', 'animation',   'Анимация'],
    ['jquery', 'main', 'get-element', 'Выборка элементов'],
    ['jquery', 'main', 'samples',     'Примеры'],
];


    "jquery/actions/handling-events",
    "jquery/actions/hover-toggle",
    "jquery/actions/event-object",
    "jquery/main/info",
    "jquery/main/ajax",
    "jquery/main/css",
    "jquery/main/methods",
    "jquery/main/attributes",
    "jquery/main/input",
    "jquery/main/include",
    "jquery/main/is",
    "jquery/main/animation",
    "jquery/main/get-element",
    "jquery/main/samples"


//---------------------------------------------------------------------
// HTML
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrHTML = [
    [1, 'Основное'],
    ['html', 'main', 'info',            emoji.theory+'Информация'],
    ['html', 'main', 'semantics',       emoji.theory+'Семантика'],
    ['html', 'main', 'content-model',   'Content Model'],
    ['html', 'main', 'custom-elements', 'Custom Elements'],

    [1, 'Элементы'],
    ['html', 'elements', 'img',     emoji.cookie+'Изображения'],
    ['html', 'elements', 'form',    emoji.cookie+'Элементы формы'],
    ['html', 'elements', 'link',    emoji.cookie+'Ссылки'],
    ['html', 'elements', 'video',   emoji.cookie+'Видео и аудио'],
    ['html', 'elements', 'table',   emoji.cookie+'Таблицы'],

    [1, 'Теги'],
    ['html', 'tags', 'fieldset',  setTheme(1, ['&lt;fieldset&gt;', '&lt;legend&gt;'])],
    ['html', 'tags', 'header',    setTheme(1, ['&lt;header&gt;', '&lt;section&gt;', '...'])],
    ['html', 'tags', 'iframe',    setTheme(1, ['&lt;iframe&gt;'])],
    ['html', 'tags', 'details',   setTheme(1, ['&lt;details&gt;', '&lt;summary&gt;'])],
    ['html', 'tags', 'datalist',  setTheme(1, ['&lt;datalist&gt;', '&lt;option&gt;'])],

    [1, 'Атрибуты'],
    ['html', 'attr', 'tabindex',    setTheme(1, ['tabindex'])],
    ['html', 'attr', 'aria-label',  setTheme(1, ['aria-label'])],

    [1, 'Прочее'],
    ['html', 'other', 'yandex-map',  'Яндекс Карты'],
    ['html', 'other', 'samples',     'Примеры'],
];


    "html/main/info",
    "html/main/semantics",
    "html/main/content-model",
    "html/main/custom-elements",
    "html/elements/img",
    "html/elements/form",
    "html/elements/link",
    "html/elements/video",
    "html/elements/table",
    "html/tags/fieldset",
    "html/tags/header",
    "html/tags/iframe",
    "html/tags/details",
    "html/tags/datalist",
    "html/attr/tabindex",
    "html/attr/aria-label",
    "html/other/yandex-map",
    "html/other/samples"
	

//---------------------------------------------------------------------
// CSS
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrCSS = [
    [1, 'База'],
    ['css', 'basic',  'pattern',              emoji.code+'Шаблон'],
    ['css', 'basic',  'priority-styles',      emoji.fire+'Приоритетность стилей'],
    ['css', 'basic',  'selector-specificity', emoji.fire+'Специфичность селекторов'],

    [1, 'CSS Selectors'],
    ['css', 'selectors', 'selectors',         emoji.pizza+'Селекторы'],
    ['css', 'selectors', 'pseudo-classes',    emoji.pizza+'Псевдоклассы'],
    ['css', 'selectors', 'pseudo-elements',   emoji.pizza+'Псевдоэлементы'],
    ['css', 'selectors', 'properties',        emoji.pizza+'Свойства'],

    [1, 'Адаптивность'],
    ['css', 'adaptive', 'meta-viewport',      emoji.lemon+'Meta Viewport'],
    ['css', 'adaptive', 'media-queries',      emoji.lemon+'CSS Media queries'],
    ['css', 'adaptive', 'browser-style',      emoji.lemon+'Стилизация браузера'],

    [1, 'Features'],
    ['css', 'features', 'custom-properties',  emoji.fire+'Custom Properties'],
    ['css', 'features', 'mixins',             emoji.fire+'@apply'],
    ['css', 'features', 'custom-selector',    emoji.fire+'@custom-selector'],

    [1, 'CSS Color Module'],
    ['css', 'color-module', 'colors',          emoji.panda+'Цветовые схемы'],
    ['css', 'color-module', 'colors-func',     emoji.panda+'Цветовые функции'],
    ['css', 'color-module', 'linear-gradient', setTheme(1, ['linear-gradient'])],
    ['css', 'color-module', 'conic-gradient',  setTheme(1, ['conic-gradient'])],

    [1, 'Layout'],
    ['css', 'layout', 'info',                 emoji.theory+'Информация'],
    ['css', 'layout', 'css-multi-columns',    emoji.cookie+'CSS Multi Columns'],
    ['css', 'layout', 'css-writing-models',   emoji.cookie+'CSS Writing Models'],
    ['css', 'layout', 'css-exclusions',       emoji.cookie+'CSS Exclusions (IE)'],

    [1, 'Преобразования'],
    ['css', 'transform', 'transition',        setTheme(1, ['transition'])],
    ['css', 'transform', 'transform',         setTheme(1, ['transform'])],
    ['css', 'transform', 'animation',         setTheme(1, ['animation', '@keyframes'])],

    [1, 'Графика'],
    ['css', 'graphics', 'blend-mode',         emoji.lemon+'CSS Blend Modes'],
    ['css', 'graphics', 'filter',             emoji.lemon+'CSS Filters'],
    ['css', 'graphics', 'backdrop-filter',    emoji.lemon+'CSS Backdrop-Filter'],
    ['css', 'graphics', 'clip-path',          emoji.lemon+'CSS Clipping (Clip-path)'],
    ['css', 'graphics', 'css-shapes',         emoji.lemon+'CSS Shapes'],
    ['css', 'graphics', 'css-masking',        emoji.lemon+'CSS Masking'],

    [1, 'Особенности'],
    ['css', 'special',  'collapse-margin',     emoji.pizza+'Схлопывание внешних отступов'],
    ['css', 'special',  'dropping-out-margin', emoji.pizza+'Выпадение внешних отступов'],

    [1, 'Основное'],
    ['css', 'main', 'viewport',               setTheme(1, ['vw', 'vh', 'vmin', 'vmax'])],
    ['css', 'main', 'import',                 setTheme(1, ['@import'])],
    ['css', 'main', 'supports',               setTheme(1, ['@supports'])],
    ['css', 'main', 'shadow',                 setTheme(1, ['box-shadow', 'text-shadow'])],
    ['css', 'main', 'overflow',               setTheme(1, ['overflow'])],
    ['css', 'main', 'display',                setTheme(1, ['display'])],
    ['css', 'main', 'position',               setTheme(1, ['position'])],,
    ['css', 'main', 'background',             setTheme(1, ['background'])],
    ['css', 'main', 'lists',                  setTheme(1, ['ul', 'ol'])],
    ['css', 'main', 'calc',                   setTheme(1, ['calc()'])],
    ['css', 'main', 'scrollbar',              setTheme(1, ['scrollbar'])],

    ['css', 'main', 'info',                   'Информация'],
    ['css', 'main', 'actions',                'События браузера'],
    ['css', 'main', 'px',                     'Единицы измерения'],
    ['css', 'main', 'font',                   'Текст'],
    ['css', 'main', 'pixel-perfect',          'Pixel Perfect'],
    ['css', 'main', 'samples',                'Примеры'],
];


    "css/basic/pattern",
    "css/basic/priority-styles",
    "css/basic/selector-specificity",
    "css/selectors/selectors",
    "css/selectors/pseudo-classes",
    "css/selectors/pseudo-elements",
    "css/selectors/properties",
    "css/adaptive/meta-viewport",
    "css/adaptive/media-queries",
    "css/adaptive/browser-style",
    "css/features/custom-properties",
    "css/features/mixins",
    "css/features/custom-selector",
    "css/color-module/colors",
    "css/color-module/colors-func",
    "css/color-module/linear-gradient",
    "css/color-module/conic-gradient",
    "css/layout/info",
    "css/layout/css-multi-columns",
    "css/layout/css-writing-models",
    "css/layout/css-exclusions",
    "css/transform/transition",
    "css/transform/transform",
    "css/transform/animation",
    "css/graphics/blend-mode",
    "css/graphics/filter",
    "css/graphics/backdrop-filter",
    "css/graphics/clip-path",
    "css/graphics/css-shapes",
    "css/graphics/css-masking",
    "css/special/collapse-margin",
    "css/special/dropping-out-margin",
    "css/main/viewport",
    "css/main/import",
    "css/main/supports",
    "css/main/shadow",
    "css/main/overflow",
    "css/main/display",
    "css/main/position",
    "css/main/background",
    "css/main/lists",
    "css/main/calc",
    "css/main/scrollbar",
    "css/main/info",
    "css/main/actions",
    "css/main/px",
    "css/main/font",
    "css/main/pixel-perfect",
    "css/main/samples"
	
//---------------------------------------------------------------------
// Sass
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrSass = [
    [1, 'Основное'],
    ['sass', 'main', 'info',       'Информация'],
    ['sass', 'main', 'variables',  'Переменные (SassScript)'],
    ['sass', 'main', 'cascade',    'Вложенности'],
    ['sass', 'main', 'color',      'Операции над цветами'],
    ['sass', 'main', 'operations', 'Операции'],
    ['sass', 'main', 'mixin',      '@mixin'],
    ['sass', 'main', 'extend',     '@extend'],
    ['sass', 'main', 'import',     '@import'],
    ['sass', 'main', 'each',       '@each'],
    ['sass', 'main', 'at-root',    '@at-root'],
    ['sass', 'main', 'if-else',    'Условия if-else'],
    ['sass', 'main', 'for',        'Циклы For, While'],
    ['sass', 'main', 'other',      'Дополнительно'],
];


    "sass/main/info",
    "sass/main/variables",
    "sass/main/cascade",
    "sass/main/color",
    "sass/main/operations",
    "sass/main/mixin",
    "sass/main/extend",
    "sass/main/import",
    "sass/main/each",
    "sass/main/at-root",
    "sass/main/if-else",
    "sass/main/for",
    "sass/main/other"

//---------------------------------------------------------------------
// Flow
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrFlow = [
    [1, 'Основное'],
    ['flow', 'main', 'type-data',   emoji.pizza+'Типы данных'],
    ['flow', 'main', 'var',         emoji.fire+'Задание переменной'],
    ['flow', 'main', 'function',    emoji.fire+'Задание функции'],
    ['flow', 'main', 'type',        emoji.fire+'Задание типа'],
    ['flow', 'main', 'react',       'Использование с React.js'],
    ['flow', 'main', 'variants',    'Варианты'],

    [1, 'Установка'],
    ['flow', 'install', 'info',        emoji.theory+'Информация'],
    ['flow', 'install', 'install',     emoji.lemon+'Установка и настройка'],
    ['flow', 'install', 'vscode',      emoji.theory+'Настройка VSCode'],
];


    "flow/main/type-data",
    "flow/main/var",
    "flow/main/function",
    "flow/main/type",
    "flow/main/react",
    "flow/main/variants",
    "flow/install/info",
    "flow/install/install",
    "flow/install/vscode"

//---------------------------------------------------------------------
// SVG
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrSvg = [
    [1, 'Основное'],
    ['svg', 'main', 'info',       emoji.theory+'Информация'],
    ['svg', 'main', 'css',        emoji.code+'Стилизация на CSS'],

    [1, 'Элементы'],
    ['svg', 'elements', 'figure',     emoji.chevron+'Фигуры'],
    ['svg', 'elements', 'text',       setTheme(1, ['text'])],
    ['svg', 'elements', 'image',      setTheme(1, ['image'])],
    ['svg', 'elements', 'mask',       setTheme(1, ['mask'])],
    ['svg', 'elements', 'clip-path',  setTheme(1, ['clipPath'])],
    ['svg', 'elements', 'filters',    setTheme(1, ['filter'])],
    ['svg', 'elements', 'gradients',  setTheme(1, ['linearGradient', 'radialGradient'])],
    ['svg', 'elements', 'background', setTheme(1, ['background'])],
];


    "svg/main/info",
    "svg/main/css",
    "svg/elements/figure",
    "svg/elements/text",
    "svg/elements/image",
    "svg/elements/mask",
    "svg/elements/clip-path",
    "svg/elements/filters",
    "svg/elements/gradients",
    "svg/elements/background"

//---------------------------------------------------------------------
// CSS Flexbox
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrCssFlexbox = [
    [1, 'Основное'],
    ['css-flexbox', 'main', 'info', 'Информация'],

    [1, 'Flex Container'],
    ['css-flexbox', 'container', 'display',         setTheme(1, ['display'])],
    ['css-flexbox', 'container', 'justify-content', setTheme(1, ['justify-content'])],
    ['css-flexbox', 'container', 'align-items',     setTheme(1, ['align-items'])],
    ['css-flexbox', 'container', 'align-content',   setTheme(1, ['align-content'])],
    ['css-flexbox', 'container', 'flex-flow',       setTheme(1, ['flex-flow', 'flex-direction', 'flex-wrap'])],

    [1, 'Flex Element'],
    ['css-flexbox', 'element', 'flex',        setTheme(1, ['flex', 'flex-grow', 'flex-shrink', 'flex-basis'])],
    ['css-flexbox', 'element', 'order',       setTheme(1, ['order'])],
    ['css-flexbox', 'element', 'align-self',  setTheme(1, ['align-self'])],

    [1, 'Прочее'],
    ['css-flexbox', 'other', 'margin',  'Поведение margin'],
    ['css-flexbox', 'other', 'samples', 'Примеры'],
];


    "css-flexbox/main/info",
    "css-flexbox/container/display",
    "css-flexbox/container/justify-content",
    "css-flexbox/container/align-items",
    "css-flexbox/container/align-content",
    "css-flexbox/container/flex-flow",
    "css-flexbox/element/flex",
    "css-flexbox/element/order",
    "css-flexbox/element/align-self",
    "css-flexbox/other/margin",
    "css-flexbox/other/samples"

//---------------------------------------------------------------------
// CSS Grid
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrCssGrid = [
    [1, 'Основное'],
    ['css-grid', 'main', 'info',           'Информация'],
    ['css-grid', 'main', 'container',      'Grid Container'],

    [1, 'Объединение ячеек'],
    ['css-grid', 'element-union', 'grid-column', setTheme(1, ['grid-column', 'grid-row'])],
    ['css-grid', 'element-union', 'grid-area',   setTheme(1, ['grid-area'])],

    [1, 'Прочее'],
    ['css-grid', 'other', 'align-elements', 'Выравнивание элементов'],
    ['css-grid', 'other', 'grid-auto-flow',  setTheme(1, ['grid-auto-flow'])],
];

    "css-grid/main/info",
    "css-grid/main/container",
    "css-grid/element-union/grid-column",
    "css-grid/element-union/grid-area",
    "css-grid/other/align-elements",
    "css-grid/other/grid-auto-flow"


//---------------------------------------------------------------------
// Node.js
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrNodejs = [
    [1, 'Основное'],
    ['node-js', 'main', 'info',     emoji.theory+'Информация'],
    ['node-js', 'main', 'function', emoji.pizza+'Функции'],
    ['node-js', 'main', 'modules',  emoji.pizza+'Модули'],
    ['node-js', 'main', 'files',    emoji.pizza+'Файлы и директории'],
    ['node-js', 'main', 'export',   setTheme(1, ['require', 'exports'])],
    ['node-js', 'main', 'pipe',     setTheme(1, ['.pipe'])],

    ['node-js', 'main', 'server',   'Сервер'],
    ['node-js', 'main', 'stream',   'Потоки'],
    ['node-js', 'main', 'router',   'Маршрутизация'],
    ['node-js', 'main', 'url',      'Данные из url'],

    [1, 'NPM пакеты'],
    ['node-js', 'package', 'express',     setTheme(2, ['express'])],
    ['node-js', 'package', 'body-parser', setTheme(2, ['body-parser'])],
    ['node-js', 'package', 'nodemailer',  setTheme(2, ['nodemailer'])],

    [1, 'Прочее'],
    ['node-js', 'other', 'samples', 'Примеры'],
];


    "node-js/main/info",
    "node-js/main/function",
    "node-js/main/modules",
    "node-js/main/files",
    "node-js/main/export",
    "node-js/main/pipe",
    "node-js/main/server",
    "node-js/main/stream",
    "node-js/main/router",
    "node-js/main/url",
    "node-js/package/express",
    "node-js/package/body-parser",
    "node-js/package/nodemailer",
    "node-js/other/samples"
	

//---------------------------------------------------------------------
// PHP
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrPhp = [
    [1, 'Основное'],
    ['php', 'main', 'info',       'Информация'],
    ['php', 'main', 'variables',  'Переменные'],
    ['php', 'main', 'cycle',      'Циклы'],
    ['php', 'main', 'array',      'Массивы'],
    ['php', 'main', 'function',   'Функции'],
    ['php', 'main', 'if',         setTheme(1, ['if-else'])],
    ['php', 'main', 'switch',     setTheme(1, ['switch-case'])],

    [1, 'Прочее'],
    ['php', 'other', 'function-php',   'Функции PHP'],
    ['php', 'other', 'server',         'Суперглобальный массив SERVER'],
    ['php', 'other', 'open-server',    'PHP Open Server'],

    [1, 'Примеры'],
    ['php', 'samples', 'files',         emoji.code+'Файлы и директории'],
    ['php', 'samples', 'image-loader',  emoji.code+'Изображения'],
    ['php', 'samples', 'email',         emoji.code+'Отправка email'],
    ['php', 'samples', 'json-server',   emoji.code+'JSON Server'],

    [1, 'MySQL'],
    ['php', 'mysql', 'mysql',   'Работа с MySQL'],
];

    "php/main/info",
    "php/main/variables",
    "php/main/cycle",
    "php/main/array",
    "php/main/function",
    "php/main/if",
    "php/main/switch",
    "php/other/function-php",
    "php/other/server",
    "php/other/open-server",
    "php/samples/files",
    "php/samples/image-loader",
    "php/samples/email",
    "php/samples/json-server",
    "php/mysql/mysql"

//---------------------------------------------------------------------
// Python
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrPython = [
    [1, 'Основное'],
    ['python', 'main', 'cmd',       'CMD'],
    ['python', 'main', 'type',      'Типы данных'],
    ['python', 'main', 'base',      'Базовые принципы'],
    ['python', 'main', 'if',        'Условный оператор if'],
    ['python', 'main', 'circle',    'Циклы'],
    ['python', 'main', 'array',     'Списки (массивы)'],
    ['python', 'main', 'function',  'Функции'],
    ['python', 'main', 'module',    'Модули'],
    ['python', 'main', 'pyowm',     'Модуль определения погоды (pyowm)'],
    ['python', 'main', 'encode',    'Изменение кодировки на utf-8'],
    ['python', 'main', 'format',    'Форматирование строк. Метод format'],
    ['python', 'main', 'docstring', 'Строки документирования (docstring)'],

    [1, 'ООП'],
    ['python', 'oop', 'class',   'Классы, ООП'],
    ['python', 'oop', 'object',  'Объекты (словари)'],

    [1, 'Python и MySQL'],
    ['python', 'mysql', 'base', 'Базовые принципы'],

    [1, 'SQLAlchemy'],
    ['python', 'sqlalchemy', 'base', 'Базовые принципы'],

    [1, 'Falcon'],
    ['python', 'falcon', 'base', 'Базовые принципы'],
];

    "python/main/cmd",
    "python/main/type",
    "python/main/base",
    "python/main/if",
    "python/main/circle",
    "python/main/array",
    "python/main/function",
    "python/main/module",
    "python/main/pyowm",
    "python/main/encode",
    "python/main/format",
    "python/main/docstring",
    "python/oop/class",
    "python/oop/object",
    "python/mysql/base",
    "python/sqlalchemy/base",
    "python/falcon/base"


//---------------------------------------------------------------------
// TypeScript
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrTypescript = [
    [1, 'Основное'],
    ['typescript', 'main', 'info',    emoji.theory+'Информация'],
    ['typescript', 'main', 'install', emoji.lemon+'Установка и настройка'],

    [1, 'Типы'],
    ['typescript', 'types', 'basic',   emoji.chevron+setTheme(4, ['Базовые'])],
    ['typescript', 'types', 'typle',   emoji.chevron+setTheme(4, ['Typle'])],
    ['typescript', 'types', 'any',     emoji.chevron+setTheme(4, ['Any'])],
    ['typescript', 'types', 'never',   emoji.chevron+setTheme(4, ['Never'])],
    ['typescript', 'types', 'type',    emoji.chevron+setTheme(4, ['Type'])],

    [1, 'Интерфейсы'],
    ['typescript', 'interface', 'main',             emoji.favorite+'Основы'],
    ['typescript', 'interface', 'inherit',          emoji.favorite+'Наследование интерфейсов'],
    ['typescript', 'interface', 'with-class',       emoji.favorite+'Взаимодействие с классами'],
    ['typescript', 'interface', 'dynamic-key-obj',  emoji.favorite+'Динамические ключи объекта'],

    [1, 'Функции'],
    ['typescript', 'function', 'main',               emoji.cookie+'Основы'],
    ['typescript', 'function', 'functions-overload', emoji.cookie+'Перегрузка функций'],

    [1, 'Классы'],
    ['typescript', 'class', 'main',         emoji.coconut+'Основы'],
    ['typescript', 'class', 'modificator',  emoji.coconut+'Модификаторы полей'],
    ['typescript', 'class', 'abstract',     emoji.coconut+'Абстрактные классы'],

    [1, 'Другие возможности'],
    ['typescript', 'capabilities', 'enums',      emoji.baseball+'Enums'],
    ['typescript', 'capabilities', 'guards',     emoji.baseball+'Guards'],
    ['typescript', 'capabilities', 'generics',   emoji.baseball+'Generics'],
    ['typescript', 'capabilities', 'operators',  emoji.baseball+'Операторы'],
];


    "typescript/main/info",
    "typescript/main/install",
    "typescript/types/basic",
    "typescript/types/typle",
    "typescript/types/any",
    "typescript/types/never",
    "typescript/types/type",
    "typescript/interface/main",
    "typescript/interface/inherit",
    "typescript/interface/with-class",
    "typescript/interface/dynamic-key-obj",
    "typescript/function/main",
    "typescript/function/functions-overload",
    "typescript/class/main",
    "typescript/class/modificator",
    "typescript/class/abstract",
    "typescript/capabilities/enums",
    "typescript/capabilities/guards",
    "typescript/capabilities/generics",
    "typescript/capabilities/operators"
	
	
//---------------------------------------------------------------------
// ТЕСТИРОВАНИЕ
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrTesting = [
    [1, 'Теория'],
    ['testing', 'theory', 'info',             emoji.theory+'Тестирование'],
    ['testing', 'theory', 'pyramid',          emoji.theory+'Пирамида тестирования'],
    ['testing', 'theory', 'unit-test',        emoji.favorite+'1. Юнит-тесты'],
    ['testing', 'theory', 'integration-test', emoji.favorite+'2. Интеграционные тесты'],
    ['testing', 'theory', 'e2e-test',         emoji.favorite+'3. E2E-тесты'],
    ['testing', 'theory', 'tdd',              emoji.avocado+'TDD'],
    ['testing', 'theory', 'bdd',              emoji.avocado+'BDD'],
    ['testing', 'theory', 'types',            emoji.theory+'Разновидности'],

    [1, 'Основное'],
    ['testing', 'main', 'frameworks',       emoji.pizza+'Фреймворки'],
    ['testing', 'main', 'chrome-dev-tools', 'Chrome DevTools'],
];


    "testing/theory/info",
    "testing/theory/pyramid",
    "testing/theory/unit-test",
    "testing/theory/integration-test",
    "testing/theory/e2e-test",
    "testing/theory/tdd",
    "testing/theory/bdd",
    "testing/theory/types",
    "testing/main/frameworks",
    "testing/main/chrome-dev-tools"
	
	
//---------------------------------------------------------------------
// JEST
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrJest = [
    [1, 'Основное'],
    ['jest', 'main', 'info',        emoji.theory+'Информация'],
    ['jest', 'main', 'install',     emoji.lemon+'Установка и настройка'],
    ['jest', 'main', 'mocks',       'Mock'],

    [1, 'Элементы'],
    ['jest', 'elements', 'pattern',     emoji.code+'Шаблон'],
    ['jest', 'elements', 'functions',   emoji.fire+'Глобальные функции'],
    ['jest', 'elements', 'matchers',    emoji.fire+'Matchers'],
    ['jest', 'elements', 'hooks',       emoji.fire+'Хуки'],

    [1, 'JavaScript'],
    ['jest', 'javascript', 'sync',        '1. Синхронные тесты'],
    ['jest', 'javascript', 'async',       '2. Асинхронные тесты'],
    ['jest', 'javascript', 'mock',        '3. Mock-данные'],
    ['jest', 'javascript', 'mock-axios',  '4. Mock-данные в Axios'],

    [1, 'Redux'],
    ['jest', 'redux', 'reducers',  'Reducers'],
    ['jest', 'redux', 'actions',   'Actions'],
];


    "jest/main/info",
    "jest/main/install",
    "jest/main/mocks",
    "jest/elements/pattern",
    "jest/elements/functions",
    "jest/elements/matchers",
    "jest/elements/hooks",
    "jest/javascript/sync",
    "jest/javascript/async",
    "jest/javascript/mock",
    "jest/javascript/mock-axios",
    "jest/redux/reducers",
    "jest/redux/actions"


//---------------------------------------------------------------------
// REACT TESTING
//---------------------------------------------------------------------
ARR_MODULE = [
    {
        title: '',
        themes: [
            //
        ]
    },
]

var arrReactTesting = [
    [1, 'Основы'],
    ['react-testing', 'main',  'info',  emoji.theory+'Информация'],

    [1, '1. React Testing Library'],
    ['react-testing', 'react-tsting-library', 'info',                  emoji.theory+'Информация'],
    ['react-testing', 'react-tsting-library', 'npm',                   emoji.lemon+'Установка'],
    ['react-testing', 'react-tsting-library', 'methods',               emoji.fire+'Методы'],
    ['react-testing', 'react-tsting-library', 'code-react-cli',        'Использование с CreateReactApp'],
    ['react-testing', 'react-tsting-library', 'code-react-cli-samples', emoji.code+'Примеры'],

    [1, '2. React Test Renderer'],
    ['react-testing', 'react-test-renderer',  'info',  emoji.theory+'Информация'],
    ['react-testing', 'react-test-renderer',  'npm',   emoji.lemon+'Установка'],
    ['react-testing', 'react-test-renderer',  'code',  emoji.code+'Примеры'],
];

    "react-testing/main/info",
    "react-testing/react-tsting-library/info",
    "react-testing/react-tsting-library/npm",
    "react-testing/react-tsting-library/methods",
    "react-testing/react-tsting-library/code-react-cli",
    "react-testing/react-tsting-library/code-react-cli-samples",
    "react-testing/react-test-renderer/info",
    "react-testing/react-test-renderer/npm",
    "react-testing/react-test-renderer/code"
