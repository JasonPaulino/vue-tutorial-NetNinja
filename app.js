// Initializes an instance of Vue
const app = Vue.createApp({
  // Data is a function that returns an object
  // The properties within data are accessible within the template
  data() {
    return {
      occupation: "Software Engineer",
      fullName: "Jason Paulino",
      age: 21,
    };
  },
  methods: {
    changeOccupation(newOccupation) {
      this.occupation = newOccupation;
    },
  },
});

// Mounts the app to the DOM in the #app div
app.mount("#app");
