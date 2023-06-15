import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cards() {
  const roadmap = (event) => {
    event.stopPropagation();
    window.open('http://localhost:3000/roadmap',"_blank")
  }
  return (
   <div>
    <Card style={{ width: '18rem',backgroundColor:' #f7d147', }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg"
       />
      <Card.Body>
        <Card.Title style={{color:'#8e1b90'}}>Front end Developer</Card.Title>
        <Card.Text style={{ color:'#4176fa'}}>
        Whether you're passionate about design, user experience, or creating intuitive interfaces, frontend development is an exciting field that allows you to shape the way users interact with the web.

        </Card.Text>
        <Button variant="primary" onClick={roadmap}>View</Button>

      </Card.Body>
    </Card>
    <button style={{width:280,backgroundColor:'#4176fa',color:'white',borderRadius:10, borderWidth:3 , borderStyle:"solid" , borderColor:"green",marginTop:10  }}onClick={roadmap}>Browse All</button>
    
    </div>
    
  
     
  );
}

export default Cards;