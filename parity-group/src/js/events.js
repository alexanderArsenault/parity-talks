// Accordions working

const preventLinkClicks = function (parentElement) {
  Array.from(parentElement.getElementsByTagName('a')).forEach((element) => {
    element.addEventListener('click', (e) => {
      e.stopPropagation()
    })
  })
}

const activate = function (element) {
  element.classList.add('active')
}

const deactivate = function (element) {
  element.classList.remove('active')
}

const showPanel = function (activatedElement, panel) {
  activate(activatedElement)
  panel.style.maxHeight = panel.scrollHeight + 'px'
}

const hidePanel = function (deactivatedElement, panel) {
  deactivate(deactivatedElement)
  panel.style.maxHeight = null
}

const toggleItem = function (toggled, panel) {
  if (panel.style.maxHeight) {
    hidePanel(toggled, panel)
  } else {
    showPanel(toggled, panel)
  }
}

const accordions = Array.from(document.getElementsByClassName('program-entry'))

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    const panel = this.getElementsByClassName('program-entry-detail')[0]
    preventLinkClicks(panel)
    toggleItem(this, panel)
  })
})

const seasonPageToggle = Array.from(
  document.getElementsByClassName('season-toggle')
)

seasonPageToggle.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    seasonPageToggle.forEach((toggleElement) => {
      const childElement = toggleElement.getElementsByTagName('h2')[0]
      deactivate(childElement)
    })
    const childElement = this.getElementsByTagName('h2')[0]
    activate(childElement)
    document.getElementById('season').className = this.id
  })
})

const seasonEntries = Array.from(
  document.getElementsByClassName('season-entry')
)

seasonEntries.forEach((entry) => {
  entry.addEventListener('click', () => {
    const panel = this.getElementsByClassName('season-entry-detail')[0]
    preventLinkClicks(panel)
    toggleItem(this, panel)
  })
})

const scheduleEntry = Array.from(
  document.getElementsByClassName('schedule-entry')
)

scheduleEntry.forEach((entry) => {
  entry.addEventListener('click', () => {
    const panel = this.getElementsByClassName('schedule-entry-detail')[0]
    preventLinkClicks(panel)
    toggleItem(this, panel)
  })
})

const closebuttons = document.getElementsByClassName('toggle-nav')
const body = document.getElementsByTagName('body')[0]

Array.from(closebuttons).forEach((element) => {
  element.addEventListener('click', () => {
    body.classList.toggle('show-mobile-nav')
  })
})

const livenow = document.getElementsByClassName('live-now')

Array.from(livenow).forEach((element) => {
  element.addEventListener('click', (e) => {
    e.stopPropagation()
    window.location.href = '/talks'
  })
})
