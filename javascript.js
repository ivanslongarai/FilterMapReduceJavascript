// just an array to use on tests
const pets = [
  {
    name: "rex",
    type: "dog",
    age: 10,
    weight: 5,
  },
  {
    name: "miau",
    type: "cat",
    age: 2,
    weight: 2,
  },
  {
    name: "gulp",
    type: "fish",
    age: 1,
    weight: 0.8,
  },
  {
    name: "maninha",
    type: "dog",
    age: 3,
    weight: 12,
  },
  {
    name: "lala",
    type: "dog",
    age: 8,
    weight: 15,
  },
];

// filter example one
const lessThan5YearsOld = pets.filter((pet) => {
  return pet.age < 5;
});

// filter example two
const onlyFish = pets.filter((pet) => {
  return pet.type == "fish";
});

// map
const justNames = pets.map((pet) => {
  return pet.name;
});

// reduce returning a value
const totalWeight = pets.reduce((total, pet) => {
  return total + pet.weight;
}, 0);

// reduce returning an object
const objTotal = pets.reduce(
  (total, pet) => {
    return {
      totalAge: +total.totalAge + pet.age,
      totalWeight: +total.totalWeight + pet.weight,
    };
  },
  { totalAge: 0, totalWeight: 0 }
);

// chaining
const totalWeightDogs = pets
  .filter((pet) => {
    return pet.type == "dog";
  })
  .reduce((total, pet) => {
    return total + pet.weight;
  }, 0);

// print results
console.log(pets);
console.log(lessThan5YearsOld);
console.log(onlyFish);
console.log(justNames);
console.log(objTotal);
console.log(totalWeightDogs);

//map with promises
const items = ["a", "b", "c", "d"];
(async function () {
  const promiseFunction = async (element) => {
    return new Promise((resolve, reject) => {
      return resolve(`${element} - promise`);
    });
  };
  const itemsMappedPromisses = items.map(promiseFunction);
  const itemsMapped = await Promise.all(itemsMappedPromisses);
  // print result
  console.log(itemsMapped);
})();
