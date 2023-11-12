<script lang="ts">
  let count = 0;

  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment}>count is {count}</button>
{#if count < 5}
  <p>count is less than 5!</p>
{:else if count > 10}
  <p>count is bigger than 10!</p>
{:else}
  <p>count is between 5 and 10.</p>
{/if}
