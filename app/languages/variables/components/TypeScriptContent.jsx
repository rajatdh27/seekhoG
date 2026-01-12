import VariablesLanguageTemplate from "./VariablesLanguageTemplate";
import { variablesData } from "../../configs/variablesConfig";

export default function TypeScriptContent() {
  return <VariablesLanguageTemplate data={variablesData.typescript} />;
}
