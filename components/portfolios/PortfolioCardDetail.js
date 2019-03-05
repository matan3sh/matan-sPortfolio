import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';

import dynamic from 'next/dynamic'
const VideoPlayer = dynamic(() => import('../VideoPlayer'), {
  ssr: false
})

import { Carousel } from 'react-responsive-carousel';

class PortfolioCardDetail extends React.Component {
  
  render() {
    const { isOpen, toggle, portfolio } = this.props;

    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>{portfolio.title}</ModalHeader>
          <ModalBody>
            <p><b>Type: </b>{portfolio.type}</p>
            <p><b>Programming Language: </b>{portfolio.programmingLanguage}</p>
            <p><b>Database: </b>{portfolio.database}</p>
            <p><b>Description: </b>{portfolio.description}</p>
            <p><b>Date Added: </b>{moment(portfolio.dateAdded).format('MMMM YYYY')}</p>

            <Carousel>
              <div>
                <img src={portfolio.picture1} />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src={portfolio.picture2} />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src={portfolio.picture3} />
                <p className="legend">Legend 3</p>
              </div>
              <div>
                <img src={portfolio.picture4} />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>

            <VideoPlayer src={portfolio.videoURL}/>

          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PortfolioCardDetail;