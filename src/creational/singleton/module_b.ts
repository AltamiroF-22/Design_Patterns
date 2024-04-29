// import { MyDatabaseClassic } from "./db/my-database-classic";
// import { MyDatabaseClassic as myDatabaseClassicFromMuduleA } from "./db/my-database-classic";

// const myDatabaseClassic = MyDatabaseClassic.instance;
// myDatabaseClassic.add({ name: "Altamiro-B", age: 22 });
// myDatabaseClassic.add({ name: "Júnior-B", age: 22 });
// myDatabaseClassic.show();
// myDatabaseClassic.remove(0);
// myDatabaseClassic.show();

import { MyDatabaseModule } from "./db/my-database-mudule";
import { myDatabaseModule as myDatabaseModuleFromMuduleA } from "./module_a";

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: "Altamiro-B", age: 22 });
myDatabaseModule.add({ name: "Júnior-B", age: 22 });
myDatabaseModule.show();

console.log(myDatabaseModule === myDatabaseModuleFromMuduleA);
