/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
let entries = []

const eventHub = document.querySelector(".container")

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/


const dispatchStateChangeEvent = () => {
    const journalStateChangedEvent = new CustomEvent("journalStateChanged")
    eventHub.dispatchEvent(journalStateChangedEvent)
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(
            parsedEntries => {
                console.table(parsedEntries)
                entries = parsedEntries
            }


        )
}

export const useJournalEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const saveJournalEntry = newJournalEntry => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
        .then(() => {
            return getEntries()
        })  // <-- Get all journal entries
        .then(dispatchStateChangeEvent)  // <-- Broadcast the state change event

}