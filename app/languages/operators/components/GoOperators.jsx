import OperatorsLanguageTemplate from "./OperatorsLanguageTemplate";
import { operatorsData } from "../../configs/operatorsConfig";

export default function GoOperators() {
  return <OperatorsLanguageTemplate data={operatorsData.go} />;
}
