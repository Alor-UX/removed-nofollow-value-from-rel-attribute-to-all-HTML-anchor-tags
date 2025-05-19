document.addEventListener("DOMContentLoaded", function () {
   var anchors = document.querySelectorAll('a[rel="nofollow noopener"], a[rel="nofollow noreferrer"], a[rel="nofollow noreferrer noopener"]');

   anchors.forEach(function (anchor) {
      // Get the current 'rel' attribute
      var rel = anchor.getAttribute("rel");

      // Remove 'nofollow' from the 'rel' attribute
      if (rel.includes("nofollow")) {
         rel = rel.replace("nofollow", "").trim(); // Remove 'nofollow' and trim any extra spaces
         anchor.setAttribute("rel", rel); // Update the 'rel' attribute
      }
   });
});
