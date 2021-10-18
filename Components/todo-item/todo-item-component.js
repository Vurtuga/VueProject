Vue.component('todo-item',{
    props: ['todo'],
    template: '<li v-bind:id="\'item-\' + todo.id" >{{ todo.text }}</li>'
});