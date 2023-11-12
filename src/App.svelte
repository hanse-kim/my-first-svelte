<script lang="ts">
  import IfElse from './lib/if-else.svelte';
  import Props from './lib/props.svelte';
  import StateAndReactivity from './lib/state-and-reactivity.svelte';
  import UpdateObj from './lib/update-obj.svelte';
</script>

<main>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <StateAndReactivity />
  </div>
  <div class="card">
    <UpdateObj />
  </div>
  <div class="card">
    <Props />
    <Props name="Kim" />
  </div>
  <div class="card">
    <IfElse />
  </div>
</main>
