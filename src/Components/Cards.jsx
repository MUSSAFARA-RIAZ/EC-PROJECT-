import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cards() {
  return (
    
   <div>
    <Card style={{ width: '18rem',backgroundColor:' #f7d147', }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg"
       />
      <Card.Body>
        <Card.Title style={{color:'#8e1b90'}}>Front end Developer</Card.Title>
        <Card.Text style={{ color:'#4176fa'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio minus quaerat tempore. Quo voluptatem provident omnis quam natus excepturi quibusdam, ducimus magni 

        </Card.Text>
        <Button variant="primary">View</Button>

      </Card.Body>
    </Card>
    <button style={{width:280,backgroundColor:'#4176fa',color:'white',borderRadius:10, borderWidth:3 , borderStyle:"solid" , borderColor:"green",marginTop:10  }}>Browse All</button>
    
    </div>
    
  
     
  );
}

export default Cards;