let currentExercise = null;
let isLocked = false;

// Chạy ngay khi trang web vừa tải xong
window.onload = function () {
  renderMenu();
  // Tự động load bài đầu tiên
  if (allExercises.length > 0) {
    loadExercise(allExercises[0].id);
  }
};

// VẼ MENU BÊN TRÁI
function renderMenu() {
  const menuList = document.getElementById("menu-list");
  menuList.innerHTML = ""; // Xóa trắng menu

  allExercises.forEach((ex) => {
    const li = document.createElement("li");
    li.innerHTML = `<button id="nav-${ex.id}" onclick="loadExercise('${ex.id}')">${ex.menuTitle}</button>`;
    menuList.appendChild(li);
  });
}

// LOAD BÀI TẬP DỰA VÀO ID
function loadExercise(id) {
  document.querySelector(".sidebar").classList.remove("open");
  // 1. Mở khóa bài làm (để chuyển bài mới không bị khóa cứng)
  isLocked = false;

  // 2. Cập nhật giao diện thanh Menu bên trái
  document
    .querySelectorAll(".nav-links button")
    .forEach((btn) => btn.classList.remove("active"));
  document.getElementById(`nav-${id}`).classList.add("active");

  // 3. Tải dữ liệu bài tập mới từ data.js
  currentExercise = allExercises.find((ex) => ex.id === id);

  // 4. Cuộn màn hình lên đầu trang
  window.scrollTo(0, 0);

  // 5. Gọi hàm "Vẽ Giao Diện" tương ứng với type của bài tập
  if (currentExercise.type === "fill-blank") {
    renderFillBlankUI(currentExercise);
  } else if (currentExercise.type === "multiple-choice") {
    renderMultipleChoiceUI(currentExercise);
  } else if (currentExercise.type === "drag-drop") {
    renderDragDropUI(currentExercise);
  } else if (currentExercise.type === "rewrite") {
    renderRewriteUI(currentExercise);
  } else if (currentExercise.type === "fill-verb") {
    renderFillVerbUI(currentExercise);
  } else if (currentExercise.type === "circle") {
    renderCircleUI(currentExercise);
  } else if (currentExercise.type === "mark-words") {
    renderMarkWordsUI(currentExercise);
  } else if (currentExercise.type === "categorize") {
    renderCategorizeUI(currentExercise);
  }
}

// ================= CÁC HÀM VẼ GIAO DIỆN (RENDERERS) =================

function getCommonHeader(title, instruction) {
  return `<h2>${title}</h2><p class="instructions">${instruction}</p>`;
}

function getCommonButtons() {
  return `
        <div class="buttons">
            <button class="action-btn btn-submit" onclick="checkAnswers()">Submit</button>
            <button class="action-btn btn-show" id="btn-show" onclick="showAnswers()">Show Answers</button>
            <button class="action-btn btn-reset" onclick="loadExercise(currentExercise.id)">Reset</button>
        </div>
        <div id="result-text" class="result-text"></div>
    `;
}

// 1. Vẽ giao diện Điền Từ
function renderFillBlankUI(data) {
  let html = getCommonHeader(data.title, data.instruction);

  data.questions.forEach((q, index) => {
    // Biến chữ nằm trong ngoặc vuông [...] thành ô input
    let parsedText = q.replace(/\[(.*?)\]/g, (match, word) => {
      return `<span class="input-wrapper">
                        <input type="text" class="fill-input" data-missing="${word}" autocomplete="off">
                        <span class="floating-answer" id="fa-${index}">${word}</span>
                    </span>`;
    });
    html += `<div class="sentence">${parsedText}</div>`;
  });

  html += getCommonButtons();
  document.getElementById("app-content").innerHTML = html;
}

