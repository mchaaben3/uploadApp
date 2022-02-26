<template>
<input type="file" name="file" id="file" ref="file" multiple>
</template>
<script>
import * as FilePond from 'filepond'
export default {
 mounted () {
     const pond = FilePond.create(this.$refs.file)
 }
};
</script>
