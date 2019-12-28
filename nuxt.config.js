import colors from "vuetify/es5/util/colors";

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate:
      process.env.npm_package_name +
      " - " +
      process.env.npm_package_description,
    title: process.env.npm_package_name || "",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
      // {
      //    name: "csrf-token",
      //   content: "{{ csrf_token() }}"
      //  }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/icon.png"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/auth"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    //baseURL: "http://api.iotronlabs.com/public/api",
    baseURL: "http://15.206.140.87/api",
    proxyHeaders: false,
    credentials: false,
    proxy: false,
    debug: false,
    urlencoded: true
  },

  // Auth module configuration

  auth: {
    redirect: {
      home: "/",
      logout: "/",
      login: "/",
      callback: "/"
    },
    watchLoggedIn: true,
    refresh_token: {
      prefix: "_refresh_token."
    },
    token: {
      prefix: "_token."
    },
    localStorage: false,
    cookie: {
      prefix: "auth.",
      options: {
        path: "/",
        expires: 5
        // domain: '',
        // secure - false,
      }
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
            propertyName: "token"
          },
          user: {
            url: "/auth/me",
            method: "get",
            propertyName: "data"
          },
          logout: {
            url: "/auth/out"
          }
        },
        tokenRequired: true,
        tokenType: "Bearer"
      },
      facebook: {
        client_id: "2442813762714926",
        // userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
        scope: ["public_profile", "email", "user_birthday"]
      },
      google: {
        client_id:
          "971122924020-j0754ojm02r59dt421ig97l6682mhr69.apps.googleusercontent.com"
      }
      // 'laravel.passport': {
      // 	url: '/login',
      // 	client_id: '5',
      // 	client_secret: 'lE5INGyNYThi92zXkJKxQjOqBoVdTJoH9hmR8PAU'
      // },
    }
  },

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  buildModules: ["@nuxtjs/vuetify", "@nuxtjs/laravel-echo"],
  echo: {
    /* module options */
    broadcaster: "pusher",
    key: "WEBSYNC",
    wsHost: "15.206.140.87",
    wsPort: 6001,
    disableStats: true
  },

  vuetify: {
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.deepPurple.base,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        dark: {
          primary: colors.purple.lighten2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