// 2. Vẽ giao diện Trắc nghiệm
function renderMultipleChoiceUI(data) {
  let html = getCommonHeader(data.title, data.instruction);

  data.questions.forEach((q, index) => {
    let optionsHtml = "";
    for (const [key, value] of Object.entries(q.options)) {
      let isCorrect = key === q.correct ? "true" : "false";
      optionsHtml += `
                <label class="option-label" id="lbl-${index}-${key}">
                    <input type="radio" name="q${index}" value="${key}" data-correct="${isCorrect}"> 
                    <span>${key}. ${value}</span>
                </label>`;
    }

    html += `
            <div class="question-block">
                <div class="question-text">${q.text}</div>
                <div class="options">${optionsHtml}</div>
            </div>`;
  });

  html += getCommonButtons();
  document.getElementById("app-content").innerHTML = html;
}

function renderRewriteUI(data) {
  let html = getCommonHeader(data.title, data.instruction);

  data.questions.forEach((q, index) => {
    html += `
            <div class="rewrite-block">
                <div class="sentence-prompt">${q.prompt}</div>
                <div class="rewrite-input-wrapper">
                    <span class="arrow">=></span>
                    <input type="text" class="rewrite-input" id="rw-${index}" data-correct="${q.correct}" autocomplete="off">
                </div>
                <div class="rewrite-hint" id="fa-rw-${index}"><strong>Đáp án đúng:</strong> ${q.correct}</div>
            </div>`;
  });

  html += getCommonButtons();
  document.getElementById("app-content").innerHTML = html;
}

// 5. Vẽ giao diện Chia Động Từ
function renderFillVerbUI(data) {
  let html = getCommonHeader(data.title, data.instruction);
  let globalInputIndex = 0; // Đếm tổng số ô trống trong toàn bài

  data.questions.forEach((q) => {
    let parsedText = q.replace(/\[(.*?)\]/g, (match, word) => {
      let currentIdx = globalInputIndex++;
      return `<span class="input-wrapper">
                        <input type="text" class="fill-verb-input" data-missing="${word}" autocomplete="off">
                        <span class="floating-answer" id="fa-verb-${currentIdx}">${word}</span>
                    </span>`;
    });
    html += `<div class="sentence">${parsedText}</div>`;
  });

  html += getCommonButtons();
  document.getElementById("app-content").innerHTML = html;
}

// 6. Vẽ giao diện Khoanh Tròn (Click to Circle)
function renderCircleUI(data) {
  let html = getCommonHeader(data.title, data.instruction);

  data.questions.forEach((q, qIndex) => {
    let parsedText = q.text.replace(/\[(.*?)\]/g, (match, optionsStr) => {
      let options = optionsStr.split("/").map((o) => o.trim());
      let optionsHtml = options
        .map(
          (opt) =>
            `<span class="circle-option" data-val="${opt}" onclick="selectCircle(this, ${qIndex})">${opt}</span>`,
        )
        .join('<span class="slash">/</span>');

      return `<span class="circle-group" id="cg-${qIndex}" data-correct="${q.correct}">${optionsHtml}</span>`;
    });
    html += `<div class="sentence">${parsedText}</div>`;
  });

  html += getCommonButtons();
  document.getElementById("app-content").innerHTML = html;
}

// 7. Vẽ giao diện Đánh dấu từ (Gạch chân / Tô màu)
function renderMarkWordsUI(data) {
  let html = getCommonHeader(data.title, data.instruction);
  html += `<p style="text-align:center; color:#7f8c8d; font-size:14px; margin-bottom:20px;">💡 <i>Hướng dẫn: Click lần 1 để <u>Gạch Chân</u>. Click lần 2 để <b>Tô Đậm</b>. Click lần 3 để Hủy Bỏ</i></p>`;

  data.questions.forEach((q) => {
    let words = q.split(" ");
    let sentenceHtml = words
      .map((wordObj) => {
        // Tách từ ra khỏi cú pháp [word|type] nếu có
        let match = wordObj.match(/^(.*?)\[(.*?)\|(ul|hl)\](.*)$/);
        if (match) {
          return `${match[1]}<span class="clickable-word" data-correct="${match[3]}" onclick="toggleMark(this)">${match[2]}</span>${match[4]}`;
        } else {
          return `<span class="clickable-word" data-correct="none" onclick="toggleMark(this)">${wordObj}</span>`;
        }
      })
      .join(" ");

    html += `<div class="sentence" style="line-height: 2.2;">${sentenceHtml}</div>`;
  });

  html += getCommonButtons();
  document.getElementById("app-content").innerHTML = html;
}

