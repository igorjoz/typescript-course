enum Role {
    ADMIN,
    MODERATOR,
    CUSTOMER,
};

const person: {
    name: string,
    surname: string,
    age: number,
    role: [number, string],
    role2: number,
} = {
    name: 'Igor',
    surname: 'Józefowicz',
    age: 19,
    role: [3, 'programmer'],
    role2: Role.ADMIN,
};

person.role.push("tak");
person.role.push(1);

console.log(person);
console.log(person.name);
console.log(person.role);
console.log(person.role2);

