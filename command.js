const Commander = (() => {
    const o = {
        buy: x => {
            console.log(`Buying ${x}`)
        },
        sell: x => {
            console.log(`Selling ${x}`)
        }
    }

    //public
    return {
        run: (comand, args) => {
            if(!o[comand]){
                console.log('Command doesnt exist!')
                return
            }
            o[comand](args)
        }
    }

})();

Commander.run('buy', 'Mazda')

Commander.run('asdas', 'Nothing...')