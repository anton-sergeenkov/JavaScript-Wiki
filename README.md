
## Available Scripts
```bash
http-server  # start app
```

```bash
npm run build  # [node.js] build full pages (после изменения темы)
npm run pages  # [node.js] build pages (после добавления новой страницы)
```

## Fix
- none

## Todo
- Добавить SUB-TITLE
- Переписать на Parcel
- Ссылка на главную
- Сворачивание меню
- Подсвечивание элемента меню в BUILD
- Сохранить в LocalStorage BUILD / PAGES MODE
- Добавить нумерацию тем

## Check
- `<v-iframe />`          # Не рендерится контент после (только в webnotes)
- `<v-code />`            # Отступы внутри блока кода если используется `<em>` или другие теги в начале
- `<link-page-wrapper />` # Оформить навигацию по теме
- `<u-code-wrapper />`    # Отступы внутри блока кода обертки 

```
<u-code-wrapper>
Отступ сверху, если не использовать TAB
</u-code-wrapper>
```
