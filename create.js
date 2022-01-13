const fs                 = require('fs');
const tabs               = '    '; // отступы
const path               = require('path');
const dir                = '/components';
const componentName      = process.argv[2]; // название компонента
const files              = ['spec', 'stories', 'vue'];
const componentNameClass = componentName
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([a-z])/g, '$1$2')
    .replace(/ +/g, '-').toLowerCase();

if (!componentName) {
    console.log('Вы указали название компонента');
    process.exit(1);
}

// файлы
const filesName = {
    spec    : `${componentName}.spec.js`,
    stories : `${componentName}.stories.js`,
    vue     : `${componentName}.vue`,
};

// внутренности файлов
const inners = {
    spec : `import { mount } from '@vue/test-utils';
import ${componentName} from '@/components/${componentName}/${componentName}.vue';

describe('${componentName}', () => {
${tabs}test('is a Vue instance', () => {
${tabs}${tabs}const wrapper = mount(${componentName});

${tabs}${tabs}expect(wrapper.vm).toBeTruthy();
${tabs}});
});
`,
    stories : `export default {
${tabs}title : '${componentName}',
};

export const NuxtWebsite = () => '<${componentName} />';
`,
    vue : `<template>
${tabs}<div class="${componentNameClass}">
${tabs}${tabs}
${tabs}</div>
</template>

<script>
export default {
${tabs}props : {
${tabs}${tabs}
${tabs}},

${tabs}data() {
${tabs}${tabs}return {
${tabs}${tabs}${tabs}
${tabs}${tabs}};
${tabs}},

${tabs}computed : {
${tabs}${tabs}
${tabs}},

${tabs}methods : {
${tabs}${tabs}
${tabs}},
};
</script>

<style lang="scss">
.${componentNameClass} {
${tabs}
}
</style>
`,
};

// создаем папку
fs.mkdir(path.join(path.join(__dirname, dir), componentName), (err) => {
    if (err) {
        return console.error(err);
        // eslint-disable-next-line no-unreachable
        process.exit(1);
    }
    console.log('Папка создана');
});

// создаем файлы в папке
files.forEach((file) => {
    const filePath = path.join(path.join(__dirname, dir), componentName, filesName[file]);
    const fileStr = inners[file];

    fs.writeFile(filePath, fileStr, (err) => {
        if (err) {
            return console.error(err);
        }

        console.log(`Файл ${filesName[file]} создан`);
    });
});
