import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../products.json'
import '../product/product.css'

export const ProductCard = () => {
    return (
        <div>
            <Container>
                <Row>

                    {Product.products.map((ele) =>
                        <Col md={6}>
                            <div class="col-md-4 col-sm-6">
                                <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                    <div class="inner">
                                        <div class="main-img"><img src={ele.images[0]} alt="Category" /></div>
                                        <div class="thumblist"><img src={ele.images[1]} alt="Category" /><img src={ele.images[2]} alt="Category" />
                                        </div>
                                    </div>
                                </a>
                                    <div class="card mb-30 card-body text-center">
                                        <h4 class="card-title">{ele.title}</h4>
                                        <p class="text-muted">Price:- ₹  {ele.price}</p>
                                        <p class="text-muted">Category:- {ele.category}</p>
                                        <p class="text-muted">rating:- {ele.rating}</p>

                                    </div>
                                </div>
                            </div>
                        </Col>



                    )}


                </Row>
            </Container>

        </div>


    )
}
