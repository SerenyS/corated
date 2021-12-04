function Task(name, cost, priority) {
    // object data
    this.name = name || 'Task Name';
    this.cost = cost || 0;
    this.priority = priority || 1; // 1, 2, 3, or 4

    // firebase internals
    this._id = '';
    this._path = '';

    // used to create PLAIN object to store in Firebase
    this.toFirebase = function () {
        return {
            name: this.name,
            cost: this.cost,
            priority: this.priority,
        }
    }
}

// STATIC properites/methods
Task.collectionName = 'tasks';

// used to convert PLAIN object from Firebase to custom model
// https://firebase.google.com/docs/firestore/query-data/get-data#custom_objects
Task.fromFirestore = function () {
    return {
        fromFirestore: function (snapshot, options) {
            const data = snapshot.data(options);
            const task = new Task(data.name, data.cost, data.priority);

            // set some things for firebase usage
            // NOTE: .id is already added by vuefire
            task._id = snapshot.id;
            task._path = snapshot.ref.path;

            return task;
        }
    }
}

export default Task;
