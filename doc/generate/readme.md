# Создание структуры файлов компонента

Для удобства создана `node`-команда для создания дирректории компонента и необходимых для него файлов.

> Изменять функциональность запрещено без согласования с командой разработки.

Команда: `node create.js TestComponent` создаст папку `TestComponent` в папке `components` и создаст файлы `TestComponent.spec.js`, `TestComponent.stories.js`, `TestComponent.vue`. В каждом файле будет подготовленный код:

__TestComponent.spec.js__
```js
import { mount } from '@vue/test-utils';
import TestComponent from '@/components/TestComponent/TestComponent.vue';

describe('TestComponent', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(TestComponent);

        expect(wrapper.vm).toBeTruthy();
    });
});
```
__TestComponent.stories.js__
```js
export default {
    title : 'TestComponent',
};

export const NuxtWebsite = () => '<TestComponent />';
```

__TestComponent.vue__
```html
<template>
    <div class="test-component">

    </div>
</template>

<script>
export default {
    props : {

    },

    data() {
        return {

        };
    },

    computed : {

    },

    methods : {

    },
};
</script>

<style lang="scss">
.test-component {

}
</style>
```

Создание сложной структуры пока невозможно (если есть желание написать – welcome, но документацию дополните тогда):

Пример сложной структуры:
```
├──components
├────User
├──────UserLink
├────────UserLink.spec.js
├────────UserLink.stories.js
├────────UserLink.vue
├──────UserContacts
├────────UserContacts.spec.js
├────────UserContacts.stories.js
├────────UserContacts.vue
```
