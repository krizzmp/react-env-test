import { Env, EnvironmentHelper } from "@morningtrain/react-environment";

if(window.Environment == null){
  window.Environment = new EnvironmentHelper(window.env)
}


window.Environment.observe("foo", () => {
  console.log("foo 2 changed");
});
