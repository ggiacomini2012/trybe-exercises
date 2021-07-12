console.clear();

function isManagerw(id) {
  const arrayManagers = [stephanieId, olaId, burlId];
  return arrayManagers.filter((manage) => manage === id).some(e => e === id);
}

const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
const ottersId = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';
const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
const snakesId = '78460a91-f4da-4dea-a469-86fd2b8ccc84';
const frogsId = '89be95b3-47e4-4c5b-b687-1fabf2afa274';
const bearsId = 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d';
const tigersId = 'e8481c1d-42ea-4610-8e11-1752cfc05a46';

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

const species = [
    {
      id: lionId,
      name: 'lions',
      popularity: 4,
      location: 'NE',
      residents: [
        {
          name: 'Zena',
          sex: 'female',
          age: 12,
        },
        {
          name: 'Maxwell',
          sex: 'male',
          age: 15,
        },
        {
          name: 'Faustino',
          sex: 'male',
          age: 7,
        },
        {
          name: 'Dee',
          sex: 'female',
          age: 14,
        },
      ],
    },
    {
      id: tigersId,
      name: 'tigers',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Shu',
          sex: 'female',
          age: 19,
        },
        {
          name: 'Esther',
          sex: 'female',
          age: 17,
        },
      ],
    },
    {
      id: bearsId,
      name: 'bears',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Hiram',
          sex: 'male',
          age: 4,
        },
        {
          name: 'Edwardo',
          sex: 'male',
          age: 4,
        },
        {
          name: 'Milan',
          sex: 'male',
          age: 4,
        },
      ],
    },
    {
      id: 'ef3778eb-2844-4c7c-b66c-f432073e1c6b',
      name: 'penguins',
      popularity: 4,
      location: 'SE',
      residents: [
        {
          name: 'Joe',
          sex: 'male',
          age: 10,
        },
        {
          name: 'Tad',
          sex: 'male',
          age: 12,
        },
        {
          name: 'Keri',
          sex: 'female',
          age: 2,
        },
        {
          name: 'Nicholas',
          sex: 'male',
          age: 2,
        },
      ],
    },
    {
      id: ottersId,
      name: 'otters',
      popularity: 4,
      location: 'SE',
      residents: [
        {
          name: 'Neville',
          sex: 'male',
          age: 9,
        },
        {
          name: 'Lloyd',
          sex: 'male',
          age: 8,
        },
        {
          name: 'Mercedes',
          sex: 'female',
          age: 9,
        },
        {
          name: 'Margherita',
          sex: 'female',
          age: 10,
        },
      ],
    },
    {
      id: frogsId,
      name: 'frogs',
      popularity: 2,
      location: 'SW',
      residents: [
        {
          name: 'Cathey',
          sex: 'female',
          age: 3,
        },
        {
          name: 'Annice',
          sex: 'female',
          age: 2,
        },
      ],
    },
    {
      id: snakesId,
      name: 'snakes',
      popularity: 3,
      location: 'SW',
      residents: [
        {
          name: 'Paulette',
          sex: 'female',
          age: 5,
        },
        {
          name: 'Bill',
          sex: 'male',
          age: 6,
        },
      ],
    },
    {
      id: elephantsId,
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      residents: [
        {
          name: 'Ilana',
          sex: 'female',
          age: 11,
        },
        {
          name: 'Orval',
          sex: 'male',
          age: 15,
        },
        {
          name: 'Bea',
          sex: 'female',
          age: 12,
        },
        {
          name: 'Jefferson',
          sex: 'male',
          age: 4,
        },
      ],
    },
    {
      id: '01422318-ca2d-46b8-b66c-3e9e188244ed',
      name: 'giraffes',
      popularity: 4,
      location: 'NE',
      residents: [
        {
          name: 'Gracia',
          sex: 'female',
          age: 11,
        },
        {
          name: 'Antone',
          sex: 'male',
          age: 9,
        },
        {
          name: 'Vicky',
          sex: 'female',
          age: 12,
        },
        {
          name: 'Clay',
          sex: 'male',
          age: 4,
        },
        {
          name: 'Arron',
          sex: 'male',
          age: 7,
        },
        {
          name: 'Bernard',
          sex: 'male',
          age: 6,
        },
      ],
    },
  ];

