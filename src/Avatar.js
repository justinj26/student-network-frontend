import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

export default function Avatar() {
  return (
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" roundedCircle />
    </Col>
  );
}
