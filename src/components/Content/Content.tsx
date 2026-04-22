import "./Content.css";

type ContentProps = {
  children: React.ReactNode;
};

const Content = ({ children }: ContentProps) => {
  return <div className="wysiwyg">{children}</div>;
};

export default Content;
