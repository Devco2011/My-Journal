import { getEntries, useJournalEntries } from "./JournalDataProvider.js"

const contentTarget = document.querySelector(".journal-form");

export const JournalForm = () => {
    contentTarget.innerHTML = `
    <form action="">
    <fieldset>
        <label for="journalDate">Date of Entry</label>
        <input type="date" name="journalDate" id="journalDate"><br><br>
        <label for="concepts">Concepts Covered:</label>
        <textarea id="concepts" name="concepts"></textarea><br><br>
        <label for="entry">Journal Entry:</label>
        <textarea id="entry" name="entry"></textarea><br><br>
        <label for="mood">Mood for the day:</label>
        <select name="mood" id="mood">
            <option value="happy">Happy</option>
            <option value="excited">Excited</option>
            <option value="frustrated">Frustrated</option>
            <option value="sad">Sad</option>
        </select><br><br>
        <input type="submit" value="Record Journal Entry">
    </fieldset>
</form>
    `
}