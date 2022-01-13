# Настройка для VSCode

Установить плагин ESLint, а также глобально установить ESLint командой `npm install -g ESLint`.
В репозитории создать файл `.vscode/settings.json`, в который записать следующее:

```json
{
    "eslint.validate": [
        "javascript",
        "vue"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

Далее нужно отключить автосохранение на уровне редактора. Для этого идём в `Настройки -> Параметры` ищем "Форматирование" или Format On Save и убираем галочку.

Для работы Stylelint необходимо поставить Stylelint-плагин [vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint).

Для автоисправления можно использовать плагин [stylelint-plus](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus). Параметры для корректной работы плагина **settings.json** в vscode:
```json
"stylelint.enable": true,
"stylelint.autoFixOnSave": true,
"stylelint.useLocal": true
```
