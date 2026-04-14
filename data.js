const allExercises = [
  {
    id: "bai1",
    type: "fill-blank", // Nhãn loại bài tập
    menuTitle: "Bài 1",
    title: "Bài 1",
    instruction:
      "Fill in each blank with a suitable word. The first letter is given.",
    questions: [
      "1. Within the United Kingdom there are 15 n[ational] parks: ten in England, three in Wales, and two in Scotland.",
      "2. The presence of unwanted or excessive artificial lighting is known as l[ight] pollution.",
      "3. By doing a simple thing like p[lanting] a tree, we are making the world a better place.",
      "4. Polluted water from factories can be treated in sewage treatment plants to c[ontrol] water pollution.",
      "5. Rain polluted by acid that has been r[eleased] into the atmosphere is known as acid rain.",
      "6. The t[echnological] changes brought about by AI are drastically changing our lives.",
    ],
  },
  {
    id: "bai2",
    type: "multiple-choice", // Nhãn loại bài tập
    menuTitle: "Bài 2",
    title: "Bài 2",
    instruction:
      "Choose the correct answer A, B, C, or D to complete each sentence.",
    questions: [
      {
        text: "1. All the items at Timan Shop are _____ for two days. Some of them are 50% off.",
        options: {
          A: "online",
          B: "on sale",
          C: "out of stock",
          D: "expensive",
        },
        correct: "B",
      },
      {
        text: "2. Two examples of _____ shops are the florist's and the bakery.",
        options: {
          A: "goods",
          B: "convenience",
          C: "discount",
          D: "speciality",
        },
        correct: "D",
      },
      {
        text: "3. Shopping at a shopping centre is _____. It has almost everything you want there.",
        options: {
          A: "difficult",
          B: "cheap",
          C: "convenient",
          D: "time-consuming",
        },
        correct: "C",
      },
      {
        text: "4. Some people go to shopping centres just to _____ with friends or browse.",
        options: { A: "hang out", B: "discuss", C: "buy", D: "play" },
        correct: "A",
      },
      {
        text: "5. Some people may get _____ to online shopping. They cannot stop buying things...",
        options: { A: "interested", B: "excited", C: "addicted", D: "amused" },
        correct: "C",
      },
      {
        text: "6. A strong earthquake caused a lot of _______ to eastern Japan last week.",
        options: { A: "damaged", B: "damages", C: "damaging", D: "damage" },
        correct: "D",
      },
      {
        text: "7. Two tornadoes struck Florida on Saturday morning and _______ 30 homes.",
        options: {
          A: "destroy",
          B: "destroyed",
          C: "destruction",
          D: "destroying",
        },
        correct: "B",
      },
      {
        text: "8. We cannot prevent natural disasters, but can _______ some of them.",
        options: { A: "damage", B: "destroy", C: "predict", D: "erupt" },
        correct: "C",
      },
      {
        text: "9. ______ from other states came to Oklahoma to help find the survivors.",
        options: {
          A: "Scientists",
          B: "Victims",
          C: "People",
          D: "Rescue workers",
        },
        correct: "D",
      },
      {
        text: "10. A _______ can save you in life-threatening situations because its sound can attract people's attention.",
        options: { A: "whistle", B: "kit", C: "warning", D: "tool" },
        correct: "A",
      },
    ],
  },
  {
    id: "bai3",
    type: "multiple-choice",
    menuTitle: "Bài 3",
    title: "Bài 3",
    instruction: "Choose the correct answer A, B, C, or D.",
    questions: [
      {
        text: "1. Please leave a ______ on my phone if you are unable to reach me.",
        options: { A: "message", B: "call", C: "letter", D: "note" },
        correct: "A",
      },
      {
        text: "2. Many people think ______ will replace human translators in the future.",
        options: {
          A: "voice messages",
          B: "translation machines",
          C: "dictionaries",
          D: "emojis",
        },
        correct: "B",
      },
      {
        text: "3. Parents should pay due attention to their children's use of ______.",
        options: {
          A: "social networking sites",
          B: "real time",
          C: "telepathy",
          D: "holography",
        },
        correct: "A",
      },
      {
        text: "4. We made a(n) ______ to discuss our project.",
        options: {
          A: "group call",
          B: "social network",
          C: "emoji",
          D: "family member",
        },
        correct: "A",
      },
      {
        text: "5. I think there will be no language ______ in the future.",
        options: { A: "use", B: "development", C: "skill", D: "barrier" },
        correct: "D",
      },
      {
        text: "6. She sent me a(n) ______ message to ask about the homework.",
        options: { A: "warning", B: "heartfelt", C: "instant", D: "strong" },
        correct: "C",
      },
      {
        text: "7. If ______ becomes popular in the future, it will save communicators a lot of travelling time and money.",
        options: {
          A: "private messaging",
          B: "holography",
          C: "language barrier",
          D: "translation",
        },
        correct: "B",
      },
      {
        text: "8. Video conferencing is a technology that allows ______ communication.",
        options: { A: "private", B: "social", C: "real-time", D: "smartphone" },
        correct: "C",
      },
    ],
  },
  {
    id: "bai4",
    type: "drag-drop", // NHÃN MỚI: Kéo thả
    menuTitle: "Bài 4",
    title: "Bài 4",
    instruction:
      "Drag the words from the word bank and drop them into the correct blanks.",
    wordBank: [
      "experiment",
      "attendance",
      "face recognition",
      "application",
      "platform",
      "video conferencing",
    ],
    questions: [
      "1. He developed a new medicine after he did many [experiment].",
      "2. Which [platform] did your teacher use for your online classes? Google Classroom or Microsoft Team?",
      "3. This smartphone uses [face recognition] as a password.",
      "4. Our school checks [attendance] using a fingerprint scanner.",
      "5. [video conferencing] allows us to have online meetings and still see and hear others clearly.",
    ],
  },
  {
    id: "bai5",
    type: "multiple-choice",
    menuTitle: "Bài 5",
    title: "Bài 5",
    instruction:
      "Choose the correct words to complete the following sentences.",
    questions: [
      {
        text: "1. We tried to ______ the aliens and managed to stop them from invading our planet.",
        options: { A: "oppose", B: "support", C: "strike", D: "struggle" },
        correct: "A",
      },
      {
        text: "2. Animals are living ______; therefore, we should not hurt them needlessly.",
        options: { A: "types", B: "aliens", C: "creatures", D: "breeds" },
        correct: "C",
      },
      {
        text: "3. There is a strong ______ that it will rain this afternoon.",
        options: {
          A: "possibility",
          B: "occasion",
          C: "trace",
          D: "opportunity",
        },
        correct: "A",
      },
      {
        text: "4. It's exciting to discover ______ of earlier civilizations.",
        options: {
          A: "chances",
          B: "opportunities",
          C: "possibilities",
          D: "traces",
        },
        correct: "D",
      },
      {
        text: "5. What is the most ______ planet for life in our solar system?",
        options: {
          A: "encouraging",
          B: "promising",
          C: "habitable",
          D: "possible",
        },
        correct: "C",
      },
    ],
  },
  {
    id: "bai6",
    type: "rewrite", // Nhãn loại bài tập mới
    menuTitle: "Bài 6",
    title: "Bài 6",
    instruction: "Combine each pair of sentences, using the connector given",
    questions: [
      {
        prompt:
          "1. We were planting trees. Our friends were collecting rubbish. (while)",
        correct:
          "We were planting trees while our friends were collecting rubbish.",
      },
      {
        prompt:
          "2. The choir practised for half an hour. After that, they went on stage. (before)",
        correct:
          "The choir practised for half an hour before they went on stage.",
      },
      {
        prompt: "3. I read my favourite book. Then I went to bed. (after)",
        correct: "After I read my favourite book, I went to bed.",
      },
      {
        prompt: "4. The bell rang. Everyone raced out of the classroom. (when)",
        correct: "When the bell rang, everyone raced out of the classroom.",
      },
      {
        prompt:
          "5. Don't go away yet. Finish cleaning up the place first. (until)",
        correct: "Don't go away until you finish cleaning up the place.",
      },
      {
        prompt:
          "6. My sister makes a mess. My mum makes her weed the garden. (whenever)",
        correct:
          "Whenever my sister makes a mess, my mum makes her weed the garden.",
      },
    ],
  },
  {
    id: "bai7",
    type: "multiple-choice",
    menuTitle: "Bài 7",
    title: "Bài 7",
    instruction: "Choose the correct answer to complete each sentence.",
    questions: [
      // Phần 1: Trạng từ tần suất (3 đáp án)
      {
        text: "1. James doesn’t _________ buy things at the discount shop. He rarely goes there.",
        options: { A: "seldom", B: "often", C: "sometimes" },
        correct: "B",
      },
      {
        text: "2. She _________ pays attention in class, so she can’t understand new concepts.",
        options: { A: "never", B: "always", C: "often" },
        correct: "A",
      },
      {
        text: "3. Lisa _________ buys shoes on sale. She thinks it’s a waste to get them for full price.",
        options: { A: "always", B: "rarely", C: "never" },
        correct: "A",
      },
      {
        text: "4. Peter _________ bargains at the market, especially when the goods have no price tag.",
        options: { A: "sometimes", B: "never", C: "seldom" },
        correct: "A",
      },
      {
        text: "5. How ___________ do you go to school? – Every day.",
        options: { A: "always", B: "usually", C: "often" },
        correct: "C",
      },
      // Phần 2: Thì (Tenses) - Đã sửa số thứ tự thành 6 đến 10 (4 đáp án)
      {
        text: "6. We _____ most of our grocery shopping at large supermarkets.",
        options: { A: "do", B: "are doing", C: "will do", D: "is doing" },
        correct: "A",
      },
      {
        text: "7. The sale on all video equipment _____ on Monday next week.",
        options: {
          A: "started",
          B: "is starting",
          C: "are starting",
          D: "starts",
        },
        correct: "D",
      },
      {
        text: "8. We quickly _____ all the products and put everything away.",
        options: {
          A: "unpack",
          B: "are unpacking",
          C: "unpacked",
          D: "will unpack",
        },
        correct: "C",
      },
      {
        text: "9. The Walmart store near my home _____ open between 6 a.m. and 11 p.m. throughout the week.",
        options: { A: "are", B: "is", C: "were", D: "will be" },
        correct: "B",
      },
      {
        text: "10. At 10 o'clock tomorrow, the new bookshop in the corner _____. Let's go and visit it.",
        options: { A: "opens", B: "opened", C: "is open", D: "has opened" },
        correct: "A",
      },
    ],
  },
  {
    id: "bai8",
    type: "fill-verb", // TYPE MỚI: Chia động từ
    menuTitle: "Bài 8",
    title: "Bài 8",
    instruction:
      "Fill in each blank with the correct tense of the verb in brackets. Use the past continuous or the past simple.",
    questions: [
      "1. When the earthquake (happen) [happened], they (do) [were doing] their homework.",
      "2. [Were] you (talk) [talking] to your friend on the phone at 9 p.m. yesterday?",
      "3. While he (cook) [was cooking] dinner, his mother (come) [came] home.",
      "4. Dark clouds (gather) [gathered] and after a few minutes, the storm (break) [broke].",
      "5. What [were] they (do) [doing] when you (arrive) [arrived] at their house?",
    ],
  },
  {
    id: "bai9",
    type: "circle", // TYPE MỚI: Khoanh tròn
    menuTitle: "Bài 9",
    title: "Bài 9",
    instruction:
      "Circle the correct preposition in each sentence. Click on the correct preposition in each sentence to 'circle' it.",
    questions: [
      {
        text: "1. We arrived [at/on/in] New York earlier than we expected.",
        correct: "in",
      },
      {
        text: "2. Be careful! There's a piece of glass [on/under/in front of] the grass.",
        correct: "on",
      },
      {
        text: "3. Jane's classmates held a birthday party for her [on/at/for] a bubble tea shop.",
        correct: "at",
      },
      {
        text: "4. Many people chat [in/by/for] hours on the Internet because it is free.",
        correct: "for",
      },
      {
        text: "5. [By/On/For] 2030, smartphones will become supersmart and super thin.",
        correct: "By",
      },
      {
        text: "6. The man sitting [next to/from/along] me on the plane said that he could do telepathy.",
        correct: "next to",
      },
      {
        text: "7. I think robot carrier pigeons will become popular [on/in/at] twenty years' time.",
        correct: "in",
      },
      {
        text: "8. Lan's house is [opposite/by/next to] mine, just across the street.",
        correct: "opposite",
      },
    ],
  },
  {
    id: "bai10",
    type: "drag-drop",
    menuTitle: "Bài 10",
    title: "Bài 10",
    instruction:
      "Drag the correct possessive pronouns and drop them into the blanks.",
    wordBank: ["mine", "its", "his", "hers", "yours"],
    questions: [
      "1. I have two smartphones, and this is one of [mine].",
      "2. I really admire his collection of smartwatches. And this is a smartwatch of [his].",
      "3. A smartphone of [hers] is always by her side, helping her contact others constantly.",
      "4. Can you show me a new app of [yours] for future communication?",
      "5. The new device has a lot of new functions. Let me show you one of [its].",
    ],
  },
  {
    id: "bai11",
    type: "multiple-choice",
    menuTitle: "Bài 11",
    title: "Bài 11",
    instruction:
      "Choose the sentence (A, B, C, or D) that is closest in meaning to the sentence given.",
    questions: [
      {
        text: "1. “You will like science after you read this book,” our teacher said.",
        options: {
          A: "Our teacher says we will like science after we read this book.",
          B: "Our teacher said we would like science after we read this book.",
          C: "Our teacher said we would like science after we read that book.",
          D: "Our teacher said you would like science after you read this book.",
        },
        correct: "C",
      },
      {
        text: "2. “Robot ASIMO will retire this year,” said the reporter.",
        options: {
          A: "The reporter says robot ASIMO will retire this year.",
          B: "The reporter said robot ASIMO would retire that year.",
          C: "The reporter said robot ASIMO would retire this year.",
          D: "The reporter said robot ASIMO could retire that year.",
        },
        correct: "B",
      },
      {
        text: "3. “We are developing an emotional robot,” said the engineer.",
        options: {
          A: "The engineer said he is developing an emotional robot.",
          B: "The engineer said he was developing an emotional robot.",
          C: "The engineer said they are developing an emotional robot.",
          D: "The engineer said they were developing an emotional robot.",
        },
        correct: "D",
      },
      {
        text: "4. “You can have a video conference and upload homework on this platform,” said the teacher.",
        options: {
          A: "The teacher said we can have a video conference and upload homework on that platform.",
          B: "The teacher said you can have a video conference and upload homework on this platform.",
          C: "The teacher said we could have a video conference and upload homework on that platform.",
          D: "The teacher said you could have a video conference and upload homework on this platform.",
        },
        correct: "C",
      },
      {
        text: "5. “Our school has a large laboratory, and our teachers often conduct experiments there,” said the headmaster.",
        options: {
          A: "The headmaster said their school had a large laboratory, and their teachers often conducted experiments there.",
          B: "The headmaster said their school had a large laboratory, and our teachers often conducted experiments there.",
          C: "The headmaster said their school had a large laboratory, and their teachers often conduct experiments there.",
          D: "The headmaster says their school has a large laboratory, and our teachers often conduct experiments there.",
        },
        correct: "A",
      },
    ],
  },
  {
    id: "bai12",
    type: "rewrite",
    menuTitle: "Bài 12",
    title: "Bài 12",
    instruction: "Change the following questions into reported questions.",
    questions: [
      {
        prompt: "1. “How often do you visit your grandparents?” Hai asked Hoa.",
        correct: "Hai asked Hoa how often she visited her grandparents.",
      },
      {
        prompt: "2. She asked me, “What does a UFO look like?”",
        correct: "She asked me what a UFO looked like.",
      },
      {
        prompt:
          "3. The student asked his teacher, “Why is the climate on Mars unsuitable for human life?”",
        correct:
          "The student asked his teacher why the climate on Mars was unsuitable for human life.",
      },
      {
        prompt:
          "4. “Which is longer, a day on Venus or a day on Earth?” I wondered.",
        correct:
          "I wondered which was longer, a day on Venus or a day on Earth.",
      },
      {
        prompt: "5. “Why do people call Mars the Red Planet?” my son asked me.",
        correct: "My son asked me why people called Mars the Red Planet.",
      },
    ],
  },

  {
    id: "bai13",
    type: "mark-words", // TYPE MỚI: Đánh dấu từ
    menuTitle: "Bài 13",
    title: "Bài 13",
    instruction:
      "Underline the word with the sound /bl/ and highlight the words with the sound /kl/.",
    questions: [
      "1. The [black|ul] cat sat on the [blue|ul] mat.",
      "2. Look! There are [black|ul] [clouds|hl] all over!",
      "3. The [blender|ul] was powerful enough to crush ice and [blend|ul] frozen fruit.",
      "4. We [cleaned|hl] up the environment after the [blast|ul].",
    ],
  },
  {
    id: "bai14",
    type: "categorize", // TYPE MỚI: Phân loại
    menuTitle: "Bài 14",
    title: "Bài 14",
    instruction:
      "Drag the words from the word bank and drop them into the correct boxes.",
    words: [
      "display",
      "assistant",
      "system",
      "special",
      "cost",
      "customer",
      "sport",
      "honest",
      "speaker",
      "crisp",
    ],
    categories: [
      {
        name: "Box /sp/",
        correctWords: ["display", "special", "sport", "speaker", "crisp"],
      },
      {
        name: "Box /st/",
        correctWords: ["assistant", "system", "cost", "customer", "honest"],
      },
    ],
  },
  {
    id: "bai15",
    type: "multiple-choice",
    menuTitle: "Bài 15",
    title: "Bài 15",
    instruction:
      "Choose the word that has a different stress pattern from that of the others.",
    questions: [
      {
        text: "1. Choose the odd one out:",
        options: { A: "general", B: "property", C: "disaster", D: "fabulous" },
        correct: "C",
      },
      {
        text: "2. Choose the odd one out:",
        options: {
          A: "yesterday",
          B: "optional",
          C: "natural",
          D: "prediction",
        },
        correct: "D",
      },
      {
        text: "3. Choose the odd one out:",
        options: { A: "glamorous", B: "eruption", C: "volcanic", D: "tornado" },
        correct: "A",
      },
      {
        text: "4. Choose the odd one out:",
        options: {
          A: "fabulous",
          B: "volunteer",
          C: "evening",
          D: "happening",
        },
        correct: "B",
      },
      {
        text: "5. Choose the odd one out:",
        options: {
          A: "thunderstorm",
          B: "prosperous",
          C: "important",
          D: "resident",
        },
        correct: "C",
      },
      {
        text: "6. Choose the odd one out:",
        options: { A: "trainee", B: "between", C: "Chinese", D: "seafood" },
        correct: "D",
      },
      {
        text: "7. Choose the odd one out:",
        options: { A: "engineer", B: "wonderful", C: "refugee", D: "referee" },
        correct: "B",
      },
      {
        text: "8. Choose the odd one out:",
        options: {
          A: "Vietnamese",
          B: "guarantee",
          C: "Bhutanese",
          D: "committee",
        },
        correct: "D",
      },
      {
        text: "9. Choose the odd one out:",
        options: { A: "degree", B: "obese", C: "coffee", D: "Maltese" },
        correct: "C",
      },
      {
        text: "10. Choose the odd one out:",
        options: {
          A: "employee",
          B: "Japanese",
          C: "Taiwanese",
          D: "absentee",
        },
        correct: "A",
      },
    ],
  },
];
