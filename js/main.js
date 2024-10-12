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
            notActive: true,
            selectedUser: 0,
            newMessage: {
                text: '',
                date: '12/13/24',
            },
            timer: null,  
        }
    },
    methods: {
        switchNot: function () {
            if(this.notActive === true){
                this.notActive = false
            } else if (this.notActive === false) {
                this.notActive = true
            }
        },
        selectUserChat: function (index){
            this.selectedUser = index;
        },
        onClickSendMss: function (){
            const user = this.selectedUser;
            this.importedUserList[this.selectedUser].messages.push({
                text: this.newMessage.text,
                date: this.newMessage.date,
                mine: true,
            }),
            this.newMessage.text = '',
            setTimeout(() => {
                this.importedUserList[user].messages.push(
                    {
                        text: 'MammaMia!!!',
                        date: '12/13/24',
                        mine: false,
                    }
                )
            },2000)
        },
    },
    mounted() {
        
    },
}).mount('#app');