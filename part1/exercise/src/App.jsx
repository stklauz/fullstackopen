// Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.
// Define the new components in the file App.jsx.

const Header = ({ title }) => <h1>{title}</h1>


const Part = (props) => {
  return (
    <p>
      {props.title} {props.exercisesNumber}
    </p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part title={props.part1} exercisesNumber={props.exercises1} />
      <Part title={props.part2} exercisesNumber={props.exercises2} />
      <Part title={props.part3} exercisesNumber={props.exercises3} />
    </>
  )
}

const Total = (props) => {
  return (
    <p>
      <b>Number of exercises {props.total}</b>
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header title={course} />
      <Content part1={part1.name} exercises1={part1.exercises}
               part2={part2.name} exercises2={part2.exercises}
               part3={part3.name} exercises3={part3.exercises} />
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App