const app = Vue.createApp({
    data() {
        return {
            // Task data for the To-Do list
            task_data: [],
            new_Task: "",
        };
    },
    methods: {
        // Method to remove a task by index
        removetask_data(index) {
            this.task_data.splice(index, 1);
        },
        // Method to add a new task
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
        // Computed property to count completed tasks
        completedTaskCount() {
            return this.task_data.filter(task => task.completed).length;
        },
    },
    setup() {
        const characterCount = Vue.ref(0);
        const new_Task = Vue.ref("");

        Vue.watch(new_Task, (newVal) => {
            characterCount.value = newVal.length;
        });

        return {
            characterCount,
            new_Task,
        };
    },
});

// Mount the Vue app
app.mount("#app");
