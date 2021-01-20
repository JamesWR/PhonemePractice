<template lang="pug">
.sound
  button.play(v-on:click="playSound()") Play
</template>

<script>
export default {
  name: 'Sound',
  props: {
    soundUrl: String
  },
  computed: {
    sound: function () {
      return new Audio(this.soundUrl)
    }
  },
  methods: {
    playSound() {
      this.sound.play()
    }
  }
}
</script>