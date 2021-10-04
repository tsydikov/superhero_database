import { makeAutoObservable } from "mobx";

export default class Store {
  constructor() {
    this.superheroes = [];
    this.page = 1;
    this.heroes = [];
    this.limit = 5;
    makeAutoObservable(this);
  }
  setHeroes(heroes) {
    this.heroes = heroes;
  }
  setSuperheroes(superheroes) {
    this.superheroes = superheroes;
  }
  setPage(page) {
    this.page = page;
  }
  setTotalCount(totalCount) {
    this.totalCount = totalCount;
  }
}
