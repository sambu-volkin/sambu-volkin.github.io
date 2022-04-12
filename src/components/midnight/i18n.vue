<template>
    <SwitchGroup>
        <div class="flex items-center">
        <SwitchLabel class="mr-4">{{ enabled ? 'ja' : 'en' }}</SwitchLabel>
        <Switch
            v-model="enabled"
            :class='enabled ? "bg-gray-600" : "bg-gray-600"'
            class="relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            <span
            :class='enabled ? "translate-x-6" : "translate-x-1"'
            class="inline-block w-4 h-4 transition-transform transform bg-white rounded-full"
            />
        </Switch>
        </div>
    </SwitchGroup>
</template>

<script>
import { ref } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

export default {
    components: { Switch, SwitchGroup, SwitchLabel },

    setup() {
        const enabled = ref(false)
        return { enabled }
    },

    watch: {
        enabled: function () {
            this.$i18n.locale = this.enabled ? 'ja' : 'en'
        }
    }
}
</script>