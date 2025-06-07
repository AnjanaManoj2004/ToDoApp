const app = Vue.createApp({
    data() {
        return {

            task_data: [],
            new_Task: "",
        };
    },
    methods: {

        removetask_data(index) {
            this.task_data.splice(index, 1);
        },

        add_Task() {
            if (this.new_Task.trim() !== "") {
                this.task_data.push({ text: this.new_Task, completed: false });
                this.new_Task = "";
            }
        },
    },
    components: {
        'custom-component': {
            props: ['message'],
            template: `
                <div>
                    <h2>Greetings</h2>
                    <p>Hello and Welcome</p>
                    <slot name="customSlot"></slot>
                </div>
            `,
        },
    },
    computed: {

        completedTaskCount() {
            return this.task_data.filter(task => task.completed).length;
        },
    },
    
});

app.mount("#app");
