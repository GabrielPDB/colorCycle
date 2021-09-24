const ButtonStartStop = {
  toggle() {
    const button = document.querySelector('#start_stop_button')

    if (button.innerHTML == 'Stop') {
      button.innerHTML = 'Start'
      button.setAttribute('text', 'Start')
    } else {
      button.innerHTML = 'Stop'
      button.setAttribute('text', 'Stop')
    }
  }
}
