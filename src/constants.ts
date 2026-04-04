export const STRATEGY = [
  {
    step: "01",
    title: "Read & Analyse Both Visuals First",
    color: "#4f8ef7",
    icon: "🔍",
    points: [
      "Spend 2–3 minutes studying both charts before writing anything.",
      "Identify what each visual shows: its type, time period, units, and categories.",
      "Ask yourself: What is the relationship between the two visuals? Do they share the same topic, time period, or subject?",
      "Underline or mentally note the most significant data points — the highest, lowest, biggest change, or most striking contrast.",
    ],
    warning: "Do NOT start writing immediately. Students who skip this step often miss the connection between the two visuals.",
  },
  {
    step: "02",
    title: "Write a Paraphrased Introduction",
    color: "#f7a94f",
    icon: "✍️",
    points: [
      "Restate what both visuals show — but do not copy the task prompt word for word.",
      "Change vocabulary: 'shows' → 'illustrates / presents / compares', 'percentage' → 'proportion', 'number' → 'figure / quantity'.",
      "Mention both visual types and what they measure in one or two sentences.",
      "If there is a clear relationship between the two visuals, add a framing sentence (e.g. 'Taken together, the data reveal a connection between X and Y.').",
    ],
    example: {
      avoid: "The bar chart shows the number of tourists and the line graph shows spending.",
      better: "The bar chart illustrates tourist arrivals by region, while the line graph tracks the corresponding total expenditure over the same period.",
    },
  },
  {
    step: "03",
    title: "Write a Clear Overview (Most Important!)",
    color: "#4fc97a",
    icon: "🗺️",
    points: [
      "The overview is the single most important paragraph — examiners look for it first.",
      "Summarise the main trend or pattern from BOTH visuals in 2–3 sentences.",
      "Do NOT include specific figures in the overview — save those for the body paragraphs.",
      "Identify: the biggest trend, the most notable comparison, and any surprising feature.",
      "Place the overview after the introduction, not at the end.",
    ],
    example: {
      avoid: "Overall, Australia had 1.4 million tourists in 2015 and spending was NZ$10.4 billion.",
      better: "Overall, both arrivals and spending rose steadily from 2000 to 2015, before declining in 2020. Australia remained the dominant source of tourists, though Asia's growth was the most striking regional trend.",
    },
  },
  {
    step: "04",
    title: "Organise the Body Paragraphs",
    color: "#f74f6a",
    icon: "📋",
    points: [
      "For combination tasks, you have two main options for organising the body:",
      "Option A — By visual: Describe visual 1 fully, then visual 2. Best when the two visuals are less directly connected.",
      "Option B — By theme: Group related information from both visuals together. Best when the visuals are closely linked (e.g. a table that explains a graph).",
      "Option B is generally preferred at Band 7+ because it shows you can synthesise, not just describe.",
      "Aim for 2 body paragraphs. Each paragraph should cover a clear group of information.",
    ],
  },
  {
    step: "05",
    title: "Select & Integrate Data — Don't List Everything",
    color: "#a94ff7",
    icon: "📊",
    points: [
      "You cannot — and should not — mention every single figure. Select the most relevant data.",
      "Always include: the highest and lowest values, the biggest change, and key comparisons between categories.",
      "When referencing figures, use approximations where helpful: 'approximately', 'around', 'nearly', 'just over'.",
      "Use 'respectively' to report two figures efficiently: 'figures of 0.4 and 0.3 million respectively'.",
      "Reference specific years, percentages, or values — vague language like 'it went up a lot' is penalised.",
    ],
    example: {
      avoid: "Tourism went up a lot between 2000 and 2015.",
      better: "Tourism rose from 1.7 million arrivals in 2000 to a peak of 3.5 million in 2015, a rise of over 100%.",
    },
  },
  {
    step: "06",
    title: "Link the Two Visuals Together",
    color: "#f74f6a",
    icon: "🔗",
    points: [
      "This is what separates Band 6.5 from Band 7.5 in combination tasks.",
      "Find the connection: Does the table explain the graph? Does the pie chart add context to the bar chart?",
      "Use linking phrases: 'This is reflected in...', 'This trend is mirrored by...', 'Correspondingly...', 'This aligns with...', 'The table contextualises this finding...'",
      "Make at least one explicit cross-visual observation in your response.",
      "If appropriate, make a cautious inference: 'This may suggest...', 'This could indicate...'",
    ],
    example: {
      avoid: "[Paragraph 1 about chart 1] [Paragraph 2 about chart 2 with no connection]",
      better: "The decline in arrivals in 2020 is mirrored in the spending data, which fell from NZ$10.4 billion to NZ$7.8 billion over the same year.",
    },
  },
  {
    step: "07",
    title: "Use Varied Language for Trends",
    color: "#4f8ef7",
    icon: "📝",
    points: [
      "Avoid repeating the same verb. Rotate between: rose / increased / climbed / grew / expanded / surged (upward); fell / declined / dropped / decreased / contracted / dipped (downward).",
      "Use adverbs for precision: sharply, steadily, gradually, dramatically, marginally, significantly, modestly.",
      "Describe the shape of a trend: peaked at, reached a low of, levelled off, fluctuated, remained stable.",
      "Use noun phrases for variety: 'a sharp rise', 'a gradual decline', 'a threefold increase', 'a marginal drop'.",
    ],
  },
  {
    step: "08",
    title: "Time Management",
    color: "#4fc97a",
    icon: "⏱️",
    points: [
      "Total time: 20 minutes. Minimum length: 150 words (aim for 170–190).",
      "2–3 min: Read and analyse both visuals.",
      "1–2 min: Plan your overview and paragraph structure.",
      "13–14 min: Write your response.",
      "1–2 min: Check for grammar errors, missing data, and coherence.",
      "Do not write more than 220 words — extra length does not improve your score and wastes time.",
    ],
  },
  {
    step: "09",
    title: "Common Mistakes to Avoid",
    color: "#f87171",
    icon: "⚠️",
    points: [
      "❌ Treating the two visuals as completely separate — always connect them.",
      "❌ Forgetting the overview — this is the most penalised omission.",
      "❌ Listing every number without selection or comparison.",
      "❌ Giving opinions or reasons (e.g. 'This is because...') — only make cautious inferences.",
      "❌ Copying the task prompt word for word in the introduction.",
      "❌ Writing in the wrong register — Task 1 is a formal academic report, not an essay.",
      "❌ Using 'In conclusion' — this is for essays. Use 'Overall' or place your overview after the introduction.",
    ],
  },
];

