const insights = await summarizeIntent(`
Past Decisions:
${formattedPast}

Current Decision:
${commentText}

Compare:
- Is this repeating something?
- Is it conflicting?
- Any pattern?
`);
