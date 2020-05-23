const PATH_MODULE = 'starter';

const ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            ['main/settings',         'Настройка'],
            ['main/custom-elements',  'Custom Elements'],
            ['main/snippets',         'Сниппеты'],
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
    }
];
