function requiredParam(param) {
    throw new Error(param + ' es obligatorio');
}

/* Metodso estaticos*/

function SuperObject() {}

SuperObject.isObject = function(subject) {
  return typeof subject == "object";
}
SuperObject.deepCopy = function(subject) {
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


/* ------------------ Prototipos */
function LearningPath({
    name = requiredParam('_name'),
    courses = [],
  
}) {
    this.name = name;
    this.courses = courses;
    
}

function Student({
    name = requiredParam('name'),
    email = requiredParam('email'),
    ege, 
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = []
} = {}) {
  this.name = name;
  this.email = email;
  this.ege = ege;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram, 
    facebook, 
  };

  const private = {
    '_learningPaths': [],
  }

  Object.defineProperty(this, 'learningPaths', { // <-- LearningPaths faltan ''
    get() {
      return private['_learningPaths'];
    },
    set(newLP) {
      if (newLP instanceof LearningPath) {
        private['_learningPaths'].push(newLP)
      } else {
        console.warn('Some of the LPs is not an instance of the learningpaths prototype')
      }
    }
  });

    for (learningPathIndex in learningPaths) {
      this.learningPaths = learningPaths[learningPathIndex]
    } 

  
}

// class LearningPath {
//   constructor({
//     name = requiredParam('name'),
//     courses,
//   }) {
//     this.name = name;
//     this.courses = courses;
//   }
// }

// class Student {
//   constructor({
//     name = requiredParam('name'),
//     email = requiredParam('email'),
//     ege, 
//     twitter,
//     instagram,
//     facebook,
//     approvedCourses = [],
//     learningPaths = []
//   } = {}) {
//     this.name = name;
//     this.email = email;
//     this.ege = ege;
//     this.approvedCourses = approvedCourses;
//     this.socialMedia = {
//       twitter,
//       instagram, 
//       facebook, 
//     };

//     const #learningPaths = [];

//     Object.defineProperty(this, 'learningPaths', { // <-- LearningPaths faltan ''
//       get() {
//         return private['_learningPaths'];
//       },
//       set(newLP) {
//         if (newLP instanceof LearningPath) {
//           private['_learningPaths'].push(newLP)
//         } else {
//           console.warn('Some of the LPs is not an instance of the learningpaths prototype')
//         }
//       }
//     });
  
//     for (learningPathIndex in learningPaths) {
//       this.learningPaths = learningPaths[learningPathIndex]
//     } 
//   };
// };

/*  ----------------------- Intancias de los prototipos*/

const escuelaWeb = new LearningPath({name: 'escuela web', courses: []});
const escuelaData = new LearningPath({name: 'escuela data', courses: []});
const escuelaDising = new LearningPath({name: 'escuela de diseño', courses: []})

const juan = new Student({
  name: 'juanito',
  email: 'juan@gmail.com',
  learningPaths: [
    escuelaData,
    escuelaWeb,
    {name: 'escuela impostro', courses: []}
  ],
});

const pedro = new Student({
  name: 'Pedrito Chola',
  email: 'pedrio@gmail.com',
  learningPaths: [
    escuelaWeb,
    escuelaDising
  ]
})