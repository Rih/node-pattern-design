const Emitter = require('events')

const emitter = new Emitter()

emitter.on('the_event', x => console.log(x))

emitter.emit('the_event', {huehue: 'huahau'})