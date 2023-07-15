function requiredParam(param) {
    throw new Error(param + ' es obligatorio');
}
  
function createStudent({
    name = requiredParam('name'),
    email = requiredParam('email'),
    ege, 
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
  
    return{
      name,
      email,
      ege,
      approvedCourses,
      learningPaths,
      socialmedia: {
        twitter,
        instagram,
        facebook,
      },
    };
}

// const juan = createStudent({
//   name: 'juanito',
//   age: 18,
//   email: 'juan@gmail.com',
//   twitter: 'fjuan'
// });


const juanito = createStudent({name: 'juanito', email: 'juanito@frijoels.com'})