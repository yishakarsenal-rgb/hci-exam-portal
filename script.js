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
          <li><strong>Human / Computer / Interface:</strong> The user interacts with computing hardware/software via input/output mechanisms (screens, buttons, menus, voice).</li>
        </ul>
        <div class="diagram-box">[Human / User (Goal)] &rarr; (Input) &rarr; [Computer System] &rarr; (Output/Feedback) &rarr; [User Evaluates]</div>
      </div>

      <div class="note-block">
        <h3>1.2 Seven Goals of HCI</h3>
        <ul>
          <li><strong>Usability:</strong> Effectiveness, efficiency, and satisfaction in a specific context.</li>
          <li><strong>Usefulness:</strong> Providing the functions users actually need (an easy system without required features is not useful).</li>
          <li><strong>Learnability:</strong> How quickly new users can learn the system.</li>
          <li><strong>Efficiency:</strong> Time and effort required once the user understands the system.</li>
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
          <tr><td><strong>UI</strong></td><td>Controls and visual presentation layer</td><td>Buttons, menus, forms, icons</td></tr>
          <tr><td><strong>UX</strong></td><td>User's overall perceptions before, during, and after use</td><td>Feeling confident after smooth registration</td></tr>
        </table>
      </div>

      <div class="note-block">
        <h3>1.4 Historical Evolution &amp; Disciplines</h3>
        <ul>
          <li><strong>1940s–1950s:</strong> Batch processing, punched cards, paper tape, specialized operators, long delays.</li>
          <li><strong>1960s–1970s:</strong> Time-sharing terminals; Douglas Engelbart's 1968 demo (mouse, text editing); Xerox PARC WIMP (Windows, Icons, Menus, Pointer).</li>
          <li><strong>1980s–Present:</strong> Personal PCs &rarr; Web/Multimedia (1990s) &rarr; Mobile/Touch (2000s) &rarr; Voice, VR/AR, AI &amp; Multimodal interfaces (2010s–Present).</li>
          <li><strong>Multidisciplinary Roots:</strong> Computer Science, Psychology, Ergonomics, Graphic Design, Sociology, Linguistics, Accessibility Studies.</li>
        </ul>
      </div>
    `,
    questions: [
      // 20 Multiple Choice
      {
        type: "mcq",
        q: "What is the primary concern of Human-Computer Interaction (HCI)?",
        options: [
          "Manufacturing microchips",
          "Design, implementation, and evaluation of interactive computer systems for human use",
          "Installing fiber-optic networks",
          "Writing compiler assembly code",
        ],
        answer: 1,
        explanation:
          "HCI studies how people interact with computers and how to design usable, useful, safe, and satisfying systems.",
      },
      {
        type: "mcq",
        q: "Which HCI goal measures how effectively, efficiently, and satisfactorily users achieve goals in a specific context?",
        options: [
          "Usefulness",
          "Usability",
          "Batch processing",
          "Hardware speed",
        ],
        answer: 1,
        explanation:
          "Usability focuses on effectiveness, efficiency, and satisfaction in a particular context of use.",
      },
      {
        type: "mcq",
        q: "A student portal is easy to navigate, but it lacks a feature to view grades. Which HCI goal does it fail?",
        options: ["Usefulness", "Safety", "Learnability", "Contrast"],
        answer: 0,
        explanation:
          "A system is useful only if it provides the functions users actually need.",
      },
      {
        type: "mcq",
        q: "Which HCI goal refers to how easily new users can learn to operate a system?",
        options: ["Efficiency", "Learnability", "Safety", "Batching"],
        answer: 1,
        explanation:
          "Learnability measures how quickly first-time users become proficient.",
      },
      {
        type: "mcq",
        q: "Using a search bar instead of scrolling through 500 records primarily improves which HCI goal?",
        options: ["Safety", "Efficiency", "Accessibility", "Usefulness"],
        answer: 1,
        explanation:
          "Efficiency reduces the time and effort needed to complete tasks once learned.",
      },
      {
        type: "mcq",
        q: "A mobile banking app asks for confirmation before sending a large transfer. Which HCI goal is this?",
        options: ["Learnability", "Safety", "Usefulness", "Graphic design"],
        answer: 1,
        explanation:
          "Safety prevents errors and reduces the impact of dangerous or irreversible actions.",
      },
      {
        type: "mcq",
        q: "Adding keyboard navigation and screen-reader labels directly supports which HCI goal?",
        options: [
          "Accessibility",
          "Batch processing",
          "Efficiency",
          "Time-sharing",
        ],
        answer: 0,
        explanation:
          "Accessibility ensures people with visual, hearing, motor, or cognitive disabilities can use the system.",
      },
      {
        type: "mcq",
        q: "Which term specifically refers to the controls and presentation layer (buttons, menus, forms, icons)?",
        options: [
          "HCI",
          "UI (User Interface)",
          "UX (User Experience)",
          "Ergonomics",
        ],
        answer: 1,
        explanation:
          "UI is the visual and interactive surface through which users operate the system.",
      },
      {
        type: "mcq",
        q: "Which term describes a user's overall perceptions and feelings before, during, and after using a system?",
        options: [
          "UI",
          "UX (User Experience)",
          "Batch processing",
          "Linguistics",
        ],
        answer: 1,
        explanation:
          "UX encompasses the user's holistic experience across the entire interaction.",
      },
      {
        type: "mcq",
        q: "In the basic HCI interaction cycle, what happens immediately after the computer processes input and produces output?",
        options: [
          "The computer shuts down",
          "The user observes and understands the result to decide what to do next",
          "Punched cards are printed",
          "The user forgets the goal",
        ],
        answer: 1,
        explanation:
          "The user observes the system response and decides the next action until the task is complete.",
      },
      {
        type: "mcq",
        q: "How did users primarily interact with early computers in the 1940s–1950s?",
        options: [
          "Touchscreens",
          "Punched cards, paper tape, and control panels",
          "Voice assistants",
          "VR headsets",
        ],
        answer: 1,
        explanation:
          "Early computing relied on batch processing via switches, punched cards, and paper tape.",
      },
      {
        type: "mcq",
        q: "Which 1960s computing advancement allowed multiple users to interact via terminals without batch delays?",
        options: [
          "Smartphones",
          "Time-sharing systems",
          "Virtual reality",
          "Optical mice",
        ],
        answer: 1,
        explanation:
          "Time-sharing allowed multiple users to enter commands and receive responses during live sessions.",
      },
      {
        type: "mcq",
        q: "Who presented 'The Mother of All Demos' in 1968 showcasing the computer mouse and interactive text editing?",
        options: [
          "Alan Turing",
          "Douglas Engelbart",
          "Tim Berners-Lee",
          "Ada Lovelace",
        ],
        answer: 1,
        explanation:
          "Douglas Engelbart demonstrated the mouse, hypertext, and collaborative computing in 1968.",
      },
      {
        type: "mcq",
        q: "At which research center were windows, icons, menus, and pointing-device GUI concepts pioneered in the 1970s?",
        options: ["NASA", "Xerox PARC", "CERN", "MIT Media Lab"],
        answer: 1,
        explanation:
          "Xerox PARC developed foundational WIMP graphical user interface concepts.",
      },
      {
        type: "mcq",
        q: "Which decade brought personal computers with desktop metaphors and mouse-based GUIs into homes and offices?",
        options: ["1950s", "1980s", "1940s", "2010s"],
        answer: 1,
        explanation:
          "The 1980s popularized personal computers with desktop metaphors, icons, and menus.",
      },
      {
        type: "mcq",
        q: "Which 1990s innovation shifted HCI focus toward browsers, search engines, and e-commerce?",
        options: [
          "Punched cards",
          "The World Wide Web",
          "Time-sharing mainframes",
          "Smartwatches",
        ],
        answer: 1,
        explanation:
          "The World Wide Web made networked multimedia and online forms widely accessible.",
      },
      {
        type: "mcq",
        q: "Which challenge became critical for HCI designers during the 2000s mobile computing boom?",
        options: [
          "Punched card alignment",
          "Small screens, one-handed touch use, and variable networks",
          "Mainframe cooling",
          "Paper tape tearing",
        ],
        answer: 1,
        explanation:
          "Smartphones introduced small displays, touch gestures, battery limits, and mobile contexts.",
      },
      {
        type: "mcq",
        q: "Which discipline contributes knowledge about attention, memory, perception, and learning to HCI?",
        options: ["Linguistics", "Psychology", "Sociology", "Networking"],
        answer: 1,
        explanation:
          "Psychology and cognitive science explain how humans perceive, remember, and learn.",
      },
      {
        type: "mcq",
        q: "Which discipline contributes typography, color, and visual hierarchy to make actions easy to find?",
        options: [
          "Graphic design",
          "Sociology",
          "Compiler theory",
          "Electronics",
        ],
        answer: 0,
        explanation:
          "Graphic design shapes visual layout, contrast, and hierarchy.",
      },
      {
        type: "mcq",
        q: "Which discipline helps HCI designers write clear labels, instructions, and error messages?",
        options: [
          "Linguistics",
          "Hardware engineering",
          "Thermodynamics",
          "Accounting",
        ],
        answer: 0,
        explanation: "Linguistics studies language and clear communication.",
      },

      // 20 True/False
      {
        type: "tf",
        q: "HCI is solely concerned with writing backend database code and ignores human behavior.",
        answer: false,
        explanation:
          "False. HCI studies how humans interact with computers and integrates psychology, design, ergonomics, and computer science.",
      },
      {
        type: "tf",
        q: "A system can be easy to use yet fail to be useful if it lacks features users actually need.",
        answer: true,
        explanation:
          "True. Usability without usefulness means the system does not fulfill user requirements.",
      },
      {
        type: "tf",
        q: "Safety in HCI includes protecting users from accidental destructive actions like deleting data.",
        answer: true,
        explanation:
          "True. Confirmation prompts and undo features improve safety.",
      },
      {
        type: "tf",
        q: "HCI, UI, and UX are identical terms with the exact same definition.",
        answer: false,
        explanation:
          "False. HCI is the broad field, UI is the interface controls, and UX is the user's overall experience.",
      },
      {
        type: "tf",
        q: "Early 1940s–1950s computing was characterized by batch processing and long delays before results.",
        answer: true,
        explanation:
          "True. Operators submitted punched card decks and waited for batch outputs.",
      },
      {
        type: "tf",
        q: "Time-sharing systems in the 1960s made interaction more immediate than batch processing.",
        answer: true,
        explanation:
          "True. Users could enter commands via terminals during live sessions.",
      },
      {
        type: "tf",
        q: "Douglas Engelbart demonstrated the computer mouse in 1968.",
        answer: true,
        explanation:
          "True. His 1968 demo introduced the mouse and interactive text editing.",
      },
      {
        type: "tf",
        q: "Xerox PARC had no influence on modern graphical user interfaces.",
        answer: false,
        explanation:
          "False. Xerox PARC pioneered windows, icons, menus, and pointer interaction.",
      },
      {
        type: "tf",
        q: "The desktop metaphor helped non-programmers adopt personal computers in the 1980s.",
        answer: true,
        explanation:
          "True. Familiar metaphors like files and folders made PCs approachable.",
      },
      {
        type: "tf",
        q: "Mobile HCI in the 2000s eliminated the need to worry about screen size or connectivity.",
        answer: false,
        explanation:
          "False. Mobile design required adapting to small screens, touch input, and variable connectivity.",
      },
      {
        type: "tf",
        q: "Multimodal interfaces combine inputs such as voice, touch, and vision.",
        answer: true,
        explanation:
          "True. Modern HCI frequently combines multiple interaction modes.",
      },
      {
        type: "tf",
        q: "Sociology contributes to HCI by explaining social behavior and group collaboration.",
        answer: true,
        explanation:
          "True. Sociology informs collaborative tools and social computing.",
      },
      {
        type: "tf",
        q: "Ergonomics in HCI focuses on physical comfort and human capabilities.",
        answer: true,
        explanation:
          "True. Ergonomics ensures controls and workspaces fit human physical limits.",
      },
      {
        type: "tf",
        q: "Even technically accurate software can fail if its interface is confusing and unusable.",
        answer: true,
        explanation:
          "True. Poor usability leads to errors, frustration, and abandonment.",
      },
      {
        type: "tf",
        q: "Good HCI design can reduce training costs and customer support expenses.",
        answer: true,
        explanation:
          "True. Intuitive interfaces require less training and generate fewer support requests.",
      },
      {
        type: "tf",
        q: "Accessibility only benefits people who are completely blind.",
        answer: false,
        explanation:
          "False. Accessibility supports people with visual, hearing, motor, and cognitive disabilities.",
      },
      {
        type: "tf",
        q: "User satisfaction concerns how comfortable and positive users feel when using a system.",
        answer: true,
        explanation: "True. Satisfaction is one of the core goals of HCI.",
      },
      {
        type: "tf",
        q: "An interface includes screens, buttons, menus, keyboards, touchscreens, and voice commands.",
        answer: true,
        explanation:
          "True. Any input/output mechanism between human and computer is part of the interface.",
      },
      {
        type: "tf",
        q: "The HCI interaction cycle stops immediately after the user clicks a single button.",
        answer: false,
        explanation:
          "False. The cycle repeats continuously until the user finishes the task or stops interacting.",
      },
      {
        type: "tf",
        q: "Privacy, trust, and ethical design are important topics in modern HCI.",
        answer: true,
        explanation:
          "True. Modern HCI addresses ethical, trustworthy, and privacy-respecting technology.",
      },

      // 20 Fill in the Blank
      {
        type: "fill",
        q: "HCI stands for Human-Computer ________.",
        answer: "interaction",
        explanation:
          "Human-Computer Interaction studies how people design, implement, and use interactive computing systems.",
      },
      {
        type: "fill",
        q: "The means through which a user communicates with a computer (screens, buttons, menus) is called the ________.",
        answer: "interface",
        explanation:
          "The interface bridges communication between the human and the computer.",
      },
      {
        type: "fill",
        q: "How effectively, efficiently, and satisfactorily users achieve goals in a context is called ________.",
        answer: "usability",
        explanation:
          "Usability measures effectiveness, efficiency, and satisfaction.",
      },
      {
        type: "fill",
        q: "Providing the actual functions that users need makes a system ________.",
        answer: "useful",
        explanation: "A useful system delivers required functionality.",
      },
      {
        type: "fill",
        q: "How easily new users can learn to use a system is referred to as ________.",
        answer: "learnability",
        explanation: "Learnability measures ease of initial learning.",
      },
      {
        type: "fill",
        q: "Completing tasks with minimal time and effort once learned refers to ________.",
        answer: "efficiency",
        explanation:
          "Efficiency measures speed and low effort during skilled use.",
      },
      {
        type: "fill",
        q: "Preventing user errors and reducing their consequences is the goal of ________.",
        answer: "safety",
        explanation:
          "Safety protects users from severe or irreversible mistakes.",
      },
      {
        type: "fill",
        q: "Designing systems so people with disabilities can use them is called ________.",
        answer: "accessibility",
        explanation:
          "Accessibility ensures inclusive access for all abilities.",
      },
      {
        type: "fill",
        q: "The abbreviation UI stands for User ________.",
        answer: "interface",
        explanation: "UI stands for User Interface.",
      },
      {
        type: "fill",
        q: "The abbreviation UX stands for User ________.",
        answer: "experience",
        explanation: "UX stands for User Experience.",
      },
      {
        type: "fill",
        q: "Early 1940s–1950s computers relied on ________ processing using punched cards.",
        answer: "batch",
        explanation:
          "Batch processing grouped jobs together without live user interaction.",
      },
      {
        type: "fill",
        q: "In the 1960s, ________-sharing systems allowed multiple users to interact via terminals.",
        answer: "time",
        explanation: "Time-sharing enabled interactive terminal sessions.",
      },
      {
        type: "fill",
        q: "Douglas ________ demonstrated the computer mouse in 1968.",
        answer: "engelbart",
        explanation: "Douglas Engelbart presented the mouse in 1968.",
      },
      {
        type: "fill",
        q: "Xerox ________ pioneered windows, icons, menus, and pointing-device GUIs.",
        answer: "parc",
        explanation: "Xerox PARC developed foundational GUI elements.",
      },
      {
        type: "fill",
        q: "Interfaces combining voice, touch, and vision are known as ________ interfaces.",
        answer: "multimodal",
        explanation:
          "Multimodal interfaces integrate multiple input/output channels.",
      },
      {
        type: "fill",
        q: "The discipline studying attention, memory, and perception in HCI is ________.",
        answer: "psychology",
        explanation: "Psychology explains human cognitive processes.",
      },
      {
        type: "fill",
        q: "The discipline focused on physical comfort and human body limits is ________.",
        answer: "ergonomics",
        explanation:
          "Ergonomics aligns physical equipment with human capabilities.",
      },
      {
        type: "fill",
        q: "The discipline studying language and clear error messages in HCI is ________.",
        answer: "linguistics",
        explanation: "Linguistics informs clear wording and labels.",
      },
      {
        type: "fill",
        q: "In the 1980s, ________ metaphors made personal computers easier for beginners.",
        answer: "desktop",
        explanation:
          "The desktop metaphor mapped digital files and folders to familiar office objects.",
      },
      {
        type: "fill",
        q: "A human user starts the HCI interaction cycle with a specific ________ or task.",
        answer: "goal",
        explanation: "Every interaction begins with a user's goal.",
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
          <li><strong>Major Senses:</strong> Vision, hearing, and touch are primary in computer interaction (alongside smell and taste).</li>
          <li><strong>Vision:</strong> Relies on visual acuity, contrast, and color perception. <em>Never use color alone to convey critical status or errors.</em></li>
          <li><strong>Gestalt Principles:</strong> <strong>Proximity</strong> (close items group together), <strong>Similarity</strong> (alike items group together), <strong>Continuity</strong> (smooth patterns), <strong>Closure</strong> (completing incomplete forms), and <strong>Figure-Ground</strong> (distinguishing foreground object from background).</li>
          <li><strong>Hearing &amp; Touch:</strong> Pair important audio alerts with visual text; provide adequate touch-target size and tactile feedback.</li>
        </ul>
      </div>

      <div class="note-block">
        <h3>2.2 Human Memory Systems</h3>
        <div class="diagram-box">[Sensory Memory (ms)] &rarr; [Short-Term / Working Memory (Limited)] &rarr; [Long-Term Memory (Episodic, Semantic, Procedural)]</div>
        <ul>
          <li><strong>Long-Term Memory Types:</strong> <em>Episodic</em> (personal events), <em>Semantic</em> (facts and meanings), and <em>Procedural</em> (motor/cognitive skills like typing).</li>
          <li><strong>Recognition vs. Recall:</strong> Visible menus rely on <em>recognition</em> (low memory load); typing commands from memory relies on <em>recall</em> (high memory load).</li>
        </ul>
      </div>

      <div class="note-block">
        <h3>2.3 Reasoning, Mental Models, Error &amp; Diversity</h3>
        <table class="note-table">
          <tr><th>Concept</th><th>Definition</th><th>Example</th></tr>
          <tr><td><strong>Deductive / Inductive / Abductive</strong></td><td>Rule-to-case / Observation-to-pattern / Hypothesis for observation</td><td>Suspecting Wi-Fi outage when websites fail to load</td></tr>
          <tr><td><strong>Slip</strong></td><td>Right goal/plan, wrong physical action</td><td>Clicking "Delete" instead of nearby "Save"</td></tr>
          <tr><td><strong>Mistake</strong></td><td>Incorrect plan or misunderstanding of rules</td><td>Selecting wrong loan option due to misreading interest rules</td></tr>
        </table>
        <div class="callout"><strong>Emotion, Trust &amp; Diversity:</strong> Predictable feedback builds confidence and trust. Inclusive design &amp; WCAG accommodate differences in age, physical/cognitive abilities, expertise, language, and network speed.</div>
      </div>
    `,
    questions: [
      // 20 Multiple Choice
      {
        type: "mcq",
        q: "Which three human senses are most important in standard computer interactions?",
        options: [
          "Smell, taste, and balance",
          "Vision, hearing, and touch",
          "Taste, vision, and smell",
          "Hearing, smell, and taste",
        ],
        answer: 1,
        explanation:
          "Vision, hearing, and touch are the primary senses used in HCI.",
      },
      {
        type: "mcq",
        q: "What is visual acuity?",
        options: [
          "The ability to hear high-pitched alerts",
          "The ability to distinguish fine visual details",
          "Remembering passwords long-term",
          "Typing speed on a keyboard",
        ],
        answer: 1,
        explanation:
          "Visual acuity is the sharpness of vision needed to read small text and fine details.",
      },
      {
        type: "mcq",
        q: "Why should an online form never indicate an error using red color alone?",
        options: [
          "Red uses too much battery",
          "Users with color-vision deficiencies or poor lighting may not perceive the color cue",
          "Red text cannot be translated",
          "Browsers block red borders",
        ],
        answer: 1,
        explanation:
          "Always combine color with text messages or icons so color-blind users can understand errors.",
      },
      {
        type: "mcq",
        q: "Which Gestalt principle explains why placing a text label right next to its input box shows they belong together?",
        options: ["Closure", "Proximity", "Continuity", "Figure-ground"],
        answer: 1,
        explanation:
          "Proximity states that elements placed close together are perceived as related.",
      },
      {
        type: "mcq",
        q: "Which Gestalt principle states that elements looking alike (same shape/style) are perceived as belonging together?",
        options: ["Similarity", "Closure", "Proximity", "Feedback"],
        answer: 0,
        explanation: "Similarity groups visually alike elements together.",
      },
      {
        type: "mcq",
        q: "Which Gestalt principle enables users to distinguish a popup dialog box from the dimmed background page?",
        options: ["Closure", "Figure-ground", "Continuity", "Abduction"],
        answer: 1,
        explanation:
          "Figure-ground separates a foreground object from its background.",
      },
      {
        type: "mcq",
        q: "From the computer's perspective, what is a user typing their name on a keyboard?",
        options: ["Output", "Input", "Feedback", "Sensory trace"],
        answer: 1,
        explanation:
          "The human produces a motor action, and the keyboard supplies input to the computer.",
      },
      {
        type: "mcq",
        q: "Which memory system briefly retains visual or auditory traces for only milliseconds after a stimulus disappears?",
        options: [
          "Long-term memory",
          "Sensory memory",
          "Procedural memory",
          "Semantic memory",
        ],
        answer: 1,
        explanation:
          "Sensory memory holds fleeting sensory impressions very briefly.",
      },
      {
        type: "mcq",
        q: "Which memory system holds and manipulates information temporarily while performing a multi-step calculation?",
        options: [
          "Working memory",
          "Episodic memory",
          "Procedural memory",
          "Sensory memory",
        ],
        answer: 0,
        explanation:
          "Working memory temporarily holds and processes active information during a task.",
      },
      {
        type: "mcq",
        q: "Remembering your personal experience of the first time you registered for university courses uses which memory?",
        options: [
          "Semantic memory",
          "Episodic memory",
          "Procedural memory",
          "Sensory memory",
        ],
        answer: 1,
        explanation: "Episodic memory stores personal experiences and events.",
      },
      {
        type: "mcq",
        q: "Knowing the factual meaning that a printer produces hard copies uses which type of long-term memory?",
        options: [
          "Semantic memory",
          "Episodic memory",
          "Sensory memory",
          "Working memory",
        ],
        answer: 0,
        explanation:
          "Semantic memory stores general facts, concepts, and meanings.",
      },
      {
        type: "mcq",
        q: "Typing on a keyboard without consciously thinking about every finger movement relies on which memory?",
        options: [
          "Procedural memory",
          "Episodic memory",
          "Sensory memory",
          "Short-term memory",
        ],
        answer: 0,
        explanation:
          "Procedural memory stores learned motor and cognitive skills.",
      },
      {
        type: "mcq",
        q: "Selecting an option from a visible toolbar button rather than typing a command from memory demonstrates:",
        options: ["Recall", "Recognition", "Abduction", "Slips"],
        answer: 1,
        explanation:
          "Recognition lets users identify visible options, reducing memory burden.",
      },
      {
        type: "mcq",
        q: "A user notices several apps put account settings under a profile icon and assumes a new app does the same. What reasoning is this?",
        options: [
          "Deductive reasoning",
          "Inductive reasoning",
          "Abductive reasoning",
          "Procedural reasoning",
        ],
        answer: 1,
        explanation:
          "Inductive reasoning generalizes patterns from past observations.",
      },
      {
        type: "mcq",
        q: "A webpage fails to load, so a user hypothesizes that the Wi-Fi is disconnected. What reasoning is this?",
        options: [
          "Deductive reasoning",
          "Inductive reasoning",
          "Abductive reasoning",
          "Sensory reasoning",
        ],
        answer: 2,
        explanation:
          "Abductive reasoning forms a likely explanation (hypothesis) for an observation.",
      },
      {
        type: "mcq",
        q: "What is a 'mental model' in HCI?",
        options: [
          "The CPU architecture diagram",
          "A user's internal understanding of how a system works",
          "A physical clay prototype",
          "A database schema",
        ],
        answer: 1,
        explanation:
          "Users form mental models through experience, observation, and system feedback.",
      },
      {
        type: "mcq",
        q: "A user intends to click 'Save' but accidentally clicks 'Delete' because the buttons are too close together. This error is a:",
        options: ["Mistake", "Slip", "Semantic error", "Deductive error"],
        answer: 1,
        explanation:
          "A slip occurs when the user has the right intention/plan but executes the wrong physical action.",
      },
      {
        type: "mcq",
        q: "A user misunderstands bank interest rules and intentionally selects the wrong loan option. This error is a:",
        options: ["Slip", "Mistake", "Sensory trace", "Hardware fault"],
        answer: 1,
        explanation:
          "A mistake occurs when the user forms an incorrect plan or misunderstands the rules.",
      },
      {
        type: "mcq",
        q: "Which error message follows best HCI principles?",
        options: [
          "Invalid input.",
          "Error 400.",
          "Enter a valid email address, such as student@example.com.",
          "Bad data.",
        ],
        answer: 2,
        explanation:
          "Helpful error messages identify the exact problem and show how to fix it.",
      },
      {
        type: "mcq",
        q: "Which guidelines provide widely used web accessibility standards?",
        options: [
          "WCAG (Web Content Accessibility Guidelines)",
          "BIOS",
          "ASCII",
          "HTTP",
        ],
        answer: 0,
        explanation:
          "WCAG provides standard accessibility guidance for web interfaces.",
      },

      // 20 True/False
      {
        type: "tf",
        q: "Human information output includes actions like typing, speaking commands, and gesturing.",
        answer: true,
        explanation: "True. Human output refers to motor and vocal responses.",
      },
      {
        type: "tf",
        q: "Dark text on a light background generally has higher contrast and readability than light-gray text on white.",
        answer: true,
        explanation: "True. High contrast makes text easier to distinguish.",
      },
      {
        type: "tf",
        q: "The Gestalt principle of Closure means people perceive incomplete visual forms as complete shapes.",
        answer: true,
        explanation:
          "True. The human visual system mentally fills in gaps to perceive complete shapes.",
      },
      {
        type: "tf",
        q: "Auditory alerts should be the sole method of conveying critical warnings in an application.",
        answer: false,
        explanation:
          "False. Users may be deaf, hard of hearing, or in noisy rooms; always provide visual alternatives.",
      },
      {
        type: "tf",
        q: "From the computer's perspective, a monitor displaying text is providing output.",
        answer: true,
        explanation:
          "True. Reading a screen is human input and computer output.",
      },
      {
        type: "tf",
        q: "Short-term memory has unlimited capacity and stores information permanently without rehearsal.",
        answer: false,
        explanation:
          "False. Short-term memory is strictly limited in both capacity and duration.",
      },
      {
        type: "tf",
        q: "Displaying selected courses and total credits on the same registration screen reduces working memory load.",
        answer: true,
        explanation:
          "True. Keeping key details visible avoids forcing recall across screens.",
      },
      {
        type: "tf",
        q: "Recall places a lower memory burden on beginners than recognition.",
        answer: false,
        explanation:
          "False. Recognition is much easier for novices because options are visible.",
      },
      {
        type: "tf",
        q: "Deductive reasoning applies a general rule to a specific case to reach a guaranteed conclusion.",
        answer: true,
        explanation:
          "True. Deductive reasoning derives specific conclusions from general rules.",
      },
      {
        type: "tf",
        q: "A good interface violates a user's mental model to keep them surprised.",
        answer: false,
        explanation:
          "False. Interfaces should behave predictably and match user expectations.",
      },
      {
        type: "tf",
        q: "Expert users often benefit from keyboard shortcuts even though novices prefer visible menus.",
        answer: true,
        explanation:
          "True. Good systems support both novice recognition and expert efficiency.",
      },
      {
        type: "tf",
        q: "All human errors on computers are caused solely by user carelessness.",
        answer: false,
        explanation:
          "False. Confusing layouts, poor labels, and close buttons contribute heavily to errors.",
      },
      {
        type: "tf",
        q: "Forgetting to attach a file before submitting an email is a memory-related error.",
        answer: true,
        explanation:
          "True. Memory lapses occur when a user forgets a required step.",
      },
      {
        type: "tf",
        q: "Providing Undo and Redo helps users recover safely from errors.",
        answer: true,
        explanation:
          "True. Reversibility supports safe exploration and error recovery.",
      },
      {
        type: "tf",
        q: "If a banking app freezes after a transfer without feedback, users may feel anxious about whether the money was sent.",
        answer: true,
        explanation: "True. Lack of feedback creates anxiety and uncertainty.",
      },
      {
        type: "tf",
        q: "A system builds user trust by explaining why personal data is collected and communicating errors honestly.",
        answer: true,
        explanation: "True. Transparency and security foster user trust.",
      },
      {
        type: "tf",
        q: "Every user has identical visual acuity, motor control, device speed, and language skills.",
        answer: false,
        explanation:
          "False. Individual differences vary widely across users and contexts.",
      },
      {
        type: "tf",
        q: "Inclusive design seeks to avoid excluding users through poor design choices.",
        answer: true,
        explanation:
          "True. Inclusive design considers diverse abilities, devices, and environments.",
      },
      {
        type: "tf",
        q: "User-centered design involves testing prototypes with representative users and refining based on evidence.",
        answer: true,
        explanation:
          "True. User-centered design places users and their tasks at the center of development.",
      },
      {
        type: "tf",
        q: "Tactile feedback, such as a slight vibration when pressing a virtual key, helps confirm an action occurred.",
        answer: true,
        explanation: "True. Haptic/tactile cues reinforce touch actions.",
      },

      // 20 Fill in the Blank
      {
        type: "fill",
        q: "The ability to distinguish fine visual details is called visual ________.",
        answer: "acuity",
        explanation: "Visual acuity measures sharpness of sight.",
      },
      {
        type: "fill",
        q: "The difference in brightness or color between text and its background is called ________.",
        answer: "contrast",
        explanation: "Sufficient contrast ensures legibility.",
      },
      {
        type: "fill",
        q: "The Gestalt principle stating that elements close together appear related is ________.",
        answer: "proximity",
        explanation: "Proximity groups nearby elements.",
      },
      {
        type: "fill",
        q: "The Gestalt principle stating that alike elements appear grouped together is ________.",
        answer: "similarity",
        explanation: "Similarity groups elements sharing visual attributes.",
      },
      {
        type: "fill",
        q: "Distinguishing a main foreground object from its background is the Gestalt principle of ________-ground.",
        answer: "figure",
        explanation: "Figure-ground separates foreground from background.",
      },
      {
        type: "fill",
        q: "Memory that briefly retains sensory impressions for milliseconds is ________ memory.",
        answer: "sensory",
        explanation: "Sensory memory holds fleeting visual/auditory traces.",
      },
      {
        type: "fill",
        q: "The mental system used to hold and manipulate data during an active task is ________ memory.",
        answer: "working",
        explanation: "Working memory processes active information.",
      },
      {
        type: "fill",
        q: "Long-term memory for personal experiences and events is ________ memory.",
        answer: "episodic",
        explanation: "Episodic memory records personal events.",
      },
      {
        type: "fill",
        q: "Long-term memory for general facts, concepts, and meanings is ________ memory.",
        answer: "semantic",
        explanation: "Semantic memory stores factual knowledge.",
      },
      {
        type: "fill",
        q: "Long-term memory for learned skills like typing is ________ memory.",
        answer: "procedural",
        explanation: "Procedural memory stores motor and cognitive procedures.",
      },
      {
        type: "fill",
        q: "Retrieving a command from memory without seeing it is called ________.",
        answer: "recall",
        explanation: "Recall requires memory retrieval without cues.",
      },
      {
        type: "fill",
        q: "Identifying an option presented on a visible menu is called ________.",
        answer: "recognition",
        explanation: "Recognition relies on visible cues.",
      },
      {
        type: "fill",
        q: "Reasoning that applies a general rule to a specific case is ________ reasoning.",
        answer: "deductive",
        explanation:
          "Deductive reasoning moves from general rule to specific conclusion.",
      },
      {
        type: "fill",
        q: "Reasoning that forms a likely explanation for an observation is ________ reasoning.",
        answer: "abductive",
        explanation:
          "Abductive reasoning generates hypotheses for observations.",
      },
      {
        type: "fill",
        q: "A user's internal understanding of how a system operates is a ________ model.",
        answer: "mental",
        explanation: "Mental models guide user expectations.",
      },
      {
        type: "fill",
        q: "When a user has the right goal but executes the wrong physical action, the error is a ________.",
        answer: "slip",
        explanation: "Slips are execution errors despite correct intentions.",
      },
      {
        type: "fill",
        q: "When a user forms an incorrect plan or misunderstands rules, the error is a ________.",
        answer: "mistake",
        explanation: "Mistakes are planning or judgment errors.",
      },
      {
        type: "fill",
        q: "Information returned by a system about the result of an action is called ________.",
        answer: "feedback",
        explanation: "Feedback informs users of system status.",
      },
      {
        type: "fill",
        q: "The abbreviation WCAG stands for Web Content ________ Guidelines.",
        answer: "accessibility",
        explanation: "WCAG defines web accessibility standards.",
      },
      {
        type: "fill",
        q: "Placing users, their tasks, and contexts at the center of development is ________-centered design.",
        answer: "user",
        explanation:
          "User-centered design involves users throughout design and evaluation.",
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
          <li><strong>Input Devices:</strong> Keyboard (standard, ergonomic, mechanical, virtual), mouse (click, double-click, right-click, drag-and-drop, scroll), touchscreen (tap, double-tap, swipe, pinch, zoom, long press), microphone, scanner, camera, joystick, trackball, graphics tablet, barcode/fingerprint reader, eye tracker.</li>
          <li><strong>Output Devices:</strong> Monitors (LCD, LED, OLED; resolution, brightness, contrast, refresh rate), printers (inkjet, laser, thermal), speakers/headphones, projectors, and <strong>haptic devices</strong> (vibration, force feedback).</li>
        </ul>
      </div>

      <div class="note-block">
        <h3>3.2 Virtual Reality (VR) &amp; Physical Interaction</h3>
        <ul>
          <li><strong>5 Characteristics of VR:</strong> Immersion, Interaction, <strong>Presence</strong> (subjective feeling of being inside the virtual world), Real-time response, and 3D environment.</li>
          <li><strong>VR Components:</strong> Head-mounted display (HMD), motion tracking sensors, hand controllers, audio output, and processing unit.</li>
          <li><strong>Physical Interaction Modes:</strong> Direct manipulation, touch-based, gesture-based, voice-based, and haptic interaction.</li>
        </ul>
      </div>

      <div class="note-block">
        <h3>3.3 Computer Memory Hierarchy &amp; Response Time</h3>
        <div class="diagram-box">[CPU Registers (Fastest/Smallest)] &rarr; [Cache Memory] &rarr; [RAM (Volatile)] &rarr; [Secondary Storage: SSD/HDD (Persistent)]</div>
        <ul>
          <li><strong>RAM vs. ROM:</strong> RAM is volatile read/write working memory for active apps; ROM is non-volatile firmware storage.</li>
          <li><strong>Response Time:</strong> Elapsed time between user action and system response. Delays require progress indicators so users know processing is ongoing.</li>
        </ul>
      </div>
    `,
    questions: [
      // 20 Multiple Choice
      {
        type: "mcq",
        q: "In HCI, how is a computer primarily studied?",
        options: [
          "Only as a math calculator",
          "As an interactive system that communicates with human users",
          "Only as electrical wiring",
          "As a non-interactive storage box",
        ],
        answer: 1,
        explanation:
          "HCI studies the computer as an interactive partner that communicates with users.",
      },
      {
        type: "mcq",
        q: "Which hardware translates human actions into signals a computer can process?",
        options: [
          "Output devices",
          "Input devices",
          "Power supplies",
          "Projectors",
        ],
        answer: 1,
        explanation:
          "Input devices capture human actions or environmental data.",
      },
      {
        type: "mcq",
        q: "Which touchscreen gesture is typically used to reveal secondary contextual options?",
        options: ["Pinch", "Long press", "Swipe", "Double-tap"],
        answer: 1,
        explanation:
          "Long-pressing on a touchscreen commonly displays additional options.",
      },
      {
        type: "mcq",
        q: "Which input device detects eye position and gaze movement?",
        options: [
          "Trackball",
          "Eye tracker",
          "Barcode reader",
          "Thermal printer",
        ],
        answer: 1,
        explanation: "An eye tracker monitors where a user is looking.",
      },
      {
        type: "mcq",
        q: "Which monitor characteristic determines how many times per second the display updates its image?",
        options: ["Refresh rate", "Screen size", "Printer DPI", "Cable length"],
        answer: 0,
        explanation: "Refresh rate measures display updates per second (Hz).",
      },
      {
        type: "mcq",
        q: "Which output category provides physical feedback through vibration, force, or movement?",
        options: [
          "Optical projectors",
          "Haptic devices",
          "Thermal printers",
          "Scanners",
        ],
        answer: 1,
        explanation:
          "Haptic devices communicate via tactile vibration or force feedback.",
      },
      {
        type: "mcq",
        q: "In Virtual Reality (VR), what is 'immersion'?",
        options: [
          "The weight of the headset",
          "The extent to which technology surrounds the user's senses",
          "The price of the GPU",
          "Printing a 3D blueprint",
        ],
        answer: 1,
        explanation:
          "Immersion describes how thoroughly VR surrounds the user's senses.",
      },
      {
        type: "mcq",
        q: "In Virtual Reality (VR), what term refers to the user's subjective feeling of actually being inside the virtual world?",
        options: ["Resolution", "Presence", "Latency", "Caching"],
        answer: 1,
        explanation:
          "Presence is the psychological sensation of 'being there' in a virtual space.",
      },
      {
        type: "mcq",
        q: "Which component is worn on the head to display stereoscopic 3D visuals in VR?",
        options: [
          "Trackball",
          "Head-mounted display (HMD)",
          "Flatbed scanner",
          "Barcode reader",
        ],
        answer: 1,
        explanation:
          "An HMD delivers immersive 3D visuals directly to the user's eyes.",
      },
      {
        type: "mcq",
        q: "Dragging a document icon directly into a folder icon is an example of:",
        options: [
          "Command-line batching",
          "Direct manipulation",
          "Voice dictation",
          "ROM flashing",
        ],
        answer: 1,
        explanation:
          "Direct manipulation lets users act directly on continuously visible digital objects.",
      },
      {
        type: "mcq",
        q: "Which is a major advantage of voice-based interaction?",
        options: [
          "Works silently in loud stadiums",
          "Supports hands-free operation and users with motor disabilities",
          "Never makes speech recognition errors",
          "Requires zero privacy precautions",
        ],
        answer: 1,
        explanation:
          "Voice interaction allows hands-free control and aids users with motor impairments.",
      },
      {
        type: "mcq",
        q: "Which is a common limitation of voice-based interfaces?",
        options: [
          "Background noise, accents, recognition errors, and privacy concerns",
          "Requires a mouse",
          "Cannot run on smartphones",
          "Only works in VR",
        ],
        answer: 0,
        explanation:
          "Noise, accents, specialized names, and privacy issues challenge voice interfaces.",
      },
      {
        type: "mcq",
        q: "Which storage tier in the computer memory hierarchy is the fastest and smallest, located inside the CPU?",
        options: [
          "CPU registers",
          "RAM",
          "Solid-State Drive (SSD)",
          "Optical disc",
        ],
        answer: 0,
        explanation:
          "CPU registers are ultra-fast storage locations directly inside the processor.",
      },
      {
        type: "mcq",
        q: "Which small, high-speed memory stores frequently needed data close to the CPU?",
        options: ["Cache memory", "Hard Disk Drive", "USB flash drive", "ROM"],
        answer: 0,
        explanation:
          "Cache memory speeds up access to frequently used instructions and data.",
      },
      {
        type: "mcq",
        q: "Which memory is volatile and loses its stored contents when the computer is turned off?",
        options: ["RAM", "ROM", "SSD", "Optical disc"],
        answer: 0,
        explanation:
          "RAM temporarily holds active application data and clears when power is lost.",
      },
      {
        type: "mcq",
        q: "Which non-volatile primary memory stores essential firmware instructions permanently?",
        options: ["RAM", "ROM (Read-Only Memory)", "CPU registers", "Cache"],
        answer: 1,
        explanation: "ROM retains firmware instructions even without power.",
      },
      {
        type: "mcq",
        q: "Which of the following is an example of secondary persistent storage?",
        options: [
          "CPU register",
          "Solid-State Drive (SSD)",
          "L1 Cache",
          "Volatile RAM",
        ],
        answer: 1,
        explanation:
          "SSDs and HDDs retain files persistently when powered off.",
      },
      {
        type: "mcq",
        q: "How does insufficient RAM negatively affect HCI?",
        options: [
          "It makes the monitor brighter",
          "Applications become slow and lag when switching windows",
          "It improves multitasking",
          "It increases font contrast",
        ],
        answer: 1,
        explanation:
          "Low RAM causes sluggish responsiveness and window-switching delays.",
      },
      {
        type: "mcq",
        q: "What is 'response time' in an interactive system?",
        options: [
          "The time a user spends sleeping",
          "The time elapsed between a user's action and the system's reaction",
          "The warranty period of a keyboard",
          "The boot time of a printer",
        ],
        answer: 1,
        explanation:
          "Response time is the delay from user input to system feedback.",
      },
      {
        type: "mcq",
        q: "What should an interface display if a background task takes 20 seconds to process?",
        options: [
          "A blank frozen screen",
          "A progress indicator or loading message",
          "An error code immediately",
          "Nothing at all",
        ],
        answer: 1,
        explanation:
          "Progress indicators reassure users that the system is still working.",
      },

      // 20 True/False
      {
        type: "tf",
        q: "A touchscreen acts solely as an output device and cannot detect user touch.",
        answer: false,
        explanation: "False. A touchscreen is both an input and output device.",
      },
      {
        type: "tf",
        q: "Touchscreen buttons need adequate size and spacing to prevent accidental activation.",
        answer: true,
        explanation: "True. Proper target size and spacing reduce mis-taps.",
      },
      {
        type: "tf",
        q: "A scanner converts physical paper documents into digital images.",
        answer: true,
        explanation: "True. Scanners digitize printed materials.",
      },
      {
        type: "tf",
        q: "Force-feedback steering wheels and vibrating game controllers are examples of haptic devices.",
        answer: true,
        explanation:
          "True. Haptics provide physical force or vibration feedback.",
      },
      {
        type: "tf",
        q: "Virtual Reality (VR) environments typically represent objects and spaces in three dimensions.",
        answer: true,
        explanation:
          "True. 3D spatial representation is a core VR characteristic.",
      },
      {
        type: "tf",
        q: "Slow response times in VR have no impact on user comfort or presence.",
        answer: false,
        explanation:
          "False. Real-time response is essential in VR to maintain presence and prevent discomfort.",
      },
      {
        type: "tf",
        q: "Direct manipulation replaces complex abstract commands with visible objects and immediate feedback.",
        answer: true,
        explanation: "True. Users manipulate visible objects directly.",
      },
      {
        type: "tf",
        q: "Gesture-based interaction allows users to control systems using hand or body movements.",
        answer: true,
        explanation:
          "True. Gestures translate physical motion into system commands.",
      },
      {
        type: "tf",
        q: "CPU registers are slower than Hard Disk Drives (HDDs).",
        answer: false,
        explanation:
          "False. CPU registers are the fastest storage tier in the hierarchy.",
      },
      {
        type: "tf",
        q: "Ordinary RAM retains all open documents after a sudden power outage.",
        answer: false,
        explanation:
          "False. RAM is volatile and clears when power is turned off.",
      },
      {
        type: "tf",
        q: "ROM is non-volatile memory used to store essential firmware instructions.",
        answer: true,
        explanation: "True. ROM preserves its contents without power.",
      },
      {
        type: "tf",
        q: "Secondary storage includes HDDs, SSDs, USB flash drives, and memory cards.",
        answer: true,
        explanation:
          "True. Secondary storage provides persistent data storage.",
      },
      {
        type: "tf",
        q: "Technical performance such as memory and CPU speed directly shapes user experience.",
        answer: true,
        explanation:
          "True. Hardware and software responsiveness are vital to good HCI.",
      },
      {
        type: "tf",
        q: "If a form takes 30 seconds to submit without any status indicator, users may think the system crashed.",
        answer: true,
        explanation:
          "True. Silence during long delays causes users to assume failure.",
      },
      {
        type: "tf",
        q: "Pinching on a touchscreen is commonly used to zoom in or out.",
        answer: true,
        explanation: "True. Pinch-to-zoom is a standard multi-touch gesture.",
      },
      {
        type: "tf",
        q: "A graphics tablet is an input device used for drawing and handwriting.",
        answer: true,
        explanation: "True. Graphics tablets capture stylus drawing input.",
      },
      {
        type: "tf",
        q: "Thermal, inkjet, and laser are common types of printers.",
        answer: true,
        explanation: "True. These are standard printer technologies.",
      },
      {
        type: "tf",
        q: "Motion tracking sensors are used in VR to detect user head and hand movements.",
        answer: true,
        explanation:
          "True. Tracking sensors update the virtual view as the user moves.",
      },
      {
        type: "tf",
        q: "Graceful handling of failures is an important HCI implication of computer performance.",
        answer: true,
        explanation:
          "True. Systems should recover cleanly and inform users when errors happen.",
      },
      {
        type: "tf",
        q: "A fingerprint reader is an output device that prints biometric cards.",
        answer: false,
        explanation: "False. A fingerprint reader is a biometric input device.",
      },

      {
        type: "fill",
        q: "Hardware components used to enter data or commands into a computer are ________ devices.",
        answer: "input",
        explanation: "Input devices send user actions to the computer.",
      },
      {
        type: "fill",
        q: "Hardware components that present processed information to the user are ________ devices.",
        answer: "output",
        explanation: "Output devices display or communicate results.",
      },
      {
        type: "fill",
        q: "Devices that provide physical feedback via vibration or force are called ________ devices.",
        answer: "haptic",
        explanation: "Haptic devices deliver tactile feedback.",
      },
      {
        type: "fill",
        q: "A computer-generated interactive 3D simulated environment is Virtual ________.",
        answer: "reality",
        explanation:
          "Virtual Reality (VR) immerses users in a simulated 3D environment.",
      },
      {
        type: "fill",
        q: "In VR, a user's subjective feeling of being inside the virtual world is called ________.",
        answer: "presence",
        explanation: "Presence is the feeling of 'being there'.",
      },
      {
        type: "fill",
        q: "The VR headset worn over the eyes is called a head-mounted ________.",
        answer: "display",
        explanation:
          "An HMD (Head-Mounted Display) renders stereoscopic VR visuals.",
      },
      {
        type: "fill",
        q: "Interacting directly with visible icons (like dragging a file into a folder) is direct ________.",
        answer: "manipulation",
        explanation: "Direct manipulation lets users act on visible objects.",
      },
      {
        type: "fill",
        q: "Volatile working memory that holds active programs and data is ________.",
        answer: "ram",
        explanation: "RAM stands for Random Access Memory.",
      },
      {
        type: "fill",
        q: "Non-volatile memory storing essential firmware instructions is ________.",
        answer: "rom",
        explanation: "ROM stands for Read-Only Memory.",
      },
      {
        type: "fill",
        q: "Small, high-speed memory located close to the CPU for frequently accessed data is ________ memory.",
        answer: "cache",
        explanation: "Cache memory reduces data access latency.",
      },
      {
        type: "fill",
        q: "The fastest, smallest storage locations directly inside the processor are CPU ________.",
        answer: "registers",
        explanation: "CPU registers sit at the top of the memory hierarchy.",
      },
      {
        type: "fill",
        q: "Persistent storage such as SSDs and HDDs is classified as ________ storage.",
        answer: "secondary",
        explanation: "Secondary storage retains data without power.",
      },
      {
        type: "fill",
        q: "The elapsed time between a user's action and the system's reaction is ________ time.",
        answer: "response",
        explanation: "Response time measures system reaction speed.",
      },
      {
        type: "fill",
        q: "During slow operations, interfaces should display a ________ indicator to show work is continuing.",
        answer: "progress",
        explanation: "Progress indicators communicate ongoing processing.",
      },
      {
        type: "fill",
        q: "A pointing device that controls a cursor using a rotating ball is a ________.",
        answer: "trackball",
        explanation:
          "A trackball uses a stationary housing with a rotating ball.",
      },
      {
        type: "fill",
        q: "An input device that captures sound for voice commands and dictation is a ________.",
        answer: "microphone",
        explanation: "Microphones capture audio input.",
      },
      {
        type: "fill",
        q: "An input device that detects eye position and gaze movement is an eye ________.",
        answer: "tracker",
        explanation: "Eye trackers monitor gaze direction.",
      },
      {
        type: "fill",
        q: "The touchscreen gesture of moving two fingers together or apart to scale content is ________.",
        answer: "pinch",
        explanation: "Pinching zooms content in or out.",
      },
      {
        type: "fill",
        q: "The display specification measuring how frequently the image updates per second is ________ rate.",
        answer: "refresh",
        explanation: "Refresh rate determines visual smoothness.",
      },
      {
        type: "fill",
        q: "The extent to which VR technology surrounds the user's senses is called ________.",
        answer: "immersion",
        explanation: "Immersion surrounds sensory channels.",
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
        <div class="diagram-box">Execution (4 stages): (1) Form Goal &rarr; (2) Form Intention &rarr; (3) Specify Action &rarr; (4) Execute Action<br>Evaluation (3 stages): (5) Perceive State &rarr; (6) Interpret State &rarr; (7) Evaluate Outcome</div>
        <ul>
          <li><strong>Gulf of Execution:</strong> Gap between user goals and knowing which actions the interface allows. <em>Reduce via:</em> familiar labels, visible controls, logical menus, recognizable icons.</li>
          <li><strong>Gulf of Evaluation:</strong> Gap between actual system state and user understanding. <em>Reduce via:</em> timely feedback, confirmations, progress bars, clear error messages.</li>
        </ul>
      </div>

      <div class="note-block">
        <h3>4.2 Three Branches of Ergonomics</h3>
        <ul>
          <li><strong>Physical Ergonomics:</strong> Posture, adjustable seating, monitor height, keyboard/mouse placement, preventing repetitive strain injuries.</li>
          <li><strong>Cognitive Ergonomics:</strong> Attention, memory, decision-making, mental workload, and minimizing human error.</li>
          <li><strong>Environmental Ergonomics:</strong> Lighting, noise levels, temperature, air quality, and workspace arrangement.</li>
        </ul>
      </div>

      <div class="note-block">
        <h3>4.3 Seven Interaction Styles</h3>
        <table class="note-table">
          <tr><th>Style</th><th>Advantage</th><th>Disadvantage</th></tr>
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
        q: "What are the four basic elements of interaction?",
        options: [
          "Monitor, printer, scanner, speaker",
          "User, input, system processing, and output/feedback",
          "RAM, ROM, cache, CPU",
          "Mouse, desk, chair, lamp",
        ],
        answer: 1,
        explanation:
          "Interaction consists of the user, input, system processing, and output/feedback.",
      },
      {
        type: "mcq",
        q: "Which two main phases make up Donald Norman's interaction model?",
        options: [
          "Input and Storage",
          "Execution and Evaluation",
          "Compilation and Linking",
          "Hardware and Software",
        ],
        answer: 1,
        explanation:
          "Norman divides interaction into Execution (doing) and Evaluation (checking results).",
      },
      {
        type: "mcq",
        q: "How many stages of action are in Norman's Execution-Evaluation model?",
        options: ["Three", "Five", "Seven", "Ten"],
        answer: 2,
        explanation:
          "Norman's model defines 7 stages: 4 for execution and 3 for evaluation.",
      },
      {
        type: "mcq",
        q: "Which stage is the very first step in Norman's seven stages of action?",
        options: [
          "Perceive the system state",
          "Form the goal",
          "Execute the action",
          "Interpret the state",
        ],
        answer: 1,
        explanation: "Interaction begins when the user forms a goal.",
      },
      {
        type: "mcq",
        q: "What is the 'Gulf of Execution'?",
        options: [
          "The time a CPU takes to boot",
          "The gap between what users want to do and knowing which actions the interface allows",
          "The gap between system state and user understanding",
          "Neck strain from a low monitor",
        ],
        answer: 1,
        explanation:
          "The Gulf of Execution measures how hard it is to figure out how to perform an action on the interface.",
      },
      {
        type: "mcq",
        q: "A user wants to download a PDF but cannot find any download button on the page. This illustrates a large:",
        options: [
          "Gulf of Evaluation",
          "Gulf of Execution",
          "Environmental hazard",
          "RAM bottleneck",
        ],
        answer: 1,
        explanation:
          "Not knowing how to trigger the desired action is a Gulf of Execution.",
      },
      {
        type: "mcq",
        q: "What is the 'Gulf of Evaluation'?",
        options: [
          "The gap between actual system state and the user's ability to understand what happened",
          "The distance between keyboard and mouse",
          "The cost of a computer lab",
          "Typing commands in a terminal",
        ],
        answer: 0,
        explanation:
          "The Gulf of Evaluation reflects how hard it is to tell what state the system is in after an action.",
      },
      {
        type: "mcq",
        q: "A user clicks 'Submit' and receives zero confirmation or progress message, leaving them unsure if it worked. This is a large:",
        options: [
          "Gulf of Execution",
          "Gulf of Evaluation",
          "Physical ergonomics issue",
          "Command-line syntax error",
        ],
        answer: 1,
        explanation: "Lack of feedback creates a Gulf of Evaluation.",
      },
      {
        type: "mcq",
        q: "How can designers reduce the Gulf of Evaluation?",
        options: [
          "Hide all status messages",
          "Provide timely feedback, confirmation messages, and progress indicators",
          "Use smaller fonts",
          "Remove undo buttons",
        ],
        answer: 1,
        explanation:
          "Clear, timely feedback makes system state easy to perceive and interpret.",
      },
      {
        type: "mcq",
        q: "Which branch of ergonomics focuses on posture, seating, monitor height, and preventing repetitive strain injuries?",
        options: [
          "Cognitive ergonomics",
          "Physical ergonomics",
          "Environmental ergonomics",
          "Linguistic ergonomics",
        ],
        answer: 1,
        explanation:
          "Physical ergonomics aligns physical equipment with human anatomy and movement.",
      },
      {
        type: "mcq",
        q: "Which branch of ergonomics addresses mental workload, attention, memory, and decision-making?",
        options: [
          "Physical ergonomics",
          "Cognitive ergonomics",
          "Environmental ergonomics",
          "Thermal ergonomics",
        ],
        answer: 1,
        explanation:
          "Cognitive ergonomics concerns mental processes and cognitive workload.",
      },
      {
        type: "mcq",
        q: "Poor computer lab lighting, high background noise, and uncomfortable room temperature fall under:",
        options: [
          "Physical ergonomics",
          "Cognitive ergonomics",
          "Environmental ergonomics",
          "Software ergonomics",
        ],
        answer: 2,
        explanation:
          "Environmental ergonomics covers surrounding workspace conditions.",
      },
      {
        type: "mcq",
        q: "Which interaction style requires users to type exact text commands from memory?",
        options: [
          "Menu-based interaction",
          "Command-line interface (CLI)",
          "Direct manipulation",
          "Gesture-based interaction",
        ],
        answer: 1,
        explanation: "CLIs rely on typed commands and user recall.",
      },
      {
        type: "mcq",
        q: "Which interaction style presents a visible list of choices (such as an ATM screen) to support recognition?",
        options: [
          "Command-line interaction",
          "Menu-based interaction",
          "Batch card input",
          "Voice dictation",
        ],
        answer: 1,
        explanation:
          "Menu-based interfaces display available options for easy recognition.",
      },
      {
        type: "mcq",
        q: "Which interaction style uses structured fields like text boxes, checkboxes, radio buttons, and date pickers?",
        options: [
          "Form-based interaction",
          "Gesture-based interaction",
          "Command-line interaction",
          "VR tracking",
        ],
        answer: 0,
        explanation: "Form-based interaction organizes structured data entry.",
      },
      {
        type: "mcq",
        q: "Software installation wizards and automated phone trees use which interaction style?",
        options: [
          "Direct manipulation",
          "Question-and-answer interaction",
          "Command-line interface",
          "Gesture-based interaction",
        ],
        answer: 1,
        explanation:
          "Question-and-answer interaction guides users step by step.",
      },
      {
        type: "mcq",
        q: "What is a key disadvantage of question-and-answer wizards?",
        options: [
          "Too confusing for beginners",
          "May be slow and rigid for experienced users",
          "Requires memorizing shell commands",
          "Cannot run on web browsers",
        ],
        answer: 1,
        explanation:
          "Step-by-step wizards can feel slow and inflexible for experts.",
      },
      {
        type: "mcq",
        q: "Chatbots and voice assistants that accept everyday speech or text use which interaction style?",
        options: [
          "Natural language interaction",
          "Form-based interaction",
          "Menu-based interaction",
          "Batch processing",
        ],
        answer: 0,
        explanation:
          "Natural language interfaces interpret everyday human language.",
      },
      {
        type: "mcq",
        q: "Which interaction style allows resizing a window or dragging a slide directly with immediate visual feedback?",
        options: [
          "Direct manipulation",
          "Command-line interface",
          "Question-and-answer",
          "Form-based",
        ],
        answer: 0,
        explanation:
          "Direct manipulation lets users act directly on visible visual objects.",
      },
      {
        type: "mcq",
        q: "What is a common disadvantage of direct manipulation?",
        options: [
          "No visual feedback",
          "May be inefficient for repetitive bulk operations",
          "Requires memorizing syntax",
          "Cannot move files",
        ],
        answer: 1,
        explanation:
          "Manually dragging hundreds of items one by one is slower than batch commands.",
      },

      {
        type: "tf",
        q: "Successful interaction requires effective communication from both the user and the computer.",
        answer: true,
        explanation: "True. Interaction is a two-way communication process.",
      },
      {
        type: "tf",
        q: "In Norman's model, 'Perceive the system state' belongs to the Evaluation phase.",
        answer: true,
        explanation:
          "True. Evaluation consists of perceiving, interpreting, and evaluating the system state.",
      },
      {
        type: "tf",
        q: "Using familiar labels, visible controls, and logical menus helps reduce the Gulf of Execution.",
        answer: true,
        explanation:
          "True. Clear affordances and labels bridge the Gulf of Execution.",
      },
      {
        type: "tf",
        q: "The Gulf of Evaluation is about physical wrist pain caused by a bad mouse.",
        answer: false,
        explanation:
          "False. Wrist pain is physical ergonomics; Gulf of Evaluation is understanding system state.",
      },
      {
        type: "tf",
        q: "Ergonomics aims to design equipment and environments to fit human capabilities and limitations.",
        answer: true,
        explanation: "True. Ergonomics adapts tools and workspaces to people.",
      },
      {
        type: "tf",
        q: "Long periods of repeated typing and clicking without breaks can cause repetitive strain injuries.",
        answer: true,
        explanation:
          "True. Repetitive motion without ergonomic care causes physical strain.",
      },
      {
        type: "tf",
        q: "A banking interface cluttered with confusing options increases cognitive workload.",
        answer: true,
        explanation:
          "True. Cognitive ergonomics addresses mental workload and confusion.",
      },
      {
        type: "tf",
        q: "Good ergonomics can reduce fatigue, lower error rates, and improve productivity.",
        answer: true,
        explanation:
          "True. Ergonomic design supports comfort, accuracy, and efficiency.",
      },
      {
        type: "tf",
        q: "Command-line interfaces (CLIs) are easy for beginners because they require no memorization.",
        answer: false,
        explanation: "False. CLIs require memorizing commands and syntax.",
      },
      {
        type: "tf",
        q: "Menu-based interaction supports recognition rather than recall.",
        answer: true,
        explanation: "True. Visible options reduce memory load.",
      },
      {
        type: "tf",
        q: "Too many nested menu levels can confuse users and slow down navigation.",
        answer: true,
        explanation: "True. Deep menu hierarchies hinder navigation.",
      },
      {
        type: "tf",
        q: "Form-based interaction supports input validation and structured data collection.",
        answer: true,
        explanation: "True. Forms organize fields and validate entries.",
      },
      {
        type: "tf",
        q: "Long forms with unclear labels can cause user fatigue and data entry errors.",
        answer: true,
        explanation: "True. Excessive length and poor labels harm usability.",
      },
      {
        type: "tf",
        q: "Natural language interfaces never suffer from ambiguity or speech recognition errors.",
        answer: false,
        explanation:
          "False. Human language is often ambiguous and prone to recognition errors.",
      },
      {
        type: "tf",
        q: "Direct manipulation supports exploration because actions are visible and often reversible.",
        answer: true,
        explanation:
          "True. Immediate visual feedback encourages safe exploration.",
      },
      {
        type: "tf",
        q: "Gesture-based interaction is commonly used in VR and motion-controlled games.",
        answer: true,
        explanation:
          "True. Hand and body gestures control spatial and gaming systems.",
      },
      {
        type: "tf",
        q: "Monitor height should be adjusted to support comfortable viewing and prevent excessive neck strain.",
        answer: true,
        explanation:
          "True. Proper monitor height is key to physical ergonomics.",
      },
      {
        type: "tf",
        q: "Noise levels and air quality in a computer lab are part of environmental ergonomics.",
        answer: true,
        explanation:
          "True. Environmental ergonomics covers workspace surroundings.",
      },
      {
        type: "tf",
        q: "In Norman's model, 'Specify the action' comes before 'Execute the action'.",
        answer: true,
        explanation:
          "True. Users decide how to act before physically performing the action.",
      },
      {
        type: "tf",
        q: "Different interaction styles suit different user expertise levels and tasks.",
        answer: true,
        explanation:
          "True. Designers choose styles based on users, tasks, and context.",
      },

      {
        type: "fill",
        q: "The four elements of interaction are user, input, system processing, and output/________.",
        answer: "feedback",
        explanation: "Feedback communicates system results back to the user.",
      },
      {
        type: "fill",
        q: "Donald ________ proposed the Execution-Evaluation model of interaction.",
        answer: "norman",
        explanation: "Donald Norman developed the seven-stage action cycle.",
      },
      {
        type: "fill",
        q: "The two main phases of Norman's model are Execution and ________.",
        answer: "evaluation",
        explanation: "Users execute actions and evaluate outcomes.",
      },
      {
        type: "fill",
        q: "The gap between what users want to do and knowing how to do it on the interface is the Gulf of ________.",
        answer: "execution",
        explanation: "Gulf of Execution measures action discoverability.",
      },
      {
        type: "fill",
        q: "The gap between actual system state and user understanding is the Gulf of ________.",
        answer: "evaluation",
        explanation: "Gulf of Evaluation measures feedback clarity.",
      },
      {
        type: "fill",
        q: "The study of designing equipment and environments to fit human capabilities is ________.",
        answer: "ergonomics",
        explanation: "Ergonomics fits tools and environments to people.",
      },
      {
        type: "fill",
        q: "Posture, seating, and keyboard placement belong to ________ ergonomics.",
        answer: "physical",
        explanation: "Physical ergonomics addresses bodily comfort and safety.",
      },
      {
        type: "fill",
        q: "Mental workload, attention, and memory belong to ________ ergonomics.",
        answer: "cognitive",
        explanation: "Cognitive ergonomics addresses mental processes.",
      },
      {
        type: "fill",
        q: "Lighting, noise, and temperature belong to ________ ergonomics.",
        answer: "environmental",
        explanation:
          "Environmental ergonomics addresses surrounding conditions.",
      },
      {
        type: "fill",
        q: "An interface where users type text commands is a command-________ interface.",
        answer: "line",
        explanation: "CLI stands for Command-Line Interface.",
      },
      {
        type: "fill",
        q: "Selecting options from a visible list (such as on an ATM) is ________-based interaction.",
        answer: "menu",
        explanation: "Menu-based interaction presents lists of choices.",
      },
      {
        type: "fill",
        q: "Entering structured data into text boxes, checkboxes, and dropdowns is ________-based interaction.",
        answer: "form",
        explanation: "Form-based interaction structures data entry.",
      },
      {
        type: "fill",
        q: "Step-by-step installation wizards use ________-and-answer interaction.",
        answer: "question",
        explanation:
          "Question-and-answer interaction guides users sequentially.",
      },
      {
        type: "fill",
        q: "Communicating with computers using everyday speech or text is natural ________ interaction.",
        answer: "language",
        explanation:
          "Natural language interfaces process human speech or text.",
      },
      {
        type: "fill",
        q: "Dragging files and resizing visible windows directly is direct ________.",
        answer: "manipulation",
        explanation: "Direct manipulation acts directly on visible objects.",
      },
      {
        type: "fill",
        q: "Controlling systems with hand, body, or facial movements is ________-based interaction.",
        answer: "gesture",
        explanation: "Gesture-based interaction tracks physical movements.",
      },
      {
        type: "fill",
        q: "Repeated typing and clicking without ergonomic care can cause ________ strain injuries.",
        answer: "repetitive",
        explanation:
          "Repetitive strain injuries (RSIs) result from prolonged repeated motions.",
      },
      {
        type: "fill",
        q: "In Norman's model, stage 1 of Execution is to form the ________.",
        answer: "goal",
        explanation: "Forming a goal initiates the action cycle.",
      },
      {
        type: "fill",
        q: "In Norman's model, stage 5 (first stage of Evaluation) is to ________ the system state.",
        answer: "perceive",
        explanation: "Users perceive system state via sensory feedback.",
      },
      {
        type: "fill",
        q: "Displaying a confirmation message after form submission reduces the Gulf of ________.",
        answer: "evaluation",
        explanation:
          "Confirmations help users verify that their action succeeded.",
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
renderTabs();
renderNotes();
renderQuestions();