const  employees = [
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      firstName: 'Nigel',
      lastName: 'Nelson',
      managers: [burlId, olaId],
      responsibleFor: [lionId, tigersId],
    },
    {
      id: burlId,
      firstName: 'Burl',
      lastName: 'Bethea',
      managers: [stephanieId],
      responsibleFor: [
        lionId,
        tigersId,
        bearsId,
        'ef3778eb-2844-4c7c-b66c-f432073e1c6b'],
    },
    {
      id: olaId,
      firstName: 'Ola',
      lastName: 'Orloff',
      managers: [stephanieId],
      responsibleFor: [
        ottersId,
        frogsId,
        snakesId,
        elephantsId,
      ],
    },
    {
      id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
      firstName: 'Wilburn',
      lastName: 'Wishart',
      managers: [burlId, olaId],
      responsibleFor: [snakesId, elephantsId],
    },
    {
      id: stephanieId,
      firstName: 'Stephanie',
      lastName: 'Strauss',
      managers: [],
      responsibleFor: [
        '01422318-ca2d-46b8-b66c-3e9e188244ed',
        ottersId,
      ],
    },
    {
      id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
      firstName: 'Sharonda',
      lastName: 'Spry',
      managers: [burlId, olaId],
      responsibleFor: [ottersId, frogsId],
    },
    {
      id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
      firstName: 'Ardith',
      lastName: 'Azevado',
      managers: ['b0dc644a-5335-489b-8a2c-4e086c7819a2'],
      responsibleFor: [
        tigersId,
        bearsId,
      ],
    },
    {
      id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
      firstName: 'Emery',
      lastName: 'Elser',
      managers: [stephanieId],
      responsibleFor: [
        elephantsId,
        bearsId,
        lionId,
      ],
    },
  ];

