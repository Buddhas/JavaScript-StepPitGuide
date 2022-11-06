class Scheduler {
    constructor(limit = 2) {
        this.limit = limit;
        this.queue = [];  // 模拟队列，先进先出
        this.processTasks = [];
    }
    addTask(...fns) {
        this.queue.push(...fns);
        this.run();
    }
    run() {
        while (this.processTasks.length < this.limit && this.queue.length > 0) {
            let task = this.queue.shift();
            let promise = task().then(() => {
                this.processTasks.splice(this.processTasks.indexOf(promise), 1);
                this.run();
            });
            this.processTasks.push(promise);
        }
    }
}