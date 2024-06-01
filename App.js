import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
    <a class="navbar-brand" href="https://www.junkybooks.com/index.php">BookStore</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="https://www.junkybooks.com/index.php">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="hw" href="https://www.junkybooks.com/books">Books</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="hw" href="https://www.junkybooks.com/categories">Categories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="hw" href="https://www.junkybooks.com/author">Author</a>
            </li>
        </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://prh.imgix.net/articles/percy-jackson-universe.png" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://cdn.penguin.co.in/wp-content/uploads/2020/12/Blog-Header-01-1.png" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://cdn.penguin.co.in/wp-content/uploads/2021/05/Ruskin-Bond-Headers-02.png" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <CardGroup>
    <Card>
      <Card.Img variant="top" src="https://5.imimg.com/data5/SELLER/Default/2020/8/PE/PX/MO/54836353/harry-potter-books-collection-j-k-rowling-bloomsbury-publishing.jpg" />
      <Card.Body>
      <h5 class="card-title">Harry Potter</h5>
      <p class="card-text">J K ROWLING</p>
      <p class="card-text">$75.00</p>
      <p class="card-text">Throughout the series, Harry is described as having his father's perpetually untidy black hair, his mother's bright green eyes, and a lightning bolt-shaped scar on his forehead. 
      He is further described as "small and skinny for his age" with "a thin face" and "knobbly knees", and he wears Windsor glasses.</p>
      <a href="https://www.myntra.com/checkout/cart" class="btn btn-primary">Add to Cart</a>
      <a href="https://www.myntra.com/checkout/cart" class="btn btn-secondary">View Details</a>
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91AZX0uX6-L._AC_UF1000,1000_QL80_.jpg" />
      <Card.Body>
      <h5 class="card-title">Geronimo Stilton</h5>
      <p class="card-text">Thea Stilton</p>
      <p class="card-text">$120.00</p>
      <p class="card-text">Geronimo Stilton is a mouse journalist and the publisher and editor of The Rodent's Gazette, the most famous newspaper on New Mouse Island. He is also the head of the Geronimo Stilton Media Group. 
      Geronimo is known for his love of knowledge, strong ethics, and morals. He enjoys collecting antique cheese rinds, playing golf, and telling stories to his nephew Benjamin in his spare time.</p>
      <a href="https://www.myntra.com/checkout/cart" class="btn btn-primary">Add to Cart</a>
      <a href="https://www.myntra.com/checkout/cart" class="btn btn-secondary">View Details</a>
      </Card.Body>
    </Card>
    </CardGroup>
      <>
      <Button variant="primary" onClick={handleShow}>
        Launch modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Buy a  book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Books can provide you with a never-ending wealth of knowledge on any given topic. They can help expand your understanding of the world by teaching you about everything from science and history to politics and philosophy.
        By reading books, you can become a more informed individual who is better equipped to engage in thoughtful discussion and debate.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Buy Now</Button>
        </Modal.Footer>
      </Modal>
    </>
    <footer class="bg-light text-center text-lg-start mt-5">
        <div class="container p-4">
            <div class="row">
                <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 class="text-uppercase">About Us</h5>
                    <a href="https://kdp.amazon.com/en_US/help/topic/G202105800" class="text-dark">Book Details</a>
                    <p> Information about the bookstore.</p>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="https://mailchimp.com/resources/how-to-write-a-privacy-policy/#:~:text=What%20is%20a%20privacy%20policy,of%20your%20data%20collection%20processes." class="text-dark">Privacy Policy</a></li>
                        <li><a href="https://termly.io/resources/articles/privacy-policy-vs-terms-and-conditions/" class="text-dark">Terms of Service</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Follow Us</h5>
                    <a href="https://www.facebook.com/" class="text-dark">Facebook</a>|
                    <a href="https://www.twitter.com/" class="text-dark">Twitter</a>|
                    <a href="https://www.instagram.com/" class="text-dark">Instagram</a>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
