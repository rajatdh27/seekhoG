import OperatorsLanguageTemplate from "./OperatorsLanguageTemplate";
import { operatorsData } from "../../configs/operatorsConfig";

export default function CppOperators() {
  return <OperatorsLanguageTemplate data={operatorsData.cpp} />;
}
