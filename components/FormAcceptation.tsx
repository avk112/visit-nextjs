import { FC } from "react";

interface IFormAcceptation {
  message: string;
}

const FormAcceptation: FC<IFormAcceptation> = ({ message }) => {
  return (
    <div className="form-order-acceptation">
      <h3 className="form-order-acceptation__title">{message}</h3>
    </div>
  );
};

export default FormAcceptation;
