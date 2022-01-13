# Настройка WebStorm (и подобных)

В WebStorm по-умолчанию есть ESLint, достаточно его только включить. Переходим в `Settings/Preferences -> Languages and Frameworks -> JavaScript -> Code Quality Tools -> ESLint`. Выбираем `Automatic ESLint configuration` и отмечаем галочку `Run eslint --fix on save`.

Stylelint также установлен в WebStorm. Переходим в `Settings/Preferences -> Languages and Frameworks -> Style Sheets -> Stylelint`. Должна быть установлена галочка `Enable`, а в `Node interpreter` выбран пункт `Project`.

Автоматически редактор не умеет исправлять Stylelint, поэтому приходится лайфхачить. Самый простой метод – настроить External Tools. Переходим в `Settings/Preferences -> External Tool`, создаем новую команду, называем как удобно, в настройках проставляем:

- Program: `$ProjectFileDir$/node_modules/.bin/stylelint`
- Arguments: `$FilePath$ --fix`
- Working directory: `$ProjectFileDir$`

Далее в нужном файле нажимаем ПКМ, в меню: `External Tools -> выбираем команду` и файл отредактирован.
