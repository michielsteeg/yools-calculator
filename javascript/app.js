var app = new Vue({
    el: "#vue-app",
    data: function () {
        return {
            options: yools.calculator.options
        }
    },
    computed: {
        totalPrice: function () {
            return this.options.reduce(function (prev, curr) {
                return prev + (curr.selected ? curr.price : 0);
            }, 0);
        }
    }
})