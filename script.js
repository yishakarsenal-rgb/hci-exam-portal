const courseData = [
  {
    id: 1,
    title: "Chapter 1: Foundations of HCI",
    notesHTML: `
      <h2>Chapter 1: Foundations of Human-Computer Interaction</h2>
      <div class="note-block">
        <h3>1.1 Core Definitions &amp; Interaction Cycle</h3>
        <ul>
          <li><strong>HCI:</strong> Design, implementation, and evaluation of interactive computing systems for human use.</li>
          <li><strong>Human / Computer / Interface:</strong> The user interacts with computing hardware/software via input/output mechanisms (screens, buttons, voice).</li>
        </ul>
        <div class="diagram-box">[Human / User (Goal)] &rarr; (Input) &rarr; [Computer System] &rarr; (Output/Feedback) &rarr; [User Evaluates]</div>
      </div>

      <div class="note-block">
        <h3>1.2 Seven Goals of HCI</h3>
        <ul>
          <li><strong>Usability:</strong> Effectiveness, efficiency, and satisfaction in a specific context.</li>
          <li><strong>Usefulness:</strong> Providing the actual features users need (an easy system without needed features is not useful).</li>
          <li><strong>Learnability:</strong> How quickly new users can learn the system.</li>
          <li><strong>Efficiency:</strong> Speed and low effort once learned (e.g., search vs. manual scrolling).</li>
          <li><strong>Safety:</strong> Preventing errors and reducing consequences (e.g., transfer confirmation dialogs).</li>
          <li><strong>Accessibility:</strong> Usable by people with visual, hearing, motor, or cognitive disabilities.</li>
          <li><strong>User Satisfaction:</strong> Comfort and positive attitude toward the system.</li>
        </ul>
      </div>

      <div class="note-block">
        <h3>1.3 HCI vs. UI vs. UX</h3>
        <table class="note-table">
          <tr><th>Term</th><th>Focus</th><th>Example</th></tr>
          <tr><td><strong>HCI</strong></td><td>Broader academic/engineering field studying humans &amp; computers</td><td>Studying how students use an LMS</td></tr>
          <tr><td><strong>UI</strong></td><td>Visual controls and presentation layer</td><td>Buttons, menus, forms, icons</td></tr>
          <tr><td><strong>UX</strong></td><td>User's overall perception before, during, and after use</td><td>Feeling confident after smooth registration</td></tr>
        </table>
      </div>

      <div class="note-block">
        <h3>1.4 Historical Evolution &amp; Disciplines</h3>
        <ul>
          <li><strong>1940s–1950s:</strong> Batch processing, punched cards, specialized operators.</li>
          <li><strong>1960s–1970s:</strong> Time-sharing terminals; Engelbart's 1968 demo (mouse); Xerox PARC WIMP (Windows, Icons, Menus, Pointer).</li>
          <li><strong>1980s–Present:</strong> Personal PCs &rarr; Web (1990s) &rarr; Mobile/Touch (2000s) &rarr; Voice, VR/AR, AI &amp; Multimodal interfaces.</li>
          <li><strong>Multidisciplinary Roots:</strong> Computer Science, Psychology, Ergonomics, Graphic Design, Sociology, Linguistics, Accessibility.</li>
        </ul>
      </div>
    `,
    questions: [
      {
        type: "mcq",
        q: "Which HCI goal refers to preventing user errors and reducing their consequences?",
        options: ["Learnability", "Safety", "Efficiency", "Usefulness"],
        answer: 1,
        explanation:
          "Safety protects users from dangerous conditions and irreversible errors (e.g., confirming a high-value transfer).",
      },
      {
        type: "mcq",
        q: "Which term describes the user's overall perceptions and feelings before, during, and after using a system?",
        options: [
          "UI (User Interface)",
          "UX (User Experience)",
          "Batch Processing",
          "Ergonomics",
        ],
        answer: 1,
        explanation:
          "UX covers the holistic experience, whereas UI refers specifically to the visual controls and layout.",
      },
      {
        type: "mcq",
        q: "Douglas Engelbart's 1968 'Mother of All Demos' introduced which foundational device?",
        options: [
          "Touchscreen",
          "Computer Mouse",
          "Punched Cards",
          "VR Headset",
        ],
        answer: 1,
        explanation:
          "Engelbart demonstrated the computer mouse, interactive text editing, and collaborative computing in 1968.",
      },
      {
        type: "tf",
        q: "A system that is easy to use is automatically guaranteed to be useful.",
        answer: false,
        explanation:
          "False. A system can be easy to use yet fail to be useful if it lacks the core features users actually need.",
      },
      {
        type: "tf",
        q: "Early 1940s–1950s computing relied primarily on batch processing and punched cards rather than real-time interaction.",
        answer: true,
        explanation:
          "True. Users submitted decks of punched cards and waited long periods for results.",
      },
      {
        type: "fill",
        q: "Designing systems so people with visual, hearing, motor, or cognitive disabilities can use them is called ________.",
        answer: "accessibility",
        explanation:
          "Accessibility ensures inclusive access for users with diverse abilities.",
      },
    ],
  },
  {
    id: 2,
    title: "Chapter 2: The Human in HCI",
    notesHTML: `
      <h2>Chapter 2: The Human in HCI</h2>
      <div class="note-block">
        <h3>2.1 Senses, Perception &amp; Gestalt Principles</h3>
        <ul>
          <li><strong>Vision:</strong> Relies on visual acuity, contrast, and color perception. <em>Never rely on color alone to convey errors.</em></li>
          <li><strong>Gestalt Principles:</strong> <strong>Proximity</strong> (nearby items belong together), <strong>Similarity</strong> (alike items group together), <strong>Continuity</strong>, <strong>Closure</strong>, and <strong>Figure-Ground</strong>.</li>
          <li><strong>Hearing &amp; Touch:</strong> Always pair critical audio alerts with visual text; provide adequate button size and tactile feedback.</li>
        </ul>
      </div>

      <div class="note-block">
        <h3>2.2 Human Memory Systems</h3>
        <div class="diagram-box">[Sensory Memory (ms)] &rarr; [Short-Term / Working Memory (Limited)] &rarr; [Long-Term Memory (Episodic, Semantic, Procedural)]</div>
        <ul>
          <li><strong>Recognition vs. Recall:</strong> Visible menus rely on <em>recognition</em> (low memory load); command-line prompts rely on <em>recall</em> (high memory load).</li>
          <li><strong>Design Implication:</strong> Break complex tasks into steps, keep active selections visible, and avoid forcing recall across screens.</li>
        </ul>
      </div>

      <div class="note-block">
        <h3>2.3 Reasoning, Mental Models &amp; Human Error</h3>
        <table class="note-table">
          <tr><th>Concept</th><th>Definition</th><th>Example</th></tr>
          <tr><td><strong>Deductive / Inductive / Abductive</strong></td><td>Rule-to-case / Observation-to-pattern / Hypothesis for an observation</td><td>Suspecting Wi-Fi outage when pages fail to load</td></tr>
          <tr><td><strong>Slip</strong></td><td>Right goal/plan, wrong physical execution</td><td>Clicking "Delete" instead of adjacent "Save"</td></tr>
          <tr><td><strong>Mistake</strong></td><td>Incorrect plan or misunderstanding of rules</td><td>Choosing the wrong loan option due to misreading rules</td></tr>
        </table>
        <div class="callout"><strong>Mental Models &amp; Individual Differences:</strong> Interfaces must behave predictably and accommodate differences in age, physical/cognitive abilities, expertise, language, and network speed (WCAG &amp; User-Centered Design).</div>
      </div>
    `,
    questions: [
      {
        type: "mcq",
        q: "Which Gestalt principle states that elements placed close together are perceived as a related group?",
        options: ["Closure", "Proximity", "Continuity", "Figure-ground"],
        answer: 1,
        explanation:
          "Proximity groups nearby elements together—such as placing a form label right next to its input box.",
      },
      {
        type: "mcq",
        q: "Selecting an option from a visible dropdown menu relies primarily on which memory process?",
        options: ["Recall", "Recognition", "Sensory trace", "Episodic memory"],
        answer: 1,
        explanation:
          "Recognition allows users to identify visible options rather than retrieving commands from memory (recall).",
      },
      {
        type: "mcq",
        q: "A user intends to click 'Save' but accidentally clicks 'Delete' because the buttons are too close. What type of error is this?",
        options: ["Mistake", "Slip", "Abductive error", "Semantic error"],
        answer: 1,
        explanation:
          "A slip happens when the user has the right goal/plan but executes the wrong physical action.",
      },
      {
        type: "tf",
        q: "Color alone should be used to indicate an error on an online form.",
        answer: false,
        explanation:
          "False. Users with color-vision deficiencies may miss color-only cues; always include text or icons.",
      },
      {
        type: "tf",
        q: "Procedural memory stores skills and procedures, such as knowing how to type without consciously thinking about each key.",
        answer: true,
        explanation:
          "True. Procedural memory governs learned motor and cognitive skills.",
      },
      {
        type: "fill",
        q: "A user's internal understanding of how a computer system works is called a ________ model.",
        answer: "mental",
        explanation:
          "A mental model is built through experience, observation, and system feedback.",
      },
    ],
  },
  {
    id: 3,
    title: "Chapter 3: The Computer in HCI",
    notesHTML: `
      <h2>Chapter 3: The Computer in HCI</h2>
      <div class="note-block">
        <h3>3.1 Input &amp; Output Devices</h3>
        <ul>
          <li><strong>Input Devices:</strong> Keyboard, mouse, touchscreen (tap, swipe, pinch, long press), microphone, scanner, camera, eye tracker, biometric sensors.</li>
          <li><strong>Output Devices:</strong> Monitors (resolution, contrast, refresh rate), printers, speakers, projectors, and <strong>haptic devices</strong> (vibration, force feedback).</li>
        </ul>
      </div>

      <div class="note-block">
        <h3>3.2 Virtual Reality (VR) &amp; Physical Interaction</h3>
        <ul>
          <li><strong>VR Characteristics:</strong> Immersion, Interaction, <strong>Presence</strong> (subjective feeling of "being there"), Real-time response, and 3D environments (via HMD, tracking sensors, controllers).</li>
          <li><strong>Physical Interaction Modes:</strong> Direct manipulation, touch gestures, body/hand gestures, voice commands, and haptic feedback.</li>
        </ul>
      </div>

      <div class="note-block">
        <h3>3.3 Computer Memory Hierarchy &amp; Response Time</h3>
        <div class="diagram-box">[CPU Registers (Fastest/Smallest)] &rarr; [Cache] &rarr; [RAM (Volatile)] &rarr; [Secondary Storage: SSD/HDD (Persistent)]</div>
        <ul>
          <li><strong>RAM vs. ROM:</strong> RAM is volatile working memory for active apps; ROM is non-volatile firmware storage.</li>
          <li><strong>Response Time:</strong> The delay between user action and system reaction. Long delays require progress indicators so users know the system hasn't frozen.</li>
        </ul>
      </div>
    `,
    questions: [
      {
        type: "mcq",
        q: "Which type of computer memory is volatile and temporarily holds active application data?",
        options: ["ROM", "RAM", "SSD", "Optical Disc"],
        answer: 1,
        explanation:
          "RAM (Random Access Memory) provides fast, temporary working storage that clears when powered off.",
      },
      {
        type: "mcq",
        q: "In Virtual Reality (VR), what term describes the user's subjective feeling of actually being inside the virtual world?",
        options: ["Resolution", "Presence", "Haptics", "Batching"],
        answer: 1,
        explanation:
          "Presence is the psychological sense of 'being there,' supported by sensory immersion.",
      },
      {
        type: "mcq",
        q: "Which feedback mechanism communicates with users through vibration, force, or physical motion?",
        options: [
          "Auditory output",
          "Haptic feedback",
          "Optical scanning",
          "Cache memory",
        ],
        answer: 1,
        explanation:
          "Haptic devices provide tactile sensations such as smartphone vibrations or steering wheel resistance.",
      },
      {
        type: "tf",
        q: "In the computer memory hierarchy, CPU registers are faster than secondary storage like SSDs.",
        answer: true,
        explanation:
          "True. CPU registers are the fastest, smallest storage locations directly inside the processor.",
      },
      {
        type: "tf",
        q: "System response time has no effect on user experience as long as the final calculation is accurate.",
        answer: false,
        explanation:
          "False. Slow response times without progress indicators cause frustration and make users think the system froze.",
      },
      {
        type: "fill",
        q: "The time elapsed between a user's action and the system's reaction is known as ________ time.",
        answer: "response",
        explanation:
          "Response time directly shapes how smooth and reliable an interactive system feels.",
      },
    ],
  },
  {
    id: 4,
    title: "Chapter 4: Interaction & Ergonomics",
    notesHTML: `
      <h2>Chapter 4: Interaction &amp; Ergonomics</h2>
      <div class="note-block">
        <h3>4.1 Norman's Execution–Evaluation Model &amp; The Two Gulfs</h3>
        <div class="diagram-box">Execution: (1) Goal &rarr; (2) Intention &rarr; (3) Specify Action &rarr; (4) Execute Action<br>Evaluation: (5) Perceive State &rarr; (6) Interpret State &rarr; (7) Evaluate Outcome</div>
        <ul>
          <li><strong>Gulf of Execution:</strong> Gap between user goals and knowing which actions the interface allows. <em>Fix:</em> Visible controls, clear labels, logical menus.</li>
          <li><strong>Gulf of Evaluation:</strong> Gap between actual system state and user understanding. <em>Fix:</em> Timely feedback, progress bars, clear confirmations.</li>
        </ul>
      </div>

      <div class="note-block">
        <h3>4.2 Ergonomics</h3>
        <ul>
          <li><strong>Physical Ergonomics:</strong> Posture, adjustable seating, monitor height, keyboard/mouse placement, preventing repetitive strain injuries.</li>
          <li><strong>Cognitive Ergonomics:</strong> Managing mental workload, attention, memory, and decision-making.</li>
          <li><strong>Environmental Ergonomics:</strong> Lighting, noise levels, temperature, air quality, and workspace layout.</li>
        </ul>
      </div>

      <div class="note-block">
        <h3>4.3 Interaction Styles</h3>
        <table class="note-table">
          <tr><th>Style</th><th>Key Advantage</th><th>Key Limitation</th></tr>
          <tr><td><strong>Command-Line (CLI)</strong></td><td>Fast and flexible for expert users</td><td>High recall burden; steep learning curve</td></tr>
          <tr><td><strong>Menu-Based</strong></td><td>Supports recognition; guides novices</td><td>Deep hierarchies can slow navigation</td></tr>
          <tr><td><strong>Form-Based</strong></td><td>Structured data entry with validation</td><td>Long forms cause fatigue</td></tr>
          <tr><td><strong>Question &amp; Answer</strong></td><td>Step-by-step guidance (wizards)</td><td>Slow and rigid for experienced users</td></tr>
          <tr><td><strong>Natural Language</strong></td><td>Everyday speech/text; hands-free</td><td>Ambiguity, recognition errors, privacy</td></tr>
          <tr><td><strong>Direct Manipulation</strong></td><td>Immediate visual feedback on objects</td><td>Inefficient for repetitive bulk tasks</td></tr>
          <tr><td><strong>Gesture-Based</strong></td><td>Natural spatial/VR control</td><td>Physical fatigue; low discoverability</td></tr>
        </table>
      </div>
    `,
    questions: [
      {
        type: "mcq",
        q: "According to Donald Norman, what is the 'Gulf of Execution'?",
        options: [
          "The delay in CPU processing",
          "The gap between what a user wants to do and finding how to do it on the interface",
          "The gap between system state and user understanding",
          "Physical wrist strain from typing",
        ],
        answer: 1,
        explanation:
          "The Gulf of Execution measures how difficult it is to figure out which actions the interface allows.",
      },
      {
        type: "mcq",
        q: "Which interaction style allows users to drag icons and resize visible objects directly on screen?",
        options: [
          "Command-Line Interface (CLI)",
          "Direct Manipulation",
          "Question-and-Answer",
          "Batch Input",
        ],
        answer: 1,
        explanation:
          "Direct manipulation replaces abstract text commands with continuous visual objects and immediate feedback.",
      },
      {
        type: "mcq",
        q: "Poor computer lab lighting and excessive background noise fall under which branch of ergonomics?",
        options: [
          "Physical ergonomics",
          "Cognitive ergonomics",
          "Environmental ergonomics",
          "Software ergonomics",
        ],
        answer: 2,
        explanation:
          "Environmental ergonomics addresses surrounding workspace conditions like lighting, noise, and temperature.",
      },
      {
        type: "tf",
        q: "Displaying a progress bar after a user clicks 'Submit' helps reduce the Gulf of Evaluation.",
        answer: true,
        explanation:
          "True. Timely feedback helps users perceive and interpret the current state of the system.",
      },
      {
        type: "tf",
        q: "Command-line interfaces (CLIs) rely heavily on recognition rather than recall.",
        answer: false,
        explanation:
          "False. CLIs require users to recall exact command syntax from memory.",
      },
      {
        type: "fill",
        q: "Norman's model divides interaction into two main phases: Execution and ________.",
        answer: "evaluation",
        explanation:
          "Users execute actions on the system and then evaluate the resulting system state.",
      },
    ],
  },
];

