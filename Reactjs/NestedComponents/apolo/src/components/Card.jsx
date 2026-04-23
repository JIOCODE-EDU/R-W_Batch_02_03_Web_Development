// import Button from "./Button"

// const Card = (props) => {

//   console.log(props.data.image);
  

//   return (
//     <>
//       <div className="card">
//         <div className="card-img">
//           <img src={props.data.image} alt="" className=""/>
//         </div>
//         <div className="card-text">
//         <h1>{props.data.title}</h1>
//         <p>{props.data.description}</p>
//         <Button value={props.data.value}/>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Card

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;