var app = new Vue({
    el: '#app',
    data:{
        firstName : 'Mohamed',
        lastName : 'Khalifa',
        message: 'Hello',
        BtnMsg: 'Show Msg',
        htmlText:'<span style="color:red;">This Should Be Red</span>',
        updatedMsg:'',
        titlemessage: 'You loaded this page on ' + new Date().toLocaleString(),
        seen: false,
        todos: [
            { id:1 , text: 'Learn JavaScript' },
            { id:2 , text: 'Learn Vue' },
            { id:3 , text: 'Build something awesome' }
          ]
    },
    computed:{
        fullName:{
           get:function(){
                return this.firstName + ' ' + this.lastName;
           },
           set:function(newValue){
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[1] == undefined ? "" : names[1];
           }
        }
    },
    //--------LifeCycle --------
    /* beforeCreate: function(){ debugger;},
    created: function(){ debugger;},
    beforeMount: function(){ debugger;},
    mounted: function(){ debugger;},
    beforeUpdate: function(){ debugger;},
    updated: function(){ debugger;},
    activated: function(){ debugger;},
    deactivated: function(){ debugger;},
    beforeDestroy: function(){ debugger;},
    destroyed: function(){ debugger;},
    errorCaptured: function(){ debugger;}, */
    //----------------------------
    methods: {
        addNewItem:function(msg){
            app.todos.push({ text: msg })
        },
        toggelMsg:function(){
            app.seen = !app.seen;
            app.BtnMsg = app.seen ? 'Hide Msg' : 'Show Msg';
        },
        closeApp:function(){
            app.$destroy();
        }
    },
});


app.$watch('seen',function(newValue, oldValue){
    console.log("oldValue:");
    console.log(oldValue);
    console.log("newValue");
    console.log(newValue);
});

