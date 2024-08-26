import { useParams } from "react-router-dom";
import { data, dataProps } from "../../../data/ServicesData";

const ServicesDetail = () => {
  const { id } = useParams();

  if (!id) return;

  const detail = data.find((item: dataProps) => item.id === Number(id));

  if (!detail) return <h1>Service not found!</h1>;

  //   const { title, cover } = detail;
  return <></>;
};

export default ServicesDetail;
