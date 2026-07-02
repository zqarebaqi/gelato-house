import { Button } from "../base/Button";
import Container from "../base/Container";
import Logo from "../base/Logo";

export const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between">
          <div className="py-2">
            <Logo />
          </div>
          <div className=" flex">
            <div className="hidden md:flex md:gap-3 md:ml-8">
              <Button
                variant="text"
                color="primary"
                onClick={() => {
                  console.log("clicked");
                }}
              >
                سفارش اینترنتی
              </Button>
              <Button
                variant="text"
                color="primary"
                onClick={() => {
                  console.log("clicked");
                }}
              >
                قوانین سایت
              </Button>
            </div>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                console.log("clicked");
              }}
            >
              ورود
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
