<script lang="ts">
  export let errors: {[key: string]: string} = {};
  export let success: {[key: string]: string} = {};
</script>

<form method="POST">
  <input type="text" placeholder="fill something" name="something">
  <input type="submit" value="Submit">
</form>

<pre>Errors: {JSON.stringify(errors, null, 2)}</pre>
<pre>Success: {JSON.stringify(success, null, 2)}</pre>
