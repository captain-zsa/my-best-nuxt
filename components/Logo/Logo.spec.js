import { mount } from '@vue/test-utils';
import Logo from '@/components/Logo/Logo.vue';

describe('logo', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Logo);

        expect(wrapper.vm).toBeTruthy();
    });
});
