import type { SeoPage } from "./types";

export const solutionPages: SeoPage[] = [
  {
    slug: "ai-development-services",
    category: "solutions",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "AI development services",
    secondaryKeywords: ["AI developer for hire", "custom AI application development", "AI integration developer", "applied AI development"],
    searchIntent: "commercial",
    title: "AI Development Services | Justin Johnson",
    description: "AI development services — integrating LLM APIs into real applications for support, search, and workflow automation.",
    h1: "AI Development Services",
    eyebrow: "AI & Automation",
    intro: [
      "AI development, in practice, mostly means integrating an existing large language model API (OpenAI, Anthropic) into an application's actual workflow — not training models from scratch. The engineering work is in prompt design, retrieval of the right context, handling failures gracefully, and wiring the output into something the rest of the app can use reliably.",
      "I build these as regular application features — a chatbot, a document processor, a lead-qualification step — backed by an LLM API, rather than standalone AI demos that don't connect to anything.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Repetitive tasks — summarizing, categorizing, drafting responses — that currently take staff time and follow a fairly consistent pattern",
              "Customer-facing content or support that needs to scale without linearly scaling headcount",
              "Unstructured data (documents, emails, form submissions) that needs to be turned into structured, usable information",
              "Wanting AI features but not knowing where the actual engineering complexity is — usually not the model, but the integration around it",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "LLM API integration (OpenAI, Anthropic, or others depending on the use case)",
              "Prompt design and testing for the specific task",
              "Retrieval-augmented generation for answers grounded in your own data",
              "Structured output parsing so AI responses feed cleanly into the rest of the application",
              "Fallback handling for when the model output isn't usable",
              "Cost monitoring, since LLM API usage is billed per token",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Define the specific task precisely — vague 'add AI' requests get scoped down to a concrete input/output problem",
              "Prototype with a small test set to validate the approach works before building the full integration",
              "Build the integration with proper error handling and fallback behavior",
              "Add monitoring for cost and output quality once it's live",
              "Iterate on prompts based on real usage, not just initial testing",
            ],
          },
        ],
      },
      {
        heading: "Technology Stack",
        blocks: [
          {
            kind: "list",
            items: ["OpenAI API / Anthropic API", "Node.js", "Vector databases for retrieval", "TypeScript for structured output typing"],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you train custom AI models?",
        answer: "No — for the vast majority of business applications, integrating an existing large language model via API and grounding it with your own data (retrieval-augmented generation) gets better results faster and more reliably than training a model from scratch, which requires far more data and infrastructure than most projects can justify.",
      },
      {
        question: "How much does an AI feature cost to run?",
        answer: "LLM APIs bill per token processed, so cost scales with usage volume and how much context each request sends. I set up monitoring so the actual cost is visible from early on, rather than discovered as a surprise bill.",
      },
      {
        question: "What happens when the AI gives a wrong answer?",
        answer: "This gets designed for explicitly — confidence thresholds, fallback to a human or a default response, and grounding answers in your actual data (RAG) rather than the model's general training, which reduces but doesn't eliminate incorrect outputs.",
      },
      {
        question: "Is my data used to train the AI model?",
        answer: "That depends on the provider's terms and the API tier used — most enterprise API tiers from major providers explicitly exclude your data from training. This is worth confirming against the specific provider's current policy before sending sensitive data.",
      },
    ],
    relatedSlugs: ["solutions/ai-chatbot-development", "solutions/openai-api-integration", "solutions/ai-consulting-services", "guides/how-to-integrate-the-openai-api-with-nextjs"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "ai-chatbot-development",
    category: "solutions",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "AI chatbot development",
    secondaryKeywords: ["custom AI chatbot developer", "website chatbot development", "GPT-powered chatbot", "AI chatbot integration"],
    searchIntent: "commercial",
    title: "AI Chatbot Development | Justin Johnson",
    description: "Custom AI chatbot development — grounded in your own content, integrated into your website or product, not a generic widget.",
    h1: "AI Chatbot Development",
    eyebrow: "AI & Automation",
    intro: [
      "A useful chatbot is grounded in your specific content — product details, documentation, policies — rather than relying on the model's general knowledge, which is what causes chatbots to confidently make things up. I build these with retrieval-augmented generation, so answers are pulled from your actual data before the model composes a response.",
      "The interface itself is usually the smaller part of the work; the retrieval pipeline and fallback behavior when the bot doesn't know something are where most of the engineering effort goes.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Repetitive customer questions that a support team answers the same way many times over",
              "Documentation or FAQ content that's hard to search, where a conversational interface finds the right answer faster",
              "Off-hours support coverage without staffing a live team around the clock",
              "Generic third-party chat widgets that don't actually know anything about your specific product",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Retrieval pipeline that indexes your content (docs, product data, FAQs) for grounded answers",
              "Chat interface integrated into your site's design, not a generic embedded widget",
              "Conversation handoff to a human for questions the bot can't answer confidently",
              "Response logging so you can see what people are actually asking",
              "Rate limiting and abuse prevention",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Identify the content the bot should draw from and get it into a searchable, chunked format",
              "Build the retrieval pipeline so relevant content is pulled into context before the model responds",
              "Design the fallback behavior for questions outside what the bot has grounded knowledge of",
              "Build the chat interface matched to your site's design",
              "Test against real questions, not just the obvious ones, before launch",
            ],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Sites with enough documentation or product content that search alone isn't finding answers efficiently, and support teams fielding a high volume of repetitive, well-documented questions.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Will the chatbot make things up?",
        answer: "Grounding it in your actual content through retrieval-augmented generation significantly reduces this compared to a chatbot relying purely on the model's general training, though no LLM-based system eliminates the risk entirely — which is why a fallback path to a human matters for anything high-stakes.",
      },
      {
        question: "Can it hand off to a human?",
        answer: "Yes — when the bot's confidence is low or the question falls outside its grounded knowledge, it can route to a human agent or a contact form rather than guessing.",
      },
      {
        question: "How is this different from a generic chatbot widget?",
        answer: "Off-the-shelf widgets are typically either scripted (limited to pre-written flows) or connected to a general model without grounding in your specific content. This is built around your actual product data from the start, and matches your site's design instead of looking like a bolted-on third-party tool.",
      },
      {
        question: "Does the chatbot need constant updating?",
        answer: "The retrieval index needs to stay in sync with your content as it changes, which is typically automated as part of the build rather than a manual task.",
      },
    ],
    relatedSlugs: ["solutions/retrieval-augmented-generation-systems", "solutions/ai-customer-support-automation", "solutions/openai-api-integration", "guides/how-to-build-an-ai-chatbot-for-a-website", "solutions/ai-development-services", "solutions/ai-knowledge-base-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "ai-automation-services",
    category: "solutions",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "AI automation services",
    secondaryKeywords: ["business process automation with AI", "AI automation developer", "automate repetitive tasks with AI", "AI-powered automation"],
    searchIntent: "commercial",
    title: "AI Automation Services | Justin Johnson",
    description: "AI automation for repetitive business processes — document handling, categorization, and drafting, wired into your existing tools.",
    h1: "AI Automation Services",
    eyebrow: "AI & Automation",
    intro: [
      "The most reliable AI automation work isn't a single big system — it's identifying specific, repetitive tasks with a fairly consistent input/output pattern and automating just that step, wired into the tools you already use. Email triage, document categorization, drafting first-pass responses — narrow, well-defined tasks are where AI automation is most dependable today.",
      "I scope these projects down to a concrete task before building anything, because vague automation goals tend to produce systems that don't hold up against real, messy input.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Staff time spent on repetitive tasks that follow a consistent, learnable pattern",
              "Manual data entry from unstructured sources (emails, PDFs, forms) into a structured system",
              "Slow response times on routine requests because they queue behind higher-priority work",
              "Processes that already have clear rules but still require someone to execute them by hand",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Process mapping to identify what's genuinely automatable versus what still needs human judgment",
              "AI-powered classification, extraction, or drafting for the identified task",
              "Integration with existing tools (email, CRM, spreadsheets, internal systems)",
              "Human review step for anything above a defined confidence or risk threshold",
              "Monitoring so automation quality is visible, not a black box",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Map the current process step by step to find the specific bottleneck worth automating",
              "Prototype the automation against real historical examples before building the full pipeline",
              "Build the integration into existing tools, not a separate system nobody uses",
              "Add a human-in-the-loop review step where the cost of an error is high",
              "Monitor accuracy over time and adjust as edge cases surface",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What tasks are actually good candidates for AI automation?",
        answer: "Tasks with a consistent pattern and a moderate cost of error — categorizing incoming emails, drafting a first response, extracting data from a standard document format. High-stakes, highly variable decisions are poor candidates without a human review step.",
      },
      {
        question: "Will this replace staff?",
        answer: "It's most effective at removing the repetitive part of a job, freeing staff for the judgment-based work AI still handles poorly. Whether that changes headcount is a business decision, not something the automation itself dictates.",
      },
      {
        question: "How accurate is AI automation in practice?",
        answer: "It varies by task and is worth measuring against your own data before rollout rather than assumed. A human review step for lower-confidence outputs is standard practice for anything where an error has real consequences.",
      },
    ],
    relatedSlugs: ["solutions/ai-workflow-automation", "solutions/ai-document-processing", "solutions/ai-email-automation", "solutions/ai-consulting-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "openai-api-integration",
    category: "solutions",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "OpenAI API integration",
    secondaryKeywords: ["GPT API integration developer", "OpenAI developer for hire", "ChatGPT API integration", "OpenAI function calling"],
    searchIntent: "commercial",
    title: "OpenAI API Integration Services | Justin Johnson",
    description: "OpenAI API integration into existing applications — chat, structured output, function calling, and cost-aware implementation.",
    h1: "OpenAI API Integration Services",
    eyebrow: "AI & Automation",
    intro: [
      "Integrating the OpenAI API into a real application is more than sending a prompt and displaying the response — it involves managing context windows, parsing structured output reliably, handling function calling for actions the model should trigger, and controlling cost as usage scales.",
      "I integrate the API into existing Node.js and Next.js applications, treating error handling and cost monitoring as core requirements rather than something to add after launch.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Chat completions with proper streaming for responsive UI",
              "Structured output (JSON mode / function calling) for responses your app can parse reliably",
              "Context management for conversations that need memory across turns",
              "Rate limit and error handling, including retries with backoff",
              "Cost tracking per request or per user",
            ],
          },
        ],
      },
      {
        heading: "Function Calling",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Function calling lets the model decide when to trigger a specific action in your app — looking up an order, scheduling an appointment — by returning structured arguments instead of free text you'd have to parse. This is what turns a chatbot from something that only talks into something that can actually do things inside your application.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Which OpenAI model should I use?",
        answer: "Depends on the task's complexity and cost sensitivity — a smaller, faster model is often sufficient and cheaper for classification or extraction tasks, while more complex reasoning tasks benefit from a larger model. I test against the actual task rather than defaulting to the most expensive option.",
      },
      {
        question: "How do you keep API costs predictable?",
        answer: "Setting per-user or per-feature usage limits, caching responses where the same query repeats, and choosing the smallest model that reliably handles the task — cost scales directly with tokens processed, so trimming unnecessary context matters.",
      },
      {
        question: "What is function calling used for?",
        answer: "Letting the model trigger real actions — querying a database, calling another API — by returning structured arguments matching a function signature you define, rather than free-text output your app would have to parse and guess at.",
      },
    ],
    relatedSlugs: ["solutions/ai-development-services", "guides/how-to-integrate-the-openai-api-with-nextjs", "solutions/ai-chatbot-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "ai-customer-support-automation",
    category: "solutions",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "AI customer support automation",
    secondaryKeywords: ["AI support ticket triage", "automated customer service", "AI helpdesk integration", "support automation developer"],
    searchIntent: "commercial",
    title: "AI Customer Support Automation | Justin Johnson",
    description: "AI-assisted customer support — ticket triage, drafted responses, and grounded answers, with escalation to a human built in.",
    h1: "AI Customer Support Automation",
    eyebrow: "AI & Automation",
    intro: [
      "Support automation works best as assistance rather than full replacement — triaging and categorizing incoming tickets, drafting a first-pass response an agent reviews before sending, and answering routine questions directly when confidence is high, with a clear path to a human for everything else.",
      "I build this integrated into whatever support tooling you're already using, rather than as a separate system agents have to check independently.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Support queues where a large share of tickets are routine, repeated questions",
              "Response time lagging during peak volume because everything queues for a human",
              "Inconsistent answers across agents to the same common question",
              "No categorization or prioritization on incoming tickets, so urgent issues sit alongside routine ones",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Automatic ticket categorization and priority tagging",
              "Grounded answer suggestions for common questions, drawn from your documentation",
              "Draft response generation for agents to review and send, not auto-send",
              "Escalation rules for anything outside routine, well-documented territory",
              "Integration with existing helpdesk tools",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does this fully automate support?",
        answer: "For most businesses, no — the more reliable pattern is automating triage and drafting, with a human reviewing before anything sends, at least initially. Fully automated responses are appropriate only for a narrow set of high-confidence, low-stakes questions.",
      },
      {
        question: "How does it know the right answer?",
        answer: "It's grounded in your actual documentation and past resolved tickets through retrieval, rather than relying on the model's general knowledge — this is what keeps answers accurate to your specific product and policies.",
      },
      {
        question: "Can it integrate with our existing helpdesk?",
        answer: "Yes, typically via the helpdesk platform's API — tickets get categorized and draft responses generated within your existing tool rather than requiring agents to switch to a separate system.",
      },
    ],
    relatedSlugs: ["solutions/ai-chatbot-development", "solutions/ai-knowledge-base-development", "solutions/retrieval-augmented-generation-systems", "solutions/ai-email-automation"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "ai-lead-generation-systems",
    category: "solutions",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "AI lead generation systems",
    secondaryKeywords: ["AI lead qualification", "automated lead scoring", "AI sales lead capture", "lead qualification chatbot"],
    searchIntent: "commercial",
    title: "AI Lead Generation Systems | Justin Johnson",
    description: "AI-assisted lead qualification and capture — routing and scoring inbound leads before they reach a sales rep.",
    h1: "AI Lead Generation Systems",
    eyebrow: "AI & Automation",
    intro: [
      "The bottleneck in most lead generation setups isn't getting inbound interest, it's qualifying and routing it fast enough — a lead that sits unqualified for a day has already cooled off. I build systems that use conversational forms or chat interfaces to gather qualifying information upfront, then score and route the lead automatically.",
      "This connects into your existing CRM rather than becoming a separate lead list someone has to manually reconcile.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Generic contact forms that capture an email but no useful qualifying information",
              "Sales reps spending time on leads that were never going to convert",
              "Slow response time to inbound interest because qualification happens manually after the fact",
              "No consistent scoring, so prioritization is based on gut feeling rather than actual fit signals",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Conversational intake form or chatbot that gathers qualifying details naturally",
              "Lead scoring based on criteria specific to your sales process",
              "Automatic routing to the right rep or team based on the lead's profile",
              "CRM integration so leads land where sales already works",
              "Follow-up sequencing for leads that aren't sales-ready yet",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How is this different from a standard contact form?",
        answer: "A standard form captures whatever fields you define, static and the same for everyone. A conversational intake can ask follow-up questions based on earlier answers, gathering more useful qualifying information without making the form feel long.",
      },
      {
        question: "How is lead scoring determined?",
        answer: "Based on criteria specific to your business — budget signals, timeline, company size, whatever actually correlates with a lead converting in your sales process, defined together during scoping rather than a generic template.",
      },
      {
        question: "Does this replace our CRM?",
        answer: "No — it feeds qualified, scored leads into your existing CRM, so sales continues working from the same system rather than checking a separate tool.",
      },
    ],
    relatedSlugs: ["solutions/ai-powered-crm-solutions", "services/crm-development-services", "solutions/ai-appointment-scheduling", "industries/crm-development-for-real-estate"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "ai-powered-crm-solutions",
    category: "solutions",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "AI-powered CRM solutions",
    secondaryKeywords: ["AI CRM developer", "CRM with AI features", "smart CRM development", "AI-enhanced customer management"],
    searchIntent: "commercial",
    title: "AI-Powered CRM Solutions | Justin Johnson",
    description: "CRM development with AI features layered in — summarized activity, drafted follow-ups, and smart lead prioritization.",
    h1: "AI-Powered CRM Solutions",
    eyebrow: "AI & Automation",
    intro: [
      "A CRM holds a lot of unstructured history — call notes, emails, past interactions — that's rarely read in full before a follow-up. AI features layered onto a CRM can summarize that history, draft a follow-up based on it, and prioritize which contacts need attention, without replacing the CRM's core record-keeping.",
      "This builds on the custom CRM development work, adding AI capabilities specifically where they save real time rather than as a generic add-on.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Automatic summarization of long contact or deal histories",
              "Drafted follow-up emails based on context from the CRM record",
              "Smart prioritization of which leads or accounts need attention",
              "Natural-language search across CRM records ('show me deals stalled over 30 days')",
              "Data entry assistance — extracting structured fields from unstructured notes",
            ],
          },
        ],
      },
      {
        heading: "How This Fits With a Custom CRM Build",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "These features sit on top of a properly modeled CRM — they're not useful without clean underlying data to draw from. If you don't yet have a CRM that fits your process, that comes first; AI features are the layer added once the data model is solid.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can this be added to an existing CRM?",
        answer: "Yes, if the CRM has an accessible API or database — the AI layer reads from and writes back to the existing records rather than requiring a full CRM rebuild, as long as the underlying data is reasonably structured.",
      },
      {
        question: "Does it replace the need for sales reps to review records?",
        answer: "No — it summarizes and surfaces information faster, and drafts don't send without review. The goal is cutting the time spent reading through history before acting, not removing human judgment from the interaction.",
      },
      {
        question: "How accurate are the summaries?",
        answer: "Grounded directly in the actual CRM record content rather than general knowledge, which keeps them accurate to what's actually in your data — though any AI summary is worth a quick human scan before acting on it for anything high-stakes.",
      },
    ],
    relatedSlugs: ["services/crm-development-services", "solutions/ai-lead-generation-systems", "industries/crm-development-for-real-estate", "guides/how-to-build-a-crm-with-nextjs-and-supabase"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "ai-workflow-automation",
    category: "solutions",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "AI workflow automation",
    secondaryKeywords: ["automate business workflows with AI", "AI process automation developer", "workflow automation development", "connect business tools with AI"],
    searchIntent: "commercial",
    title: "AI Workflow Automation | Justin Johnson",
    description: "AI-assisted workflow automation connecting your existing tools — triggered steps, drafted content, and structured data extraction.",
    h1: "AI Workflow Automation",
    eyebrow: "AI & Automation",
    intro: [
      "Most business workflows already involve several tools that don't talk to each other — a form submission that needs to become a CRM record, a document that needs review before an approval step. Workflow automation connects those tools and uses AI specifically at the points where a step requires interpreting unstructured input rather than just moving data between systems.",
      "I build these as custom integrations tailored to your actual tools rather than trying to force everything through a generic no-code automation platform's limitations.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Manual handoffs between tools that don't have a native integration",
              "Steps in a process that require reading and interpreting unstructured input before the next action can happen",
              "No-code automation tools that work until the workflow needs logic they can't express",
              "Processes that are well-understood but still require someone to manually execute each step",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Integration between your existing tools via their APIs",
              "AI-powered steps for interpretation, classification, or drafting where the workflow needs it",
              "Error handling and retry logic so a failed step doesn't silently drop data",
              "Audit trail of what happened at each step",
              "Human approval gates where a step shouldn't run fully unattended",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How is this different from Zapier or Make?",
        answer: "No-code platforms are a reasonable starting point for simple, well-defined connections. Custom automation earns its cost once the workflow needs logic those platforms can't express cleanly, needs to handle scale or cost those platforms don't support well, or needs tighter integration with a custom-built system.",
      },
      {
        question: "What happens if a step in the automation fails?",
        answer: "Failures are logged and retried according to a defined policy rather than silently dropped, and critical failures can trigger an alert so a human can intervene rather than data quietly going missing.",
      },
      {
        question: "Can a human review before an automated action completes?",
        answer: "Yes — approval gates can be added at any step where the cost of an automated mistake is high enough to warrant a human check before it proceeds.",
      },
    ],
    relatedSlugs: ["solutions/ai-automation-services", "solutions/ai-document-processing", "services/api-development-integration", "solutions/ai-email-automation", "solutions/ai-agents-for-businesses"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "ai-document-processing",
    category: "solutions",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "AI document processing",
    secondaryKeywords: ["AI document extraction", "automated document data extraction", "invoice extraction automation", "PDF data extraction AI"],
    searchIntent: "commercial",
    title: "AI Document Processing | Justin Johnson",
    description: "AI-powered document processing — extracting structured data from invoices, forms, and PDFs into your existing systems.",
    h1: "AI Document Processing",
    eyebrow: "AI & Automation",
    intro: [
      "Documents — invoices, contracts, application forms — carry structured information trapped in an unstructured format. AI document processing extracts the specific fields you need (amounts, dates, names, line items) and turns them into structured data your existing systems can actually use, instead of someone re-typing it manually.",
      "The accuracy of this depends heavily on document consistency, so I test against a representative sample of your real documents before committing to an approach.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Staff manually re-typing data from invoices, forms, or contracts into another system",
              "Inconsistent document formats making traditional OCR-only extraction unreliable",
              "Slow processing time on document-heavy workflows (accounts payable, applications, claims)",
              "No easy way to search or query information that's locked inside PDF or scanned documents",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Field extraction tuned to your specific document types",
              "Validation rules to flag low-confidence extractions for human review",
              "Integration into your existing system (accounting software, database, CRM)",
              "Handling for varied formats and layouts, not just a single template",
              "Audit trail linking extracted data back to the source document",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How accurate is AI document extraction?",
        answer: "It depends heavily on document consistency and quality — accuracy on clean, consistently formatted documents is high; scanned or handwritten documents introduce more error. I test against your actual documents before committing to an accuracy expectation.",
      },
      {
        question: "What happens with low-confidence extractions?",
        answer: "Flagged for human review rather than silently accepted — the threshold for what counts as 'low confidence' is tuned to how costly an error would be for that specific field.",
      },
      {
        question: "Can it handle different document formats?",
        answer: "Yes, within reason — a system trained or prompted against your specific document types handles format variation better than a generic extractor, but genuinely novel layouts still need testing before you can trust them fully.",
      },
    ],
    relatedSlugs: ["solutions/ai-workflow-automation", "solutions/ai-email-automation", "solutions/ai-knowledge-base-development", "solutions/ai-automation-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "ai-email-automation",
    category: "solutions",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "AI email automation",
    secondaryKeywords: ["AI email drafting", "automated email triage", "AI inbox management", "smart email response system"],
    searchIntent: "commercial",
    title: "AI Email Automation | Justin Johnson",
    description: "AI-assisted email triage and drafting — categorizing, prioritizing, and drafting responses without giving up review control.",
    h1: "AI Email Automation",
    eyebrow: "AI & Automation",
    intro: [
      "Shared inboxes accumulate a mix of routine and urgent messages that all look the same in a list view until someone opens them. AI email automation categorizes and prioritizes incoming mail, and drafts responses for routine categories, so the person handling the inbox spends their time reviewing rather than starting from a blank reply every time.",
      "This integrates with your existing email provider rather than requiring a switch to a new inbox tool.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "A shared inbox where urgent messages get buried among routine ones",
              "Staff time spent drafting similar responses to similar questions repeatedly",
              "No visibility into inbox volume or response time trends",
              "Slow response times because triage happens manually before anyone can act",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Automatic categorization and priority tagging on incoming email",
              "Drafted responses for routine, well-defined categories",
              "Integration with existing email providers (Gmail, Outlook) via their APIs",
              "Escalation flagging for anything that needs immediate human attention",
              "Reporting on volume and response time",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does it send emails automatically?",
        answer: "By default, no — drafts are prepared for human review and send, which is the safer default for anything customer-facing. Fully automatic sending is possible for narrow, low-risk categories if that's genuinely wanted.",
      },
      {
        question: "Which email providers does this work with?",
        answer: "Gmail and Outlook/Microsoft 365, through their respective APIs — most business email running on either platform can be integrated.",
      },
      {
        question: "Can it learn our specific tone and style?",
        answer: "Yes, to a meaningful degree — providing examples of your actual past responses as reference material during setup improves how closely drafts match your existing tone.",
      },
    ],
    relatedSlugs: ["solutions/ai-customer-support-automation", "solutions/ai-workflow-automation", "solutions/ai-appointment-scheduling", "solutions/ai-automation-services", "solutions/ai-document-processing"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "ai-appointment-scheduling",
    category: "solutions",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "AI appointment scheduling",
    secondaryKeywords: ["AI booking assistant", "conversational appointment booking", "automated scheduling system", "AI scheduling integration"],
    searchIntent: "commercial",
    title: "AI Appointment Scheduling | Justin Johnson",
    description: "Conversational AI scheduling that handles booking, rescheduling, and reminders through chat or WhatsApp, tied to your calendar.",
    h1: "AI Appointment Scheduling",
    eyebrow: "AI & Automation",
    intro: [
      "Booking an appointment through a form works, but a conversational interface — especially over WhatsApp, where many customers already are — reduces friction and handles the back-and-forth of finding a mutually available slot more naturally than a static calendar widget.",
      "I build this tied directly to your real calendar or booking system, so availability shown is always accurate and double-bookings aren't possible.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Phone-tag or email back-and-forth just to find an available time slot",
              "No-shows from appointments booked without a reminder system",
              "Staff time spent on manual scheduling and rescheduling requests",
              "Customers who'd rather book over WhatsApp than fill out a web form",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Conversational booking flow via chat widget or WhatsApp",
              "Real-time availability pulled from your actual calendar or booking system",
              "Automated confirmation and reminder messages",
              "Rescheduling and cancellation handled conversationally",
              "Staff notification for new or changed bookings",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does this replace our existing booking software?",
        answer: "Not necessarily — it can act as a conversational front end to an existing calendar or booking system, or replace it entirely, depending on what you already have and whether it fits the business.",
      },
      {
        question: "Can it work over WhatsApp?",
        answer: "Yes, via the WhatsApp Business API — a common preference for businesses whose customers already default to WhatsApp for communication rather than email or web forms.",
      },
      {
        question: "How does it prevent double-booking?",
        answer: "It checks real-time availability against your actual calendar before confirming, and holds the slot briefly during the booking conversation to prevent a race condition with another customer booking simultaneously.",
      },
    ],
    relatedSlugs: ["industries/appointment-booking-systems", "solutions/ai-lead-generation-systems", "industries/salon-booking-system-development", "solutions/ai-email-automation"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "ai-knowledge-base-development",
    category: "solutions",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "AI knowledge base development",
    secondaryKeywords: ["AI-powered internal search", "searchable knowledge base with AI", "AI documentation search", "internal AI search tool"],
    searchIntent: "commercial",
    title: "AI Knowledge Base Development | Justin Johnson",
    description: "AI-searchable knowledge bases — natural-language search across internal docs, wikis, and support content.",
    h1: "AI Knowledge Base Development",
    eyebrow: "AI & Automation",
    intro: [
      "Internal documentation grows faster than anyone can keep a table of contents for, and keyword search often fails when someone doesn't use the exact terms the doc was written with. An AI-powered knowledge base search understands the intent behind a question, not just literal keyword matches, and can synthesize an answer from multiple documents at once.",
      "This is built as a retrieval layer over your existing documentation — wikis, PDFs, help articles — rather than requiring content to be rewritten or migrated to a new platform.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Internal documentation that's grown too large for keyword search to find the right answer reliably",
              "Staff asking colleagues questions that are actually already answered somewhere in existing docs",
              "Content spread across multiple tools (wiki, shared drive, help desk) with no unified search",
              "Onboarding new staff who don't yet know where anything is documented",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Indexing of existing documentation across your current tools",
              "Natural-language search that understands intent, not just keywords",
              "Synthesized answers drawn from multiple source documents, with citations back to the original",
              "Access control so search results respect existing document permissions",
              "Ongoing sync as source content changes",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does this replace our existing wiki or docs platform?",
        answer: "No — it sits on top of your existing documentation as a search layer, indexing content where it already lives rather than requiring a migration to a new platform.",
      },
      {
        question: "How does it handle permissions?",
        answer: "Search results respect the same access controls as the source documents — it doesn't surface content a given user wouldn't already have permission to see in the original system.",
      },
      {
        question: "Does it cite where an answer came from?",
        answer: "Yes — answers link back to the source document, so results can be verified against the original rather than trusted blindly.",
      },
    ],
    relatedSlugs: ["solutions/retrieval-augmented-generation-systems", "solutions/ai-customer-support-automation", "solutions/ai-chatbot-development", "solutions/ai-document-processing"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "retrieval-augmented-generation-systems",
    category: "solutions",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "retrieval-augmented generation systems",
    secondaryKeywords: ["RAG development", "RAG pipeline developer", "vector search implementation", "RAG chatbot architecture"],
    searchIntent: "commercial",
    title: "Retrieval-Augmented Generation (RAG) Systems | Justin Johnson",
    description: "RAG pipeline development — grounding LLM responses in your own data with vector search and proper source citation.",
    h1: "Retrieval-Augmented Generation (RAG) Systems",
    eyebrow: "AI & Automation",
    intro: [
      "RAG is the technique behind every grounded AI feature on this site's solutions cluster — instead of relying on a language model's general training, relevant chunks of your own data are retrieved first (usually via vector similarity search) and passed into the model's context, so its answer is based on what you actually have rather than what it might have learned generally.",
      "I build the full pipeline: chunking your source content sensibly, generating and storing embeddings, retrieval logic, and the prompt structure that combines retrieved context with the user's question.",
    ],
    sections: [
      {
        heading: "How a RAG Pipeline Works",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Source content is split into chunks small enough to be individually relevant but large enough to retain context",
              "Each chunk is converted into a vector embedding and stored in a vector database",
              "A user's question is embedded the same way and compared against stored chunks to find the most relevant ones",
              "Retrieved chunks are inserted into the prompt as context alongside the user's question",
              "The model generates a response grounded in that retrieved context, ideally with citations back to the source",
            ],
          },
        ],
      },
      {
        heading: "Where Quality Actually Comes From",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "The model itself matters less than the retrieval step — if the wrong chunks get retrieved, even the best model produces a confidently wrong answer. Chunking strategy, embedding quality, and retrieval tuning are where most of the real engineering effort and iteration happen.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What's the difference between RAG and fine-tuning?",
        answer: "Fine-tuning changes the model's weights based on training examples, which is expensive and needs to be redone as data changes. RAG keeps the model unchanged and retrieves fresh, current data at query time — cheaper, faster to update, and generally the better fit for grounding answers in data that changes regularly.",
      },
      {
        question: "What vector database do you use?",
        answer: "Depends on scale and existing infrastructure — options range from a Postgres extension (pgvector, which pairs well with a Supabase setup) to dedicated vector databases for larger-scale needs. I choose based on what fits the project's existing stack.",
      },
      {
        question: "How do you prevent irrelevant chunks from being retrieved?",
        answer: "Tuning chunk size, embedding model choice, and retrieval parameters (like how many chunks to retrieve and any relevance threshold) against real test queries — this tuning is iterative and specific to the actual content being searched.",
      },
    ],
    relatedSlugs: ["solutions/ai-chatbot-development", "solutions/ai-knowledge-base-development", "solutions/ai-agents-for-businesses", "solutions/ai-customer-support-automation", "guides/how-to-build-an-ai-chatbot-for-a-website"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "ai-agents-for-businesses",
    category: "solutions",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "AI agents for businesses",
    secondaryKeywords: ["AI agent development", "autonomous AI agent developer", "multi-step AI agent", "AI agent integration"],
    searchIntent: "commercial",
    title: "AI Agents for Businesses | Justin Johnson",
    description: "AI agent development — systems that take multi-step actions across your tools, with defined boundaries and human checkpoints.",
    h1: "AI Agents for Businesses",
    eyebrow: "AI & Automation",
    intro: [
      "An AI agent, as distinct from a simple chatbot, can take a sequence of actions to accomplish a task — looking something up, calling an API, deciding what to do next based on the result — rather than producing a single response to a single prompt. That extra autonomy is powerful and also where things go wrong if the agent's boundaries aren't defined carefully.",
      "I build agents with a narrow, well-defined set of tools they're allowed to use, explicit stopping conditions, and human checkpoints at the steps where an error would actually matter.",
    ],
    sections: [
      {
        heading: "What This Looks Like in Practice",
        blocks: [
          {
            kind: "list",
            items: [
              "An agent that researches a lead across available data sources and drafts a qualification summary",
              "An agent that processes a support ticket — checking order status, looking up policy, drafting a resolution — before handing off for human approval",
              "An agent that monitors a data source and takes a defined action when a condition is met",
            ],
          },
        ],
      },
      {
        heading: "Why Boundaries Matter More Than Capability",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "An agent with access to too many tools or no limit on how many steps it can take is unpredictable in ways that are hard to debug after the fact. The engineering discipline here is restricting what the agent can actually do, logging every step it takes, and putting a human checkpoint before any action with real consequences (sending an email, charging a card, modifying a record).",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is this safe to run without human oversight?",
        answer: "For actions with real consequences, no — I build in explicit approval checkpoints before anything irreversible happens. Fully autonomous operation is reserved for low-stakes, well-tested tasks where an error is cheap to recover from.",
      },
      {
        question: "How is an agent different from a simple chatbot?",
        answer: "A chatbot responds to a message. An agent can take a sequence of actions — calling tools, evaluating results, deciding the next step — to accomplish a multi-step task, which is more capable but also requires much more careful boundary-setting.",
      },
      {
        question: "Can an agent get stuck in a loop?",
        answer: "It's a known failure mode, which is why agents are built with explicit step limits and stopping conditions rather than letting them run indefinitely until they decide they're done.",
      },
    ],
    relatedSlugs: ["solutions/retrieval-augmented-generation-systems", "solutions/ai-workflow-automation", "solutions/ai-consulting-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "ai-consulting-services",
    category: "solutions",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "AI consulting services",
    secondaryKeywords: ["AI strategy consulting", "AI feasibility assessment", "AI implementation consultant", "where to use AI in business"],
    searchIntent: "commercial",
    title: "AI Consulting Services | Justin Johnson",
    description: "AI consulting focused on where AI genuinely fits your process — feasibility, scoping, and implementation planning.",
    h1: "AI Consulting Services",
    eyebrow: "AI & Automation",
    intro: [
      "Most businesses evaluating AI don't have a technology problem, they have a scoping problem — an unclear sense of which parts of their process AI can reliably help with versus where it would introduce more risk than it removes. Consulting here means an honest assessment of that, backed by direct implementation experience rather than a generic strategy deck.",
      "This is useful both as a standalone engagement before committing budget to a build, and as the first phase of a larger AI development project.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Process review to identify where AI genuinely fits versus where it doesn't",
              "Feasibility assessment against your actual data quality and volume",
              "Cost estimation for realistic AI API usage at your expected scale",
              "Risk assessment for where AI errors would actually matter",
              "A prioritized roadmap if multiple opportunities are identified",
            ],
          },
        ],
      },
      {
        heading: "What I Won't Do",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Recommend AI where a simpler, non-AI solution would work better and cost less to maintain. A rules-based system is often more reliable and cheaper to run than an AI-based one for tasks with genuinely well-defined logic — that's a real recommendation I'll make when it's the honest answer.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a consulting engagement before building anything?",
        answer: "Not always — if the use case is already clear (like the specific examples on this site's AI solutions pages), we can go straight to scoping and building. Consulting is most useful when it's genuinely unclear where AI would help, or when evaluating multiple possible use cases against limited budget.",
      },
      {
        question: "Will you tell me if AI isn't the right fit?",
        answer: "Yes — a rules-based system, a better form, or a process change is sometimes the more reliable and cheaper answer than an AI feature, and I'll say so directly rather than recommending AI by default.",
      },
      {
        question: "How is cost estimated before building?",
        answer: "Based on expected usage volume and the type of AI operation involved (a small classification task is far cheaper per-request than a long-context generation task), using current provider pricing rather than guesswork.",
      },
    ],
    relatedSlugs: ["solutions/ai-development-services", "solutions/ai-automation-services", "solutions/ai-agents-for-businesses"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
];
