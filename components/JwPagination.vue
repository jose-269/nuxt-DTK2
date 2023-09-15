<template>
  <ul v-if="pager.pages && pager.pages.length" class="pagination" :style="ulStyles">
    <li class="page-item first" :class="{ disabled: pager.currentPage === 1 }" :style="liStyles">
      <nuxt-link class="page-link" :style="aStyles" :to="`/Seminuevos/${1}`">
        {{
            labels.first
        }}
      </nuxt-link>
    </li>
    <li class="page-item previous" :class="{ disabled: pager.currentPage === 1 }" :style="liStyles">
      <nuxt-link class="page-link" :style="aStyles" :to="`/Seminuevos/${(pager.currentPage - 1)}`">
        {{ labels.previous }}
      </nuxt-link>

    </li>
    <li v-for="page in pager.pages" :key="page" class="page-item page-number"
      :class="{ active: pager.currentPage === page }" :style="liStyles">
      <nuxt-link class="page-link" :style="aStyles" :to="`/Seminuevos/${page}`">
        {{ page }}
      </nuxt-link>

    </li>
    <li class="page-item next" :class="{ disabled: pager.currentPage === pager.totalPages }" :style="liStyles">
      <nuxt-link class="page-link" :style="aStyles" :to="`/Seminuevos/${pager.currentPage + 1}`">
        {{ labels.next }}
      </nuxt-link>
    </li>
    <li class="page-item last" :class="{ disabled: pager.currentPage === pager.totalPages }" :style="liStyles">
      <nuxt-link class="page-link" :style="aStyles" :to="`/Seminuevos/${pager.totalPages}`">
        {{ labels.last }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import paginate from "jw-paginate";
import { mapState, mapMutations } from 'vuex';

const defaultLabels = {
  first: "First",
  last: "Last",
  previous: "Previous",
  next: "Next",
};

const defaultStyles = {
  ul: {
    margin: 0,
    padding: 0,
    display: "inline-block",
  },
  li: {
    listStyle: "none",
    display: "inline",
    textAlign: "center",
  },
  a: {
    cursor: "pointer",
    padding: "6px 12px",
    display: "block",
    float: "left",
  },
};

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    initialPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    maxPages: {
      type: Number,
      default: 10,
    },
    labels: {
      type: Object,
      default: () => defaultLabels,
    },
    styles: {
      type: Object,
    },
    disableDefaultStyles: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pager: {},
      ulStyles: {},
      liStyles: {},
      aStyles: {},
    };
  },
  computed: {
    ...mapState("seminuevosCars", ["currentPagerNumber", "itemsPerPage"]),

  },

  created() {
    const currentPage = this.$route.params.Seminuevos;
      this.pager.currentPage = Number(currentPage);
      // this.initialPage = Number(currentPage); //# Asi estaba originalmente pero mutaba prop InitialPage


    if (!this.$listeners.changePage) {
      throw 'Missing required event listener: "changePage"';
    }

    // set default styles unless disabled
    if (!this.disableDefaultStyles) {
      this.ulStyles = defaultStyles.ul;
      this.liStyles = defaultStyles.li;
      this.aStyles = defaultStyles.a;
    }

    // merge custom styles with default styles
    if (this.styles) {
      this.ulStyles = { ...this.ulStyles, ...this.styles.ul };
      this.liStyles = { ...this.liStyles, ...this.styles.li };
      this.aStyles = { ...this.aStyles, ...this.styles.a };
    }

    this.setPage(1)

  },
  mounted() {
    const currentPage = Number(this.$route.params.Seminuevos);
    // console.log(this.$route.params.Seminuevos)


    this.setPage(currentPage);

  },
  methods: {
    ...mapMutations("seminuevosCars", ["setCurrentPage"]),

    setPage(page) {
      let currentPage = Number(this.$route.params.Seminuevos);
      if(!this.$route.params.Seminuevos) currentPage = 1;

      let currentPageSize = this.itemsPerPage;

        const { items, pageSize, maxPages } = this;

        // get new pager object for specified page
        const pager = paginate(items.length, Number(currentPage), currentPageSize, maxPages);

        // get new page of items from items array
        const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        // update pager
        this.pager = pager;

        // emit change page event to parent component
        this.$emit("changePage", pageOfItems);

        this.setCurrentPage(Number(page))
    },
    changeCurentPage() {
      this.setCurrentPage(this.currentPagerNumber);
    },
  },
  watch: {

    pageSize(newValue) {
      this.setPage(this.changeCurentPage);
    },
    items(newValue) {
      this.setPage(this.changeCurentPage);
    },
  },
};
</script>
<style >
ul.pagination>li.page-item.page-number.active>a {
  background-color: #000;
}

.page-link {
  color: #000;
}

.show-pages-label {
  line-height: 1rem;
}

.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  border-color: #464646;
}
</style>
