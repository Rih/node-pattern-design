const the_module = {
    prop: 'my prop',
    config: {
        lang: 'es',
        cache: true,
    },
    setConfig: conf => {
        the_module.config = conf
    },
    isCacheEnabled: () => {
        console.log(the_module.config.cache ? 'si': 'no')
    }
}

the_module.setConfig({lang:'en',cache:false})
the_module.isCacheEnabled()