export const USEFUL_PHRASES = {
  introduction: [
    "The [chart type] illustrates / presents / compares...",
    "...while the [chart type] shows / depicts / tracks...",
    "Taken together, the data reveal / suggest / indicate...",
  ],
  overview: [
    "Overall, the most notable feature is...",
    "In general, both [X] and [Y] show an upward / downward trend.",
    "The most striking difference between the two is...",
    "[X] stands in clear contrast to [Y], with...",
  ],
  crossVisual: [
    "This trend is reflected / mirrored in the [chart type]...",
    "The [table / graph] contextualises this finding...",
    "Correspondingly, the [other visual] shows that...",
    "This aligns with the data presented in the [chart type]...",
    "This may suggest / could indicate that...",
  ],
  upward: ["rose", "increased", "climbed", "grew", "expanded", "surged", "doubled", "tripled"],
  downward: ["fell", "declined", "dropped", "decreased", "contracted", "dipped", "halved"],
  adverbs: ["sharply", "steadily", "gradually", "dramatically", "marginally", "significantly", "modestly", "rapidly"],
  shapes: ["peaked at", "reached a low of", "levelled off", "fluctuated between", "remained stable at", "recovered to"],
};

export const TASKS = [
  {
    id: 1,
    types: ["Bar Chart", "Line Graph"],
    title: "Tourism in New Zealand",
    description:
      "The bar chart shows the number of international tourist arrivals (in millions) to New Zealand from four regions between 2000 and 2020. The line graph shows total tourist spending (in NZ$ billions) over the same period.",
    visuals: [
      {
        type: "bar",
        title: "Tourist Arrivals by Region (millions)",
        labels: ["2000", "2005", "2010", "2015", "2020"],
        datasets: [
          { label: "Australia", values: [0.8, 1.0, 1.2, 1.4, 1.1] },
          { label: "Asia", values: [0.3, 0.5, 0.8, 1.2, 0.9] },
          { label: "Europe", values: [0.4, 0.45, 0.5, 0.55, 0.3] },
          { label: "Americas", values: [0.2, 0.25, 0.3, 0.35, 0.2] },
        ],
      },
      {
        type: "line",
        title: "Total Tourist Spending (NZ$ billions)",
        labels: ["2000", "2005", "2010", "2015", "2020"],
        datasets: [{ label: "Spending", values: [4.5, 6.2, 8.1, 10.4, 7.8] }],
      },
    ],
    sampleAnswer: {
      band50: `The bar chart shows international tourist arrivals to New Zealand from four regions between 2000 and 2020. The line graph shows total tourist spending in NZ$ billions.\n\nIn 2000, Australia was 0.8 million and Asia was 0.3 million. Europe was 0.4 million and Americas was 0.2 million. In 2015, Australia increased to 1.4 million. Asia increased to 1.2 million. Europe and Americas also increased a little bit.\n\nIn 2020, the numbers decreased. Australia was 1.1 million and Asia was 0.9 million. Europe was 0.3 million and Americas was 0.2 million.\n\nThe spending was NZ$4.5 billion in 2000. It increased to NZ$10.4 billion in 2015. Then it decreased to NZ$7.8 billion in 2020.\n\nOverall, the number of tourists and spending increased from 2000 to 2015 and then decreased in 2020.`,

      band65: `The bar chart shows international tourist arrivals to New Zealand from four regions between 2000 and 2020, while the line graph shows how much tourists spent overall during the same period.\n\nOverall, tourist arrivals grew in most regions from 2000 to 2015, before falling in 2020. Spending followed a similar upward trend, though it also dropped in 2020. Australia consistently provided the most visitors throughout the period.\n\nIn 2000, Australian tourists were the largest group at 0.8 million, followed by Europeans at 0.4 million, Asians at 0.3 million, and visitors from the Americas at 0.2 million. By 2015, Australian arrivals had risen to 1.4 million, and Asian tourists showed particularly strong growth, increasing from 0.3 to 1.2 million. European and American arrivals also increased, but much more slowly.\n\nIn 2020, all four regions saw a decline in arrivals, most likely due to global travel restrictions. Asian arrivals fell to 0.9 million, while European and American visitors dropped back to around 2000 levels.\n\nTourist spending rose steadily from NZ$4.5 billion in 2000 to NZ$10.4 billion in 2015, before falling to NZ$7.8 billion in 2020, reflecting the drop in visitor numbers.`,

      band75: `The bar chart illustrates international tourist arrivals to New Zealand from four regions between 2000 and 2020, while the line graph tracks the corresponding total tourist expenditure over the same two-decade period.\n\nOverall, both arrivals and spending followed a broadly upward trajectory from 2000 to 2015, only to decline sharply in 2020. Australia remained the dominant source of tourists throughout, though Asia's rapid growth is the most striking regional trend.\n\nIn 2000, Australian visitors led with 0.8 million arrivals, with Europeans, Asians, and Americans recording considerably lower figures of 0.4, 0.3, and 0.2 million respectively. Over the following fifteen years, Australian arrivals climbed steadily to 1.4 million, but it was Asian tourism that expanded most dramatically, quadrupling from 0.3 to 1.2 million by 2015. European and American arrivals, by contrast, grew only modestly across the period.\n\nThe 2020 figures reflect a marked contraction across all regions, with European and American visitors falling back to approximately their 2000 levels. This downturn is mirrored in the spending data: after rising from NZ$4.5 billion in 2000 to a peak of NZ$10.4 billion in 2015, total expenditure retreated to NZ$7.8 billion in 2020. Notably, despite fewer arrivals, spending remained well above its 2000 baseline, suggesting higher per-visitor expenditure.`,

      keySentences: [
        {
          sentence: "Overall, tourist arrivals grew in most regions from 2000 to 2015, before falling in 2020. Spending followed a similar upward trend, though it also dropped in 2020.",
          why: "When a task has two visuals, the overview must summarise the key trend from both. This overview does that efficiently in two short sentences, linking the bar chart and line graph without going into unnecessary detail.",
        },
        {
          sentence: "Asian tourists showed particularly strong growth, increasing from 0.3 to 1.2 million.",
          why: "Selecting the most notable data point — Asia's fourfold increase — shows analytical prioritisation. Good Task 1 answers don't describe every figure; they highlight what is most significant.",
        },
        {
          sentence: "Tourist spending rose steadily from NZ$4.5 billion in 2000 to NZ$10.4 billion in 2015, before falling to NZ$7.8 billion in 2020, reflecting the drop in visitor numbers.",
          why: "The phrase 'reflecting the drop in visitor numbers' links the two visuals together, showing the examiner that the writer understands the relationship between the charts — a key skill in combination tasks.",
        },
      ],
      upgradeTips: [
        {
          label: "Linking Two Visuals",
          band65example: "The line graph shows how much tourists spent overall during the same period.",
          band75example: "the line graph tracks the corresponding total tourist expenditure over the same two-decade period.",
          tip: "The word 'corresponding' explicitly connects the two charts, showing the examiner you understand the relationship between the data sets — essential in combination tasks.",
        },
        {
          label: "Vocabulary",
          band65example: "Asian tourists showed particularly strong growth",
          band75example: "it was Asian tourism that expanded most dramatically, quadrupling from 0.3 to 1.2 million",
          tip: "'Quadrupling' is a precise mathematical term that replaces a wordy phrase, and the cleft structure ('it was... that') adds emphasis and grammatical variety.",
        },
        {
          label: "Data Integration",
          band65example: "European and American arrivals also increased, but much more slowly.",
          band75example: "European and American arrivals, by contrast, grew only modestly across the period.",
          tip: "The Band 7.5 version uses the embedded phrase 'by contrast' as a mid-sentence cohesive device rather than a separate clause, creating a more sophisticated sentence structure.",
        },
        {
          label: "Analytical Observation",
          band65example: "reflecting the drop in visitor numbers",
          band75example: "despite fewer arrivals, spending remained well above its 2000 baseline, suggesting higher per-visitor expenditure.",
          tip: "The Band 7.5 answer makes an inference ('suggesting higher per-visitor expenditure') that goes beyond the data itself. This kind of analytical comment is characteristic of Band 7+ responses.",
        },
      ],
    },
  },
  {
    id: 2,
    types: ["Pie Charts", "Table"],
    title: "Electricity Generation by Source",
    description:
      "The pie charts show the proportion of electricity generated from different sources in Germany and Australia in 2020. The table shows the total electricity generated (in TWh) and the percentage from renewable sources for both countries in 2010 and 2020.",
    visuals: [
      {
        type: "pie",
        title: "Electricity Sources — Germany & Australia (2020)",
        datasets: [
          {
            label: "Germany",
            segments: [
              { label: "Renewables", value: 46 },
              { label: "Coal", value: 25 },
              { label: "Gas", value: 16 },
              { label: "Nuclear", value: 11 },
              { label: "Other", value: 2 },
            ],
          },
          {
            label: "Australia",
            segments: [
              { label: "Coal", value: 54 },
              { label: "Gas", value: 20 },
              { label: "Renewables", value: 24 },
              { label: "Nuclear", value: 0 },
              { label: "Other", value: 2 },
            ],
          },
        ],
      },
      {
        type: "table",
        title: "Total Generation & Renewable Share",
        headers: ["", "Germany 2010", "Germany 2020", "Australia 2010", "Australia 2020"],
        rows: [
          ["Total generation (TWh)", "633", "575", "255", "265"],
          ["Renewable share (%)", "17%", "46%", "9%", "24%"],
        ],
      },
    ],
    sampleAnswer: {
      band50: `The pie charts show electricity sources in Germany and Australia in 2020. The table shows total generation and renewable share in 2010 and 2020.\n\nIn Germany, renewables was 46% and coal was 25%. Gas was 16% and nuclear was 11%. In Australia, coal was 54% and gas was 20%. Renewables was 24%. Australia has no nuclear.\n\nThe table shows Germany total generation was 633 TWh in 2010 and 575 TWh in 2020. Australia was 255 TWh in 2010 and 265 TWh in 2020.\n\nThe renewable share in Germany was 17% in 2010 and 46% in 2020. In Australia it was 9% in 2010 and 24% in 2020.\n\nOverall, Germany and Australia use different sources for electricity and renewables increased in both countries.`,

      band65: `The pie charts show where Germany and Australia got their electricity from in 2020, and the table gives information about total electricity production and the share from renewables in 2010 and 2020 for both countries.\n\nOverall, both countries increased their use of renewable energy between 2010 and 2020, but Germany used a much higher proportion of renewables than Australia by 2020. Coal remained the most important source for Australia, while renewables became the largest source in Germany.\n\nIn 2020, renewables accounted for 46% of Germany's electricity, making it the largest single source. Coal was second at 25%, followed by gas at 16% and nuclear at 11%. In contrast, coal dominated in Australia at 54%, with gas at 20% and renewables at only 24%.\n\nThe table shows that Germany's total electricity output fell slightly from 633 TWh in 2010 to 575 TWh in 2020, while Australia's rose modestly from 255 to 265 TWh. More significantly, Germany's renewable share nearly tripled from 17% to 46%, and Australia's also grew, though less impressively, from 9% to 24%.\n\nIn summary, Germany made much greater progress in renewable energy than Australia over the decade, despite producing more electricity overall.`,

      band75: `The pie charts illustrate the energy mix used to generate electricity in Germany and Australia in 2020, while the table provides comparative data on total output and the proportion derived from renewable sources in both 2010 and 2020.\n\nOverall, the two countries present a clear contrast: Germany had achieved a far greater transition to renewable energy by 2020, whereas Australia remained heavily dependent on coal. Both nations, however, more than doubled their renewable share over the decade.\n\nIn Germany, renewables constituted the largest single source in 2020 at 46%, followed by coal at 25%, gas at 16%, and nuclear at 11%. Australia's energy mix stood in stark contrast, with coal accounting for well over half of generation at 54%, and renewables contributing only 24% — nearly half the German figure. Notably, Australia uses no nuclear power, unlike Germany where it still represented 11% of output.\n\nThe table reinforces these differences while also revealing a shared trajectory. Germany's total output declined marginally from 633 TWh to 575 TWh, reflecting improved energy efficiency, while Australia's rose slightly from 255 to 265 TWh. Of greater significance is the growth in renewable share: Germany's nearly tripled from 17% to 46%, and Australia's increased from 9% to 24% — a substantial rise in proportional terms, though still well behind Germany's transition.`,

      keySentences: [
        {
          sentence: "Overall, both countries increased their use of renewable energy between 2010 and 2020, but Germany used a much higher proportion of renewables than Australia by 2020.",
          why: "This overview is effective because it identifies a shared trend (both increased renewables) and a key contrast (different levels), covering both the pie charts and the table in a single sentence.",
        },
        {
          sentence: "More significantly, Germany's renewable share nearly tripled from 17% to 46%, and Australia's also grew, though less impressively, from 9% to 24%.",
          why: "The phrase 'more significantly' signals to the examiner that the writer is selecting the most important data. The parenthetical 'though less impressively' adds a comparison without needing a separate sentence.",
        },
        {
          sentence: "In contrast, coal dominated in Australia at 54%, with gas at 20% and renewables at only 24%.",
          why: "The word 'only' adds a subtle evaluative tone, implying the 24% is low relative to Germany's 46%. Using evaluative language appropriately is a feature of Band 6.5+ writing.",
        },
      ],
      upgradeTips: [
        {
          label: "Vocabulary",
          band65example: "Germany used a much higher proportion of renewables than Australia",
          band75example: "Germany had achieved a far greater transition to renewable energy",
          tip: "The noun phrase 'transition to renewable energy' is more dynamic and academic than 'proportion of renewables', conveying the idea of change over time rather than a static comparison.",
        },
        {
          label: "Sentence Structure",
          band65example: "Australia also grew, though less impressively, from 9% to 24%.",
          band75example: "Australia's increased from 9% to 24% — a substantial rise in proportional terms, though still well behind Germany's transition.",
          tip: "The em-dash introduces an appositive phrase that elaborates on the data. This avoids a new sentence while adding analytical depth.",
        },
        {
          label: "Cross-visual Analysis",
          band65example: "The table shows that Germany's total electricity output fell slightly from 633 TWh in 2010 to 575 TWh in 2020.",
          band75example: "Germany's total output declined marginally from 633 TWh to 575 TWh, reflecting improved energy efficiency.",
          tip: "Rather than just reporting the table figure, the Band 7.5 answer offers an interpretation ('reflecting improved energy efficiency'). Linking a statistic to a plausible explanation adds analytical value.",
        },
        {
          label: "Contrast Language",
          band65example: "In contrast, coal dominated in Australia at 54%.",
          band75example: "Australia's energy mix stood in stark contrast, with coal accounting for well over half of generation at 54%.",
          tip: "'Stood in stark contrast' is more vivid and academic. The phrase 'well over half' also makes the 54% figure feel more emphatic.",
        },
      ],
    },
  },
  {
    id: 3,
    types: ["Line Graph", "Table"],
    title: "Youth Unemployment & GDP Growth",
    description:
      "The line graph shows youth unemployment rates (%) in Spain, Germany, and the UK between 2005 and 2020. The table shows average annual GDP growth (%) for the same three countries across two periods: 2005–2010 and 2011–2020.",
    visuals: [
      {
        type: "line",
        title: "Youth Unemployment Rate (%)",
        labels: ["2005", "2008", "2010", "2012", "2015", "2018", "2020"],
        datasets: [
          { label: "Spain", values: [19, 24, 42, 55, 48, 34, 38] },
          { label: "Germany", values: [15, 10, 9, 8, 7, 6, 7] },
          { label: "UK", values: [12, 15, 20, 22, 16, 11, 13] },
        ],
      },
      {
        type: "table",
        title: "Average Annual GDP Growth (%)",
        headers: ["Country", "2005–2010", "2011–2020"],
        rows: [
          ["Spain", "0.4%", "1.2%"],
          ["Germany", "1.3%", "1.8%"],
          ["UK", "0.8%", "1.5%"],
        ],
      },
    ],
    sampleAnswer: {
      band50: `The line graph shows youth unemployment in Spain, Germany and UK. The table shows GDP growth.\n\nIn 2005, Spain was 19%, Germany was 15% and UK was 12%. In 2012, Spain increased to 55%. This is very high. UK increased to 22%. Germany decreased to 8%.\n\nIn 2020, Spain was 38% and UK was 13%. Germany was 7%.\n\nThe table shows GDP growth. Spain was 0.4% in 2005-2010 and 1.2% in 2011-2020. Germany was 1.3% and 1.8%. UK was 0.8% and 1.5%.\n\nOverall, Spain has the highest unemployment and Germany has the highest GDP growth.`,

      band65: `The line graph shows youth unemployment rates in Spain, Germany, and the UK from 2005 to 2020, and the table gives the average GDP growth for these countries in two time periods.\n\nOverall, youth unemployment was highest in Spain and lowest in Germany throughout the period, and Spain experienced a dramatic rise and fall around the 2008 financial crisis. Germany's GDP growth was stronger than the other two countries in both periods.\n\nIn 2005, Spain's youth unemployment stood at 19%, the UK's at 12%, and Germany's at 15%. After the 2008 financial crisis, Spain's rate rose sharply to 55% by 2012, which was the highest figure in the graph. The UK's rate also increased, reaching 22% in 2012. In contrast, Germany's youth unemployment fell throughout the period, dropping from 15% in 2005 to just 6% in 2018.\n\nAfter 2012, Spain's unemployment began to fall, though it rose again slightly to 38% in 2020. The UK showed a similar recovery, falling to 11% in 2018 before a small increase to 13% in 2020.\n\nThe table shows that GDP growth improved in all three countries in the second period, with Germany having the highest growth in both periods at 1.3% and 1.8%.`,

      band75: `The line graph illustrates youth unemployment rates in Spain, Germany, and the UK from 2005 to 2020, while the table presents average annual GDP growth across two distinct periods for the same countries. Taken together, the data suggest a clear relationship between economic performance and youth employment outcomes.\n\nOverall, Spain experienced the most volatile unemployment trajectory, peaking dramatically in the aftermath of the 2008 financial crisis before a partial recovery. Germany, by contrast, maintained consistently low unemployment and the strongest GDP growth throughout. The UK occupied a middle position across both indicators.\n\nIn 2005, youth unemployment rates were broadly comparable across the three nations: Spain at 19%, Germany at 15%, and the UK at 12%. However, the 2008 crisis triggered sharply divergent outcomes. Spain's rate surged to a peak of 55% in 2012, while Germany's continued its downward trend, reaching a low of just 6% in 2018. The UK followed a more moderate path, peaking at 22% in 2012 before recovering to 11% by 2018.\n\nThe table contextualises these trends effectively. Spain's average GDP growth in the 2005–2010 period was a negligible 0.4%, which aligns closely with its unemployment crisis. Germany's superior growth of 1.3% in the same period reflects its relative economic resilience. Across the 2011–2020 period, all three countries recorded stronger GDP growth, with modest improvements in unemployment in Spain and the UK — though Spain's rate remained elevated at 38% in 2020.`,

      keySentences: [
        {
          sentence: "Overall, youth unemployment was highest in Spain and lowest in Germany throughout the period, and Spain experienced a dramatic rise and fall around the 2008 financial crisis.",
          why: "This overview covers the full line graph in one sentence, identifying both the ranking between countries and the key pattern (rise and fall). For line graphs, noting the shape of the trend is essential at Band 6.5.",
        },
        {
          sentence: "In contrast, Germany's youth unemployment fell throughout the period, dropping from 15% in 2005 to just 6% in 2018.",
          why: "The word 'just' before '6%' adds emphasis, making the low figure more striking. This simple evaluative word helps the writing feel more analytical without requiring complex vocabulary.",
        },
        {
          sentence: "The table shows that GDP growth improved in all three countries in the second period, with Germany having the highest growth in both periods at 1.3% and 1.8%.",
          why: "Referencing the table separately and connecting it to a country comparison shows the writer is synthesising both visuals. This cross-referencing is a core skill in combination tasks.",
        },
      ],
      upgradeTips: [
        {
          label: "Synthesis of Two Visuals",
          band65example: "The table shows that GDP growth improved in all three countries in the second period.",
          band75example: "The table contextualises these trends effectively. Spain's average GDP growth in the 2005–2010 period was a negligible 0.4%, which aligns closely with its unemployment crisis.",
          tip: "The Band 7.5 answer uses the table to explain the line graph rather than simply reporting from it separately. The phrase 'aligns closely with' shows the writer is drawing connections between the two data sources.",
        },
        {
          label: "Vocabulary",
          band65example: "Spain experienced a dramatic rise and fall",
          band75example: "Spain experienced the most volatile unemployment trajectory",
          tip: "'Volatile' and 'trajectory' are precise academic terms — 'volatile' implies unpredictability, and 'trajectory' refers specifically to a pattern of change over time.",
        },
        {
          label: "Sentence Structure",
          band65example: "After the 2008 financial crisis, Spain's rate rose sharply to 55% by 2012, which was the highest figure in the graph.",
          band75example: "Spain's rate surged to a peak of 55% in 2012, while Germany's continued its downward trend, reaching a low of just 6% in 2018.",
          tip: "Combining two contrasting countries in a single sentence using 'while' is more efficient and creates a direct comparison — more analytical than describing each country separately.",
        },
        {
          label: "Introductory Framing",
          band65example: "The line graph shows youth unemployment rates... and the table gives the average GDP growth...",
          band75example: "Taken together, the data suggest a clear relationship between economic performance and youth employment outcomes.",
          tip: "Adding an interpretive sentence at the end of the introduction signals immediately that the writer understands the connection between both visuals — a hallmark of Band 7+ responses.",
        },
      ],
    },
  },
];
