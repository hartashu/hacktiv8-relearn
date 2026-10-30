const TodoModel = require('../models/TodoModel');
const TodoView = require('../views/TodoView');

class TodoController {
  static help() {
    TodoView.showHelp();
  }

  static async list() {
    try {
      const todos = await TodoModel.findAll();
      TodoView.showList(todos);
    } catch (error) {
      TodoView.showError(error);
    }
  }

  static async add(task) {
    try {
      await TodoModel.create(task);
      TodoView.showAdd(task);
    } catch (error) {
      TodoView.showError(error);
    }
  }

  static async findOne(targetId) {
    try {
      const todoFound = await TodoModel.findById(targetId);
      TodoView.showFindOne(todoFound);
    } catch (error) {
      TodoView.showError(error);
    }
  }

  static async delete(targetId) {
    try {
      const deletedTask = await TodoModel.deleteById(targetId);
      TodoView.showDelete(deletedTask);
    } catch (error) {
      TodoView.showError(error);
    }
  }

  static async completeTask(targetId) {
    try {
      const completedTask = await TodoModel.completeById(targetId);
      TodoView.showCompleteTask(completedTask);
    } catch (error) {
      TodoView.showError(error);
    }
  }

  static async uncompleteTask(targetId) {
    try {
      const uncompletedTask = await TodoModel.uncompleteById(targetId);
      TodoView.showUncompleteTask(uncompletedTask);
    } catch (error) {
      TodoView.showError(error);
    }
  }
}

module.exports = TodoController;
