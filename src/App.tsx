import React, { useState } from "react";

interface Props {
  name: string;
}

const SayHello: React.FC<Props> = ({ name }) => {
  const [state] = useState<{ name: string | null }>({ name: "" }); //hooks use generics by default, but you can override them like this

  return <p>hello {name}</p>;
};

interface FormProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

const Form = <T extends {}>({ values, children }: FormProps<T>) => {
  return children(values);
};

const App: React.FC = () => {
  return (
    <div>
      <Form values={{ firstName: "bob" }}>
        {values => <div>{values.firstName}</div>}
      </Form>
    </div>
  );
};

export default App;
