define([
    'ko',
    'uiComponent',
], function (ko, Component) {

    return Component.extend({
        someObservable: 'here would be your value, but it is overridden dynamically',

        initObservable: function () {
            this._super()
                .observe(['value', 'visible', 'label', 'someObservable']);

            this.someObservable(this.name) // you can put here quote/totals observable or value. Everything you want, it can be taken from xml as well

            return this;
        }
    })
})