const hours = {
    Tuesday: { open: 8, close: 18 },
    Wednesday: { open: 8, close: 18 },
    Thursday: { open: 10, close: 20 },
    Friday: { open: 10, close: 20 },
    Saturday: { open: 8, close: 22 },
    Sunday: { open: 8, close: 20 },
    Monday: { open: 0, close: 0 },
  };

  const prices = {
    Adult: 49.99,
    Senior: 24.99,
    Child: 20.99,
  };
  
  const all = [...species, ...employees];
  const isTrue = hours + prices === true;
  
  let { Adult, Senior, Child } = prices;
  
  function getSpeciesByIds(ids = [], ids2 = []) {
    if (ids.length === 0) {
      return ids;
    }
    if (ids2.length === 0) {
      return all.filter((element) => element.id === ids);
    }
    const elementOne = all.filter((element) => element.id === ids);
    const elementTwo = all.filter((element) => element.id === ids2);
    return [...elementOne, ...elementTwo];
  }
  
  function getAnimalsOlderThan(animal, age) {
    // primeiro usamos o filter para obter o elemento que tenha a propriedade .name igual ao parametro 'animal'
    // depos pegamos o index 0 e recebemos um objeto. Percorremos este objeto com o every e perguntamos se
    // a propriedade .age é maior que o parametro 'age'.
    return species.filter((e) => e.name === animal)[0].residents.every((e) => e.age > age);
  }
  
  function getEmployeeByName(employeeName = {}) {
    if (Object.keys(employeeName).length === 0) {
      return employeeName;
    }
    return employees.filter((e) => e.firstName === employeeName || e.lastName === employeeName)[0];
  }
  
  function createEmployee(personalInfo, associatedWith) {
    const { id, firstName, lastName } = personalInfo;
    const { managers, responsibleFor } = associatedWith;
    return { firstName, id, lastName, managers, responsibleFor };
  }
  
  function isManager(id) {
    if (
      employees
        .map((e) => e.managers)
        .reduce((e, actual) => e + actual.some((frase) => frase === id), 0) > 0
    ) {
      return true;
    }
    return false;
  }
  
  function addEmployee(
    id,
    firstName,
    lastName,
    managers = [],
    responsibleFor = [],
  ) {
    return employees.push({ id, firstName, lastName, managers, responsibleFor });
  }
  
  function countAnimals(species2 = {}) {
    if (Object.keys(species2).length === 0) {
      const count = {};
      species.reduce((e, actual) => {
        count[actual.name] = actual.residents.length;
        return count;
      }, 0);
      return count;
    }
    return species.find((e) => e.name === species2).residents.length;
  }
  
  function calculateEntry(entrants = {}) {
    if (Object.keys(entrants).length < 1) {
      return 0;
    }
    const { Adult: guestOne = 0, Senior: guestTwo = 0, Child: guestThree = 0 } = entrants;
    return guestOne * Adult + guestTwo * Senior + guestThree * Child;
  }

  // const NE = species.filter((e) => e.location === 'NE').map((e) => e.name);
  // const NW = species.filter((e) => e.location === 'NW').map((e) => e.name);
  // const SE = species.filter((e) => e.location === 'SE').map((e) => e.name);
  // const SW = species.filter((e) => e.location === 'SW').map((e) => e.name);
  // const [lions, giraffes] = species.filter((e) => e.location === 'NE');
  // const [tigers, bears, elephants] = species.filter((e) => e.location === 'NW');
  // const [penguins, otters] = species.filter((e) => e.location === 'SE');
  // const [frogs, snakes] = species.filter((e) => e.location === 'SW');
  
  // function get(param) {
  //   const animals = param.residents.map((e) => e.name);
  //   const animalsName = [param].map((e) => e.name);
  //   const makeObject = {};
  //   makeObject[animalsName] = animals;
  //   return makeObject;
  // }
  
  // function getSort(param) {
  //   const animals = param.residents.map((e) => e.name).sort();
  //   const animalsName = [param].map((e) => e.name);
  //   const makeObject = {};
  //   makeObject[animalsName] = animals;
  //   return makeObject;
  // }
  
  // function getFem(param) {
  //   const animals = param.residents.filter((e) => e.sex === 'female').map((e) => e.name);
  //   const animalsName = [param].map((e) => e.name);
  //   const makeObject = {};
  //   makeObject[animalsName] = animals;
  //   return makeObject;
  // }
  
  // function getFemSort(param) {
  //   const animals = param.residents.filter((e) => e.sex === 'female').map((e) => e.name).sort();
  //   const animalsName = [param].map((e) => e.name);
  //   const makeObject = {};
  //   makeObject[animalsName] = animals;
  //   return makeObject;
  // }
  
  // const requirementOneGet = {
  //   NE: [get(lions), get(giraffes)],
  //   NW: [get(tigers), get(bears), get(elephants)],
  //   SE: [get(penguins), get(otters)],
  //   SW: [get(frogs), get(snakes)],
  // };
  
  // const requirementTwoGet = {
  //   NE: [getSort(lions), getSort(giraffes)],
  //   NW: [getSort(tigers), getSort(bears), getSort(elephants)],
  //   SE: [getSort(penguins), getSort(otters)],
  //   SW: [getSort(frogs), getSort(snakes)],
  // };
  
  // const requirementThreeGet = {
  //   NE: [getFem(lions), getFem(giraffes)],
  //   NW: [getFem(tigers), getFem(bears), getFem(elephants)],
  //   SE: [getFem(penguins), getFem(otters)],
  //   SW: [getFem(frogs), getFem(snakes)],
  // };
  
  // const requirementFourGet = {
  //   NE: [getFemSort(lions), getFemSort(giraffes)],
  //   NW: [getFemSort(tigers), getFemSort(bears), getFemSort(elephants)],
  //   SE: [getFemSort(penguins), getFemSort(otters)],
  //   SW: [getFemSort(frogs), getFemSort(snakes)],
  // };
  
  // function getHelperOne(para) {
  //   switch (para) {
  //   case 'true':
  //     return requirementOneGet;
  //   case 'true,true':
  //     return requirementTwoGet;
  //   case 'true,female':
  //     return requirementThreeGet;
  //   default:
  //     return undefined;
  //   }
  // }
  
  // function getHelperTwo(para) {
  //   switch (para) {
  //   case 'true,female,true':
  //     return requirementFourGet;
  //   case 'female':
  //     return { NE, NW, SE, SW };
  //   case 'female,true':
  //     return { NE, NW, SE, SW };
  //   default:
  //     return undefined;
  //   }
  // }
  
  // function getAnimalMap(options) {
  //   if (options === undefined) {
  //     return { NE, NW, SE, SW };
  //   }
  //   const key = Object.values(options).toString();
  //   const possibilityOne = getHelperOne(key);
  //   const possibilityTwo = getHelperTwo(key);
  //   if (possibilityOne !== undefined) {
  //     return possibilityOne;
  //   }
  //   return possibilityTwo;
  // }
