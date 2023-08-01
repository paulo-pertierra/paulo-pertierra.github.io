<template>
  <div>
    <Slider v-model="value" :max="75" :classes="style" disabled />
  </div>
</template>

<script lang="ts">
import Slider from '@vueform/slider'
import * as fns from 'date-fns'

export default {
  components: {
    Slider
  },
  data() {
    return {
      value: fns.differenceInYears(new Date(), new Date('2001-11-03')),
      style: {
        target:
          'relative box-border select-none touch-none tap-highlight-transparent touch-callout-none disabled:cursor-not-allowed',
        focused: 'slider-focused',
        tooltipFocus: 'slider-tooltip-focus',
        tooltipDrag: 'slider-tooltip-drag',
        ltr: 'slider-ltr',
        rtl: 'slider-rtl',
        horizontal: ' slider-horizontal h-1',
        vertical: 'slider-vertical w-1.5 h-80',
        textDirectionRtl: 'slider-txt-rtl',
        textDirectionLtr: 'slider-txt-ltr',
        base: 'w-full h-full relative z-1 bg-gray-300 rounded',
        connects: 'w-full h-full relative overflow-hidden z-0 rounded',
        connect:
          'absolute z-1 top-0 right-0 transform-origin-0 transform-style-flat h-full w-full bg-white cursor-pointer tap:duration-300 tap:transition-transform disabled:bg-gray-400 disabled:cursor-not-allowed',
        origin:
          'slider-origin absolute z-1 top-0 right-0 transform-origin-0 transform-style-flat h-full w-full h:h-0 v:-top-full txt-rtl-h:left-0 txt-rtl-h:right-auto v:w-0 tap:duration-300 tap:transition-transform',
        handle:
          'absolute rounded-full bg-white border-0 shadow-slider cursor-grab focus:outline-none h:w-4 h:h-4 h:-top-1.5 h:-right-2 txt-rtl-h:-left-2 txt-rtl-h:right-auto v:w-4 v:h-4 v:-top-2 v:-right-1.25 disabled:cursor-not-allowed focus:ring focus:ring-green-500 focus:ring-opacity-30',
        handleLower: 'slider-hande-lower',
        handleUpper: 'slider-hande-upper',
        touchArea: 'h-full w-full',
        tooltip: 'hidden',
        tooltipTop: 'bottom-6 h:arrow-bottom merge-h:bottom-3.5',
        tooltipBottom: 'top-6 h:arrow-top merge-h:top-5',
        tooltipLeft: 'right-6 v:arrow-right merge-v:right-1',
        tooltipRight: 'left-6 v:arrow-left merge-v:left-7',
        tooltipHidden: 'slider-tooltip-hidden',
        active: 'slider-active shadow-slider-active cursor-grabbing',
        draggable: 'cursor-ew-resize v:cursor-ns-resize',
        tap: 'slider-state-tap',
        drag: 'slider-state-drag'
      }
    }
  },
  mounted() {
    console.log(this.value)
  }
}
</script>

<style lang="css">
@import url('@vueform/slider/themes/tailwind.css');
</style>
