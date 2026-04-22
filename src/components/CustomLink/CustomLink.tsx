type LinkProps = {
  link: string;
  label: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

const CustomLink = ({ link, label, target }: LinkProps) => {
  return (
    <a className="contrast" href={link} target={target}>
      {label}
    </a>
  );
};

export default CustomLink;
