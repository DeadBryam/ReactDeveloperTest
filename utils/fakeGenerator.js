import faker from "faker";

export default function fakeGenerator(amount) {
  let list = [];

  for (let index = 0; index < amount; index++) {
    list.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      age: faker.datatype.number({
        min: 10,
        max: 50,
      }),
      phone: faker.phone.phoneNumber(),
    });
  }

  return list;
}
