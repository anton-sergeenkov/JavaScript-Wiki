const PATH_MODULE = 'starter';

const ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            ['main/settings',         'Настройка'],
            ['main/snippets',         'Сниппеты'],
            ['main/symbols',          'Символы'],
        ]
    },
    {
    	title: 'Custom Elements',
        themes: [
            ['custom-elements/labels',    emoji.chevron+'Метки'],
            ['custom-elements/code',      emoji.chevron+'Код'],
            ['custom-elements/links',     emoji.chevron+'Ссылки'],
            ['custom-elements/blocks',    emoji.chevron+'Блоки'],
            ['custom-elements/alert',     emoji.chevron+'Сообщения'],
            ['custom-elements/clipboard', emoji.chevron+'Clipboard'],
        ]
    },
    {
    	title: 'Vue Components',
        themes: [
            ['vue-components/v-two',       setTheme(1, ['v-two'])],
            ['vue-components/v-two-fix',   setTheme(1, ['v-two-fix'])],
            ['vue-components/v-two-code',  setTheme(1, ['v-two-code'])],

            ['vue-components/v-code',      setTheme(1, ['v-code'])],
            ['vue-components/v-pre-npm',   setTheme(1, ['v-pre-npm'])],

            ['vue-components/v-method',    setTheme(1, ['v-method'])],
            ['vue-components/v-details',   setTheme(1, ['v-details'])],
            ['vue-components/v-iframe',    setTheme(1, ['v-iframe'])],
        ]
    },
    {
    	title: 'Class',
        themes: [
            ['class/links',   'Ссылки на разделы'],
        ]
    },

    // {
    //     title: 'Test',
    //     themes: [
    //         ['test',   'Test'],
    //         ['test',   'Test'],
    //         ['test',   'Test'],
    //         ['test',   'Test'],
    //         ['test',   'Test'],
    //         ['test',   'Test'],
    //         ['test',   'Test'],
    //         ['test',   'Test'],
    //         ['test',   'Test'],
    //     ]
    // },
];
