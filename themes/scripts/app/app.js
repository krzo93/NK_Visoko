(function ($, Drupal) {

    'use strict';
    Drupal.behaviors.playerModals = {
        attach: function (context, settings) {
            $('body', context).on('click', '.player-box', function (event) {
                event.preventDefault();
                showModal($(this), '.contextual-region');
            });

            // Close modal
            $('body', context).on('click', '.modal-close', function (event) {
                event.preventDefault();

                var $modalPopup = $('.modal-popup', context);

                $modalPopup.removeClass('open');
                setTimeout(function () {
                    $modalPopup.remove();
                    $('body', context).removeClass('is-modal');
                }, 350);
            });
        }
    };

    function showModal($element, $parent) {
        $('body').addClass('is-modal');

        var popupContent = $element.parents($parent).html(),
            $modalPopup = $('<div class="modal-popup"><div class="popup-wrapper"><div class="popup-content"><a href="#" class="modal-close">×</a><div class="content"></div></div></div></div>').show();

        $modalPopup.find('.views-row').html(popupContent).end().appendTo('body');

        setTimeout(function () {
            $modalPopup.addClass('open');
        }, 200);
    }
})(jQuery, Drupal);