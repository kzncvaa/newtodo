import { makeObservable, computed, observable, action } from 'mobx';

class Store{
    @observable tasks = [
        {id: 0, title: "task one", done: false},
        {id: 1, title: "task two", done: true},
        {id: 2, title: "task three", done: false},
    ];
    @observable filter = "all";
    @observable search = '';
    count = this.tasks.length;

    @action.bound
    changeFilter(filter){
        this.filter = filter;
    }

    @action.bound
    setTasks(payload){
        this.tasks = payload;
    }

    @action.bound
    setSearch(str){
        this.search = str;
    }

    @computed get sortedTasks(){
        return this.tasks
        .filter(task=>task.title.indexOf(this.search) !== -1)
        .slice()
        .sort((a,b) => (a.done === b.done ? 0 : a.done ? 1 : -1  ));
    }

    @computed get activeTasksCount(){
        return this.tasks.filter(task => !task.done).length
    }

    @computed get activeTasks(){
        return this.tasks
        .filter(task=>task.title.indexOf(this.search) !== -1).filter(task=>!task.done)
    }

    @computed get doneTasks(){
        return this.tasks
        .filter(task=>task.title.indexOf(this.search) !== -1).filter(task=>task.done)
    }

    @action.bound
    addTask(task){
        let tasks = this.tasks;
        tasks.push({
            id: this.count,
            title: task,
            done: false
        })
        this.setTasks(tasks);
        this.count++;
    }

    @action.bound
    deleteTask(id){
        this.setTasks(this.tasks.filter(item => item.id !== id))
    }

    @action.bound
    doneTask(id){
        const tasks = this.tasks;
        const index = tasks.map(task => task.id).indexOf(id);
        tasks[index].done = true;
        this.setTasks(tasks)
    }

    constructor(){
        makeObservable(this);
    }
}

export default Store;