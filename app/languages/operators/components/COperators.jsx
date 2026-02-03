import OperatorsLanguageTemplate from "./OperatorsLanguageTemplate";
import { operatorsData } from "../../configs/operatorsConfig";

export default function COperators() {
  return <OperatorsLanguageTemplate data={operatorsData.c} />;
}
