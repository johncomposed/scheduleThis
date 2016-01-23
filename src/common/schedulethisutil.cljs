(ns schedulethis.util)

(defn ->json [obj]
  (js/JSON.stringify (clj->js obj)))
