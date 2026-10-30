const fs = require('fs').promises;
const path = require('path');
const TodoFactory = require('./TodoFactory');

class TodoModel {
  static #filePath = path.join(__dirname, '../data.json');

  static async findAll() {
    const rawData = await fs.readFile(this.#filePath, 'utf-8');
    const parsedData = JSON.parse(rawData);
    const todos = parsedData.map(({ task, isCompleted }, index) =>
      TodoFactory.createTodo({
        id: index + 1,
        task,
        isCompleted,
      }),
    );

    return todos;
  }

  static async findById(targetId) {
    const todos = await this.findAll();
    const targetTodo = todos.find(({ id }) => id === targetId);

    if (!targetTodo) {
      throw new Error(`Task with id ${targetId} not found`);
    }

    return targetTodo;
  }

  static async create(newTask) {
    const todos = await this.findAll();
    const isExisted = todos.find((todo) => todo.task === newTask);

    if (isExisted) {
      throw new Error(`Task ${newTask} is already exist. Finish it first!`);
    }

    const lastIndex = todos.length > 0 ? todos.at(-1).id : 0;

    todos.push(
      TodoFactory.createTodo({
        id: lastIndex + 1,
        task: newTask,
      }),
    );

    await this.save(todos);
  }

  static async deleteById(targetId) {
    const todos = await this.findAll();
    const targetTodo = todos.find(({ id }) => id === targetId);

    const filteredTodos = todos.filter(({ id }) => id !== targetId);

    await this.save(filteredTodos);

    return targetTodo.task;
  }

  static async updateStatus(targetId, isCompleted) {
    const todos = await this.findAll();
    const targetTodo = todos.find(({ id }) => id === targetId);

    if (!targetTodo) {
      throw new Error(`Task with id ${targetId} not found`);
    }

    targetTodo.isCompleted = isCompleted;

    await this.save(todos);

    return targetTodo.task;
  }

  static async completeById(targetId) {
    return this.updateStatus(targetId, true);
  }

  static async uncompleteById(targetId) {
    return this.updateStatus(targetId, false);
  }

  static async save(data) {
    await fs.writeFile(this.#filePath, JSON.stringify(data, null, 2));
  }
}

module.exports = TodoModel;
