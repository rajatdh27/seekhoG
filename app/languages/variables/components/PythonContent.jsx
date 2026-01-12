import VariablesLanguageTemplate from "./VariablesLanguageTemplate";
import { variablesData } from "../../configs/variablesConfig";

export default function PythonContent() {
  return <VariablesLanguageTemplate data={variablesData.python} />;
}