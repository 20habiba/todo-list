    const input = document.getElementById("todoList");
    const list = document.getElementById("randoms");

    // دالة تهيئة عنصر (سواء قديم أو جديد)
    function setupTask(li) {
    // تشطيب عند الضغط على النص
    li.addEventListener("click", function (e) {
        // نتأكد إننا مش ضغطنا على زرار الحذف
        if (e.target.tagName.toLowerCase() !== "button") {
        li.classList.toggle("done");
        }
    });

    // إنشاء زرار الحذف
const delBtn = document.createElement("button");
delBtn.innerHTML = '<i class="bi bi-trash"></i>'; // أيقونة سلة
delBtn.classList.add("delete-btn"); // كلاس مخصص عشان نتحكم فيه
delBtn.onclick = function () {
li.remove();
};


    li.appendChild(delBtn);
    }
        // دالة الإضافة
    function clicked() {
    const value = input.value.trim();
    if (value === "") return;

    const li = document.createElement("li");
    li.textContent = value;
    li.classList.add("listBox");

    setupTask(li);
    list.appendChild(li);

    input.value = "";
    }

    // الضغط على Enter يضيف برضه
    input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        clicked();
    }
    });

    // تطبيق setupTask على العناصر القديمة اللي في الصفحة
    document.querySelectorAll("#randoms li").forEach(setupTask);