// 8. Vẽ giao diện Phân loại (Categorize)
function renderCategorizeUI(data) {
  let html = getCommonHeader(data.title, data.instruction);

  // Khu vực chứa từ vựng
  html += `<div class="word-bank" id="word-bank" ondrop="drop(event)" ondragover="allowDrop(event)">`;
  data.words.forEach((word, idx) => {
    html += `<span class="draggable-word" draggable="true" id="cat-word-${idx}" ondragstart="drag(event)">${word}</span>`;
  });
  html += `</div>`;

  // Khu vực các cột
  html += `<div class="category-columns">`;
  data.categories.forEach((cat, idx) => {
    html += `
            <div class="category-wrapper">
                <div class="category-title">${cat.name}</div>
                <div class="category-box multi-drop-zone" id="cat-box-${idx}" data-category="${cat.name}" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="dragLeave(event)"></div>
            </div>`;
  });
  html += `</div>`;

  html += getCommonButtons();
  document.getElementById("app-content").innerHTML = html;
}

// Vòng lặp click: Normal -> Underline -> Highlight -> Normal
function toggleMark(element) {
  if (isLocked) return;

  if (element.classList.contains("marked-ul")) {
    element.classList.remove("marked-ul");
    element.classList.add("marked-hl");
    element.setAttribute("data-user", "hl");
  } else if (element.classList.contains("marked-hl")) {
    element.classList.remove("marked-hl");
    element.setAttribute("data-user", "none");
  } else {
    element.classList.add("marked-ul");
    element.setAttribute("data-user", "ul");
  }
}

// Hàm xử lý khi học sinh click chọn từ
function selectCircle(element, qIndex) {
  if (isLocked) return; // Nếu đã nộp bài thì không cho đổi đáp án

  // Bỏ chọn các từ khác trong cùng 1 cụm
  let group = document.getElementById(`cg-${qIndex}`);
  group
    .querySelectorAll(".circle-option")
    .forEach((el) => el.classList.remove("selected"));

  // Đánh dấu từ vừa click
  element.classList.add("selected");
}
// ================= CÁC HÀM XỬ LÝ LOGIC (CHẤM ĐIỂM) =================

