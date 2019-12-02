import Vue from "vue";

import "./styles/quasar.styl";
import "quasar/dist/quasar.ie.polyfills";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import { Ripple, TouchSwipe } from "quasar";
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QPageSticky,
  QCard,
  QTab,
  QTabs,
  QCardSection,
  QExpansionItem,
  QSeparator,
  QCarousel,
  QCarouselControl,
  QCarouselSlide
} from "quasar";

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QPageSticky,
    QCard,
    QTab,
    QTabs,
    QCardSection,
    QExpansionItem,
    QSeparator,
    QCarousel,
    QCarouselControl,
    QCarouselSlide
  },
  directives: { Ripple, TouchSwipe },
  plugins: {}
});
