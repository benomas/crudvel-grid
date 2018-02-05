<template>
  <dinamic-tag :tag="tag">
    <slot 
      name="cv-tds-slot"
      v-for="row in cvRows"
      :row="row"
    >
    </slot>
  </dinamic-tag>
</template>
<script>
export default {
  props:[
    "tag",
    "cvRows"
  ]
}
</script>
