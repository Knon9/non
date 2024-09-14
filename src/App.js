// App.js
import './App.css';
import Calculator from './Calculator'; // Import the Calculator component

// คอมโพเนนต์หลัก (App)
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>เครื่องคิดเลขหลายตัว</h1>
        <div className="calculators">
          {/* นำคอมโพเนนต์เครื่องคิดเลขมาใช้ 5 ครั้ง */}
          <Calculator />
        </div>
      </header>
    </div>
  );
}

export default App;