<template>
    <div id="references" class="mb-10">
        <div class="flex items-center border-b border-black py-1 mb-5">
            <div class="title-icon mx-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
            </div>
            <div class="title-text">
                <p class="font-bold text-lg">{{ $t('references.title') }}</p>
            </div>
        </div>

        <div class="content">
            <div class="work-experience-item flex flex-wrap items-top mb-5" v-for="item, index in messages.references.reference_list" :key="index">
                <div class="work-experience-period w-full sm:w-1/4 mt-1">
                    <p class="text-sm">{{ $t('references.reference_list[' + index + '].email', { sign: '@' }) }}</p>
                </div>
                <div class="work-experience-description w-full sm:w-3/4">
                    <p class="text-lg font-bold -mb-2">{{ $t('references.reference_list[' + index + '].name') }}</p>
                    <p class="text-lg font-bold">{{ $t('references.reference_list[' + index + '].company',) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import messages from '@/languages/messages'

export default {
   data(){
       return {
           messages: messages[this.$i18n.locale]
       }
   },
   watch: {
        messages: function () {
            this.messages = this.enabled ? 'ja' : 'en'
        }
   }
}
</script>
