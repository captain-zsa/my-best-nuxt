# Как писать JS

## js.1. Форматирование

js.1.1. Обязательны пробелы после ключевых слов: `catch`, `do`, `else`, `for`, `if`, `switch`, `try`, `while`.

js.1.2. Нет пробела между `function` и `(`:

```js
let myResults = function(isForSure) {
};
```

js.1.3. Точка с запятой ставится в конце каждого выражения. Не ставится после блока.

```js
function getMyCallback(params) {
    let callback = function() {
        return 1; // конец выражения
    }; // конец выражения

    if (typeof params.key !== 'undefined') {
        return callback; // конец выражения
    } // конец блока

    throw 'no callback';
} // конец блока
```


js.1.4. После точки с запятой в строке ничего нет, даже комментариев (кроме необходимости показать пример, как в js.1.3.). Пробел: до `;` не допускается, после - обязателен [semi-spacing](http://eslint.org/docs/rules/semi-spacing).

js.1.5. Перед открытием блока (`{`) всегда стоит пробел:

```js
if (condition) {
    return function() {
        console.log('hi');
    };
}
```

js.1.6. Оператор `typeof` вызывается без круглых скобок:

```js
let isSet = typeof mylet !== 'undefined';
```

js.1.7. Рекомендуется выравнивать присваивания по `=`:
```js
// Плохо
let string = 'my string';
let float = 0.22;
let data;

// Хорошо
let string = 'my string';
let float  = 0.22;
let data;
```

js.1.8. После объявления переменных всегда идет пустая строка:

```js
let string = 'my string';
let float  = 0.22;
let data;

// here your code
```

js.1.9. Перед ключевым словом `return` ставится пустая строка. Исключения: однострочные блоки `{}`. [Правило](http://eslint.org/docs/rules/newline-before-return)

```js
// Плохо
function foo() {
    const result = doSomething();
    return result;
}

// Хорошо
function foo() {
    return;
}

function foo() {

    return;
}

function foo(bar) {
    if (!bar) {
        return; // одна строка в блоке
    }
}

function foo() {

    // comment
    return;
}

function foo(bar) {
    if (!bar) {
        return; // одна строка в блоке
    }

    return bar;
}
```

js.1.10. Перевод строки в объектах-литералах, деструкторах. Правила [object-curly-newline](http://eslint.org/docs/rules/object-curly-newline) и [object-property-newline](http://eslint.org/docs/rules/object-property-newline).

```js
// Плохо
let f = {foo: 1, bar: 2};
let g = {
    foo: 1, bar: 2
};

// Хорошо
let a = {};
let b = {foo: 1};
let с = {
    foo: 1
};
let d = {
    foo: 1,
    bar: 2
};
let e = {
    foo: function() {
        doSomething();
    }
};
```

---

## js.2. Именование

js.2.1. Использование `let/const` при объявлении переменных обязательно.

js.2.2. Каждую переменную рекомендуется объявлять своим let/const. Запятые порождают ненужные git-diff'ы, баги в виде объявления глобальных переменных, а также переменные из начала блока или конца сложнее удалять. [Правило](https://eslint.org/docs/rules/one-var)
```javascript
// Плохо
const a = 2,
    b = 3,
    c = 'hello';

// Всё ещё плохо
const
    a = 2,
    b = 3,
    c = 'hello';

// Так можно незаметно для себя объявить глобальную переменную
const
    a = 2,
    b = 3,
    c = 'hello';
    d = 'i am global';

// Хорошо
const a = 2;
const b = 3;
const c = 'hello';
```

js.2.3. Переменные именуются с маленькой буквы, `lowerCamelCase`.

js.2.4. Классы (объекты с конструктором) и неймспейсы именуются с большой буквы, `UpperCamelCase`. Например, `const storage = new Storage();`, `Site.Analytics.Ecommerce.isEnabled = false;`

js.2.5. Переменные с jQuery-объектами внутри именуются с доллара, `$myjQueryObject`

js.2.6. Если нужно сохранить ссылку на `this`, это делается в переменную `self`: `const self = this;`

js.2.7. Не обращаться к элементам объекта как к массивам, если ключ известен:

```js
// Плохо
variable['key'];

// Хорошо
variable.key;

// Хорошо
const someKey = functionThatReturnsKey();

variable[someKey];
```

---

## js.3. Комментарии

Используется jsDoc при необходимости.

---

## js.4. jQuery

js.4.1. Следует кэшировать jQuery объекты в $переменные, чтобы не делать повторных выборок из DOM.

js.4.2. Следует минимизировать вставки в DOM - лучше накопить всё в строке или в jQuery-объекте и потом вставить один раз.

js.4.3. Используется краткая форма document.ready: `$(function() {});`

js.4.4 `$.ajax` предпочтительнее методов-хэлперов `$.post`, `$.get`, `$.getJson` и прочих.

js.4.5. В `$.ajax` вместо коллбеков лучше использовать promise-интерфейс:

```js
$.ajax().then().fail();
```

js.4.6. Отступы в chained jQuery вызовах увеличиваются с каждой выборкой и уменьшаются с каждым возвратом к предыдущей:

```js
$form
    .removeClass(klass)
    .find(selector)
        .each(callback)
        .end()
    .find(selectorTwo)
        .each(callbackTwo);
```

js.4.7. Вместо js-анимации предпочтительно использовать css transitions/animations (для простых анимаций).

js.4.8. Вместо `attr` предпочтительно использовать `prop`.

---

## js.5. Прочее

js.5.1. Сравнивать всегда следует без приведения типов, `===`

js.5.2. Вместо цикла for по массиву лучше использовать методы `forEach` / `map` / `reduce`

js.5.3. Не следует использовать `Array.map` не по назначению: если задача цикла не состоит в создании нового массива - достаточно `forEach`

js.5.4. Не используйте `bind` там, где контекст можно передать встроенными средствами:

```js
// Плохо
['foo', 'bar'].forEach(func.bind(this));

// Хорошо
['foo', 'bar'].forEach(func, this);
```

js.5.5.  Избегайте `for...in`,  где это возможно (можно использовать `for...of`:

```js
// Плохо
for (let prop in obj) {
  if (obj.hasOwnProperty(prop)) {
      console.log(prop);
  }
}

// Хорошо (es2015)
Object.keys(obj).forEach(prop => console.log(prop));
```

js.5.6. Не стоит увлекаться трюками:

```js
// Плохо
const n = ~~3.14;

// Хорошо
const n = Math.floor(3.14);
```

Допустимые трюки:
```js
// to Boolean
let isEnabled = !!( someCounter + someSubCounter );

// to Number
let myNumber  = +myString;
```

Недопустимые трюки включают в себя `>> 0`, `~~`, `~` итд.

По поводу `!!var`: важно учитывать контекст. Например в условных операторах контекст логический, и соответственно выражение будет преобразовано к булин в любом случае:
```js
// Плохо
if (!!someCondition) {}

// Хорошо
if (someCondition) {}
```

js.5.7. Нельзя расширять прототипы родных объектов JS

js.5.8. Для слияния объектов вместо `$.extend` или `_.extend` нужно использовать `Object.assign`

js.5.9. При сабмите формы следует дизайблить кнопку сабмита.

js.5.10. Событие отправки формы prevent-ится. Отправка происходит методом из атрибута `method=""` на адрес из атрибута `action=""`

---

## js.6. ES2015+

js.6.1. `var` is deprecated. Всегда следует использовать `const` для переменных, значение которым присваивается только один раз (а это предпочтительно), `let` в противном случае. Важно понимать, что `const` не означает константу в общем смысле, он просто не даёт повторно присвоить значение переменной.

> Константы следует именовать как `const MY_CONST = 100;`

js.6.2. Не использовать `apply`, использовать спред-оператор:

```js
// Плохо
greet.apply(null, person);

// Хорошо
greet(...person);
```
