/**
 * Accordion
 * ------------------------------------------------------------------------
 * accordion()
 * @version 1.0 | September 8th 2016
 * @author  Luke Martin | @iamlukem | http://iamlukem.github.io
 *
 * Turn a definition list into an accordion menu.
 * ------------------------------------------------------------------------ */

$.fn.extend({
  accordion : function () {
    return this.each(function () {
        var $this = $(this);
        var $title = $this.find('.accordion-item__title');
        var $data = $this.find('.accordion-item__data');

        $data.each(function(){
            var $this = $(this);
            $this.height($this.outerHeight()).hide();
        })

        $title.removeClass('accordion-item--open').on('click', function(){
            var $this = $(this);
            if($this.hasClass('accordion-item--open')){
                $this.removeClass('accordion-item--open').next('.accordion-item__data').slideUp();
            } else {
                $this.addClass('accordion-item--open').next('.accordion-item__data').slideDown();
            }
        })

    });
  }
});
