import $ from 'jquery'; // jQuery
import MicroModal from 'micromodal';

document.addEventListener('DOMContentLoaded', () => {

  // MicroModal
  MicroModal.init({
    openTrigger: 'data-custom-open',
    closeTrigger: 'data-custom-close',
    disableScroll: true,
    disableFocus: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true
  })
  $('[data-custom-open]').click(function () {
    $('.modal [name=form]').val($(this).data('form'))
  })
  $('[data-custom-close]').click(function () {
    $('.modal [name=form]').val('')
  })

})

