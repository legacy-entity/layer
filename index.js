
/**
 * layer
 */

module.exports = function (el, name) {
  var layer = {}

  layer.el = document.createElement('div')
  layer.el.id = name

  layer.start = function () {
    el.appendChild(layer.el)
  }

  layer.stop = function () {
    el.removeChild(layer.el)
  }

  layer.add = function (e) {
    layer.el.appendChild(e.el)
  }

  return layer
}
