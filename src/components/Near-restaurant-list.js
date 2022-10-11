import { Card, Container } from "react-bootstrap";
import { NearRestaurant } from "../Data-Dummy/Near-restaurant";

export const NearRestaurantList = () => {
    return (
        <div style={{ backgroundColor: "#e5e5e5" }}>
            <Container>
                <div className="near-head pt-5">
                    <p className="fw-bold fs-1">Restaurant Near You</p>
                    <hr />
                </div>
                <div className="near-list pb-5 mt-4 d-md-flex flex-row flex-wrap gap-4 justify-content-lg-between justify-content-md-center">
                    {NearRestaurant.map((item) => {
                        return (
                            <Card className="near-item mt-3 mt-md-0 shadow">
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.range}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </Container>
        </div>
    );
};