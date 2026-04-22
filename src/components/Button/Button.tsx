type ButtonProps = {
  children: React.ReactNode;
  link: string;
  type?: "secondary" | "primary";
};

const Button = ({ children, link, type = "primary" }: ButtonProps) => {
  return (
    <a role="button" href={link} className={`btn ${type}`}>
      {children}
    </a>
  );
};

export default Button;
