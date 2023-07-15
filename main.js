// const juan = {
//     name: 'Juanito',
//     age: 18,
//     approvedCourse: ['Curso 1'],

//     addCourse(newCourse) {
//         console.log('this', this);
//         console.log('this.approvedCourse', this.approvedCourse);
//         this.approvedCourse.push(newCourse);
//     }
// }

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));

// Object.defineProperty(juan, 'pruebaNasa', {
//     value: 'extraterestres',
//     enumerable: false,
//     writable: false,
//     configurable: false,
// });
// Object.defineProperty(juan, 'navigator', {
//     value: 'Chrome',
//     enumerable: false,
//     writable: true,
//     configurable: true,
// });
// Object.defineProperty(juan, 'editor', {
//     value: 'VScode',
//     enumerable: true,
//     writable: false,
//     configurable: true,
// });
// Object.defineProperty(juan, 'terminal', {
//     value: 'WLS',
//     enumerable: true,
//     writable: true,
//     configurable: false,
// });

// Object.seal(juan);
// // Este método nos permite que no se puedan eliminar nuestros objetos y propiedaes 

// Object.freeze(juan);
// // Este método evita que lo puedan eliminar y modificar 

// console.log(Object.getOwnPropertyDescriptors(juan));


// const objeto1 = {
//     a: 'a',
//     b: 'b',
//     c: {
//         d: 'd',
//         e: 'e'
//     },

//     editA() {
//         this.a = 'AAAA';
//     }
// };

// const objeto2 = {};

// for (prop in objeto1) {
//     objeto2[prop] = objeto1[prop];
// }

// const objeto3 = Object.assign({}, objeto1)
// const objeto4 = Object.create(objeto1)

// const stringfiedComplexObj = JSON.stringify(objeto1);
// const objeto2 = JSON.parse(stringfiedComplexObj);

/*
Normalmente cuando nosotros queremos sumar un número utilizamos los siclos estos 
nos permiten darle una condicion y estos se repetiran hasta que esta condicion
se cumpla este seria un ejemplo de: 
*/

// let numero = 0;

// while(numero < 15) {
//     console.log(numero);
//     numero++
// }

// const numeritoss = [2,23,5,2,34,23,];
// let numerotes = 0 
// for(let i = 0; i < numeritoss.length; i++) {
//     numerotes = numeritoss[i];
//     console.log({i, numeritoss})
// }

/*
Pero con la recursividad nosotros podemos hacer esto mismo pero 
con una funcion 
*/

// function recursividad(numArray) {
//     if (numArray.length != 0) {
//         const firtNum = numArray[0];
//         console.log(firtNum);
//         numArray.shift();
//         recursividad(numArray)
//     }
// } 

// recursividad(numeritoss)

// Ejemplo 

// const numeritos = [2,3,5,2,3,46,2,46,22];
// let num = 0;
// for (let i = 0; i < )

function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }

// FUNCIÓN RECURSIVA
function deepCopy(subject) {
    let copySubject;
  
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
  
    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }
   
    for (key in subject) {
      const keyIsObject = isObject(subject[key]);
  
      if (keyIsObject) {
        copySubject[key] = deepCopy(subject[key]);
      } else {
        if (subjectIsArray) {
          copySubject.push(subject[key]);
        } else {
          copySubject[key] = subject[key];
        }
      }
    }
  
    return copySubject;
  }

// const studentBase = {
//     name: undefined,
//     email: undefined,
//     age: undefined,
//     appruvedCourses: undefined,
//     learningPaths: undefined,
//     sociealMedia: {
//         twitter: undefined,
//         instagram: undefined,
//         facebook: undefined,
//     }
// };

// const juan = deepCopy(studentBase);
// Object.seal(juan);
// Object.isSealed(juan); // Nos permite verificar que todas nuestras propiedades de nuestro objeto tienen la protección de configurable como false 
// Object.isFrozen(juan); // Nos permite verificar que 
// juan.name = 'Juanito';
// juan.email = 'juanitoalcachofa@gmail.com';
// juan.age = 18; 

