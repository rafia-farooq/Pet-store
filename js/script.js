const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} is sleeping`);
      this.isTired = 1;
    },

    play: function () {
      if (this.isTired === 10) {
        console.log(`Too tired to play`);
        this.sleep();
      } else {
        console.log(`${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

// console.log(sora, clover, baxter, cleo, francine);
// console.log(sora.play());
// console.log(clover.sleep())

const allPets = [sora, clover, baxter, cleo, francine];
const somePets = [clover, baxter, cleo];

clover.isTired = 8;
francine.isTired = 9;

// const showPets = function () {
//   for (let pet of allPets) {
//     const name = pet.name;
//     const type = pet.species;
//     let status = "";
//     if (pet.isTired <= 5){
//       status = "ready to play"
//     }
//     else {
//       status = "sleeping"
//     }
//     const display = document.createElement("li");
//     display.innerHTML = `<span class="pet-name">${name},</span> the ${type} is ${status}.`;
//     pets.append(display);
//   }
// };

const showPets = function (petsAvailable) {
  pets.innerHTML = "";
  for (let pet of petsAvailable) {
    let status = "ready to play";
    if (pet.isTired >= 7) {
      status = "sleeping";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  // showPets(somePets);
  showPets(allPets);
});
