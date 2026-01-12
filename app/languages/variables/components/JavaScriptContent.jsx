import VariablesLanguageTemplate from "./VariablesLanguageTemplate";
import { variablesData } from "../../configs/variablesConfig";

export default function JavaScriptContent() {
  return <VariablesLanguageTemplate data={variablesData.javascript} />;
}
