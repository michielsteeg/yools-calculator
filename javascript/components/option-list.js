Vue.component("option-list", {
    template: "#option-list",
    props: {
        options: {
            type: Array,
            required: true
        }
    },
    data: function () {
        return {
            show: []
        }
    },
    methods: {
        toggle: function (option) {
            this.show[this.options.indexOf(option)] = !this.show[this.options.indexOf(option)];
        }
    }
})