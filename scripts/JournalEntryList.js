/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntry } from "./JournalEntry.js"
import { getMoods, useMoods } from "./MoodProvider.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("journalStateChanged", () => {
    const newEntry = useJournalEntries()
    render(newEntry, useMoods())
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
        deleteEntry(id).then(
            () => {
                const updatedEntries = useJournalEntries()
                const moods = useMoods()
                render(updatedEntries, moods)
            }
        )
    }
})

const deleteEntry = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE"
    })
        .then(getEntries)
}


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




