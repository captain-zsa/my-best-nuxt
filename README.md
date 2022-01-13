# Nuxt сборка со всяким

__Стэк проекта:__
- Vue.js v2
- Nuxt.js v2 ([сам импортирует компоненты](doc/aboutvue/readme.md#импорт-компонентов))
- Axios
- Jest
- npm

__Линтеры:__
- eslint
- stylelint

## Зачем линтеры

* Использование линтера гарантирует, что все разработчики читают и пишут код с одинаковыми правилами форматирования.
* Использование линтера помогает обнаружить и избежать ошибок до того как код файла сохранен.

__Используемые библиотеки:__
- Скоро появятся

> Важно! Данный файл и в целом все файлы документации важно поддерживать в актуальном состоянии. Если добавляется библиотека – нужно записать её название в список выше. Добавляется инструкция по настройке редактора – также добавить в `doc/codestyle/readme.md` ссылку на новую инструкцию и так далее. Это необходимо для того, чтобы каждый разработчик мог без большого количества человекочасов включиться в разработку на проекте.

## Установка

* установите [NodeJS](https://nodejs.org/en/) (если требуется, NPM установится вместе c NodeJS)
* установите все зависимости с помощью `npm install`.

## Запуск

```bash
npm run "<task>" # запуск сценария
                 # <dev>, <build>, <start>, <lint>, <test>
```

* скачайте необходимые зависимости: `npm install`
* чтобы начать работу, введите команду: `npm run dev`
* чтобы собрать проект, введите команду `npm run build`
* чтобы проверить код с помощью линтеров, введите команду `npm run lint`
* чтобы автоматически исправить ошибки линтера, введите команду `npm run lint:fix`
* чтобы протестировать код с помощью Jest, введите команду `npm run test`
* чтобы сгенерировать статический проект, введите команду `npm run generate`

> Подробное объяснение того, как все работает, см. [Nuxt.js docs](https://nuxtjs.org).

## О чем почитать перед разработкой

* Всё о стиле кода, настройке редакторов и тп [codestyle](doc/codestyle/readme.md)
* [storybook](doc/storybook/readme.md)
* Общие для всех языков моменты [all](doc/all/readme.md)
* Как писать Vue [aboutvue](doc/aboutvue/readme.md)
* Как писать JS [aboutjs](doc/aboutjs/readme.md)
* Как писать БЭМ [bem](doc/bem/readme.md)
* Как писать стили [styles](doc/styles/readme.md)
* Тестирование компонентов [test](doc/test/readme.md)
* "Почти автоматическое" создание структуры файлов компонента [generatefiles](doc/generate/readme.md)

## Файловая структура

```
project-name
├──assets
├────fonts
├────img
├────styles
├──components
├──layouts
├──middleware
├──pages
├──plugins
├──static
├──store
├──.babelrc
├──.editorconfig
├──.eslintignore
├──.eslintrc.js
├──.gitignore
├──.stylelintignore
├──jest.config.js
├──jsconfig.json
├──nuxt.config.js
├──package.json
├──stylelint.config.js
```

* Корень папки:
    * `.babelrc` — настройки Babel
    * `.editorconfig` — настройки для редактора кода
    * `.eslintignore` – запрет на отслеживание файлов ESlint'ом
    * `.eslintrc.js` — настройки ESLint
    * `.gitignore` – запрет на отслеживание файлов Git'ом
    * `.stylelintignore` – запрет на отслеживание файлов Stylelint'ом
    * `jest.config.js` – настройки Jest
    * `jsconfig.json` – настройки алиасов для редактора
    * `nuxt.config.js` — настройки Nuxt
    * `package.json` — список зависимостей
    * `stylelint.config.js` — настройки Stylelint

* Папки проекта – зачем та или иная папка, как работает, а также их структура – в `README.md` каждой папки
    * Каталог с нескомпилированными файлами: SCSS, JS, картинками [assets](assets/readme.md)
    * Всё о стиле кода, настройке редакторов и тп [codestyle](codestyle/readme.md)
    * Каталог с компонентами vue [components](components/readme.md)
    * Каталог с [layouts](layouts/readme.md)
    * Каталог с [middleware](middleware/readme.md)
    * Каталог со страницами проекта [pages](pages/readme.md)
    * Каталог содержит плагины JS, которые можно запустить перед монтированием корневого приложения Vue.js [plugins](plugins/readme.md)
    * Каталог со статическими файлами (robots.txt и тп) [static](static/readme.md)
    * Каталог с Vuex [store](store/readme.md)
