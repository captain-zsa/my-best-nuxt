import { mount } from '@vue/test-utils';
import AppButton from '@/components/AppButton/AppButton.vue';

describe('app-button', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(AppButton);

        expect(wrapper.vm).toBeTruthy();
    });
});
