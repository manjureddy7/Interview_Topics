<Container>
   <h1>Hello im H1</h1>
   <h2>Hello im H2</h2>
 </Container>
 
export const Container = (props) => {
const {children} = props; 
  const modifiedChilds = React.Children.map(children, (child,index) => {
    console.log("Each  child is", child,index);
    const isLast = index === children.length - 1
    return (
      <div style={{border: `${(index + 1) * 10}px solid red`}}>
        
        
        {isLast ? React.cloneElement(child,{style:{"color":"blue"}}) : <span>{child} </span>}
      </div>
    )
  })
  return <>
{modifiedChilds}
  </>
}
