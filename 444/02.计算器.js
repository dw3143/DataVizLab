var number1 = "";
var number2 = "";
var operational = "";
var label = document.getElementById("screen");
var btns = document.getElementsByTagName("a");
for (var i = 0; i < btns.length; i++) {
    var btn = btn[i];
    btn.onclick = function () {
        var txt = this.innerHTML;
        switch (txt) {
            case "AC":
                number1 = "";
                number2 = "";
                operational = "";
                label.innerHTML = "";
                break;
            case "+":
                operational = "+";
                break;
            case "-":
                operational = "-";
                break;
            case "x":
                operational = "x";
                break;
            case "/":
                operational = "/";
                break;
            case "=":
                var num1 = parseFloat(number1);
                var num2 = parseFloat(number2);
                switch (operational) {
                    case "+":
                        label.innerHTML = num1 + num2;
                        break;
                    case "-":
                        label.innerHTML = num1 - num2;
                        break;
                    case "x":
                        label.innerHTML = num1 * num2;
                        break;
                    case "/":
                        label.innerHTML = num1 / num2;
                        break;
                }
                break;

        }
    }
}