function checkAnswers() {
  // SỬA LỖI Ở ĐÂY: Kiểm tra xem bài tập dùng 'questions' hay 'words' để không bị treo nút Submit
  let checkArray = currentExercise.questions || currentExercise.words || [];
  let total = checkArray.length;
  let score = 0;

  // KHÓA BÀI LÀM: Không cho phép chỉnh sửa nữa
  isLocked = true;

  if (currentExercise.type === "fill-blank") {
    const inputs = document.querySelectorAll(".fill-input");
    inputs.forEach((input, index) => {
      const userAnswer = input.value.trim().toLowerCase();
      const correctAnswer = input.getAttribute("data-missing").toLowerCase();

      input.disabled = true;

      if (userAnswer === correctAnswer) {
        input.style.color = "#27ae60";
        input.style.borderColor = "#27ae60";
      } else {
        input.style.color = "#e74c3c";
        input.style.borderColor = "#e74c3c";
      }
      document.getElementById(`fa-${index}`).style.display = "none";
    });
  } else if (currentExercise.type === "multiple-choice") {
    document
      .querySelectorAll(".option-label")
      .forEach((lbl) => lbl.classList.remove("correct", "wrong", "show-hint"));

    currentExercise.questions.forEach((q, index) => {
      const radios = document.getElementsByName(`q${index}`);
      for (let radio of radios) {
        radio.disabled = true;

        if (radio.checked) {
          const label = document.getElementById(`lbl-${index}-${radio.value}`);
          if (radio.getAttribute("data-correct") === "true") {
            label.classList.add("correct");
          } else {
            label.classList.add("wrong");
          }
        }
      }
    });
  } else if (currentExercise.type === "drag-drop") {
    const dropZones = document.querySelectorAll(".drop-zone");
    dropZones.forEach((zone, index) => {
      const correctAnswer = zone.getAttribute("data-missing").toLowerCase();
      let userAnswer = zone.hasChildNodes()
        ? zone.firstChild.innerText.trim().toLowerCase()
        : "";

      if (userAnswer === correctAnswer) {
        zone.style.borderColor = "#27ae60";
        if (zone.firstChild) zone.firstChild.style.backgroundColor = "#27ae60";
      } else {
        zone.style.borderColor = "#e74c3c";
        if (zone.firstChild) zone.firstChild.style.backgroundColor = "#e74c3c";
      }
      document.getElementById(`fa-dd-${index}`).style.display = "none";
    });

    document.querySelectorAll(".draggable-word").forEach((word) => {
      word.setAttribute("draggable", "false");
      word.style.cursor = "default";
    });
  } else if (currentExercise.type === "rewrite") {
    const inputs = document.querySelectorAll(".rewrite-input");
    inputs.forEach((input, index) => {
      input.disabled = true; // Khóa ô nhập
      let userAnswer = input.value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, " ");
      let correctAnswer = input
        .getAttribute("data-correct")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, " ");

      if (userAnswer === correctAnswer && userAnswer !== "") {
        input.classList.add("correct-input");
      } else {
        input.classList.add("wrong-input");
      }
      document.getElementById(`fa-rw-${index}`).style.display = "none";
    });
  } else if (currentExercise.type === "fill-verb") {
    const inputs = document.querySelectorAll(".fill-verb-input");
    inputs.forEach((input, index) => {
      input.disabled = true;
      const userAnswer = input.value.trim().toLowerCase();
      const correctAnswer = input.getAttribute("data-missing").toLowerCase();

      if (userAnswer === correctAnswer) {
        input.style.color = "#27ae60";
        input.style.borderColor = "#27ae60";
      } else {
        input.style.color = "#e74c3c";
        input.style.borderColor = "#e74c3c";
      }
      document.getElementById(`fa-verb-${index}`).style.display = "none";
    });
  } else if (currentExercise.type === "circle") {
    const groups = document.querySelectorAll(".circle-group");
    groups.forEach((group) => {
      const correctAnswer = group.getAttribute("data-correct").toLowerCase();
      const selected = group.querySelector(".circle-option.selected");
      let userAnswer = selected
        ? selected.getAttribute("data-val").toLowerCase()
        : "";

      if (userAnswer === correctAnswer) {
        selected.classList.add("correct-circle");
      } else {
        if (selected) selected.classList.add("wrong-circle");
      }
    });
  } else if (currentExercise.type === "mark-words") {
    const words = document.querySelectorAll(".clickable-word");
    words.forEach((word) => {
      word.style.pointerEvents = "none";

      let correct = word.getAttribute("data-correct");
      let user = word.getAttribute("data-user") || "none";

      if (user !== "none") {
        if (user === correct) {
          word.classList.add("correct-mark");
        } else {
          word.classList.add("wrong-mark");
        }
      }
    });
  } else if (currentExercise.type === "categorize") {
    const words = document.querySelectorAll(".draggable-word");
    words.forEach((word) => {
      word.setAttribute("draggable", "false");
      word.style.cursor = "default";

      let wordText = word.innerText.trim();
      let parentBox = word.parentElement;

      if (parentBox.classList.contains("multi-drop-zone")) {
        let catName = parentBox.getAttribute("data-category");
        let correctCat = currentExercise.categories.find((c) =>
          c.correctWords.includes(wordText),
        );

        if (correctCat && correctCat.name === catName) {
          word.style.backgroundColor = "#27ae60";
        } else {
          word.style.backgroundColor = "#e74c3c";
        }
      } else {
        word.style.backgroundColor = "#e74c3c";
      }
    });
  }

  // Bỏ hiển thị điểm số
  const resDiv = document.getElementById("result-text");
  if (resDiv) {
    resDiv.innerHTML = "";
  }

  // Ẩn nút Submit, hiện nút Show Answers
  document.querySelector(".btn-submit").style.display = "none";
  document.getElementById("btn-show").style.display = "inline-block";
}

