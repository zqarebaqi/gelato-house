type LogoProps = {
  size?: "small" | "medium" | "large";
};

const sizes = {
  small: { width: 60, height: 60 },
  medium: { width: 120, height: 120 },
  large: { width: 180, height: 180 },
};

const Logo = ({ size = "small" }: LogoProps) => {
  return (
    <img
      src="/assets/images/logo.png"
      width={sizes[size].width}
      height={sizes[size].height}
      alt="Logo"
    ></img>
  );
};

export default Logo;
