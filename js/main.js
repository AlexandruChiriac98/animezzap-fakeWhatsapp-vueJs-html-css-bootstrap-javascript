import importedUserList from './usersList.js';

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            importedUserList,
            mainUser: {
                name: 'Luffy',
                avatar: 'img/Avatar-4.png'
            },
            notActive: true            
        }
    },
    methods: {
        switchNot: function () {
            if(this.notActive === true){
                this.notActive = false
            } else if (this.notActive === false) {
                this.notActive = true
            }
        }
        
    },
    mounted() {
        
    },
}).mount('#app');