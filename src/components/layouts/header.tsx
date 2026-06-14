import { Button } from "../base/Button";

export const Header: React.FC = () => {
  return (
    <header>
      <Button
        variant="contained"
        onClick={() => {
          console.log("clicked");
        }}
        size="medium"
      >
        کلیک کن
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          console.log("clicked");
        }}
        size="large"
      >
        کلیک کن
      </Button>
      <Button
        variant="text"
        onClick={() => {
          console.log("clicked");
        }}
        size="small"
      >
        کلیک کن
      </Button>
    </header>
  );
};
