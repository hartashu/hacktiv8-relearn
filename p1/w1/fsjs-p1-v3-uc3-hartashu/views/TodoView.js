class TodoView {
  static showError(error) {
    console.log(error.message);
  }

  static showHelp() {
    console.log(`
node todo.js
node todo.js help
node todo.js list
node todo.js add <task_content>
node todo.js findById <task_id>
node todo.js delete <task_id>
node todo.js complete <task_id>
node todo.js uncomplete <task_id>
    `);
  }

  static showList(data) {
    data.forEach((todo) =>
      console.log(`${todo.id}. [${todo.isCompleted ? 'x' : ' '}] ${todo.task}`),
    );
  }

  static showAdd(task) {
    console.log(`Added "${task}" to your TODO list...`);
  }

  static showFindOne(todo) {
    console.log(`${todo.id}.${todo.task}`);
  }

  static showDelete(task) {
    console.log(`Deleted "${task}" from your TODO list...`);
  }

  static showCompleteTask(task) {
    console.log(`Task ${task} is completed`);
  }

  static showUncompleteTask(task) {
    console.log(`Task ${task} is not completed yet`);
  }
}

module.exports = TodoView;
