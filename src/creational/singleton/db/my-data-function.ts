import { User } from "../interfaces/singleton-interfaces";

export const MyDatabasefunction = (function () {
  const users: User[] = [];

  return {
    add(user: User): void {
      users.push(user);
    },

    remove(index: number): void {
      users.splice(index, 1);
    },

    show(): void {
      users.map((user) => {
        console.log(user.name, user.age);
      });
      console.log("-------------------");
    },
  };
})();
