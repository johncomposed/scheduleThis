(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'schedulethis.core
   :output-to "out/schedulethis.js"
   :output-dir "out"})
