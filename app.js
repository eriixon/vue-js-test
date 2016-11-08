new Vue({
  el: '#editor',
  data: {
    input: '# hello'
  },
  filters: {
    marked: function (md) {
      return marked(md, { sanitize: true })
    }
  }
});