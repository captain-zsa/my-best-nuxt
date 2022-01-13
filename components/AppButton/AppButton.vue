<template>
    <component
        :is="tag"
        class="button"
        :class="buttonClasses"
        :disabled="disabled"
        @mouseover="buttonHover"
        @mouseout="buttonOut"
        @click="clickButton($event)"
    >
        Test
        <loader
            v-if="isButtonLoading"
            :color="loadingColor"
            class="button__loader"
        />

        <span
            v-else
            class="button__content"
        >
            <slot
                v-if="iconPosition !== 'center'"
            />

            <icon
                v-if="icon"
                class="button__icon"
                :icon="icon"
                :color="computedIconColor"
                :class="`button__icon--position--${iconPosition}`"
            />
        </span>
    </component>
</template>

<script>
export default {
    props : {
        isButtonFill : {
            type    : Boolean,
            default : false,
        },

        isButtonLoading : {
            type    : Boolean,
            default : false,
        },

        disabled : {
            type    : Boolean,
            default : false,
        },

        /**
            * The color of button
            * @values silver, primary
        */
        color : {
            type    : String,
            default : '',
        },

        isWeight : {
            type    : Boolean,
            default : false,
        },

        isButtonRound : {
            type    : Boolean,
            default : false,
        },

        /**
            * The icon
            * - close
            * - add-round
            * - arrow-right
            * - arrow–outline-down
            * - bookmark
            * - catalog-list
            * - chevron-down
            * - enter
            * - pin
            * - plus
            * - search
            * - video
        */
        icon : {
            type    : String,
            default : '',
        },

        /**
            * The position of icon
            * @values left, right, center
        */
        iconPosition : {
            type    : String,
            default : 'right',
        },

        /**
            * The color of icon
            * values from colors in constants.js
        */
        iconColor : {
            type    : String,
            default : 'black',
        },
    },

    data() {
        return {
            computedIconColor : this.iconColor,
        };
    },

    computed : {
        tag() {
            return this.$attrs.href && !this.$attrs.type ? 'a' : 'button';
        },

        buttonClasses() {
            return {
                [`button--color--${this.color}`] : this.color,
                'button--loading'                : this.isButtonLoading,
                'button--filled'                 : this.isButtonFill,
                'button--icon'                   : this.iconPosition === 'center',
                'button--round'                  : this.isButtonRound,
                'button--weight'                 : this.isButtonWeight,
            };
        },

        loadingColor() {
            if (this.isButtonFill) {
                return this.color === 'primary' ? 'white' : 'black';
            }

            return 'primary';
        },
    },

    mounted() {
        if (this.disabled) {
            this.computedIconColor = this.color === 'silver' ? 'black-70' : 'black-40';
        }
    },

    methods : {
        buttonHover() {
            if (this.disabled || this.isButtonFill) {
                return;
            }

            this.computedIconColor = 'primary-300';
        },

        buttonOut() {
            if (this.disabled || this.isButtonFill) {
                return;
            }

            this.computedIconColor = this.iconColor;
        },

        clickButton(event) {
            if (this.disabled) {
                event.preventDefault();
            }
        },
    },
};
</script>

<style lang="scss">
.button {
    $block: &;

    @include r-s15-h20;

    display: block;
    width: 100%;
    padding: 7px 10px;
    margin: 0;
    border: 1px solid $primary-100;
    border-radius: 3px;
    color: $black-100;
    text-align: center;
    cursor: pointer;

    &:hover:not(:disabled):not(&--filled):not([disabled]) {
        color: $primary-300;
        border-color: $primary-300;
    }

    &--weight {
        font-weight: 500;
    }

    &--icon {
        padding: 4px;
    }

    &--radius {
        border-radius: 32px;
    }

    &[disabled] {
        cursor: default;
        color: $black-60;
        border-color: $black-40;
    }

    &--filled {
        &#{$block}--color--silver {
            color: $black-100;
            background-color: $black-5;
            border-color: transparent;

            &:hover {
                background-color: $black-10;
            }

            &[disabled] {
                color: $black-70;
                background-color: $black-5;
            }
        }

        &#{$block}--color--primary:not(&[disabled]) {
            color: $white;
            background-color: $primary-300;
            border-color: rgba($black, 0.06);

            &:hover:not(&[disabled]) {
                background-color: $primary-100;
                box-shadow: $shadow-4;
            }

            &:active {
                background-color: $primary-700;
                box-shadow: none;
            }

            &[disabled] {
                color: $black-60;
                background-color: $black-10;
                border-color: rgba($black, 0.06);
            }
        }
    }

    &__content {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__icon {
        width: 24px;
        height: 24px;
        background-size: cover;
        background-repeat: no-repeat;

        &--position {
            &--right {
                order: 1;
                margin-left: 4px;
            }

            &--left {
                order: -1;
                margin-right: 4px;
            }
        }
    }
}
</style>
