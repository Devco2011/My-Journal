/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntry } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")
const eventHub = document.querySelector(".container")

const render = (entries) => {
    entryLog.innerHTML = entries.map((entry) => {
        return JournalEntry(entry)
    }).join("");
}


export const EntryListComponent = () => {
    getEntries()
        .then(useJournalEntries)
        .then(render)
}


eventHub.addEventListener("journalStateChanged", () => {
    const newEntry = useJournalEntries()
    render(newEntry)
})

