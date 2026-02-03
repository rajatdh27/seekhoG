import OperatorsLanguageTemplate from "./OperatorsLanguageTemplate";
import { operatorsData } from "../../configs/operatorsConfig";

export default function JavaScriptOperators() {
  return <OperatorsLanguageTemplate data={operatorsData.javascript} />;
}
