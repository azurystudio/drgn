if (import.meta.main) {
  await Deno.run({
    cmd: ['deno', 'install', '-q', '-n', '$name', '-f', '--location', `https://drgn.azury.dev/$name_$id`, '-A', `https://drgn.azury.dev/run?version=v0.6.2&name=${'$url'.split('/')[0].split('@')[0]}&url=${btoa(`https://deno.land/x/$url`)}&location=$name_$id`]
  }).status()

  Deno.exit()
}