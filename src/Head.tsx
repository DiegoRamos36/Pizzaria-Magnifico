import React from "react";
interface HeadProps {
  title: string;
  description: string;
}

const Head: React.FC<HeadProps> = (props) => {
  React.useEffect(() => {
    document.title = props.title;
  }, [props]);
  return <></>;
};

export default Head;
