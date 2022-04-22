import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  useEnvValue,
  EnvironmentHelper,
  Environment,
} from "@morningtrain/react-environment";
if (window.Environment == null) {
  window.Environment = new EnvironmentHelper(window.env);
}
function App() {
  const [foo, setFoo] = useEnvValue("foo", 4);
  return (
    <div
      onClick={() => {
        setFoo(foo + 1);
      }}
    >
      foo:{foo}
    </div>
  );
}
function Root() {
  return (
    <Environment env={window.Environment}>
      <App />
    </Environment>
  );
}
ReactDOM.render(<Root />, document.getElementById("app"));
