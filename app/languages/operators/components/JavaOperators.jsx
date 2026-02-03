import OperatorsLanguageTemplate from "./OperatorsLanguageTemplate";
import { operatorsData } from "../../configs/operatorsConfig";

export default function JavaOperators() {
  return <OperatorsLanguageTemplate data={operatorsData.java} />;
}
