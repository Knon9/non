import './App.css';
import Calculator from './Calculator'; 

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>เครื่องคิดเลข</h1>
        <div className="calculators">
          {/* นำคอมโพเนนต์เครื่องคิดเลขมาใช้ 5 ครั้ง */}
          <Calculator />
        </div>
      </header>
    </div>
  );
}

export default App;