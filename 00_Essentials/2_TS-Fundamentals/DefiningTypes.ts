// Defining Types by Inference
const user1 = {
  name: "Hayes",
  id: 0,
};

// interface declaration:
interface User {
  name: string;
  id: number;
}

const userByInterface: User = {
  name: "Hayes",
  id: 0,
};

// Warning
// Type '{ username: string; id: number; }' is not assignable to type 'User'.
// Object literal may only specify known properties, and 'username' does not exist in type 'User'.
const user2: User = {
  username: "Hayes",
  id: 0,
};

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user3: User = new UserAccount("Murphy", 1);
