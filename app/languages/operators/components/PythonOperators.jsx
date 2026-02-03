import OperatorsLanguageTemplate from "./OperatorsLanguageTemplate";
import { operatorsData } from "../../configs/operatorsConfig";

export default function PythonOperators() {
  return <OperatorsLanguageTemplate data={operatorsData.python} />;
}
