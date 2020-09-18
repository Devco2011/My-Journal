import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { saveJournalEntry } from "./JournalDataProvider.js"

const contentTarget = document.querySelector(".journal-form");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "saveEntry") {

        const entryDate = document.querySelector("#journalDate")
        const entryConcepts = document.querySelector("#concepts")
        const entryText = document.querySelector("#entry")
        const entryMood = document.querySelector("#mood")

        //if (entryText.value !== "0") {
        const newEntry = {
            date: entryDate.value,
            concept: entryConcepts.value,
            entry: entryText.value,
            mood: entryMood.value
        }
        saveJournalEntry(newEntry);



    }


})



const render = () => {
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
        <button type="button" id="saveEntry">Record Journal Entry</button>
    </fieldset>
</form>
    `
}
export const JournalForm = () => {
    getEntries()
        .then(() => {
            render(useJournalEntries());
        })

}
