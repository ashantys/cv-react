import './App.css';
import Nav from './components/Nav/Nav';
import Card from './components/Card/Card';
import Form from './components/Form/Form';

function App() {
  return (
        <div className="body-background">
          <div className="container d-flex justify-content-center">
                <div className="col-3 mt-5 me-5 p-2">
                  <Nav></Nav>
                </div>
                <div className="col-9 mt-5 p-2">
                  <Card></Card>
                  <Form></Form>
                </div>
          </div>
        </div>
  );
}

export default App;
