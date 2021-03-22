define([
    'ko',
    'uiComponent',
], function (ko, Component) {

    return Component.extend({
        value: 'Listened component value is empty',

        initObservable: function () {
            this._super()
                .observe(['value', 'visible']);

            return this;
        },

        handleValueChange: function (value) {
            if (!value) {
                return this.value('I listened: emptiness')
            }
            return this.value('I listened: '.concat(value));
        }
    })
})
