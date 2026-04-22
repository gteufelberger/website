<script lang="ts">
  let count = $state(0);
</script>

<button
  onclick={() => count++}
  class="rounded-md bg-accent-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-accent-500 cursor-pointer"
>
  Count: {count}
</button>
