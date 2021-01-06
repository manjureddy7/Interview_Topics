<Container>
   <h1>Hello im H1</h1>
   <h2>Hello im H2</h2>
 </Container>
 
 export const Container = (props) => {
const {children} = props; 
  const modifiedChilds = React.Children.map(children, (child,index) => {
    console.log("Each  child is", child,index);
    return (
      <div style={{border: `${(index + 1) * 10}px solid red`}}>
        {React.cloneElement(child)}
      </div>
    )
  })
  return <>
{modifiedChilds}
  </>
}
