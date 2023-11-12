<script lang="ts">
  /**
   *  Svelte에서는 export를 통해 props를 정의한다.
   */
  export let name: string = 'Hans';
</script>

<p>Hello, {name}!</p>
