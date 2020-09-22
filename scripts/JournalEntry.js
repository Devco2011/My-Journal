/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntry = (newEntry) => {
    return `
        <section id="entry--${newEntry.id}" class="journalEntry">
        <p><div class="entry--date">Date: ${newEntry.date}</div> 
        <div class="entry--concept">Concept: ${newEntry.concept}</div>
        <div class="entry--entry">Entry: ${newEntry.entry}</div>
        <div class="entry--mood">Mood: ${newEntry.moodId}</div></p>
        </section>
    `
}