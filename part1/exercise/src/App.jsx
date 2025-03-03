// Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.
// Define the new components in the file App.jsx.

const Header = ({ course }) => <h1>{course.name}</h1>

const Part = (props) => {
  return (
    <p>
      {props.title} {props.exercisesNumber}
    </p>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part, index) => (
        <Part key={index} title={part.name} exercisesNumber={part.exercises} />
      ))}
    </div>
  )
}

const Total = ({ course }) => {
  let total = 0
  course.parts.forEach((part) => total += part.exercises)
  
  return (
    <p>
      <b>Number of exercises {total}</b>
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App