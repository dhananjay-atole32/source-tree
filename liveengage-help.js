
$( document ).ready(function() {

      var $liveHelp = $('.live-help');
      $liveHelpPanel = $('.live-help-panel');

        $('.btn-live-help',$liveHelp).click(function(e) {
            if ($liveHelp.hasClass('open')) {
            	console.log("pnclivehelp closing");

                $liveHelp.removeClass('open');
                $liveHelpPanel.removeClass('open');
                jQuery('.btn-live-help').html("<span> ‹ </span>" + liveHelpText);
                inviteChat = false;
            }
            else {
            	console.log("pnclivehelp opening");

                $liveHelp.addClass('open');
                $liveHelpPanel.addClass('open');
            }
            e.preventDefault();
        });
        $('.liveperson',$liveHelpPanel).click(function(e){
            e.preventDefault();
            console.log("pnclivehelp .liveperson, $liveHelpPanel toggle");
        });

});