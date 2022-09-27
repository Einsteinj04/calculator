import React from "react";
export default function Buttons({btnFunctionalities}) {
  const handleInitialize = () => {
    btnFunctionalities((prev) => {
      return {
        ...prev,
        formula: '',
        output:'0'
      }
    })
  }
  const handleNumbers = (e) => {
    btnFunctionalities((prev) => {
      return {
        ...prev,
        formula: prev.formula + e.target.value,
        // Doesn't allow numbers to start with zero, +,-,/ or * in output section
        output:
          (/(^[0\*\-\/\+])/.test(prev.output)
            ? prev.output.replace(/(^[0\*\-\/\+])/, "")
            : prev.output) + e.target.value,
      };
    })
  }
   const handleDecimal = (e) => {
     btnFunctionalities((prev) => {
      return {
        ...prev,
        // Only allows one decimal, one at a time
        formula: (prev.formula + e.target.value).replace(
          /(\d*\.\d*)(\.)/,
          "$1"
        ),
        output: (prev.formula + e.target.value).replace(/(\d*\.\d*)(\.)/, "$1"),
      };
    })
  }
  const handleOperators = (e) => {
    btnFunctionalities(prev => {
      return {
        ...prev,
        // Clears former calculations when new calculations begins
        formula:
          (/.+=/.test(prev.formula)
            ? prev.formula.replace(/.+=/, "")
            : prev.formula) + e.target.value,
        // Doesn't allow any operator together with a number
        output: (prev.formula + e.target.value)
          .split("")
          .slice(-1)
          .join(),
      };
    })
  }
  const handleEquals = (e) => {
    btnFunctionalities((prev) => {
      // If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign)
      let match = prev.formula.replace(/(\d*)([\+\-\/\*]+)([\+\/\*])(\d*)/g,'$1$3$4');
      return {
        ...prev,
        formula: prev.formula + e.target.value + eval(match),
        output: eval(match),
      };
    })
  }
  
  return (
    <div id="buttons">
      <button
        className="btn btn-default btn-danger"
        id="clear"
        onClick={handleInitialize}
      >
        AC
      </button>
      <button
        className="btn btn-default text-primary"
        id="divide"
        value="/"
        onClick={handleOperators}
      >
        &#247;
      </button>
      <button
        className="btn btn-default text-primary"
        id="multiply"
        value="*"
        onClick={handleOperators}
      >
        &#215;
      </button>
      <button className="btn" id="seven" value="7" onClick={handleNumbers}>
        7
      </button>
      <button className="btn" id="eight" value="8" onClick={handleNumbers}>
        8
      </button>
      <button className="btn" id="nine" value="9" onClick={handleNumbers}>
        9
      </button>
      <button
        className="btn btn-default text-primary"
        id="add"
        value="+"
        onClick={handleOperators}
      >
        +
      </button>
      <button className="btn" id="four" value="4" onClick={handleNumbers}>
        4
      </button>
      <button className="btn" id="five" value="5" onClick={handleNumbers}>
        5
      </button>
      <button className="btn" id="six" value="6" onClick={handleNumbers}>
        6
      </button>
      <button
        className="btn btn-default text-primary"
        id="subtract"
        value="-"
        onClick={handleOperators}
      >
        -
      </button>
      <button className="btn" id="one" value="1" onClick={handleNumbers}>
        1
      </button>
      <button className="btn" id="two" value="2" onClick={handleNumbers}>
        2
      </button>
      <button className="btn" id="three" value="3" onClick={handleNumbers}>
        3
      </button>
      <button
        id="equals"
        className="btn default btn-primary"
        value="="
        onClick={handleEquals}
      >
        =
      </button>
      <button id="zero" value="0" onClick={handleNumbers}>
        0
      </button>
      <button className="btn" id="decimal" value="." onClick={handleDecimal}>
        .
      </button>
    </div>
  );
}
