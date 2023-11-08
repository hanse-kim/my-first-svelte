<!--
  .svelte 파일의 기본 구조:
  - <script> 태그
  - 원하는 <html> 혹은 <Component> 태그(들)
  - <style> 태그
-->

<script lang="ts">
  /** States: Svelte 파일에서 변수를 선언하면 상태가 된다. */
  let count = 0;
  let countList: number[] = [];

  const increment = () => {
    count += 1;
  };

  /**
   * Reactivity: React의 useMemo, useEffect에 해당하는 듯하다.
   * `$:`로 시작하는 반응문(Reactivity statement)은 변수(상태)에 새로운 값이 할당됨에 따라 트리거된다.
   *
   * 스벨트는 값의 할당에 따라 상태 변화를 감지하므로 `Array.prototype.push`등의 메서드로 배열 값을 바꿔도 화면에 반영되지 않는다.
   * 배열이나 객체의 값을 바꿀 때는 항상 새로 할당해줘야 한다.
   *
   * Q1. Reactivity statement가 Reactivity를 트리거할 수 있는가?
   *
   * Q2. 여러 State를 변경하는 경우, Reactivity statement를 여러 개로 쪼개는 게 나은가?
   */
  $: {
    countList = [...countList, count];
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
<p>count list: [{countList.join(', ')}]</p>
