const Header = (header) => {
  return (
    <h1>{header.course}</h1>
  )
}

const Part = (part) => {
  return (
    <p>
      {part.part} {part.exercise}
    </p>
  )
}

const Content = (content) => {
  return (
    <div>
      <Part part={content.content[0].name} exercise={content.content[0].exercises} />
      <Part part={content.content[1].name} exercise={content.content[1].exercises} />
      <Part part={content.content[2].name} exercise={content.content[2].exercises} />
    </div>
  )
}

const Total = (total) => {
  return (
    <p>Number of exercises {total.total[0].exercises + total.total[1].exercises + total.total[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    title: "Half Stack application development",
    info: [
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
      <Header course={course.title} />
      <Content content={course.info} />
      <Total total={course.info}/>
    </div>
  )
}

export default App