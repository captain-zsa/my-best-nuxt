# BEM

## bem.1. Общие моменты

bem.1.1. Используется Two Dashes нотация Яндекса:
- элемент отделяется двойным подчёркиванием
- модификатор и его значение отделяются двойным дефисом

bem.1.2. Булевы модификаторы `block--mod` не используются, допустимы только полные модификаторы со значением, `block--mod--val`.

bem.1.3. Нельзя править типовые блоки под свои разовые нужды, надо создать отдельные блоки либо подмешивать классы блоков конкретной страницы.

bem.1.4. Если из скрипта нужно обратиться к конкретному блоку, например `dropdown`, то не следует вешать ему модификаторы вида `dropdown--mydrop--mydown`. Правильно будет подмешать класс родительского блока конкретной страницы, `dropdown mypage__mydropdown`.

bem.1.5. Используемые префиксы:

- `js-` префикс для js-only блоков
- `t-` классы, на которые опираются функциональные тесты frontend
- `qa-` классы, на которые опираются функциональные тесты qa