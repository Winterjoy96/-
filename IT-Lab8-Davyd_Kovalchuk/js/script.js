function getFullName(user) {
    return `${firstName} ${lastName}`;
}

function handleThings(opts = {}) {
    opts.name = "Some name";
    return opts;
}

class Queue {
    constructor(contents = []) {
        this.queue = [...contents];
    }

    pop() {
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
    }
}