let currentChapterIdx = 0;
let currentMode = "notes";
let chapterScores = JSON.parse(localStorage.getItem("hciChapterScores")) || {};

function renderTabs() {
  const tabsEl = document.getElementById("chapterTabs");
  tabsEl.innerHTML = courseData
    .map((ch, idx) => {
      const scoreObj = chapterScores[ch.id];
      const statusText = scoreObj
        ? `✔ Marked: ${scoreObj.score}/${scoreObj.total} (${scoreObj.percent}%)`
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
        <button type="button" class="btn btn-primary" onclick="setMode('quiz'); window.scrollTo({top: 0, behavior: 'smooth'});">
          Start Chapter ${chapter.id} Quiz &rarr;
        </button>
      </div>
    </div>
  `;
}

function renderQuestions() {
  const chapter = courseData[currentChapterIdx];
  const container = document.getElementById("questionsContainer");
  document.getElementById("scoreBanner").classList.remove("visible");

  let html = `<h2 style="margin-bottom: 0.5rem;">${chapter.title} — Practice Exam</h2>`;
  let currentType = "";

  const typeLabels = {
    mcq: "Part I: Multiple Choice Questions",
    tf: "Part II: True or False",
    fill: "Part III: Fill in the Blank",
  };

  chapter.questions.forEach((item, index) => {
    if (item.type !== currentType) {
      currentType = item.type;
      html += `<div class="section-label">${typeLabels[currentType]}</div>`;
    }

    html += `<div class="q-card" id="qcard-${index}">
      <div class="q-text">${index + 1}. ${item.q}</div>`;

    if (item.type === "mcq") {
      html +=
        `<div class="options">` +
        item.options
          .map(
            (opt, optIdx) => `
        <label>
          <input type="radio" name="q-${index}" value="${optIdx}" />
          ${opt}
        </label>
      `,
          )
          .join("") +
        `</div>`;
    } else if (item.type === "tf") {
      html += `<div class="options">
        <label><input type="radio" name="q-${index}" value="true" /> True</label>
        <label><input type="radio" name="q-${index}" value="false" /> False</label>
      </div>`;
    } else if (item.type === "fill") {
      html += `<input type="text" class="fill-input" name="q-${index}" placeholder="Type your answer here..." autocomplete="off" />`;
    }

    html += `<div class="feedback-note" id="fb-${index}"></div></div>`;
  });

  container.innerHTML = html;
}

function gradeCurrentChapter() {
  const chapter = courseData[currentChapterIdx];
  let score = 0;

  chapter.questions.forEach((item, index) => {
    const card = document.getElementById(`qcard-${index}`);
    const fb = document.getElementById(`fb-${index}`);
    card.classList.remove("correct", "incorrect");

    let isCorrect = false;
    let correctAnswerLabel = "";

    if (item.type === "mcq") {
      const selected = document.querySelector(
        `input[name="q-${index}"]:checked`,
      );
      correctAnswerLabel = item.options[item.answer];
      if (selected && parseInt(selected.value, 10) === item.answer) {
        isCorrect = true;
      }
    } else if (item.type === "tf") {
      const selected = document.querySelector(
        `input[name="q-${index}"]:checked`,
      );
      correctAnswerLabel = item.answer ? "True" : "False";
      if (selected && (selected.value === "true") === item.answer) {
        isCorrect = true;
      }
    } else if (item.type === "fill") {
      const input = document.querySelector(`input[name="q-${index}"]`);
      correctAnswerLabel = item.answer;
      if (
        input &&
        input.value.trim().toLowerCase() === item.answer.toLowerCase()
      ) {
        isCorrect = true;
      }
    }

    if (isCorrect) {
      score++;
      card.classList.add("correct");
      fb.innerHTML = `<strong>✔ Correct!</strong> ${item.explanation}`;
    } else {
      card.classList.add("incorrect");
      fb.innerHTML = `<strong>✘ Incorrect.</strong> Correct Answer: <em>${correctAnswerLabel}</em>. ${item.explanation}`;
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
  document.getElementById("bannerSubtext").textContent =
    completedCount === courseData.length
      ? "🎉 All 4 chapters marked! Review your answers below or switch chapters anytime."
      : `Progress: ${completedCount} of ${courseData.length} chapters marked.`;

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
