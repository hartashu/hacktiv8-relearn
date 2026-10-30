class Todo {
  #id;
  #isCompleted;

  constructor({ id, task, isCompleted = false }) {
    this.#id = id;
    this.task = task;
    this.#isCompleted = isCompleted;
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    this.#id = value;
  }

  get isCompleted() {
    return this.#isCompleted;
  }

  set isCompleted(value) {
    this.#isCompleted = value;
  }

  toJSON() {
    return {
      task: this.task,
      isCompleted: this.#isCompleted,
    };
  }
}

class TodoFactory {
  static createTodo({ id, task, isCompleted = false }) {
    return new Todo({ id, task, isCompleted });
  }
}

module.exports = TodoFactory;
