import React from "react";
import { Modal, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

class TermsAndConditions extends React.Component {
  state={
    open: false
  }
  show = () => () => this.setState({ open: true })
  render(){
    return(
      <Modal
      trigger={
        <Link to="#" onClick={this.show}>
          terms of condition
        </Link>
      }
      size="tiny"
      closeIcon
    >
      <Header icon="archive" content="Terms And Condtions" />
      <Modal.Content>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos
        </p>
      </Modal.Content>
    </Modal>
    );
  }
}

export default TermsAndConditions;
