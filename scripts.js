var app = new Vue({
    el: '#app',
    data:{
        firstName : 'Mohamed',
        lastName : 'Khalifa',
        message: 'Hello',
        error: false,
        listBtnTitle: 'Hide List',
        showList: true,
        errorClass: 'class-error',
        isActive: true,
        BtnMsg: 'Show Msg',
        htmlText:'<span style="color:red;">This Should Be Red</span>',
        updatedMsg:'',
        titlemessage: 'You loaded this page on ' + new Date().toLocaleString(),
        seen: false,
        todos: [
            { id:1 , text: 'Learn JavaScript' },
            { id:2 , text: 'Learn Vue' },
            { id:3 , text: 'Build something awesome' }
          ],
        object: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        }
    },
    computed:{
        classObject: function() {
            return{ 
                active : this.isActive && !this.error,
                'text-danger': this.error
            }
        },

        styleObject: function(){
            return{ 
                color: this.isActive ? "green" : "red",
                'font-size': 30 +'px'
            }
         },

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
        updateList:function(operation,msg){
            if(operation == 0){
                app.todos.push({ text: msg });
            }else if(operation == 1){
                app.todos.pop();
            }
        },
        toggelMsg:function(){
            app.seen = !app.seen;
            app.BtnMsg = app.seen ? 'Hide Msg' : 'Show Msg';
        },
        ListBtnClicked:function(){
            app.showList = !app.showList;
            app.listBtnTitle = app.seen ? 'Hide List' : 'Show List';
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

