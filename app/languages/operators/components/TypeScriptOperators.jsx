import OperatorsLanguageTemplate from "./OperatorsLanguageTemplate";
import { operatorsData } from "../../configs/operatorsConfig";

export default function TypeScriptOperators() {
  return <OperatorsLanguageTemplate data={operatorsData.typescript} />;
}
