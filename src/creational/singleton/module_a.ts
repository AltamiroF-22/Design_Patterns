// ---- class
// import { MyDatabaseClassic } from "./db/my-database-classic";

// const myDatabaseClassic = MyDatabaseClassic.instance;
// myDatabaseClassic.add({ name: "Altamiro-A", age: 22 });
// myDatabaseClassic.add({ name: "Júnior-A", age: 23 });
// myDatabaseClassic.add({ name: "Ashley-A", age: 20 });

// export { myDatabaseClassic };


import { MyDatabaseModule } from "./db/my-database-mudule";

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: "Altamiro-A", age: 22 });
myDatabaseModule.add({ name: "Júnior-A", age: 23 });
myDatabaseModule.add({ name: "Ashley-A", age: 20 });
myDatabaseModule.show()

export { myDatabaseModule };
