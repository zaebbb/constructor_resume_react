import {makeAutoObservable} from "mobx";

class FooterStore{
    isFooterFixed = true

    constructor(){
        makeAutoObservable(this)
    }

    switchFooter(isFixed){
        this.isFooterFixed = isFixed
    }

    get getIsFixed(){
        return this.isFooterFixed
    }
}

export default new FooterStore()
