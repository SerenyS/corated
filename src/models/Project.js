import moment from "moment";

function Project(name, budget, deadline, tags) {
    // object data
    this.name = name || 'New Project Name';
    this.budget = budget || 0;
    this.deadline = deadline ? moment(deadline) : moment().add(Math.ceil(Math.random() * 8 + 2), 'days');
    this.tags = tags || [];

    // firebase internals
    this._id = '';
    this._path = '';

    this.toString = function () {
        return this.name;
    }

    // used to create PLAIN object to store in Firebase
    this.toFirestore = function () {
        return {
            name: this.name,
            budget: this.budget,
            deadline: this.deadline.toDate(),
            tags: this.tags,
        }
    }
}

// STATIC properties/methods for Project
Project.collectionName = 'projects';

// used to convert PLAIN object from Firebase to custom model
// https://firebase.google.com/docs/firestore/query-data/get-data#custom_objects
Project.fromFirestore = function () {
    return {
        fromFirestore: function (snapshot, options) {
            const data = snapshot.data(options);
            const project = new Project(data.name, data.budget, data.deadline.seconds * 1000, data.tags);

            //console.log(new Date(data.deadline.seconds *1000));
            // set some things for firebase usage
            // NOTE: .id is already added by vuefire
            project._id = snapshot.id;
            project._path = snapshot.ref.path;

            return project;
        }
    }
}
export default Project;

// CLASSES DON'T PASS METHODS WHEN VUE/VUEFIRE USES Object.assign()
// export default class Project {
//     // object data
//     name = '';
//     budget = 0;
//     deadline;
//     tags = [];
//
//     // firebase internals
//     static collectionName = 'projects'
//     _id = '';
//     _path = '';
//
//     constructor(name, budget, deadline, tags) {
//         this.name = name || 'New Project Name';
//         this.budget = budget || 0;
//         this.deadline = deadline ? moment(deadline) : moment().add(Math.ceil(Math.random() * 8 + 2), 'days');
//         this.tags = tags || [];
//     }
//
//     get id() {
//         return this._id;
//     }
//
//     toString = function(){
//         return this.name;
//     }
//
//     // used to create PLAIN object to store in Firebase
//     toFirestore() {
//         return {
//             name: this.name,
//             budget: this.budget,
//             deadline: this.deadline.toDate(),
//             tags: this.tags,
//         }
//     }
//
//     // used to convert PLAIN object from Firebase to custom model
//     // https://firebase.google.com/docs/firestore/query-data/get-data#custom_objects
//     static fromFirestore() {
//         return {
//             fromFirestore: function (snapshot, options) {
//                 const data = snapshot.data(options);
//                 const project = new Project(data.name, data.budget, data.deadline.seconds * 1000, data.tags);
//
//                 // set some things for firebase usage
//                 // NOTE: .id is already added by vuefire
//                 project._id = snapshot.id;
//                 project._path = snapshot.ref.path;
//
//                 return project;
//             }
//         }
//     }
// }
