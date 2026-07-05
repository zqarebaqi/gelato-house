import AcceptanceBanner from "@/components/base/AcceptanceBanner";
import Container from "@/components/base/Container";
import ImageSlider from "@/components/base/imageSlider";

type Props = {};

const HomePage = ({}: Props) => {
  return (
    <>
      <AcceptanceBanner />
      <Container>
        <ImageSlider
          slidesPerView={1}
          slides={[
            {
              id: 1,
              src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/tl20jofa.qoq.jpg",
              alt: "gelato house",
            },
            {
              id: 2,
              src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/xuq1haju.uwj.jpg",
              alt: "gelato house",
            },
            {
              id: 3,
              src: "https://static.delino.com/Image/Subscriber/gelatohouse/Sliders/ibt0ltv1.3p0.jpg",
              alt: "gelato house",
            },
          ]}
        />
      </Container>
    </>
  );
};

export default HomePage;
