// نجيب شاشة العرض
const display = document.getElementById("display");

// نجيب كل الأزرار
const buttons = document.querySelectorAll("button");

// نضيف لكل زر حدث الضغط عليه
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    // لو المستخدم ضغط على "C" → نمسح كل حاجة
    if (buttonText === "C") {
      display.value = "";
    }

    // لو المستخدم ضغط على "DEL" → نحذف آخر رقم أو رمز
    else if (buttonText === "DEL") {
      display.value = display.value.slice(0, -1);
    }

    // لو المستخدم ضغط على "=" → نطلع النتيجة
    else if (buttonText === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }

    // غير كده → نضيف الرقم أو العملية اللي ضغط عليها
    else {
      display.value += buttonText;
    }
  });
});