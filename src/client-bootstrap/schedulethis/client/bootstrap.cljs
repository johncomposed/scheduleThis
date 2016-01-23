(ns schedulethis.client.bootstrap
  (:require [schedulethis.client.core :refer [insert-root-component! load-features!]]))

(enable-console-print!)

(insert-root-component! (.getElementById js/document "features"))
(load-features!)
