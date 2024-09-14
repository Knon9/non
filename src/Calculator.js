// Calculator.js
import { useState } from 'react';
import './Calculator.css'; // Import CSS for Calculator component if needed

// คอมโพเนนต์เครื่องคิดเลข
const Calculator = () => {
    const [input, setInput] = useState(''); // state สำหรับเก็บค่าที่ใส่เข้ามา

    // ฟังก์ชันจัดการการกดปุ่มตัวเลขและเครื่องหมาย
    const handleClick = (value) => {
        setInput(input + value);
    };

    // ฟังก์ชันคำนวณผลลัพธ์
    const handleCalculate = () => {
        try {
            setInput(eval(input).toString()); // eval ใช้ในการคำนวณ แต่ควรใช้อย่างระมัดระวัง
        } catch (error) {
            setInput('Error'); // แสดง Error หากมีการคำนวณผิดพลาด
        }
    };

    // ฟังก์ชันล้างค่า
    const handleClear = () => {
        setInput('');
    };

    return (
        <div className="calculator">
            <input type="text" value={input} readOnly />
            <div className="buttons">
                <button onClick={() => handleClick('(')}>(</button>
                <button onClick={() => handleClick(')')}>)</button>
                <button onClick={() => handleClick('%')}>%</button>
                <button onClick={handleClear}>AC</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('/')}>÷</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('*')}>×</button>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('-')}>−</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button onClick={handleCalculate}>=</button>
                <button onClick={() => handleClick('+')}>+</button>
            </div>
        </div>
    );
};

export default Calculator;