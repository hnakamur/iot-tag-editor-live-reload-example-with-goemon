riot.tag('tag-editor', '<div class="tag-editor-field" onclick="{ click }"> <div class="tag-editor-tag tag-editor-tag-measure"> <div id="measure" class="tag-editor-text"></div> <a class="tag-editor-delete">x</a> </div> <div each="{ tags }" class="tag-editor-tag"> <div class="tag-editor-text">{ name }</div> <a class="tag-editor-delete" onclick="{ parent.clickDelete }">x</a> </div> <input name="editor" class="tag-editor-input" style="width: 0" onkeyup="{ keyup }" onkeydown="{ keydown }" onblur="{ blur }"> </div>', function(opts) {
    this.tags = opts.tags
    this.separator = /[, ]+/

    this.click = function(e) {
      adjustEditorWidth(this)
      this.editor.focus()
      return false
    }.bind(this);

    this.keyup = function(e) {
      var val = this.editor.value
      if (this.separator.test(val)) {
        mayInsertTags(this)
      } else {
        adjustEditorWidth(this)
      }
      return false
    }.bind(this);

    this.keydown = function(e) {
      if (e.which == 13  && this.editor.value !== '') {
        mayInsertTags(this)
        return true
      } else if (e.which == 8  && this.editor.value === '' && this.tags.length > 0) {
        this.tags.pop()
      }
      return true
    }.bind(this);

    this.blur = function(e) {
      mayInsertTags(this)
      return true
    }.bind(this);

    this.clickDelete = function(e) {
      e.stopPropagation()
      this.tags.splice(this.tags.indexOf(e.item), 1)
      return false
    }.bind(this);

    function adjustEditorWidth(elem) {
      elem.measure.innerText = elem.editor.value + 'WW'
      elem.editor.style.width = elem.measure.offsetWidth + 'px'
    }

    function mayInsertTags(elem) {
      var values = elem.editor.value.split(elem.separator),
          i = 0,
          len = values.length,
          value
      elem.editor.value = ''
      adjustEditorWidth(elem)
      for (; i < len; i++) {
        value = values[i]
        if (value !== '' && !containsTag(elem, value)) {
          elem.tags.push({name: value})
        }
      }
    }

    function containsTag(elem, tag) {
      var i = 0, 
          len = elem.tags.length
      for (; i < len; i++) {
        if (elem.tags[i].name === tag) {
          return true
        }
      }
      return false
    }
  
});
