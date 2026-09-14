import { makeAutoObservable } from "mobx";

export default class Store {
  constructor() {
    this.superheroes = [];
    this.page = 1;
    this.limit = 5;
    this.totalCount = 0;
    makeAutoObservable(this);
  }

  get heroes() {
    return this.superheroes.slice(
      (this.page - 1) * this.limit,
      this.page * this.limit
    );
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
