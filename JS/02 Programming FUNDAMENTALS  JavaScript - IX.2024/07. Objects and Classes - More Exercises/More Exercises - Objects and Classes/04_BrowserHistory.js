function browserHistory (browser, actions) {

    class BrowserHistory {

        constructor (browser) {
            this.name = browser['Browser Name']
            this.openTabs = browser['Open Tabs']
            this.recentlyClosed = browser['Recently Closed']
            this.browserLogs = browser['Browser Logs']
        }

        open(site) {
            this.openTabs.push(site)
            this.browserLogs.push(`Open ${site}`)
        }

        close(site) {
            if (this.openTabs.includes(site)) {

                this.openTabs = this.openTabs.filter(el => el !== site)
                this.recentlyClosed.push(site)
                this.browserLogs.push(`Close ${site}`)
            }
        }

        clearHistory() {
            this.openTabs = []
            this.recentlyClosed = []
            this.browserLogs = []
        }

        print() {
            console.log(`${this.name}`)
            console.log(`Open Tabs: ${this.openTabs.join(', ')}`)
            console.log(`Recently Closed: ${this.recentlyClosed.join(', ')}`)
            console.log(`Browser Logs: ${this.browserLogs.join(', ')}`)
        }
    }


    let browserInstance = new BrowserHistory(browser)

    for (let el of actions) {
        let [command, site] = el.split(' ')

        if (command === 'Open') {
            browserInstance.open(site)
        }
        else if (command === 'Close') {
            browserInstance.close(site)
        }
        else if (el === 'Clear History and Cache') {
            browserInstance.clearHistory()
        }
    }


    browserInstance.print()
}

browserHistory({"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)



// Print:              Mozilla Firefox
//                     Open Tabs: Twitter
//                     Recently Closed: 
//                     Browser Logs: Open Twitter

                    //