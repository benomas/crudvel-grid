<template>
  <dinamic-tag :tag="tag">
    <slot 
      name="cv-ths-slot"
    >
    </slot>
  </dinamic-tag>
</template>
<script>
export default {
  props:[
    "tag"
  ],
  computed:{
  }
}
</script>
