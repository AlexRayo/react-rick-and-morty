await new PurgeCSS().purge({
    content: ['index.html', '**/*.js', '**/*.html', '**/*.vue'],
    css: ['index.css']
  })
  