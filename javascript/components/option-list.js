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
            show: null
        }
    },
    methods: {
        toggle: function (option) {
            this.show = this.show === option ? null : option;
        }
    }
})