# Vue CookBook

Обязательно к изучению и внедрению, где можно: [Официальный Vue.js CookBook](https://ru.vuejs.org/v2/cookbook/index.html)


## Динамическое подключение компонентов с lazy-loading

```html
<template>
    <component :is="myComponent"></component>
</template>

<script>
...
props: ['nameComponent'],
computed : {
        myComponent() {
            return () => import( `components/page_${ this.nameComponent }.vue` );
    },
},
...
</script>
```

Способ не сработает, если `nameComponent` не в props, а в data. Тогда нужен хак:

```js
data() {
    return {
        nameComponent : 'edit',
    };
},
computed : {
    myComponent() {
        //хак, нужен для реактивного перерасчета свойства
        //при изменении this.nameComponent
        let nameComponent = this.nameComponent;

        return () => import(`components/page_${ nameComponent }.vue` );
    },
},
```