function showAnswers() {
  if (currentExercise.type === "fill-blank") {
    const floatingAnswers = document.querySelectorAll(".floating-answer");
    floatingAnswers.forEach((fa) => (fa.style.display = "block"));
  } else if (currentExercise.type === "multiple-choice") {
    currentExercise.questions.forEach((q, index) => {
      const radios = document.getElementsByName(`q${index}`);

      for (let radio of radios) {
        // Đi tìm đáp án đúng của câu này
        if (radio.getAttribute("data-correct") === "true") {
          const label = document.getElementById(`lbl-${index}-${radio.value}`);

          // Kiểm tra xem label này đã được chấm là đúng (màu xanh lá) chưa
          if (!label.classList.contains("correct")) {
            // Nếu CHƯA đúng (do làm sai hoặc bỏ trống) -> Hiện màu xanh dương để gợi ý
            label.classList.remove("wrong");
            label.classList.add("show-hint");
          }
          // Nếu ĐÃ ĐÚNG rồi -> Bỏ qua, giữ nguyên màu xanh lá của người dùng
        }
      }
    });
  } else if (currentExercise.type === "drag-drop") {
    const dropZones = document.querySelectorAll(".drop-zone");
    dropZones.forEach((zone, index) => {
      const correctAnswer = zone.getAttribute("data-missing").toLowerCase();
      let userAnswer = zone.hasChildNodes()
        ? zone.firstChild.innerText.trim().toLowerCase()
        : "";

      // Chỉ nổi đáp án đúng lên cho những câu làm sai hoặc chưa làm
      if (userAnswer !== correctAnswer) {
        document.getElementById(`fa-dd-${index}`).style.display = "block";
      }
    });
  } else if (currentExercise.type === "rewrite") {
    const inputs = document.querySelectorAll(".rewrite-input");
    inputs.forEach((input, index) => {
      let userAnswer = input.value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, " ");
      let correctAnswer = input
        .getAttribute("data-correct")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, " ");

      // Chỉ hiện bong bóng đáp án cho những câu làm sai hoặc bỏ trống
      if (userAnswer !== correctAnswer) {
        document.getElementById(`fa-rw-${index}`).style.display = "block";
      }
    });
  } else if (currentExercise.type === "fill-verb") {
    const inputs = document.querySelectorAll(".fill-verb-input");
    inputs.forEach((input, index) => {
      const userAnswer = input.value.trim().toLowerCase();
      const correctAnswer = input.getAttribute("data-missing").toLowerCase();

      // Chỉ hiện bong bóng đáp án nếu làm sai hoặc bỏ trống
      if (userAnswer !== correctAnswer) {
        document.getElementById(`fa-verb-${index}`).style.display = "block";
      }
    });
  } else if (currentExercise.type === "circle") {
    const groups = document.querySelectorAll(".circle-group");
    groups.forEach((group) => {
      const correctAnswer = group.getAttribute("data-correct").toLowerCase();
      const selected = group.querySelector(".circle-option.selected");
      let userAnswer = selected
        ? selected.getAttribute("data-val").toLowerCase()
        : "";

      // Nếu chưa chọn hoặc chọn sai
      if (userAnswer !== correctAnswer) {
        group.querySelectorAll(".circle-option").forEach((opt) => {
          if (opt.getAttribute("data-val").toLowerCase() === correctAnswer) {
            opt.classList.add("show-hint-circle"); // Khoanh xanh đáp án đúng
          }
        });
      }
    });
  } else if (currentExercise.type === "mark-words") {
    const words = document.querySelectorAll(".clickable-word");
    words.forEach((word) => {
      let correct = word.getAttribute("data-correct");
      let user = word.getAttribute("data-user") || "none";

      // Nếu câu đó có đáp án nhưng người dùng chọn sai hoặc chưa chọn
      if (correct !== "none" && user !== correct) {
        if (correct === "ul") word.classList.add("show-hint-ul");
        if (correct === "hl") word.classList.add("show-hint-hl");
      }
    });
  } else if (currentExercise.type === "categorize") {
    const words = document.querySelectorAll(".draggable-word");
    words.forEach((word) => {
      let wordText = word.innerText.trim();
      let correctCatIndex = currentExercise.categories.findIndex((c) =>
        c.correctWords.includes(wordText),
      );

      if (correctCatIndex !== -1) {
        let correctBox = document.getElementById(`cat-box-${correctCatIndex}`);
        // Nếu từ chưa nằm đúng cột
        if (word.parentElement !== correctBox) {
          correctBox.appendChild(word); // Tự động di chuyển vào đúng cột
          word.style.backgroundColor = "#3498db"; // Đổi sang màu gợi ý
        }
      }
    });
  }
}

