let currentChapterIdx = 0;
let currentMode = "notes";
let chapterScores = JSON.parse(localStorage.getItem("hciChapterScores")) || {};

function renderTabs() {
  const tabsEl = document.getElementById("chapterTabs");
  tabsEl.innerHTML = courseData
    .map((ch, idx) => {
      const scoreObj = chapterScores[ch.id];
      const statusText = scoreObj
        ? `Marked: ${scoreObj.score}/${scoreObj.total} (${scoreObj.percent}%)`
        : "Not marked yet";
      return `
      <button class="tab-btn ${idx === currentChapterIdx ? "active" : ""}" onclick="switchChapter(${idx})">
        <span class="tab-title">Chapter ${ch.id}</span>
        <span class="tab-status ${scoreObj ? "done" : ""}">${statusText}</span>
      </button>
    `;
    })
    .join("");
}

function setMode(mode) {
  currentMode = mode;
  document
    .getElementById("btnNotesMode")
    .classList.toggle("active", mode === "notes");
  document
    .getElementById("btnQuizMode")
    .classList.toggle("active", mode === "quiz");
  document.getElementById("notesSection").style.display =
    mode === "notes" ? "block" : "none";
  document.getElementById("quizSection").style.display =
    mode === "quiz" ? "block" : "none";
}

function renderNotes() {
  const chapter = courseData[currentChapterIdx];
  document.getElementById("notesSection").innerHTML = `
    <div class="notes-wrapper">
      ${chapter.notesHTML}
      <div class="actions">
        <button type="button" class="btn" onclick="setMode('quiz'); window.scrollTo({top: 0, behavior: 'smooth'});">
          Start Chapter ${chapter.id} Quiz (60 Questions) &rarr;
        </button>
      </div>
    </div>
  `;
}

function handleOptionChange(qIndex, radioEl) {
  const card = document.getElementById(`qcard-${qIndex}`);
  card.classList.remove("jumped");
  const labels = card.querySelectorAll(".options label");
  labels.forEach((lbl) => lbl.classList.remove("selected-option"));
  if (radioEl.checked && radioEl.parentElement) {
    radioEl.parentElement.classList.add("selected-option");
  }
}

function handleFillInput(qIndex, inputEl) {
  const card = document.getElementById(`qcard-${qIndex}`);
  if (inputEl.value.trim().length > 0) {
    card.classList.remove("jumped");
    inputEl.classList.add("has-value");
  } else {
    inputEl.classList.remove("has-value");
  }
}

function renderQuestions() {
  const chapter = courseData[currentChapterIdx];
  const container = document.getElementById("questionsContainer");
  document.getElementById("scoreBanner").classList.remove("visible");

  let html = `<h2 style="margin-bottom: 0.5rem;">${chapter.title} — 60-Question Practice Exam</h2>`;
  let currentType = "";

  const typeLabels = {
    mcq: "Part I: Multiple Choice Questions (20 Questions)",
    tf: "Part II: True or False (20 Questions)",
    fill: "Part III: Fill in the Blank (20 Questions)",
  };

  chapter.questions.forEach((item, index) => {
    if (item.type !== currentType) {
      currentType = item.type;
      html += `<div class="section-label">${typeLabels[currentType]}</div>`;
    }

    html += `<div class="q-card" id="qcard-${index}">
      <div class="q-header">
        <div class="q-text">${index + 1}. ${item.q}</div>
        <span class="jump-flag">FLAGGED: JUMPED</span>
      </div>`;

    if (item.type === "mcq") {
      html +=
        `<div class="options">` +
        item.options
          .map(
            (opt, optIdx) => `
        <label>
          <input type="radio" name="q-${index}" value="${optIdx}" onchange="handleOptionChange(${index}, this)" />
          <span>${opt}</span>
          <span class="selected-tag">[MARKED]</span>
        </label>
      `,
          )
          .join("") +
        `</div>`;
    } else if (item.type === "tf") {
      html += `<div class="options">
        <label>
          <input type="radio" name="q-${index}" value="true" onchange="handleOptionChange(${index}, this)" />
          <span>True</span>
          <span class="selected-tag">[MARKED]</span>
        </label>
        <label>
          <input type="radio" name="q-${index}" value="false" onchange="handleOptionChange(${index}, this)" />
          <span>False</span>
          <span class="selected-tag">[MARKED]</span>
        </label>
      </div>`;
    } else if (item.type === "fill") {
      html += `<input type="text" class="fill-input" name="q-${index}" placeholder="Type your answer here..." autocomplete="off" oninput="handleFillInput(${index}, this)" />`;
    }

    html += `<div class="feedback-note" id="fb-${index}"></div></div>`;
  });

  container.innerHTML = html;
}

