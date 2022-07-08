!(function(e) {
  var t,
    n,
    d,
    o,
    i,
    a,
    r =
      '<svg><symbol id="copy" viewBox="0 0 48 48" fill="none"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M13 12.432v-4.62A2.813 2.813 0 0 1 15.813 5h24.374A2.813 2.813 0 0 1 43 7.813v24.375A2.813 2.813 0 0 1 40.187 35h-4.67" data-follow-stroke="currentColor"/><path stroke-linejoin="round" stroke-width="4" stroke="currentColor" d="M32.188 13H7.811A2.813 2.813 0 0 0 5 15.813v24.374A2.813 2.813 0 0 0 7.813 43h24.375A2.813 2.813 0 0 0 35 40.187V15.814A2.813 2.813 0 0 0 32.187 13Z" data-follow-stroke="currentColor"/></symbol><symbol id="code" viewBox="0 0 48 48" fill="none"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M16 13 4 25.432 16 37m16-24 12 12.432L32 37" data-follow-stroke="currentColor"/><path stroke-linecap="round" stroke-width="4" stroke="currentColor" d="m28 4-7 40" data-follow-stroke="currentColor"/></symbol><symbol id="volume-notice" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-width="4" stroke="currentColor" d="M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z" data-follow-stroke="currentColor"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M32 15h0a11.91 11.91 0 0 1 1.684 1.859A12.07 12.07 0 0 1 36 24c0 2.654-.846 5.107-2.278 7.09A11.936 11.936 0 0 1 32 33" data-follow-stroke="currentColor"/><path stroke-linecap="round" stroke-width="4" stroke="currentColor" d="M34.236 41.186C40.084 37.696 44 31.305 44 24c0-7.192-3.796-13.496-9.493-17.02" data-follow-stroke="currentColor"/></symbol><symbol id="close-small" viewBox="0 0 48 48" fill="none"><path fill-opacity=".01" fill="#fff" d="M0 0h48v48H0z"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="currentColor" d="m14 14 20 20m-20 0 20-20" data-follow-stroke="currentColor"/></symbol><symbol id="github" viewBox="0 0 48 48" fill="none"><path fill="currentColor" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4ZM0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="currentColor"/><path fill="currentColor" d="M19.183 45.472c-.193-.25-.193-2.475 0-6.674-2.072.072-3.38-.072-3.927-.431-.819-.539-1.64-2.2-2.367-3.371-.728-1.17-2.343-1.356-2.995-1.618-.652-.261-.816-1.328 1.797-.522 2.613.807 2.74 3.005 3.565 3.518.825.514 2.796.29 3.689-.122.893-.412.827-1.944.987-2.551.201-.567-.509-.693-.524-.697-.873 0-5.454-.997-6.713-5.433-1.258-4.437.363-7.337 1.228-8.584.576-.83.525-2.602-.153-5.313 2.463-.315 4.365.46 5.703 2.326.002.01 1.756-1.043 4.527-1.043 2.772 0 3.755.858 4.514 1.043.76.185 1.366-3.266 6.053-2.326-.979 1.923-1.798 4.326-1.173 5.314.626.987 3.08 4.127 1.573 8.583-1.006 2.97-2.982 4.781-5.929 5.433-.337.108-.506.282-.506.522 0 .36.456.399 1.114 2.086.44 1.124.471 4.336.096 9.635-.951.242-1.691.405-2.22.488-.937.147-1.955.23-2.955.261-1 .032-1.347.029-2.73-.1a19.799 19.799 0 0 1-2.654-.424Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="currentColor"/></symbol></svg>';
  function c() {
    i || ((i = !0), d());
  }
  (t = function() {
    var e, t, n;
    ((n = document.createElement("div")).innerHTML = r),
      (r = null),
      (t = n.getElementsByTagName("svg")[0]) &&
        (t.setAttribute("aria-hidden", "true"),
        (t.style.position = "absolute"),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = "hidden"),
        (e = t),
        (n = document.body).firstChild
          ? (t = n.firstChild).parentNode.insertBefore(e, t)
          : n.appendChild(e));
  }),
    document.addEventListener
      ? ["complete", "loaded", "interactive"].indexOf(document.readyState) > -1
        ? setTimeout(t, 0)
        : ((n = function() {
            document.removeEventListener("DOMContentLoaded", n, !1), t();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((d = t),
        (o = e.document),
        (i = !1),
        (a = function() {
          try {
            o.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(a, 50);
          }
          c();
        })(),
        (o.onreadystatechange = function() {
          "complete" == o.readyState && ((o.onreadystatechange = null), c());
        }));
})(window);