// 3. Vẽ giao diện Kéo Thả (Drag & Drop)
function renderDragDropUI(data) {
  let html = getCommonHeader(data.title, data.instruction);

  // Khung chứa từ vựng (Word Bank) - có thể thả từ về lại đây
  html += `<div class="word-bank" id="word-bank" ondrop="drop(event)" ondragover="allowDrop(event)">`;
  data.wordBank.forEach((word, idx) => {
    html += `<span class="draggable-word" draggable="true" id="drag-${idx}" ondragstart="drag(event)">${word}</span>`;
  });
  html += `</div>`;

  // Render câu hỏi có lỗ hổng
  data.questions.forEach((q, index) => {
    let parsedText = q.replace(/\[(.*?)\]/g, (match, word) => {
      return `<span class="input-wrapper">
                        <span class="drop-zone" data-missing="${word}" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="dragLeave(event)"></span>
                        <span class="floating-answer" id="fa-dd-${index}">${word}</span>
                    </span>`;
    });
    html += `<div class="sentence">${parsedText}</div>`;
  });

  html += getCommonButtons();
  document.getElementById("app-content").innerHTML = html;
}

// === CÁC HÀM XỬ LÝ SỰ KIỆN KÉO THẢ ===
function allowDrop(ev) {
  ev.preventDefault();
  if (ev.target.classList.contains("drop-zone"))
    ev.target.classList.add("drag-over");
}
function dragLeave(ev) {
  if (ev.target.classList.contains("drop-zone"))
    ev.target.classList.remove("drag-over");
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  if (isLocked) return;

  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  let draggedElement = document.getElementById(data);
  let target = ev.target;

  draggedElement.style.backgroundColor = "";

  if (target.classList.contains("drag-over"))
    target.classList.remove("drag-over");

  if (target.classList.contains("draggable-word"))
    target = target.parentElement;

  if (target.classList.contains("drop-zone")) {
    // Drop-zone cũ: Chứa 1 từ, nếu có từ rồi thì đá về word-bank
    if (target.hasChildNodes()) {
      document.getElementById("word-bank").appendChild(target.firstChild);
    }
    target.appendChild(draggedElement);
    target.style.borderColor = "";
  } else if (target.classList.contains("multi-drop-zone")) {
    // Cột phân loại mới: Chứa được nhiều từ thoải mái
    target.appendChild(draggedElement);
  } else if (
    target.id === "word-bank" ||
    target.classList.contains("word-bank")
  ) {
    document.getElementById("word-bank").appendChild(draggedElement);
  }
}

// Hàm đóng/mở menu trên điện thoại
function toggleMenu() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("open");
}
