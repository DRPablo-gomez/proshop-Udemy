import { Row, Col } from "react-bootstrap";
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";
import Product from "../components/Product.jsx";
import { useGetProductsQuery } from "../slices/productsApiSlice.js";

const HomeScreen = () => {
  const { data: product, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {product.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
