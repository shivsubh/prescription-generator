import PrescriptionForm from "./components/PrescriptionForm";
import Prescription from "./components/prescription";

function App() {
  const uri = decodeURI(window.location.search.substring(1))
    .replace(/"/g, '\\"')
    .replace(/&/g, '","')
    .replace(/=/g, '":"');
  let formValues = {};
  try {
    formValues = JSON.parse('{"' + uri + '"}');
  } catch {
    // no data in form
  }
  return Object.keys(formValues).length !== 0 ? (
    <Prescription {...formValues} />
  ) : (
    <PrescriptionForm />
  );
}

export default App;
