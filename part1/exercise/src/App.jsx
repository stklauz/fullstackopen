// Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.
// Define the new components in the file App.jsx.

const Header = () => {
  const course = 'Half Stack application development'
  return (
    <h1>{course}</h1>
  )
}

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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header />
      <Content part1={part1} exercises1={exercises1}
               part2={part2} exercises2={exercises2}
               part3={part3} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App