let bobO = {};
  let bob = [];
species.forEach((a) => {
  bob.push(a.location)
});
bob.sort()
bob2 = bob.filter((e, i) => bob.indexOf(e) === i)

let lei = {}
bob2.forEach((e, i) => lei[e] = [])


function wer(receiveObjectResidents) {
  let hhh = [];
  receiveObjectResidents.reduce((e,a,i,u) => {hhh.push(a.name)}, 0)
  return hhh
  }
  function sdf(a,b){
    return wer(a[b].residents)
  }

  //-----------------------\/
function obj(a){
  return Object.keys(lei)[a]
}

function fgh(a, b=0) {
  let array = [[],[],[]];
  species.filter(ed => ed.location === a)
    .forEach((ef, id) => ef.residents
    .forEach(function(eff,idd) {
      b === 0 && array[id].push(eff.name)
      b !== 0 && (eff.sex === 'female')? array[id].push(eff.name): 0
      array[id] === undefined && array[id].push([]);
    }))
    return array.filter(e => e.length)
}

function gdf(ef, a,id, r = false, sex = 0){
  gof = {}
  gof[ef.name] = [];
  // if(r && obj(a)[id].length > 0) {gof[ef.name] = fgh(obj(a), sex)[id].sort();}
  if(!r) {gof[ef.name] = fgh(obj(a), sex)[id];}
  console.log(gof);
  return gof
}