/*
 ------------------------- Factory pattern y RORO
*/

// function requiredParam(param) {
//   throw new Error(param + ' es obligatorio');
// }

// function createStudent({
//   name = requiredParam('name'),
//   email = requiredParam('email'),
//   ege, 
//   twitter,
//   instagram,
//   facebook,
//   approvedCourses = [],
//   learningPaths = [],
// } = {}) {

//   const private = {
//     '_name': name, 
//   };

//   const public = {
//     email,
//     ege,
//     approvedCourses,
//     learningPaths,
//     socialmedia: {
//       twitter,
//       instagram,
//       facebook,
//     },
//     get name() {
//       return private['_name'];
//     },
//     set name(newName) {
//       if (newName.length != 0) {
//         private['_name'] = newName
//       } else {
//         console.warn('Tu nombre debe tener al menos 1 caracter');
//       }
//     },
//     // readName() {
//     //   return private['_name'];
//     // },
//     // chageName(newName) {
//     //   private['_name'] = newName;
//     // },
//   };

//   // Object.defineProperty(public, 'readName', {
//   //   configurable: false,
//   //   writable: false,
//   // })

//   // Object.defineProperty(public, 'chageName', {
//   //   configurable: false,
//   //   writable: false,
//   // })
    
//   return public
// }

/* ---------------------------- Duck tiping js */

function LearningPath({
  name = requiredParam('_name'),
  courses = [],

}) {
  this.name = name;
  this.courses = courses;
  
  // const private = {
  //   '_name': name,
  //   '_courses': courses,
  // };

  // const public = {
  //   get name() {
  //     return private['_name'];
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private['_name'] = newName
  //     } else {
  //       console.warn('Tu nombre debe tener al menos 1 caracter');
  //     }
  //   },

  //   get courses() {
  //     return private['courses'];
  //   },
  // };

  // return public;
}

function requiredParam(param) {
  throw new Error(param + ' es obligatorio');
}

function Student({
  name = requiredParam('name'),
  email = requiredParam('email'),
  ege, 
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPathssssss = []
} = {}) {
  
  if (!isArray(learningPathssssss)) {
    console.warn('LearningPaths no es un array');
    return;
  }

  for (learningPath in learningPathssssss) {
    if (!learningPath instanceof LearningPaths) {
      console.warn('LearningPaths no es un verdadero learningPaths');
      return;
    }
  }

  this.name = name;
  this.email = email;
  this.ege = ege;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram, 
    facebook, 
  };

  // const private = {
  //   '_name': name, 
  //   '_learningPaths': learningPaths, 
  // };

  // const public = {
  //   email,
  //   ege,
  //   approvedCourses,
  //   socialmedia: {
  //     twitter,
  //     instagram,
  //     facebook,
  //   },

  //   get name() {
  //     return private['_name'];
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private['_name'] = newName
  //     } else {
  //       console.warn('Tu nombre debe tener al menos 1 caracter');
  //     }
  //   },

  //   get learningPaths() {
  //     return private['_learningPaths'];
  //   },
  //   set learningPaths(newLP) {

  //     if (!newLP.name) {
  //       console.warn('Tu LP no tiene la proiedad name');
  //       return;
  //     }
  //     if (!newLP.courses) {
  //       console.warn('Tu LP no tiene courses');
  //       return;
  //     }
  //     if (!isArray(newLP.courses)) {
  //       console.warn('Tu LP no es una lista de (cursos)');
  //       return;
  //     }

  //     private['_learningPaths'].push(newLP)
  //   },
  // };
    
  // return public
}

const escuelaWeb = new LearningPath({name: 'escuela web', courses: []});
const escuelaData = new LearningPath({name: 'escuela data', courses: []});

const juan = new Student({
  name: 'juanito',
  email: 'juan@gmail.com',
  learningPaths: [
  ],
});

const pedro = new Student({
  name: 'Pedrito Chola',
  email: 'pedrio@gmail.com',
  learningPaths: [
  ]
})