function gradeCurrentChapter() {
  const chapter = courseData[currentChapterIdx];
  let score = 0;
  let jumpedCount = 0;

  chapter.questions.forEach((item, index) => {
    const card = document.getElementById(`qcard-${index}`);
    const fb = document.getElementById(`fb-${index}`);
    card.classList.remove("correct", "incorrect", "jumped");

    let isCorrect = false;
    let isJumped = false;
    let correctAnswerLabel = "";

    if (item.type === "mcq") {
      const selected = document.querySelector(
        `input[name="q-${index}"]:checked`,
      );
      correctAnswerLabel = item.options[item.answer];
      if (!selected) {
        isJumped = true;
      } else if (parseInt(selected.value, 10) === item.answer) {
        isCorrect = true;
      }
    } else if (item.type === "tf") {
      const selected = document.querySelector(
        `input[name="q-${index}"]:checked`,
      );
      correctAnswerLabel = item.answer ? "True" : "False";
      if (!selected) {
        isJumped = true;
      } else if ((selected.value === "true") === item.answer) {
        isCorrect = true;
      }
    } else if (item.type === "fill") {
      const input = document.querySelector(`input[name="q-${index}"]`);
      correctAnswerLabel = item.answer;
      if (!input || input.value.trim() === "") {
        isJumped = true;
      } else if (
        input.value.trim().toLowerCase() === item.answer.toLowerCase()
      ) {
        isCorrect = true;
      }
    }

    if (isCorrect) {
      score++;
      card.classList.add("correct");
      fb.innerHTML = `<strong>[CORRECT]</strong> ${item.explanation}`;
    } else if (isJumped) {
      jumpedCount++;
      card.classList.add("incorrect", "jumped");
      fb.innerHTML = `<strong>[FLAGGED — JUMPED QUESTION]</strong> You skipped this question. Correct Answer: <em>${correctAnswerLabel}</em>. ${item.explanation}`;
    } else {
      card.classList.add("incorrect");
      fb.innerHTML = `<strong>[INCORRECT]</strong> Correct Answer: <em>${correctAnswerLabel}</em>. ${item.explanation}`;
    }
  });

  const total = chapter.questions.length;
  const percent = Math.round((score / total) * 100);

  chapterScores[chapter.id] = { score, total, percent };
  localStorage.setItem("hciChapterScores", JSON.stringify(chapterScores));

  renderTabs();
  const banner = document.getElementById("scoreBanner");
  document.getElementById("bannerHeading").textContent =
    `${chapter.title} — Mark: ${score}/${total} (${percent}%)`;

  const completedCount = Object.keys(chapterScores).length;
  const jumpSummary =
    jumpedCount > 0
      ? ` | Flagged (Jumped): ${jumpedCount} question(s) unanswered.`
      : " | All 60 questions answered.";
  document.getElementById("bannerSubtext").textContent =
    (completedCount === courseData.length
      ? "All 4 chapters marked."
      : `Progress: ${completedCount} of ${courseData.length} chapters marked.`) +
    jumpSummary;

  const nextBtn = document.getElementById("nextChapterBtn");
  nextBtn.style.display =
    currentChapterIdx < courseData.length - 1 ? "inline-block" : "none";

  banner.classList.add("visible");
  banner.scrollIntoView({ behavior: "smooth" });
}

function switchChapter(idx) {
  currentChapterIdx = idx;
  renderTabs();
  renderNotes();
  renderQuestions();
}

function goToNextChapter() {
  if (currentChapterIdx < courseData.length - 1) {
    switchChapter(currentChapterIdx + 1);
    setMode("notes");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function resetCurrentChapter() {
  const chapter = courseData[currentChapterIdx];
  delete chapterScores[chapter.id];
  localStorage.setItem("hciChapterScores", JSON.stringify(chapterScores));
  renderTabs();
  renderQuestions();
}

// Initialize app
renderTabs();
renderNotes();
renderQuestions();
