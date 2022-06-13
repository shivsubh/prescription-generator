import PrescriptionForm from "./components/PrescriptionForm";
import Prescription from "./components/prescription";

function App() {
  const parseParams = () => {
    let formValues = {};
    const uri = decodeURI(window.location.search.substring(1))
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"');
    try {
      formValues = JSON.parse('{"' + uri + '"}');
    } catch {
      // no data in form
    }
    Object.keys(formValues).forEach((key) => {
      formValues[key] = formValues[key].replace(/['"]+/g, "");
    });
    return formValues;
  };
  const formValues = parseParams();

  return Object.keys(formValues).length !== 0 ? (
    <Prescription {...formValues} />
  ) : (
    <PrescriptionForm />
  );
}

export default App;
