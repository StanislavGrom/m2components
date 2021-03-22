define([
    'ko',
    'uiComponent',
], function (ko, Component) {

    return Component.extend({

        initObservable: function () {
            this._super()
                .observe(['checked', 'label']);

            return this;
        },
    })
})
