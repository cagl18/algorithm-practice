// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

//Instructor solution
class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
    console.log(this.events);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName]; // deleting the key,value property from object.
  }
}

// my solution 2
// class Events {
//   constructor() {
//     this.events = {};
//   }
//   // Register an event handler
//   on(eventName, callback) {
//     if (!this.events[eventName]) {
//       this.events[eventName] = [callback];
//     } else {
//       this.events[eventName].push(callback);
//     }
//     console.log(this.events);
//   }

//   // Trigger all callbacks associated
//   // with a given eventName
//   trigger(eventName) {
//     this.events[eventName].map(fn => {
//       fn();
//     });
//   }

//   // Remove all event handlers associated
//   // with the given eventName
//   off(eventName) {
//     this.events[eventName] = [];
//   }
// }

//my solution 1

// class Events {
//   constructor() {
//     this.events = [];
//   }
//   // Register an event handler
//   on(eventName, callback) {
//     this.events.push({ name: eventName, callback: callback });
//     // console.log(this.events);
//   }

//   // Trigger all callbacks associated
//   // with a given eventName
//   trigger(eventName) {
//     if (this.events.length) {
//       this.events
//         .filter(e => e.name === eventName)
//         .map(event => {
//           event.callback();
//         });
//     }
//   }

//   // Remove all event handlers associated
//   // with the given eventName
//   off(eventName) {
//     if (this.events.length) {
//       this.events = this.events.filter(e => e.name !== eventName);
//     }
//   }
// }

module.exports = Events;
