import OperatorsLanguageTemplate from "./OperatorsLanguageTemplate";
import { operatorsData } from "../../configs/operatorsConfig";

export default function RustOperators() {
  return <OperatorsLanguageTemplate data={operatorsData.rust} />;
}
