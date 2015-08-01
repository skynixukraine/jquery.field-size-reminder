/**
 * Created by alekseyyp on 31.07.15.
 */
var fieldSizeModule = (function() {

    var cfg = {
        selector : '.field-size'
    },
        fields;

    function fieldSize( config ) {

        var c = {
                el: null
            },
            maxChars  = 250,
            charsBox,
            DATA_MAX_CHARS      = 'max-chars',
            INITIAL_MESSAGE     = 'Maximum: {char} Characters',
            F_MESSAGE           = '{char} characters remaining';
        $.extend( c, config );
        if ( c.el.data( DATA_MAX_CHARS ) ) {

            maxChars = c.el.data( DATA_MAX_CHARS );

        }
        charsBox = $('<span class="max-chars">' + INITIAL_MESSAGE.replace('{char}', maxChars) + '</span>');
        c.el.parent().addClass('field-size-box');
        c.el.after(charsBox);

        function ch(){

            var len =  c.el.val().length;
            if ( len == 0 ) {

                charsBox.html( INITIAL_MESSAGE.replace('{char}', maxChars) );

            } else {

                charsBox.html( F_MESSAGE.replace('{char}', (maxChars - len) ) );

            }
            if ( len >= maxChars ) {

                return false;
            }

        }
        c.el.keypress( ch );
        c.el.change( ch );


    }


    return {

        init: function( config ) {

            cfg = $.extend( cfg, config );
            fields = $( cfg.selector );
            fields.each(function(){

                new fieldSize({
                    el: $(this)
                });

            });

        }

    }

})();