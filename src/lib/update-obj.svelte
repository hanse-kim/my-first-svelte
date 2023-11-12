<script lang="ts">
  let obj = { foo: { bar: { baz: 1 } } };

  /** 
   * 객체나 배열의 property에 대한 할당은 값 자체에 대한 할당과 동일하게 동작한다.
   * 즉, updateBaz()를 수행하면 `baz`에 대한 Reactivity와 `obj`에 대한 Reactivity가 모두 트리거된다.
  */
  const updateBaz = () => {
    obj.foo.bar.baz += 1;
  };

  $: console.log(`baz changed: ${obj.foo.bar.baz}`);
  $: console.log(`obj changed: ${obj}`);
</script>

<button on:click={updateBaz}> Update Baz </button>