function keyAttribute(a, b, c = false, sex = 0){
  let gof = []
  if (b === 1) { species.filter(ed => ed.location === obj(a))
  .forEach((ef, id) => gof.push(gdf(ef, a, id, c, sex)));
   return lei[obj(a)] = gof}
 if (b === 2 )  {species.filter(ed => ed.location === obj(a))
   .forEach((ef, id) => gof.push(ef.name));
   return lei[obj(a)] = gof}
 }
 
 function oip(q,w, sex) {
   Object.keys(lei).forEach((e, i) => keyAttribute(i,q,w, sex))
   return lei
 }
 //---------------------/\
 
 function getAnimalMap({ includeNames = 0, sex = 0, sorted = 0} = 0) {
   let param = includeNames + sex + sorted;
   if(!param || sex === 'female') {
     console.log(includeNames, sex, sorted, 'só animais');
     return oip(2);
   }
   console.log(includeNames, sex, sorted, 'animais e nomes');
   return oip(1);
 }
  
  function getSchedule(dayName) {
    const schedule = Object.getOwnPropertyDescriptors(hours);
    Object.keys(schedule).forEach((prop) => {
      schedule[prop] = `Open from ${hours[prop].open}am until ${hours[prop].close % 12}pm`;
      schedule.Monday = 'CLOSED';
    });
    if (dayName === undefined) {
      return schedule;
    }
    const oneDayOnASchedule = {};
    oneDayOnASchedule[dayName] = schedule[dayName];
    return oneDayOnASchedule;
  }
  
  function getOldestFromFirstSpecies(id) {
    const findAnimal = employees.find((e) => e.id === id).responsibleFor[0];
    const findResident = species.find((e) => e.id === findAnimal);
    const sortResident = findResident.residents.sort((one, two) => two.age - one.age)[0];
    const { age, name, sex } = sortResident;
    const result = [name, sex, age];
    return result;
  }
  
  function increasePrices(percentage) {
    Adult = data.prices.Adult;
    Child = data.prices.Child;
    Senior = data.prices.Senior;
    const itemA = Math.round((Adult + ((Adult / 100) * percentage)) * 100) / 100;
    const itemB = Math.round((Child + ((Child / 100) * percentage)) * 100) / 100;
    const itemC = Math.round((Senior + ((Senior / 100) * percentage)) * 100) / 100;
    data.prices.Adult = itemA;
    data.prices.Child = itemB;
    data.prices.Senior = itemC;
    return data.prices;
  }
  
  const qwe = {};
  employees.sort((a, b) => a.firstName.localeCompare(b.firstName));
  
  function nbv(a) {
    const asd = [];
    const sdf = Object.values(employees)[a].id;
    const gfd = employees.find((e) => e.id === sdf).responsibleFor;
    Object.keys(gfd).forEach((p) => {
      asd.push(species.filter((e) => e.id === gfd[p])[0].name);
    });
    return asd;
  }
  
  employees.reduce((e, a, i) => {
    qwe[`${a.firstName} ${a.lastName}`] = nbv(i);
    return 0;
  }, 0);
  
  function getEmployeeCoverage(idOrName = 0) {
    if (idOrName === 0) {
      return qwe;
    }
    let jhg;
    Object.entries(qwe).forEach((e, i) => {
      if (e[0].includes(idOrName) || employees[i].id === idOrName) {
        jhg = e;
        return jhg;
      }
    });
    const tre = {};
    const [a, b] = jhg;
    tre[a] = b;
    return tre;
  }
  
  //! methods without arrow function
let store = [0, 1, 2, 3, 4];
let stored = store.reduce(function(pV, cV, cI){
  console.log("pv: ", pV);
  pV.push(cV);
  return pV; // *********  Important ******
}, []);
//!----------------------------

//! get all the values in an array of objects FLAPMAP()
let arrayTest = [{a:1, b:99},{a:2, b:55},{a:3, b:13}];
let arrayFiltered = arrayTest.filter((filtered)=>{
  return (filtered.b > 50);
  })
let arrayFilteredJustKeyB = arrayFiltered.flatMap(({a,b})=> b);
//! ----------------------------

//!-----PROMISE
const promiseStudy = (addWord) => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.round(Math.random() * 100);
    if(randomNumber >50) {
        resolve(`Success, because ${randomNumber} > 50, ${addWord}.`)
      } else {
        reject(`Failure, because ${randomNumber} < 50, ${addWord}.`)
      }
    }) 
  }

  //!---- PROMISE
promiseStudy('bob').then((resolve)=> console.log(resolve)).catch((reject)=> console.log(reject))

async function getProduct() {
  const getFetch =  await fetch(`${urlSearch}computador`);
  const readGetFetch = await getFetch.json();
  return readGetFetch;
}

window.onload = async () => {
  const product = await getProduct();
  console.log(product.results);
  product.results.forEach((e) => {
    const tuy = createProductItemElement(e);
    console.log(e)
    const i = document.querySelector('.items');
    console.log(i)
    i.appendChild(tuy)
  })
};
