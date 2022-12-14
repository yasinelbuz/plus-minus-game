import Form from "./Form";
import Info from "./Info";

const Left = () => {
  return (
    <div>
      <div className="w-[250px] flex flex-col">
        <Form />
      </div>
      <Info />
    </div>
  );
};

export default Left;
