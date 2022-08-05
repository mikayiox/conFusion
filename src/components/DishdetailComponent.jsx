import React, { Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

/*
class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }
  
  

  componentDidMount() {
    console.log("Dishdetail Component componentDidMount constructor is invoked");
  }

  componentDidUpdate() {
    console.log("Dishdetail Component componentDidUpdate constructor is invoked");
  }

  renderDish(dish) {
    if (dish != null) {
        return (
        <>
            <div  className="col-12 col-md-5 m-1">
                <Card>
                <CardImg top src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <h5 className="card-title">{dish.name}</h5>
                    <CardText>{dish.description}</CardText>
                </CardBody>
                </Card>
                    
            </div>
            <div  className="col-12 col-md-5 m-1">
                <Card>
                <CardBody>
                   <h4 className="card-title">Comments</h4>
                            {dish.comments.map((coms) => {
                                let dateOne = new Date(coms.date)
                                return (
                                    <div>
                                        <p>{coms.comment}</p>
                                        <p>-- {coms.author}, {dateOne.toString().substring(3, 15)}</p>
                                    </div>
                                );
                            })       
                            }
                </CardBody>
                </Card>
                    
            </div>
        </>
        
      );
    } else {
      return (<div>
        
      </div>);
    }
  }
    
  render() {
      
      console.log("Dishdetail Component render constructor is invoked");

      return (
          <div className="container">

            <div className="row">
                      {this.renderDish(this.props.selectedDish)}
            </div>
          </div>
        );
    }
}

*/


function RenderDish({dish}) {

    if (dish != null) {
    return (
        <div  className="col-12 col-md-5 m-1">
            <Card>
            <CardImg top src={dish.image} alt={dish.name}></CardImg>
            <CardBody>
                <h5 className="card-title">{dish.name}</h5>
                <CardText>{dish.description}</CardText>
            </CardBody>
            </Card>
                
        </div>
    
  );
} else {
  return (<div>
    
  </div>);
}

}

function RenderComments({ comments }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardBody>
          <h4 className="card-title">Comments</h4>
          {comments.map((coms) => {
            let dateOne = new Date(coms.date)
            return (
              <div>
                <p>{coms.comment}</p>
                <p>-- {coms.author}, {dateOne.toString().substring(3, 15)}</p>
              </div>
            );
          })
          }
        </CardBody>
      </Card>
    </div>);
}


const  DishDetail = (props) => {

  if (props.selectedDish != null) {
    return (
      <div className="container">

        <div className="row">
          <RenderDish dish={props.selectedDish} />
        
          <RenderComments comments={props.selectedDish.comments} />

        </div>
      </div>
    );
  } else {
    return (<div></div>);
  }
}

export default DishDetail;