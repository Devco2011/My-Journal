/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntry } from "./JournalEntry.js"
import { getEntries } from "./JournalDataProvider.js"
// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

const render = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()
    //let entryHTMLRepresentations = ""
    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        entryLog.innerHTML += JournalEntry(entry)
    }
}
export const EntryListComponent = () => {
    getEntries()
        .then(useJournalEntries)
        .then(render)
}
