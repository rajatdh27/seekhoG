import OperatorsLanguageTemplate from "./OperatorsLanguageTemplate";
import { operatorsData } from "../../configs/operatorsConfig";

export default function KotlinOperators() {
  return <OperatorsLanguageTemplate data={operatorsData.kotlin} />;
}
