$(function () {
  $('.alert-success').hide();

  /**
   * Default Bar
   */
  var defaultBar = new $.peekABar();
  $('.btn-default-show').click(function () {
    $('.peek-a-bar').hide();
    defaultBar.show();
  });
  $('.btn-default-hide').click(function () {
    defaultBar.hide();
  });

  /**
   * Overriden Bar
   */
  var overrideBar = new $.peekABar();
  $('.btn-override-show').click(function () {
    $('.peek-a-bar').hide();
    overrideBar.show({
      html: 'Override all, puny humans!',
    });
  });
  $('.btn-override-hide').click(function () {
    overrideBar.hide();
  });

  /**
   * Autohide Bar
   */
  var autohideBar = new $.peekABar({
    autohide: true,
  });
  $('.btn-autohide-show').click(function () {
    $('.peek-a-bar').hide();
    autohideBar.show();
  });
  $('.btn-autohide-hide').click(function () {
    autohideBar.hide();
  });

  /**
   * Change Bar Padding
   */
  var paddingBar = new $.peekABar({
    padding: '2em',
  });
  $('.btn-padding-show').click(function () {
    $('.peek-a-bar').hide();
    paddingBar.show();
  });
  $('.btn-padding-hide').click(function () {
    paddingBar.hide();
  });

  /**
   * Change Background Color
   */
  var bgColorBar = new $.peekABar({
    backgroundColor: 'green',
  });
  $('.btn-bgcolorbar-show').click(function () {
    $('.peek-a-bar').hide();
    bgColorBar.show();
  });
  $('.btn-bgcolorbar-hide').click(function () {
    bgColorBar.hide();
  });

  /**
   * Change Bar Animation Type and Duration
   */
  var animationBar = new $.peekABar({
    animation: {
      type: 'fade',
      duration: 1000,
    },
  });
  $('.btn-animationbar-show').click(function () {
    $('.peek-a-bar').hide();
    animationBar.show();
  });
  $('.btn-animationbar-hide').click(function () {
    animationBar.hide();
  });

  /**
   * Custom CSS Class
   */
  var cssClassBar = new $.peekABar({
    cssClass: 'custom-class',
  });
  $('.btn-cssclass-show').click(function () {
    $('.peek-a-bar').hide();
    cssClassBar.show();
  });
  $('.btn-cssclass-hide').click(function () {
    cssClassBar.hide();
  });

  /**
   * Custom Opacity
   */
  var opacityBar = new $.peekABar({
    opacity: 0.7,
  });
  $('.btn-opacity-show').click(function () {
    $('.peek-a-bar').hide();
    opacityBar.show();
  });
  $('.btn-opacity-hide').click(function () {
    opacityBar.hide();
  });

  /**
   * Custom Position
   */
  var positionBar = new $.peekABar({
    position: 'bottom',
  });
  $('.btn-posbar-show').click(function () {
    $('.peek-a-bar').hide();
    positionBar.show();
  });
  $('.btn-posbar-hide').click(function () {
    positionBar.hide();
  });

  /**
   * onShow/onHide
   */
  var onshowhideBar = new $.peekABar({
    onShow: function () {
      setTimeout(function () {
        $('.alert-success').show();
      }, 1000);
      setTimeout(function () {
        alert('Resetting onShow');
        $('.alert-success').hide();
      }, 5000);
    },
    onHide: function () {
      setTimeout(function () {
        $('.alert-danger').hide();
      }, 1000);
      setTimeout(function () {
        alert('Resetting onHide');
        $('.alert-danger').show();
      }, 5000);
    },
  });
  $('.btn-showhide-show').click(function () {
    $('.peek-a-bar').hide();
    onshowhideBar.show();
  });
  $('.btn-showhide-hide').click(function () {
    onshowhideBar.hide();
  });
});
