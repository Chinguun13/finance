// Delgetstei ajillah controll
var uiController = (function () {
  var x = 100;

  function add(y) {
    return x + y;
  }

  return {
    publicAdd: function (a) {
      a = add(a);
      //   console.log("huleen avsan utga : " + a);
      console.log("Bolovsruulsan utga : " + a);
    },
  };
})();

// Sanhuutei ajillah control
var financeController = (function () {})();

// Programm holbogch control
var appController = (function (uiCtrl, fnCtrl) {
  var ctrlAddItem = function () {
    // 1. Oruulah ogogdliig delgetsees olj avna
    console.log("Delgetsees ogogdloo avah heseg");
    // 2. Olj avsan ogogluudee sanhuugiin controlld damjuulj tend haragdana.
    // 3. Olj avsan ogogdluudee web deeree tohiroh heseg deer haruulna
    // 4. Tusviig tootsoolno
    // 5. Etssiin uldegdel, tootsoog delgetsend gargana
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);

// var hunController = function () {
//   // data encapsulation

//   // private data
//   var bodol = "Javascript tolgoi erguulmeer yum...";
//   function tsusGuih() {}

//   //   private function
//   function huchilturugchiigAgaaraasSorjTsusruuOruulah() {}

//   return {
//     yarih: function () {
//       bodol = "Javascript bol goy";
//       huchilturugchiigAgaaraasSorjTsusruuOruulah();
//       tsusGuih();
//       console.log("hi");
//     },
//   };
// };
