import { makeAutoObservable } from "mobx";

export default class ActivityStore {
    title = 'Hello from MobX!';

    constructor() {
        makeAutoObservable(this)
    }
    // Property value: action.bound inside makeObservable passing argument object 
    // automatically binds property setTitle to ActivityStore class.
    // If we make setTitle: action without bound, we may use arrow function here 
    // to bind setTitle function to ActivityStore class:
    // setTitle = () => {...}
    setTitle = () => {
        this.title = this.title + '!';
    }
}