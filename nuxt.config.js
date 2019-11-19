const axios = require('axios')
const pkg = require('./package')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components',
    '~/plugins/filters'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['storyblok-nuxt', {accessToken: 'Pr8RBEkyezaQB31SMVsXSQtt', cacheProvider: 'memory'}]
  ],

  /*
  ** Router middleware
  */
  router: {
    middleware: 'setCacheVersion'
  },

  /*
  ** Generate Routes via Storybloks Links API.
  */
  generate: {
    routes: resolve => {
      const token = `Pr8RBEkyezaQB31SMVsXSQtt`
      const per_page = 100
      const version = `draft`
      
      let page = 1
      let routes = ['/']

      // Call first Page of the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
      axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&per_page=${per_page}&page=${page}`).then((res) => {
        Object.keys(res.data.links).forEach((key) => {
          if (res.data.links[key].slug != 'home') {
            routes.push('/' + res.data.links[key].slug)
          }
        })

        // Check if there are more pages available otherwise execute resolve with current routes.
        const total = res.headers.total
        const maxPage = Math.ceil(total / per_page)
        if(maxPage <= 1) {
          resolve(null, routes)
        }

        // Since we know the total we now can pregenerate all requests we need to get all Links
        let contentRequests = [] 
        for (let page = 2; page <= maxPage; page++) {
          contentRequests.push(axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&per_page=${per_page}&page=${page}`))
        }

        // Axios allows us to execute all requests using axios.spread we will than generate our routes and execute the resolve
        axios.all(contentRequests).then(axios.spread((...requests) => {
          requests.forEach((request) => {
            Object.keys(request.data.links).forEach((key) => {
              if (request.data.links[key].slug != 'home') {
                routes.push('/' + request.data.links[key].slug)
              }
            })
          })
        
          resolve(null, routes)
        })).catch(resolve)
      })
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
