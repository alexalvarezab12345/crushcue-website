export interface QuizAnswer {
  label: string;
  weights: Record<string, number>;
}

export interface QuizQuestion {
  text: string;
  answers: QuizAnswer[];
}

export interface QuizResult {
  key: string;
  headline: string;
  body: string;
}

export interface ClusterQuiz {
  questions: QuizQuestion[];
  results: QuizResult[];
}

export const QUIZ_DATA: Record<string, ClusterQuiz> = {

  ghosting: {
    questions: [
      {
        text: "How long has it been since they last replied?",
        answers: [
          { label: "Less than a week",    weights: { "slow-fade": 1 } },
          { label: "1–3 weeks",           weights: { "deliberate-pullback": 2 } },
          { label: "More than a month",   weights: { "deliberate-pullback": 1, "situational-pause": 1 } },
        ],
      },
      {
        text: "Did it happen suddenly or gradually?",
        answers: [
          { label: "Overnight — no warning",              weights: { "deliberate-pullback": 2 } },
          { label: "Gradually got quieter over time",     weights: { "slow-fade": 3 } },
          { label: "After something personal or intense", weights: { "situational-pause": 3 } },
        ],
      },
      {
        text: "Has this happened with them before?",
        answers: [
          { label: "No — this is new",      weights: { "deliberate-pullback": 1 } },
          { label: "Yes — it's a pattern",  weights: { "situational-pause": 2, "slow-fade": 1 } },
          { label: "Not sure",              weights: { "slow-fade": 1 } },
        ],
      },
    ],
    results: [
      {
        key: "deliberate-pullback",
        headline: "This looks deliberate, not accidental.",
        body: "The timing and pattern suggest they've stepped back on purpose. This isn't a missed notification — it's a choice. CrushCue can tell you exactly what kind.",
      },
      {
        key: "slow-fade",
        headline: "This looks more like a slow fade than a hard stop.",
        body: "They didn't disappear overnight — the engagement dropped gradually. That's a different signal than ghosting, and it has a different read.",
      },
      {
        key: "situational-pause",
        headline: "This might be a pause, not an ending.",
        body: "Something shifted in their world and they pulled back. That's not the same as ghosting — but it still needs space, not pursuit.",
      },
    ],
  },

  left_on_read: {
    questions: [
      {
        text: "How long ago did they see it?",
        answers: [
          { label: "Under 24 hours",       weights: { "processing": 2 } },
          { label: "1–3 days",             weights: { "avoidance": 2 } },
          { label: "More than 3 days",     weights: { "avoidance": 1, "recurring-pattern": 2 } },
        ],
      },
      {
        text: "Is leaving things on read unusual for them?",
        answers: [
          { label: "Yes — they normally reply quickly", weights: { "avoidance": 2 } },
          { label: "Sometimes they're slow",            weights: { "processing": 2 } },
          { label: "They do this often",                weights: { "recurring-pattern": 3 } },
        ],
      },
      {
        text: "What kind of message did you send?",
        answers: [
          { label: "Something heavy or emotional", weights: { "processing": 2 } },
          { label: "A casual or normal message",   weights: { "avoidance": 2 } },
          { label: "A question or request",        weights: { "avoidance": 1, "processing": 1 } },
        ],
      },
    ],
    results: [
      {
        key: "avoidance",
        headline: "They saw it and chose not to reply.",
        body: "That's not forgetting — that's a decision. The read here isn't about timing, it's about what the non-reply is communicating.",
      },
      {
        key: "processing",
        headline: "They may need more time than usual.",
        body: "If the message landed heavy, silence isn't always rejection — it can be processing. CrushCue reads what kind of pause this actually is.",
      },
      {
        key: "recurring-pattern",
        headline: "This isn't one incident — it's how they operate.",
        body: "If leaving things on read is a pattern, the read shifts. It's less about your specific message and more about their engagement style overall.",
      },
    ],
  },

  mixed_signals: {
    questions: [
      {
        text: "Which pattern sounds most familiar?",
        answers: [
          { label: "Warm in person, cold over text",               weights: { "context-dependent": 3 } },
          { label: "Flirty, then pulls back when you engage",      weights: { "avoidant-pattern": 3 } },
          { label: "Consistent in some ways, unpredictable in others", weights: { "genuine-uncertainty": 3 } },
        ],
      },
      {
        text: "How long has this been going on?",
        answers: [
          { label: "Just recently",    weights: { "genuine-uncertainty": 2 } },
          { label: "A few weeks",      weights: { "genuine-uncertainty": 1, "context-dependent": 1 } },
          { label: "Months",           weights: { "avoidant-pattern": 2 } },
        ],
      },
    ],
    results: [
      {
        key: "context-dependent",
        headline: "Their signals change depending on the context.",
        body: "In-person chemistry and text interest are different things. This isn't necessarily mixed — it's compartmentalized. CrushCue reads which one is the truer signal.",
      },
      {
        key: "avoidant-pattern",
        headline: "The warmth is real, but so is the pullback.",
        body: "Pulling back when someone engages is a pattern, not randomness. It usually has a specific cause — and CrushCue can identify what it is.",
      },
      {
        key: "genuine-uncertainty",
        headline: "They're genuinely uncertain, not playing games.",
        body: "This doesn't look like a strategy — it looks like someone who hasn't decided yet. That's a different situation than hot-and-cold.",
      },
    ],
  },

  hot_and_cold: {
    questions: [
      {
        text: "How many times have you noticed this cycle?",
        answers: [
          { label: "Once or twice",          weights: { "situational": 3 } },
          { label: "Three or more times",    weights: { "anxious-avoidant": 2 } },
          { label: "It's constant",          weights: { "anxious-avoidant": 3 } },
        ],
      },
      {
        text: "What usually brings them back after they pull away?",
        answers: [
          { label: "They just reappear with no explanation", weights: { "anxious-avoidant": 2 } },
          { label: "Something external happened",            weights: { "situational": 2 } },
          { label: "I reach out first",                      weights: { "pursuing-dynamic": 3 } },
        ],
      },
    ],
    results: [
      {
        key: "anxious-avoidant",
        headline: "This matches a push-pull dynamic.",
        body: "Getting close triggers the pullback. It's not about you specifically — it's a pattern that gets activated by intimacy. CrushCue can tell you what the cycle means for your situation.",
      },
      {
        key: "situational",
        headline: "The cycles may have an outside cause.",
        body: "If external factors are driving the coldness, this isn't necessarily a relationship pattern — it's circumstantial. That changes the read significantly.",
      },
      {
        key: "pursuing-dynamic",
        headline: "Your chasing may be reinforcing the cycle.",
        body: "If you reaching out is what brings them back, the dynamic has a specific structure — and it rarely resolves on its own without a change in approach.",
      },
    ],
  },

  situationship: {
    questions: [
      {
        text: "How long has it been undefined?",
        answers: [
          { label: "Under a month",         weights: { "ambiguous-early": 3 } },
          { label: "1–3 months",            weights: { "avoidance": 2 } },
          { label: "More than 3 months",    weights: { "avoidance": 1, "clear-intent": 2 } },
        ],
      },
      {
        text: "Has the idea of defining it come up?",
        answers: [
          { label: "No — it's never come up",         weights: { "ambiguous-early": 2 } },
          { label: "Yes, and it got avoided",          weights: { "avoidance": 3 } },
          { label: "Yes, and they said they weren't ready", weights: { "clear-intent": 3 } },
        ],
      },
    ],
    results: [
      {
        key: "ambiguous-early",
        headline: "It's still early — the lack of a label may be situational.",
        body: "Not everything undefined is a situationship. Sometimes it just hasn't been named yet. CrushCue reads whether this is a timing thing or a pattern.",
      },
      {
        key: "avoidance",
        headline: "The lack of definition is starting to look like a choice.",
        body: "When definition gets avoided more than once, it stops being ambiguity and starts being a signal. That signal has a specific read.",
      },
      {
        key: "clear-intent",
        headline: "They've told you what they want.",
        body: "'Not ready' is information. CrushCue can help you understand what it actually means in context — and what the right move is from here.",
      },
    ],
  },

  crush_confusion: {
    questions: [
      {
        text: "How would you describe how they act around you?",
        answers: [
          { label: "Noticeably different with me than with others", weights: { "genuine-interest": 3 } },
          { label: "Warm and attentive, but the same with everyone", weights: { "ambiguous-warmth": 3 } },
          { label: "Hard to tell — I can't compare",                weights: { "too-early": 2 } },
        ],
      },
      {
        text: "Have there been moments that felt like more than friendly?",
        answers: [
          { label: "Yes — specific moments that felt personal", weights: { "genuine-interest": 2 } },
          { label: "Maybe, but I second-guess myself",           weights: { "too-early": 2 } },
          { label: "Not clearly",                                weights: { "ambiguous-warmth": 2 } },
        ],
      },
    ],
    results: [
      {
        key: "genuine-interest",
        headline: "Some of these signals cross the line from friendly into interested.",
        body: "When behavior is noticeably different with you, that's a signal — not projection. CrushCue reads whether it's romantic interest or something else.",
      },
      {
        key: "ambiguous-warmth",
        headline: "The warmth is real, but it may be how they are with everyone.",
        body: "Some people are naturally warm. That doesn't mean the connection isn't real — it means you need a different signal to go on.",
      },
      {
        key: "too-early",
        headline: "There's not enough signal yet for a clear read.",
        body: "That's not a bad thing — it means the window is still open. CrushCue can tell you what to watch for and what to do next.",
      },
    ],
  },

  what_to_text: {
    questions: [
      {
        text: "What's the situation?",
        answers: [
          { label: "Starting a new conversation",      weights: { "fresh-start": 3 } },
          { label: "Re-engaging after some silence",   weights: { "re-engagement": 3 } },
          { label: "Following up after a date",        weights: { "fresh-start": 1, "re-engagement": 1 } },
        ],
      },
      {
        text: "How long since you last spoke?",
        answers: [
          { label: "Under 48 hours",     weights: { "fresh-start": 2 } },
          { label: "A few days",         weights: { "re-engagement": 2 } },
          { label: "More than a week",   weights: { "cold-lead": 3 } },
        ],
      },
    ],
    results: [
      {
        key: "fresh-start",
        headline: "The window is open. One short message is all you need.",
        body: "Overthinking this closes the window. CrushCue will tell you exactly what to send — and more importantly, what not to.",
      },
      {
        key: "re-engagement",
        headline: "Re-engagement works best with brevity.",
        body: "One line, no pressure, no explanation for the gap. CrushCue reads the history and drafts a message that fits.",
      },
      {
        key: "cold-lead",
        headline: "Time has passed. The approach matters more now.",
        body: "A check-in after this long won't land well. CrushCue can tell you what angle actually re-opens the conversation.",
      },
    ],
  },

  double_texting: {
    questions: [
      {
        text: "How long since your last message went unanswered?",
        answers: [
          { label: "Under 24 hours",     weights: { "too-soon": 3 } },
          { label: "1–3 days",           weights: { "wait-it-out": 2 } },
          { label: "More than 3 days",   weights: { "wait-it-out": 1, "stop": 2 } },
        ],
      },
      {
        text: "Have you already sent a follow-up?",
        answers: [
          { label: "No — just the one message", weights: { "too-soon": 1, "wait-it-out": 1 } },
          { label: "Yes, once",                  weights: { "wait-it-out": 2 } },
          { label: "Yes, more than once",        weights: { "stop": 3 } },
        ],
      },
    ],
    results: [
      {
        key: "too-soon",
        headline: "It may just be too soon.",
        body: "Less than a day isn't a read — it's noise. Give it until tomorrow before deciding anything.",
      },
      {
        key: "wait-it-out",
        headline: "Another message now would likely work against you.",
        body: "The ball is in their court. CrushCue will tell you exactly how long to wait and what to say when the time is right.",
      },
      {
        key: "stop",
        headline: "More messages won't change the outcome.",
        body: "At this point, silence from you is the only move that doesn't close the door further. CrushCue can tell you when and how to re-engage.",
      },
    ],
  },

  dry_texting: {
    questions: [
      {
        text: "How long has the low-effort reply pattern been happening?",
        answers: [
          { label: "Just recently — it shifted",         weights: { "recent-shift": 3 } },
          { label: "A few weeks",                        weights: { "low-investment": 2 } },
          { label: "It's been like this from the start", weights: { "baseline": 3 } },
        ],
      },
      {
        text: "Do they ever initiate conversations?",
        answers: [
          { label: "Yes — they start them, but reply dryly", weights: { "low-investment": 2 } },
          { label: "Rarely",                                  weights: { "low-investment": 1, "recent-shift": 1 } },
          { label: "Never — they only respond",               weights: { "baseline": 2 } },
        ],
      },
    ],
    results: [
      {
        key: "recent-shift",
        headline: "This is a recent change — something shifted.",
        body: "If the engagement dropped without an obvious reason, that's a signal worth reading. CrushCue can tell you what changed and why.",
      },
      {
        key: "low-investment",
        headline: "They're responding, but not investing.",
        body: "Showing up but putting in no effort is its own answer. CrushCue reads whether this is temporary or a consistent signal.",
      },
      {
        key: "baseline",
        headline: "This may just be how they text.",
        body: "Some people are naturally low-effort over text without it reflecting their actual interest. CrushCue reads the full pattern — not just the messages.",
      },
    ],
  },

  first_date_followup: {
    questions: [
      {
        text: "How long ago was the date?",
        answers: [
          { label: "Under 24 hours",     weights: { "playing-cool": 3 } },
          { label: "1–2 days",           weights: { "uncertain": 2 } },
          { label: "More than 2 days",   weights: { "reach-out": 3 } },
        ],
      },
      {
        text: "How did the date seem to go?",
        answers: [
          { label: "Really well — both of us seemed into it", weights: { "playing-cool": 2 } },
          { label: "Good, but I wasn't sure how they felt",   weights: { "uncertain": 2 } },
          { label: "Hard to tell",                            weights: { "uncertain": 1, "reach-out": 1 } },
        ],
      },
    ],
    results: [
      {
        key: "playing-cool",
        headline: "The silence this soon is usually just playing it cool.",
        body: "First-date silence under 24 hours is almost never disinterest — it's pacing. CrushCue can tell you exactly what to send and when.",
      },
      {
        key: "uncertain",
        headline: "They may be waiting to see if you'll reach out first.",
        body: "A warm first message from you right now isn't desperation — it's initiative. CrushCue reads the date context and tells you what to say.",
      },
      {
        key: "reach-out",
        headline: "If it's been more than 2 days, a short message from you is warranted.",
        body: "Waiting longer won't make it easier. CrushCue will tell you the right way to re-open without it feeling forced.",
      },
    ],
  },

  ex_reconnection: {
    questions: [
      {
        text: "How long were you out of contact before they reached out?",
        answers: [
          { label: "Less than a month",       weights: { "genuine-reach": 2 } },
          { label: "1–6 months",              weights: { "ambiguous": 2 } },
          { label: "More than 6 months",      weights: { "breadcrumbing": 2 } },
        ],
      },
      {
        text: "What was the nature of the breakup?",
        answers: [
          { label: "Mutual / relatively friendly", weights: { "genuine-reach": 2 } },
          { label: "One-sided or painful",          weights: { "breadcrumbing": 2 } },
          { label: "Complicated",                   weights: { "ambiguous": 3 } },
        ],
      },
    ],
    results: [
      {
        key: "genuine-reach",
        headline: "This might be more than a casual check-in.",
        body: "The timing and context suggest real intent — not just testing the waters. CrushCue can read what they're actually communicating and what move makes sense.",
      },
      {
        key: "breadcrumbing",
        headline: "Reaching out after this long usually means testing the door.",
        body: "It doesn't necessarily mean they want back in — it might just mean they want to know the option exists. CrushCue reads the difference.",
      },
      {
        key: "ambiguous",
        headline: "The intent isn't clear yet.",
        body: "Respond slowly. Watch what they do next. CrushCue can read the specific message they sent and tell you what it's really signaling.",
      },
    ],
  },

  story_watching: {
    questions: [
      {
        text: "How consistently do they watch your stories?",
        answers: [
          { label: "Every single one",             weights: { "passive-interest": 2 } },
          { label: "Most of them, inconsistently", weights: { "selective-attention": 2 } },
          { label: "Only certain types of content", weights: { "selective-attention": 3 } },
        ],
      },
      {
        text: "Do they ever initiate contact otherwise?",
        answers: [
          { label: "Never — only through stories", weights: { "dormant": 3 } },
          { label: "Rarely — maybe once",          weights: { "passive-interest": 2 } },
          { label: "Occasionally",                 weights: { "selective-attention": 1, "passive-interest": 1 } },
        ],
      },
    ],
    results: [
      {
        key: "passive-interest",
        headline: "They're monitoring without committing.",
        body: "Watching every story without texting is keeping tabs — it's interest that hasn't decided to act yet. CrushCue reads what kind of interest this is.",
      },
      {
        key: "selective-attention",
        headline: "They're watching specific content, not just staying visible.",
        body: "What they watch and when tells you more than the fact that they watch. CrushCue reads the pattern.",
      },
      {
        key: "dormant",
        headline: "This is minimal-effort presence — not active interest.",
        body: "Story views with no other contact is a holding pattern. CrushCue can tell you whether it's worth acting on or leaving alone.",
      },
    ],
  },

};
